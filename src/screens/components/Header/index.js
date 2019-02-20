import React from 'react';
import { Divider } from '@material-ui/core';
import Row from '../../../components/common/row';
import Title from './components/Title';
import NavButtons from './components/NavButtons';

export default function Header() {
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