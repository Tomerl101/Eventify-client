import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHeader from './components/TableHeader';

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


const getRows = (items) => (
  items.map(({ track }, index) => (
    <TableRow key={index} hover>
      <TableCell component="th" scope="row">
        {`${index + 1}. ${track.name}`}
      </TableCell>
      <TableCell >{track.artists[0].name}</TableCell>
      <TableCell >{track.album.name}</TableCell>
    </TableRow>
  ))
)

function TracksTable(props) {
  const { classes, items } = props;

  return (
    <Table className={classes.table}>
      <TableHeader />
      <TableBody>
        {getRows(items.slice())}
      </TableBody>
    </Table>
  );
}

export default withStyles(styles)(TracksTable);