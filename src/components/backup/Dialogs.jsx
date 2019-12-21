import React from 'react';
import c from '../cssComponents/DialogsC.module.css';
import {NavLink} from "react-router-dom";
import Message from './Message';
import DialogItem from "./DialogItem";


const Dialogs = (props) => {
    let Dialogs = [
        {id: 1, name: 'Thanatos'},
        {id: 2, name: 'Apollo'},
        {id: 3, name: 'Nemesis'},
        {id: 4, name: 'Ares'},
        {id: 5, name: 'Zeus'},
        {id: 6, name: 'Janus'}
    ]
    let dialogsElements = Dialogs.map
    (d => <DialogItem name={d.name} id={d.id}/>);


    let Messages = [
        {id: 1, message: 'Where u at?'},
        {id: 2, message: 'Whats going on?'},
        {id: 3, message: 'Sampke Text'},
        {id: 4, message: 'Random message'},
        {id: 5, message: 'Ezy peazy'},
        {id: 6, message: 'Fuzzy'}
    ]

    let messageElements = Messages.map(m => <Message message={m.message}/>);
    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;