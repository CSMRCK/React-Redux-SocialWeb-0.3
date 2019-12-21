import React from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "../backup/Dialogs";


const DialogsContainer = (props) => {
    let state=props.store.getState().DialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onSendMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <Dialogs updateNewMessageBody={onSendMessageChange} sendMessage={onSendMessageClick}
    DialogsPage={state}/>
}

export default DialogsContainer;