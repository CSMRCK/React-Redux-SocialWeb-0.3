import React from 'react';
import './Profile';
import c from '../cssComponents/ProfileC.module.css';
import Post from "./Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer"




const MyPost = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let postselements =
        props.posts.map(p => <Post postnumber={p.id} username={p.name}
                                   times={p.time} titles={p.title}
                                   text={p.message} like={p.likesCount}/>);

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={c.posts}>
            {postselements}
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Done!</button>
            </div>
        </div>
    )
}

export default MyPost;