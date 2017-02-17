import React from 'react';
import BenchIndex from './bench_index';
import {Router} from 'react-router'

class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    e.preventDefault();
    this.props.router.push(`/benches/${e.target.bench.id}`)
  }

  render() {
    const {bench} = this.props;
    return(
      <div>
          <h3 onClick={this.handleClick}>{bench.id}: {bench.description}</h3>
      </div>
    )
  }
}

export default BenchIndexItem;
