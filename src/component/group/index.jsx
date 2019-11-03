import React from 'react';
import {Link} from 'react-router-dom';
const groupSending =()=>{
    return(
        <div>
  <div className="sending-form sending-header">
    <h3 className>ارسال گروهی</h3>
    <button className="btn" onclick="openBox(guide)">راهنما</button>
    <div id="guide">
      <div className="bg-i">
        <i className="fa fa-close" onclick="closeBox(guide)" />
      </div>
      {/* <textarea name="" id="" cols="56" rows="10"> */}
      <div className="over-flow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta magnam animi architecto eligendi nostrum ad at non, temporibus impedit, numquam laudantium totam! Voluptas, earum molestiae qui facere at eum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse perspiciatis at enim veritatis necessitatibus cum nostrum est numquam qui dolorem unde dolor inventore earum nam consectetur, voluptates officia iusto?                                 
      </div>
      {/* </textarea> */}
    </div>
  </div>
  <form action className="sending-form">
    <div className="select-group"> 
    <Link to={'/group/management'} className="Link">
      <button className="btn">مدیریت گروه</button>
    </Link>
      
      <select name className="manage-group">
        <option value="select">گروه را انتخاب کنید</option>
      </select>
    </div>
    <div className="sending-body">
      <div className="sender">
        <label htmlFor>ارسال کننده</label>
        <select name id>
        </select>
      </div>
      <div className="date">
        <label htmlFor>تاریخ ارسال</label>
        <div>
          <input type="radio" name="now" defaultValue="now" defaultChecked />هم اکنون
          <input type="radio" name="select-date" defaultValue="select-date" /> تاریخ مشخص
        </div>
      </div>
    </div>
    <div className="sending-body"> 
      <div className="reciver">
        <label htmlFor>گیرندگان اضافی</label>
        <textarea name id cols={15} rows={8} defaultValue={""} />
      </div>
      <div className="message-text">
        <label htmlFor>متن</label>
        <textarea name id cols={60} rows={10} defaultValue={""} />
      </div>
    </div>
  </form>
  <div className="sending-form sending-end">
    <button className="btn" onclick="openBox(draft)">پیش نویس ها</button>
    <div id="draft">
      <div className="bg-i">
        <i className="fa fa-close" onclick="closeBox(draft)" />
      </div>
      <ul className="over-flow">
        <li><i className="fa fa-get-pocket" /><span> i call you back</span></li>
        <li><i className="fa fa-get-pocket" /><span> i'm in the meeting</span></li>
      </ul>
    </div>
    <button className="btn">ارسال</button>
  </div>
</div>

    );
}
export default groupSending;