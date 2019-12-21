import React from 'react';
import s from './cssComponents/NavigationC.module.css';
import logo from '../images/LogoWhite.png';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navi">
            <nav className={s.sidebar}>
                <img className={s.logo} src="../images/LogoWhite.png"></img>
                <div className={s.nav_item}><p className={s.label}>Your way of development</p></div>
                <hr className={s.hr}/>
                <div className={s.nav_item}><NavLink to="/Profile">Me</NavLink></div>
                <div className={s.nav_item}><NavLink to="/Infoblock">Main</NavLink></div>
                <div className={s.nav_item}><NavLink to="/Dialogs">Messages</NavLink></div>
                <div className={s.nav_item}><NavLink to="#">Contact</NavLink></div>
                <div className={s.nav_item}><NavLink to="#">Settings</NavLink></div>
                <hr className={s.hr}/>                <div className={s.nav_item}><p className={s.label_down}>Follow us in:</p></div>
                <img src="#"></img><img src="#"></img>
            </nav>
        </div>


    )
}
export default Navigation;