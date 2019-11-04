import React from 'react';
import {Link} from 'react-router-dom';
const Setting =()=>{
    return(
        <header id="setting">
            <form action id="setting-form">
                <h2 style={{color: '#fff', marginBottom: '20px'}}>change user profile</h2>
                <div className="setting-container">
                    <img src="./asset/jpg/user.profile.png" alt=""/>
                    <div>
                    <button className="btn btn-setting">Upload image</button>
                    <Link to={'/home'} className="Link">
                        <button className="btn btn-setting">Home</button>
                    </Link>               
                    </div>     
                </div>
                
            </form>
      </header>
    );
}
export default Setting;