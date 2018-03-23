import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    let content;
    content = this.props.currentUser ? (
      <div>
        hi {this.props.currentUser.username}
        <button onClick={this.props.logout}>logout</button>
        <Link to='/trick'>Trick page</Link>
      </div>
    ) : (
      <div>
        <Link to='/login'>Log in </Link>
      </div>
    )

    return(
      <div>
        {content}
      </div>
    )
  }
}

export default Greeting;
