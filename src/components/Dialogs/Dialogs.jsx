import React from 'react';
import c from '../cssComponents/DialogsC.module.css';
import {NavLink} from "react-router-dom";
import Message from './Message';
import DialogItem from "./DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";


const Dialogs = (props) => {
    let state=props.DialogsPage;

    let dialogsElements = state.Dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = state.Messages.map(m => <Message message={m.message}/>);
    let newMessageBody=state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onSendMessageChange = (e) => {
        let body=e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  placeholder='Enter your message here!'
                                  onChange={onSendMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send!</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;