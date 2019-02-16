import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

export default class NavButtons extends Component {
  render() {
    return (
      <div>
        <IconButton aria-label="back">
          <ChevronLeft fontSize='large' />
        </IconButton>
        <IconButton aria-label="forward">
          <ChevronRight fontSize='large' />
        </IconButton>
      </div>
    )
  }
}

