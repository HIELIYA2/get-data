import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class TableOverall extends Component {
  render() {
    const { trad } = this.props;
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='right'>TRADING P&L</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'></TableCell>
              <TableCell align='right'>DAILY</TableCell>
              <TableCell align='right'>MTD</TableCell>
              <TableCell align='right'>YTD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trad.map((row) => (
              <TableRow key={row.underlying}>
                <TableCell component='th' scope='row'>
                  {row.underlying}
                </TableCell>
                <TableCell align='right'>{row.balance}</TableCell>
                <TableCell align='right'>{row.last_price}</TableCell>
                <TableCell align='right'>{row.balance_usd}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default TableOverall;
