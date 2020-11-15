import React from 'react';
import './Stream.css';

function Stream({indicator}) {
    return (
        <div className="stream">
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__statusContainer">
                        <div className="stream__statusContainerTop">
                            <div className="stream__statusIndicator">
                                {indicator}
                            </div>
                            <h2>Check Out!!</h2>
                        </div>
                        <div className="stream__statusInfo">
                            <i className="fas fa-bell"></i>
                            <p>스트리밍을 구독하시겠습니까?</p>
                        </div>
                    </div>
                </div>
                <div className="stream__videoEmbed">
                    <iframe 
                        width="500"
                        height="295"
                        src="https://www.youtube.com/embed/0pFqFGwL9mA" 
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
        </div>

    )
}

export default Stream;