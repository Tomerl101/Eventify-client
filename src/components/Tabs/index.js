import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { styles } from './styles';


class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    setTimeout(() => this.setState({ value: 0 }), 500);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Tabs value={value} onChange={this.handleChange} classes={{ indicator: classes.tabsIndicator, root: classes.tabsRoot }}>
        <Tab label="OVERVIEW" classes={{ root: classes.tabRoot }} />
        <Tab label="CHARTS" classes={{ root: classes.tabRoot }} />
        <Tab label="DISCOVER" classes={{ root: classes.tabRoot }} />
        <Tab label="NEW RELESASES" classes={{ root: classes.tabRoot }} />
      </Tabs>
    );
  }
}

export default withStyles(styles)(SimpleTabs);