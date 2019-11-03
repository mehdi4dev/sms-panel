import React from 'react';
import {Link} from 'react-router-dom';
const Navbar =()=>{
    return (
        <header>
        <nav className="navbar">
            <ul className="main-nav">
                <li className="main-logo" onmouseover="profileShow()" onmouseout="profileHidden()">
                    <img className="user-profile" src="./asset/jpg/user.profile.png" alt="" />
                </li>
                <li onmouseover="sendingShow() " onmouseout="sendigHidden()"><span>ارسال پیام</span> </li>
                <Link to={'/group/management'} className="Link">
                    <li ><span>مدیریت گروه</span></li>
                </Link>
            </ul> 

            <div id="profile-container" onmouseover="profileShow() " onmouseout="profileHidden()">
                {/* correct */}
                <Link to={'/'} className="Link">
                    <div><i className="fa fa-cog" />تنظیمات</div>
                </Link>
                <Link to={'/'} className="Link">
                <div><i className="fa fa-sign-out" /> خروج</div>
                </Link> 
            </div>

            <div id="sending-container" onmouseover="sendingShow() " onmouseout="sendigHidden()">
                <Link to={'/'} className="Link">
                    <div><i className="fa fa-cog" />ارسال تکی</div>    
                </Link>
                <Link to={'/'} className="Link">
                    <div><i className="fa fa-sign-out" /> ارسال گروهی</div>    
                </Link>
            </div>
        </nav>
        </header>

    );
}
export default Navbar;