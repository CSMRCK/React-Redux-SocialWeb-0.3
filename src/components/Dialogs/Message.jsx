import React from 'react';
import c from '../cssComponents/DialogsC.module.css';


const Message = (props) => {


    return (
        <div>
        <div className={c.message}>{props.message}</div>

        </div>
    )
}


export default Message;