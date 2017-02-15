import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    
  }

  render() {

    return(
      <div>
        <h1>Benches:</h1>
        <ul>
          <li>
            {this.props.benches.map(bench =>
              <BenchIndexItem key={bench.id} bench={bench}/>
            )}
          </li>
        </ul>
      </div>
    )

  }

}

export default BenchIndex;
