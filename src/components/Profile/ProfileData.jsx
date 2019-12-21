import React from 'react';
import Infoblock from "../Infoblock";
import c from '../cssComponents/ProfileC.module.css';

const ProfileData = (props) => {
    return (
        <div className={c.myinfo}>
            <header>
                <div className={c.black}/>
                <div className={c.shortcut_info}>
                    <h3>{props.name}</h3>
                    <p>{props.microtext}</p>
                </div>
            </header>
            <div className={c.info}>
                <p>
                    {props.infotext}
                </p>
            </div>
        </div>)
}

export default ProfileData;

