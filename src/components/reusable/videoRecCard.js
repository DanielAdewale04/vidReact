import React from "react"

const VideoRecCard = ({img, title, duration, category, views, time}) => {
    return(
        <>
            <div className="horiz-video-card flexed-area centralized-v apart">
                <div className="video-img-display">
                    <img src={img} />
                    <p>{duration}</p>
                    <div className="play-icon-widget">
                        <i className="fas fa-play-circle"></i>
                    </div>
                </div>
                <div className="video-card-texts">
                    <h4>{title}</h4>
                    <p>{category}</p>
                    <div className="flexed-area centralized-v">
                        <span>{views} views</span> 
                        <span className="fi fi-rr-calendar"></span>
                        <span>{time}</span>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default VideoRecCard;