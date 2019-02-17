import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Row from '../../common/row';
import Title from './Title';
import NavButtons from './NavButtons';
import { Divider } from '@material-ui/core';

const styles = theme => ({
  row: { paddingTop: 25 }
}
)


function Header(props) {
  const { classes } = props;
  return (
    <>
      <Divider />
      <Row className={classes.row} justify='space-between'>
        <Title />
        <NavButtons />
      </Row>
      <Divider />
    </>
  );
}

export default withStyles(styles)(Header);