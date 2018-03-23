import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchesIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchBenches();
  }

  render(){
    return(
      <div>
        <ul>
        {
          this.props.benches.map((bench,id) => <BenchIndexItem bench={bench} key={id}/>)
        }
        </ul>
      </div>
    )
  }
}

export default BenchesIndex;
