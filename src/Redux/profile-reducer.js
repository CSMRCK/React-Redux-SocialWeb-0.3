const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';

let initialState = {
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
};


const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 42,
                name: "TOMMYS SHELBY",
                time: "21",
                title: "New"
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT, newText: text})
export default profileReducer;