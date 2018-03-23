import React from 'react';
import { Link } from 'react-router-dom';

class Trick extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        Have you been logged out yet?
        <Link to='/'>Back</Link>
      </div>
    )
  }
}

export default Trick;
