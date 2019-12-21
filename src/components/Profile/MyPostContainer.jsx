import React from 'react';
import './Profile';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer"
import MyPost from "./MyPost";
import StoreContext from "../../StoreContext";


const MyPostContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (<StoreContext.Consumer>{
        (store)=>(
        <MyPost updateNewPostText={onPostChange} addPost={addPost} posts={state.ProfilePage.posts}
                newPostText={state.ProfilePage.newPostText}/>)
    }</StoreContext.Consumer>)
}

export default MyPostContainer;
