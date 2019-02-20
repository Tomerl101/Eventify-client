import React, { Component } from 'react';
import { withRouter } from 'react-router'
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuList from '../../../../components/common/MenuList';

class NavButtons extends Component {

  goBack = () => {
    this.props.history.goBack();
  }

  goForward = () => {
    this.props.history.goForward();
  }

  render() {
    return (
      <div>
        <IconButton onClick={this.goBack} aria-label="back">
          <ChevronLeft fontSize='large' />
        </IconButton>
        <IconButton onClick={this.goForward} aria-label="forward">
          <ChevronRight fontSize='large' />
        </IconButton>
        <IconButton>
          <MenuList />
        </IconButton>
      </div >
    )
  }
}

export default withRouter(NavButtons);

