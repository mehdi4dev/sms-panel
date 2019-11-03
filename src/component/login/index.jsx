import React from 'react';
const Login=()=>{
    return(
    <header id="login">
    <form action id="login-form">
      <h2 style={{color: '#fff', marginBottom: '20px'}}>Login</h2>
      <input type="text" placeholder="User name" />
      <input type="text" placeholder="Password" />
      <div id="login-succes">
        <a href>forgot password?</a>
        <button className="btn">Login</button>
      </div>
    </form>
  </header>
  );
}
export default Login;