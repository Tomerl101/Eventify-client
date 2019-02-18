import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Row from '../../common/row';
import Title from './Title';
import NavButtons from './NavButtons';
import { Divider } from '@material-ui/core';


export default function Header(props) {
  return (
    <>
      <Divider />
      <Row justify='space-between'>
        <Title />
        <NavButtons />
      </Row>
      <Divider />
    </>
  );
}