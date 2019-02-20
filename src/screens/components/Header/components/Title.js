import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Typography from '@material-ui/core/Typography';

class Title extends Component {
  render() {
    const { userName } = this.props.store
    return (
      <Typography variant="h6" >
        {userName} Top Events
      </Typography>
    )
  }
}

export default inject('store')(observer(Title));
