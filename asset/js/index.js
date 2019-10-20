       ////////////////////////////
        ///////   popup
        /////////////////////////////

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
            // document.getElementById("myPopup1").classList.remove("show");
            document.getElementById("myPopup1").style.visibility="hidden";
            document.getElementById("myPopup2").style.visibility="hidden";
            document.getElementById("myPopup3").style.visibility="hidden";
            // document.getElementById("myPopup2").classList.remove("show");
            // document.getElementById("myPopup3").classList.remove("show");
        }
        
        profileShow=()=>{
            document.getElementById("nav-container").style.visibility="visible";
        }
        profileHidden=()=>{
            document.getElementById("nav-container").style.visibility= "hidden";
        }
    
