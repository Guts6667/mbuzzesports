import React from "react";
import './BurgerBtn.scss'

const BurgerBtn = () =>{
    
    function toggleBtn(){
        let navIcon = document.querySelector('.nav-icon');
        navIcon.classList.toggle('open')
    }
    return(
        <div className="nav-icon" onClick={toggleBtn}>
            <span></span>
            <span></span>
            <span></span>
        </div>
       

    )
}
export default BurgerBtn;