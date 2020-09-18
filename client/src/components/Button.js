import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { getTrads } from '../actions/tradAction';

class ButtonOverall extends Component {
  render() {
    const { url } = this.props;

    let handleClick = () => {
      console.log(url);
      this.props.onRefrsh({ url });
    };

    return (
      <div>
        <Button onClick={handleClick} variant='outlined'>
          Refresh
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { trad: state.json };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRefrsh: (trad) => {
      dispatch(getTrads(trad));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonOverall);
