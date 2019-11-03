import React from 'react';
import {Link} from 'react-router-dom'
const groupManagement=()=>{
    return(
        <header id="manage-group">
  <form action id="manage-group-form">
    <button className="btn add-group">افزودن گروه جدید</button>
    <hr />    
    <label htmlFor> فهرست گروه ها</label>
    <ul className="manage-group-ul">
      <li>
        Group1
        <div>
          <button className="btn">edit</button>
          <button className="btn"> delete</button>
        </div>
      </li>
      <li>
        Group2
        <div>
          <button className="btn">edit</button>
          <button className="btn"> delete</button>
        </div>
      </li>
    </ul>
    <div className="manage-group-end">
      <button className="btn">insert data</button>
      <Link to={'/home'} className="Link">
        <button className="btn">home</button>
      </Link>
      
    </div>
  </form>
  <form action id="add-group">
    <label htmlFor>نام گروه</label>
    <input type="text" placeholder="Group name" />
    <label htmlFor>شماره ها</label>
    <textarea name id cols={30} rows={40} placeholder="در هر خط یک شماره وارد نمایید" defaultValue={""} />
    <div className="manage-group-end">
      <button className="btn">submit</button>
      <button className="btn">cancel</button>
    </div>
  </form>
</header>

    );
}
export default groupManagement;