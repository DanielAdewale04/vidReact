import React from "react";
import BcHeader from ".././homeComp/bcHeader";
import VideoRecCard from "../reusable/videoRecCard"
import { VideosList } from "../homeComp/featuredVid";

const NextVideos = () => {
    return(
        <>
            <div classtitle="cards-widget">
                <BcHeader title="Up Next" menuIcon="fi fi-rr-menu-dots" />
                <div className="video-grid-widget">
                    {
                        VideosList.map((item) => (
                            <VideoRecCard 
                              key={item.id}  
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
            </div>
        </>
    )
}

export default NextVideos
