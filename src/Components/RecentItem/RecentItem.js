import React from 'react';
import './RecentItem.css';

function RecentItem({url, title}) {
    return (
        <div className="item">
            <iframe 
                width="400"
                height="235"
                src={url} 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
            ></iframe>

            <div className="item__details">
                <img src="https://i.pinimg.com/originals/cb/43/81/cb4381f306ccd817bcd531ba26d1e706.png"/>
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>슬기랑 사귀고 싶어</p>
                    <p>Science & Technology</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem; 