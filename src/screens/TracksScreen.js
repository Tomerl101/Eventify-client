import React from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Loader from '../components/common/Loader';
import TracksTable from './components/TracksTable';
import { styles } from './style';


class TracksScreen extends React.Component {
  render() {
    const { classes, store } = this.props;
    const { isLoading, tracksList } = store;

    return (
      <div className={classes.root}>
        <Header />
        {isLoading ? <Loader /> : <TracksTable items={tracksList} />}
      </div>
    );
  }
}

export default withStyles(styles)(inject('store')(observer(TracksScreen)));