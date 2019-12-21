import React from 'react';
import c from './cssComponents/InfoblockC.module.css';

const Infoblock = (props) => {
    return (

        <div className={c.position}>
            <div className={c.main_block}>
                <div className={c.photo_block}></div>
                <div className={c.info_block}>
                    <div className={c.info}>
                        <div className={c.book}>
                            <div className={c.photo}>
                                <img className={c.face} src="pics/face.jpg" width="40" height="40"></img>
                            </div>
                            <div className={c.name}>
                                <p>{props.name}</p>
                                <p>{props.author}</p>
                            </div>
                        </div>
                    </div>
                    <hr noshade="true" size="1" color="#40434d"></hr>
                    <div className={c.stats}>
                        <ul className={c.stats_face}>
                            <li><img src="pics/icons8-invisible-480.png" width="17" height="15"></img> 1,246</li>
                            <li><img src="pics/icons8-topic-24.png" width="15" height="15"></img> 6</li>
                            <li><img src="pics/icons8-heart-24.png" width="15" height="15"></img> 164</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Infoblock;