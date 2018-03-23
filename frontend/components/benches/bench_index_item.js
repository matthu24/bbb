import React from 'react';

const BenchIndexItem = props => {
  return (
    <div>
      <li>
        {props.bench.description}
      </li>
    </div>
  )
}

export default BenchIndexItem;
