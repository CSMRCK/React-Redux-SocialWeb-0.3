const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState={
    Dialogs: [
        {id: 1, name: 'Thanatos'},
        {id: 2, name: 'Apollo'},
        {id: 3, name: 'Nemesis'},
        {id: 4, name: 'Ares'},
        {id: 5, name: 'Zeus'},
        {id: 6, name: 'Janus'}
    ],
    Messages: [
        {id: 1, message: 'Where u at?'},
        {id: 2, message: 'Whats going on?'},
        {id: 3, message: 'Sampke Text'},
        {id: 4, message: 'Random message'},
        {id: 5, message: 'Ezy peazy'},
        {id: 6, message: 'Fuzzy'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.Messages.push({id: 6, message: body});
            return state;
        default:
            return state;

    }


}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;