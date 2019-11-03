import React from 'react';
import {Link} from 'react-router-dom';
const Home =()=>{
    return(<div>
        <section id="single-sending">
          <div className="flex-container">
            <div className="left">
              <img src="./asset/jpg/send-single.png" alt="" />
            </div>
            <div className="right">
              <h1>ارسال تکی</h1>
              <Link to={'/single'} className="Link">
                <button className="btn">click</button>
              </Link>
              
            </div>
          </div>
          <div className="border" />  
        </section>
        <section id="group-sending">
          <div className="flex-container">
            <div className="left">
              <img src="./asset/jpg/send-group.png" alt="" />
            </div>
            <div className="right">
              <h1>ارسال گروهی</h1>
              <Link to={'/group'} className="Link">
                <button className="btn">click</button>
              </Link>
              
            </div>
          </div>
        </section>
      </div>
      );
}
export default Home;