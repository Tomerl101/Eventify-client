import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function row(props) {
  const { className, justify } = props;
  return (
    <div className={className}>
      <Grid container alignItems='center' justify={justify}>
        {props.children}
      </Grid>
    </div>
  )
}

