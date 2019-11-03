import React from 'react';
import {Link} from 'react-router-dom';
const Welcome =()=>{
    return(
    <div>
        <header>
            <nav className="navbar">
            <ul className="main-nav">
                <li className="main-logo">
                <img src="./asset/jpg/1533276535.png" alt="" />
                </li>
                <Link to={'/login'} className="Link"><li><span>ورود</span> </li></Link>
                <Link to={'/signup'} className="Link"><li><span>ثبت نام</span></li></Link> 
            </ul> 
            </nav>
        </header>
        <section id="first-body-container">
            <div className="flex-container">
            <div className="left">
                <img src="./asset/jpg/android-messages-on-pc.jpg" alt="" />
            </div>
            <div className="right">
                <h1>سرویسی برای توسعه دهندگان</h1>
                <p>کاوه نگار با ارائه وب‌سرویس پیامک و تماس صوتی پیشرفته برای توسعه دهندگان ،امکان ارسال و دریافت پیامک و برقراری تماس اینترنتی را در اغلب سرویس های نرم افزاری مهیا می کند.</p>
            </div>
            </div>
        </section>
        <section id="second-body-container">
            <div className="container">
            <div className="img-start">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda, possimus ab praesentium enim, officia, cupiditate molestias saepe magnam consequuntur tempora amet vero. Consequatur fuga blanditiis eligendi vel consequuntur non.</p>
                <Link to={'/login'} className="Link">
                    <button className="btn btn-start">شروع کنید</button>
                </Link>
                
            </div>
            </div>
        </section>
    </div>

    );
}
export default Welcome;