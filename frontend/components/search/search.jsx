import React from 'react';
import BenchMap from '../benches/bench_map';
import BenchesIndex from '../benches/benches_index';

const Search = props => {
    // div containing a BenchMap and BenchIndex.
    return(
      <div>
        <BenchMap/>
        <BenchesIndex fetchBenches={props.fetchBenches} benches={props.benches}/>
      </div>
    )
}

export default Search;
