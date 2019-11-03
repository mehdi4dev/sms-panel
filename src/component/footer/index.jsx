import React from 'react'
const Footer =()=>{
    return(<footer>
        <div className="flex-container">
          <div className="left">
            <span>Created by <strong>Mehdi Hassannia</strong> </span>
          </div>
          <div className="right">
            <ul>
              <li>
                <i className="fa fa-instagram" onmouseover="popupFunction(1)"  onmouseout="removeFunction()">
                  <span className="popuptext" id="myPopup1">Mehdi.4.hasannia</span>
                </i>
              </li>
              <li>
                <i className="fa fa-telegram" onmouseover="popupFunction(2)" onmouseout="removeFunction()">
                  <span className="popuptext" id="myPopup2">Telegram</span>
                </i>
              </li>
              <li>
                <i className="fa fa-linkedin" onmouseover="popupFunction(3)" onmouseout="removeFunction()">
                  <span className="popuptext" id="myPopup3">Linkdin</span>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      );
}
export default Footer;