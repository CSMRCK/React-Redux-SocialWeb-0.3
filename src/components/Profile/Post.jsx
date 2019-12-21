import React from 'react';
import Infoblock from "../Infoblock";
import './Profile';
import c from '../cssComponents/ProfileC.module.css';


const Post = (props) => {

    return (

            <div className={c.main_post_block}>
                <header>
                    <div className={c.gold}><p>{props.postnumber}</p></div>
                    <div className={c.userdata}>REBLOG / <p className={c.goldy}>POSTED by:</p>{props.username} /
                        <p className={c.bold}>{props.time} HOURS AGO</p></div>
                </header>
                <div className={c.main_part_block}>
                    <img src="https://media3.giphy.com/media/26BRHzZctc9oaaGQM/giphy.gif"/>
                    <div className={c.alltext}>
                        <h3>{props.title}</h3>
                        <div className={c.posttext}>{props.text}</div>
                    </div>

                </div>
                <footer>
                    <hr/>
                    <div className={c.likeblock}>likes:{props.like}</div>
                </footer>
            </div>

    )
}

export default Post;