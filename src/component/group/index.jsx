import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios'
import config from '../../config'
class groupSending extends React.Component{
  constructor(){
    super();
    this.state={
      reciver:"",
      message:"",
      sender:""
    }
  }
  handleNumber =(event)=>{
    const num= /^[0-9\b-\n]+$/;
    if(event.target.value==="" || num.test(event.target.value)){
      // this.state.reciver.replace()
      this.setState({
        reciver:event.target.value
      })
    }
}
handleMessage=(event)=>{
  this.setState({
    message:event.target.value
  });
}
handleSelect=(event)=>{
  this.setState({
    sender:event.target.value
  });
}
sendMessage=()=>{
    const group=this.state.reciver;
    const result=group.replace("\n",",")
  Axios.post(`${config.apiURL}/sms/send.json?receptor=${result}&message=${this.state.message}&sender=${this.state.sender}`)
.then(response=>{
      console.log(response);
    }).catch(errors=>{
      console.log(errors);
    })
  }
  render(){
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
      <select onChange={this.handleSelect}>
              <option value="" >لطفا یک خط را انتخاب نمایید</option>
              <option value="0014318000192" >0014318000192</option>
              <option value="10008445" >10008445</option>
              <option value="2000004346" >2000004346</option>
              <option value="1000596446" >1000596446</option>
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
      <textarea name id cols={15} rows={8} defaultValue={""} onChange={this.handleNumber} />
    </div>
    <div className="message-text">
      <label htmlFor>متن</label>
      <textarea name id cols={60} rows={10} defaultValue={""} onChange={this.handleMessage} />
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
  <button className="btn" onClick={this.sendMessage}>ارسال</button>
</div>
</div>

  );
  }
}
export default groupSending;