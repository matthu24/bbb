import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {username:"",password:""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

  }

  //when new props are received, the loggedIn prop will change, this.props.history.push redirects
  //user to '/'
  componentWillReceiveProps(newProps){
    if(newProps.loggedIn){
      this.props.history.push('/')

    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state);
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]:e.target.value})
    }
  }

  render(){
    // console.log(this.state.password)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: <input onChange={this.handleChange("username")} className='name-input' type="text"/></label>
          <label htmlFor="password">Password: <input onChange={this.handleChange("password")} className='password-input' type="text"/></label>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

//You can get access to the history object's properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
export default withRouter(Login);
