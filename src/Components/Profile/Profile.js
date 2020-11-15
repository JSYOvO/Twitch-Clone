import React from 'react';
import RecentItem from '../RecentItem/RecentItem';
import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <div className="profile__topLeft">
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_VejXJIUZkECcApEOgBXa5pImaiFcUOXPf5mHE=s83-c-mo" alt="myProfile"/>

                <div className="profile__topLeftDetails">
                    <h1>JSYOvO</h1>
                    <h3>2000k followers</h3>
                </div>
            </div>
            <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Video</h2>
                <h2><i className="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>

            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem
                        url={"https://www.youtube.com/embed/1wZw7RvXPRU"}
                        title={'sexsexsex'}
                    />
                    <RecentItem
                        url={"https://www.youtube.com/embed/poQXNp9ItL4"}
                        title={'sexsexsex'}
                    />
                    <RecentItem
                        url={"https://www.youtube.com/embed/kUi1JIp7eVk"}
                        title={'sexsexsex'}
                    />
                </div>

                <div className="profile__categories">
                    <h2>최근 스트리밍 카테고리</h2>
                    <img src="https://i.pinimg.com/originals/cb/43/81/cb4381f306ccd817bcd531ba26d1e706.png"/>
                </div>
            </div>
        </div>
    )
}

export default Profile
