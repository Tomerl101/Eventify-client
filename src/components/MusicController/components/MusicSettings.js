import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import CastIcon from '@material-ui/icons/Cast';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import Row from '../../common/row';

export default function MusicSettings() {
  return (
    <Row>
      <IconButton aria-label="volume">
        <VolumeDownIcon fontSize='large' />
      </IconButton>
      <IconButton aria-label="cast">
        <CastIcon fontSize='large' />
      </IconButton>
      <IconButton aria-label="queue_music" >
        <QueueMusicIcon fontSize='large' />
      </IconButton>
    </Row>
  )
}


