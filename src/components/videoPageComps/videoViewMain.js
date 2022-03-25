import React from "react"
import Commenting from "./commenting";

const VideoViewMain = () => {
    return(
        <>
            <div className="video-page-left">
                <div>
                    <VideoDisplayFrame
                        videoSource="https://www.youtube-nocookie.com/embed/8LWZSGNjuF0?rel=0&amp;controls=0&amp;showinfo=0"
                    />
                    <VideoInfoCard 
                        videoName="Trip to Akure 🥰"
                        views="5,103,567"
                    />
                    <VideoChannelInfo
                        channelName="Max Arnachy"
                        channelImg="images/v1.png"
                        publishedDate="March 21, 2022"
                    />
                    <>
                    <div className="video-channel-info">
                        {
                            VideoFutherInfoItems.map((item) => (
                                
                                <VideoFurtherInfo
                                    title={item.title}
                                    text={item.text}
                                />
                            ))
                        }
                    </div>
                    <Commenting />
                    </>
                    
                </div>
            </div>
        </>
    )
}

export default VideoViewMain;

export const VideoDisplayFrame = ({videoSource}) => {
    return(
        <>
            <div>
                <iframe src={videoSource} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                
                </iframe>
            </div>
        </>
    )
}

export const VideoInfoCard = ({videoName, views}) => {
    return(
        <>
            <div className="video-info-card">
                <h3>{videoName}</h3>
                <div className="flexed-area centralized-v">
                    <i className="fas fa-eye"></i>
                    <p>{views} views</p>
                </div>
            </div>
        </>
    )
}

export const VideoChannelInfo = ({channelImg, channelName, publishedDate}) => {
    return(
        <>
            <div className="video-channel-info flexed-area centralized-v apart">
                <div className="video-channel-info-card flexed-area centralized-v apart">
                    <img src={channelImg} />
                    <div>
                        <h4>{channelName}</h4>
                        <p className="grey-text">Published on {publishedDate}</p>
                    </div>
                </div>
                <div className="video-channel-action-btn flexed-area centralized-v">
                    <button className="notsubscribed">Subscribe</button>
                    <i className="fas fa-bell"></i>
                </div>
            </div>
        </>
    )
}

export const VideoFurtherInfo = ({title, text}) => {
    return(
        <>
            <div className="video-channel-further-info-item">
                <h4>{title}</h4>
                <p className="grey-text">{text}</p>
            </div>
        </>
    )
}

export const VideoFutherInfoItems = [
    {
        title: "Cast",
        text: "Nathan Drake , Victor Sullivan , Sam Drake , Elena Fisher"
    },
    {
        title: "Category",
        text: "Gaming , PS4 Exclusive , Gameplay , 1080p"
    },
    {
        title: "About",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as evolved over the years, sometimes"
    },
]