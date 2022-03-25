import React from "react";
import ChanCategories from "./chanCategories";
import FeaturedVid from "./featuredVid";
import PopularChannels from "./popularChannels";
import Footer from "../includes/footer";

const HomeMain = () => {
    return(
        <>
            <div className="main-widget">
                <div className="breadcrumb-area">
                    <ChanCategories />
                        <hr />
                    <FeaturedVid />
                        <hr />
                    <PopularChannels />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default HomeMain