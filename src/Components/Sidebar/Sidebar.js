import React from 'react';
import './Sidebar.css';
import Channel from '../Channel/Channel.js';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel 
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/89e29e2e-f165-40e6-bc0c-d42205935216-profile_image-300x300.png"
                    name="침착맨"
                    followers="49k"
                />
                <Channel 
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/4c196c1c-d1e1-4ce4-9338-11020e72a94d-profile_image-70x70.png"
                    name="승우아빠"
                    followers="17k"
                />
                <h5>RECOMMANDED CHANNELS</h5>
                <Channel 
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/4d425b29-8b56-4c7d-93a9-036e0cef7e52-profile_image-70x70.png"
                    name="주펄"
                    followers="8k"
                />
                <p className="sidebar__topShowMore">Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar_bottomContainer">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="친구를 검색해보세요"/>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;
