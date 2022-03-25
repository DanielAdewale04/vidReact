import React from "react"
import AppHeader from "./includes/header"
import SideNavigation from "./includes/sideNav";
import ProfileInfo from "./singleChannelComp/profileInfo";
import BcHeader from "./homeComp/bcHeader";
import VideoCard from "./reusable/videoCard";
import { VideosList } from "./homeComp/featuredVid"
import Pagination from "./reusable/pagination"
import Footer from "./includes/footer";

const SingleChannel = () => {
    return(
        <>
            <AppHeader />
                <div className="app-body">
                    <div className="flexed-area">
                        <SideNavigation />
                        <div className="main-widget">
                            <ProfileInfo coverImage="images/v1.png" profileImage="images/v1.png" />
                            <div className="breadcrumb-area">
                            <div className="cards-widget">
                                    <BcHeader title="Videos" menuIcon="fi fi-rr-menu-dots" />
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
                                        <Pagination />
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SingleChannel;