import React from 'react';
import {validateAll} from 'indicative/validator';
class Signup extends React.Component{
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      password:'',
      password_confirmation:'',
      error:{}
      
    }
  }
  handleInput= (event)=>{
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  handleSubmit =(event)=>{
  event.preventDefault();
  const data =this.state;
  const rule ={
  name: 'required|string',
  email:'required|email',
  password:'required|string|min:6|confirmed'
  };
  const message={
    required:'{{field}} is required',
    'email.email':'please enter email format',
    'password.confirmed':'password confirmation does not match',
    'password.min':'please enter at least caracther'
  }
validateAll(data,rule,message)
.then((data)=>{
  
})
.catch(error =>{
  
  const formattedError ={};
  error.forEach(error =>formattedError[error.field]=error.message)
  this.setState({
    error:formattedError
  })
})
  
  }
  render (){
    return(
            <header id="signup">
                <form  id="signup-form" onSubmit={this.handleSubmit}>
                <h2 style={{color: '#fff', marginBottom: '20px'}}>Sign up</h2>
                
                {
                  this.state.error.name &&
                  <small className="text-red">{this.state.error.name}</small>
                }
                <input name="name" onChange={this.handleInput} type="text" placeholder="User name" />
                
                {
                  this.state.error.email &&
                  <small className="text-red">{this.state.error.email}</small>
                }
                <input name="email" onChange={this.handleInput} type="text" placeholder="Email" />
                
                {
                  this.state.error.password &&
                  <small className="text-red">{this.state.error.password}</small>
                }
                <input name="password" onChange={this.handleInput} type="text" placeholder="Password" />
                <input name="password_confirmation" onChange={this.handleInput} type="text" placeholder="Confirm password" />
                <button className="btn">Sign up</button>
              </form>
            </header>
    );
    
  }
}
export default Signup;