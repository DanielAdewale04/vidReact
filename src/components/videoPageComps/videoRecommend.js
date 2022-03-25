import React from "react";
import VideoRecCard from "../reusable/videoRecCard"
import { VideosList } from "../homeComp/featuredVid";
import NextVideos from "./nextVideos";

const VideoRecommend = () => {
    return(
        <>
            <div className="video-page-right">
                <div className="similar-videos">
                    {
                        VideosList.map((item) => (
                            <VideoRecCard 
                                img={item.img}
                                title={item.title}
                                duration={item.duration}
                                views={item.views}
                                category={item.category}
                                time={item.time}
                            />
                        ))
                    }
                </div>
                <div>
                    <NextVideos />
                </div>
            </div>
        </>
    )
}

export default VideoRecommend;