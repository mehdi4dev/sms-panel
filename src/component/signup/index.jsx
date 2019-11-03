import React from 'react';
const Signup =()=>{
    return(
    <header id="signup">
    <form action id="signup-form">
      <h2 style={{color: '#fff', marginBottom: '20px'}}>Sign up</h2>
      <input type="text" placeholder="User name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <input type="text" placeholder="Confirm password" />
      <button className="btn">Sign up</button>
    </form>
  </header>
  );
}
export default Signup;