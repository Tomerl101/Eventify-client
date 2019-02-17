import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Row from '../../common/row';
import { styles } from '../styles';

class SongInfo extends Component {
  render() {
    const { trackName, trackAuthor } = this.props.store;
    const { classes } = this.props;
    return (
      <Row>
        <img className={classes.image} src='https://cdn.athemes.com/wp-content/uploads/Slide-Music-WordPress-Theme.jpg' alt='album_photo' />
        <div className={classes.trackTextStyle}>
          <Typography variant="body2"  >
            {trackName}
          </Typography>
          <Typography variant="body1"  >
            {trackAuthor}
          </Typography>
        </div>
      </Row>
    )
  }
}

export default withStyles(styles)(inject('store')(observer(SongInfo)));