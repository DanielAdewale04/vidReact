import React from "react"
import AppHeader from "./includes/header"
import SideNavigation from "./includes/sideNav";
import VideoViewMain from "./videoPageComps/videoViewMain";
import VideoRecommend from "./videoPageComps/videoRecommend";
import Footer from "./includes/footer"

const VideoPage = () => {
    return(
        <>
            <AppHeader />
            <div className="app-body">
                <div className="flexed-area">
                    <SideNavigation />
                    <div className="main-widget">
                        <div className="breadcrumb-area">
                            <div className="video-page-main">
                                <div className="video-page-flex flexed-area apart">
                                    <VideoViewMain />
                                    <VideoRecommend />
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

export default VideoPage;