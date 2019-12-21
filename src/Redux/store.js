import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        ProfilePage: {
            posts: [
                {
                    id: 1,
                    message: "Sample text",
                    likesCount: 22,
                    name: "ARTHUR STANLY",
                    time: "5",
                    title: "The Guard"
                },
                {
                    id: 2,
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur " +
                        "blanditiis culpa, dolorem explicabo facilis id illo illum incidunt,labore magnam minima obcaecati " +
                        "officiis perspiciatis quidem quo repudiandae sequi voluptates",
                    likesCount: 15,
                    name: "CHARLES STAFFORD",
                    time: "4",
                    title: "Cash Back"
                },
                {
                    id: 3,
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur " +
                        "blanditiis culpa, dolorem explicabo facilis id illo illum incidunt,labore magnam minima obcaecati " +
                        "officiis perspiciatis quidem quo repudiandae sequi voluptates",
                    likesCount: 17,
                    name: "TOMMY SHELBY",
                    time: "2",
                    title: "Nes Officer"
                }

            ],
            newPostText: "dat Text"
        },

        DialogsPage: {
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
    },
    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);

        this._callSubscriber(this._state);

    }
}



window.store = store;
export default store;