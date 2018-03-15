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
    console.log(this.state.password)
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

export default withRouter(Login);
