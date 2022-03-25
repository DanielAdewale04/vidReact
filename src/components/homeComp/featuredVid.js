import React from "react";
import BcHeader from "./bcHeader";
import VideoCard from "../reusable/videoCard";

const FeaturedVid = () => {
    return(
        <>
            <div classtitle="cards-widget">
                <BcHeader title="Featured Videos" menuIcon="fi fi-rr-menu-dots" />
                <div className="video-grid-widget">
                    
                    {
                        VideosList.map((item) => (
                            <VideoCard 
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

export default FeaturedVid

export const VideosList = [
    {
        id: "1",
        img: "images/v1.png",
        title: "There are many variations of passages of Lorem",
        views: "1.8M",
        duration: "03:58",
        verified: true,
        category: "Education",
        time: "11 months ago"
    },
    {
        id: "7",
        img: "images/v1.png",
        title: "There are many variations of passages of Lorem",
        views: "7,654",
        duration: "03:58",
        verified: false,
        category: "Education",
        time: "11 months ago"
    },
    {
        id: "2",
        img: "images/v1.png",
        title: "There are many variations of passages of Lorem",
        views: "7,654",
        duration: "03:58",
        verified: false,
        category: "Education",
        time: "11 months ago"
    },
    {
        id: "3",
        img: "images/v1.png",
        title: "There are many variations of passages of Lorem",
        views: "7,654",
        duration: "03:58",
        verified: false,
        category: "Education",
        time: "11 months ago"
    },
    {
        id: "4",
        img: "images/v1.png",
        title: "There are many variations of passages of Lorem",
        views: "7,654",
        duration: "03:58",
        verified: false,
        category: "Education",
        time: "11 months ago"
    },
    {
        id: "5",
        img: "images/v1.png",
        title: "There are many variations of passages of Lorem",
        views: "7,654",
        duration: "03:58",
        verified: false,
        category: "Education",
        time: "11 months ago"
    },
    {
        id: "6",
        img: "images/v1.png",
        title: "There are many variations of passages of Loree",
        views: "7,654",
        duration: "03:58",
        verified: false,
        category: "Education",
        time: "11 months ago"
    },

]