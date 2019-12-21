import React from 'react';
import Infoblock from "../Infoblock";
import ProfileData from './ProfileData';
import c from '../cssComponents/ProfileC.module.css';
import MyPost from "./MyPost";
import MyPostContainer from "./MyPostContainer";


const Profile = (props) => {

    return (

        <div className={c.allblock}>
            <div className={c.mainimage}>
                <img
                    src="https://mk0blackwatchxgcker1.kinstacdn.com/wp-content/uploads/2019/07/1200x400-Lecture-Black-Watch-Veterans.jpg"/>
                <h1>#1 Gang after war</h1>
                <hr/>
            </div>
            <div className={c.mypage}>
                <ProfileData name="Charles Stafford" microtext="It`s all about power" infotext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur eius esse fuga itaque magni
                maiores natus, nobis porro, quae recusandae rem repudiandae suscipit tempora temporibus unde veniam? Quisquam, vel"/>

                <MyPostContainer />

            </div>

        </div>)

}
export default Profile;