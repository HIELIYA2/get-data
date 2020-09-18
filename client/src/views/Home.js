import React, { Component } from 'react';
import TableOverall from '../components/Table';
import BtnOverall from '../components/Button';

class Home extends Component {
  state = {
    trad1: [
      { underlying: 1, balance: 1, last_price: 1, balance_usd: 1 },
      { underlying: 2, balance: 1, last_price: 1, balance_usd: 1 },
      { underlying: 3, balance: 1, last_price: 1, balance_usd: 1 },
    ],
    url1: 'dashboard/overallBalance',
    trad2: [
      { underlying: 1, balance: 1, last_price: 1, balance_usd: 1 },
      { underlying: 2, balance: 1, last_price: 1, balance_usd: 1 },
      { underlying: 3, balance: 1, last_price: 1, balance_usd: 1 },
    ],
    url2: 'dashboard/overallPl',
  };
  handleRefrsh = (trad) => {
    this.setState({ trad: trad });
  };

  render() {
    return (
      <div>
        <BtnOverall url={this.state.url1} onRefrsh={this.trad1} />
        <TableOverall trad={this.state.trad1} />
        <BtnOverall url={this.state.url2} onRefrsh={this.trad2} />
        <TableOverall trad={this.state.trad2} />
      </div>
    );
  }
}

export default Home;
