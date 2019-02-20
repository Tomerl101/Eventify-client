import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import Row from '../../common/row';

const styles = theme => ({
  playBtnStyle: {
    color: theme.palette.primary.main,
    fontSize: 65
  },
})

class MusicButtons extends Component {

  render() {

    const { classes, isPlaying, onClickPlay } = this.props;
    return (
      <Row>
        <IconButton aria-label="repeat">
          <RepeatIcon fontSize='large' />
        </IconButton>
        <IconButton aria-label="previous">
          <SkipPreviousIcon fontSize='large' />
        </IconButton>
        <IconButton onClick={onClickPlay} aria-label="play" >
          {
            isPlaying ? <PauseCircleFilledIcon className={classes.playBtnStyle} /> :
              <PlayCircleFilledIcon className={classes.playBtnStyle} />
          }
        </IconButton>
        <IconButton aria-label="forward">
          <SkipNextIcon fontSize='large' />
        </IconButton>
        <IconButton aria-label="shuffle">
          <ShuffleIcon fontSize='large' />
        </IconButton>
      </Row>
    )
  }
}

export default withStyles(styles)(MusicButtons);