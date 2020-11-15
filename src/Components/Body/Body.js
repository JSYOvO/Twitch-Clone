import React from 'react'
import './Body.css';
import Profile from '../Profile/Profile.js';
import Stream from '../Stream/Stream.js';

function Body() {
    return (
        <div className="body">
            <div className="body__left">'
                <Stream indicator="OFFLINE"/>
                <Profile />
            </div>
            <div className="body__rightPlaceHolder">
                
            </div>
        </div>
    )
}

export default Body
