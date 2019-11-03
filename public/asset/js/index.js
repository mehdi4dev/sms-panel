       ////////////////////////////
        ///////   popup
        /////////////////////////////
        // import React from 'react';
        // class Ex extends React.Component{
        //     constructor(probs){
        //         super(probs);

        //     }
            popupFunction =(number)=>{
                if(number===1){
                    // document.getElementById("myPopup1").classList.add("show");
                    document.getElementById("myPopup1").style.visibility="visible";
                }else if(number===2){
                    // document.getElementById("myPopup2").classList.toggle("show");
                    document.getElementById("myPopup2").style.visibility="visible";
                }else{
                    // document.getElementById("myPopup3").classList.toggle("show");
                    document.getElementById("myPopup3").style.visibility="visible";
                }   
            }
            removeFunction=()=>{
                alert("m");
                // document.getElementById("myPopup1").classList.remove("show");
                document.getElementById("myPopup1").style.visibility="hidden";
                document.getElementById("myPopup2").style.visibility="hidden";
                document.getElementById("myPopup3").style.visibility="hidden";
                // document.getElementById("myPopup2").classList.remove("show");
                // document.getElementById("myPopup3").classList.remove("show");
            }
            
            profileShow=()=>{
    
                    document.getElementById("profile-container").style.visibility="visible";   
            }
            profileHidden=()=>{
        
                document.getElementById("profile-container").style.visibility="hidden";   
      
            }
            sendingShow=()=>{
               
                    document.getElementById("sending-container").style.visibility="visible";               
            }
            sendigHidden=()=>{
          
                document.getElementById("sending-container").style.visibility="hidden";   
         
            }
            openBox=(text)=>{
                if(text===guide){
                    document.getElementById("guide").style.visibility="visible";
                }else if(text===draft){
                    document.getElementById("draft").style.visibility="visible";
                }
                
            }
            closeBox=(text)=>{
                if(text===guide){
                    document.getElementById("guide").style.visibility="hidden";
                }else if(text===draft){
                    document.getElementById("draft").style.visibility="hidden";
                }
                
            }
        // }
        
        //  export default Ex; 
         

       
    
