import React from "react"
import AppHeader from "./includes/header"
import SideNavigation from "./includes/sideNav";
import Channels from "./channelComp/channels";
import FeaturedVid from "./homeComp/featuredVid"
import Footer from "./includes/footer"

const ChannelComp = () => {
    return(
        <>
            <AppHeader />
                <div className="app-body">
                    <div className="flexed-area">
                        <SideNavigation />
                        <div className="main-widget">
                            <div className="breadcrumb-area">
                                <Channels />
                                <FeaturedVid />
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </>
    )
}

export default ChannelComp;