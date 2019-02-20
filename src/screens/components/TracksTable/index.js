import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHeader from './components/TableHeader';
import { putPlayTrack } from '../../../api/putPlayTrack';



const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    backgroundColor: theme.palette.secondary.main
  },
  table: {
    minWidth: 700,
  },
});




class TracksTable extends Component {

  getRows = (items) => (
    items.map(({ track }, index) => (
      <TableRow key={index} hover onClick={() => this.onClickPlayTrack(track.uri, index)}>
        <TableCell component="th" scope="row">
          {`${index + 1}. ${track.name}`}
        </TableCell>
        <TableCell >{track.artists[0].name}</TableCell>
        <TableCell >{track.album.name}</TableCell>
      </TableRow>
    ))
  )

  onClickPlayTrack = (trackUri, index) => {
    const playlistUri = window.location.pathname.split('/')[2]
    const { store } = this.props;
    const { deviceId, accessToken } = store;
    putPlayTrack(deviceId, accessToken, playlistUri, trackUri, index)
  }

  render() {
    const { classes, items } = this.props;
    return (
      <Table className={classes.table}>
        <TableHeader />
        <TableBody>
          {this.getRows(items.slice())}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(inject('store')(observer(TracksTable)));
