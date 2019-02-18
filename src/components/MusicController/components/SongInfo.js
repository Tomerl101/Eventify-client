import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Row from '../../common/row';
import { styles } from '../styles';

class SongInfo extends Component {
  render() {
    const { classes, trackName, artistName, imageUrl } = this.props;
    return (
      <Row>
        <img className={classes.image} src={imageUrl} alt='album_photo' />
        <div className={classes.trackTextStyle}>
          <Typography variant="body2"  >
            {trackName}
          </Typography>
          <Typography variant="body1"  >
            {artistName}
          </Typography>
        </div>
      </Row>
    )
  }
}

export default withStyles(styles)(SongInfo);