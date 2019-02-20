import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

export default function TableHeader() {
  return (
    <TableHead>
      <TableRow hover>
        <TableCell>TITLE</TableCell>
        <TableCell>ARTIST</TableCell>
        <TableCell>ALBUM</TableCell>
      </TableRow>
    </TableHead>
  )
}
