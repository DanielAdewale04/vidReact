import React from "react";
import AppHeader from "./includes/header"
import SideNavigation from "./includes/sideNav";
import BcHeader from "./homeComp/bcHeader";
import ChannelCard from "./reusable/channelCard";
import { ChannelsList } from "./homeComp/popularChannels"
import Pagination from "./reusable/pagination"
import Footer from "./includes/footer"

const Subscriptions = () => {
    return(
        <>
            <AppHeader />
            <div className="app-body">
                <div className="flexed-area">
                    <SideNavigation />
                    <div className="main-widget">
                        <div className="breadcrumb-area">
                            <div className="cards-widget">
                                <BcHeader title="Subscriptions" menuIcon="fi fi-rr-menu-dots" />
                                <div className="video-grid-widget">
                                    {
                                        ChannelsList.map((item) => (
                                            <ChannelCard
                                                key={item.id}
                                                img={item.img}
                                                channelName={item.name}
                                                subscribers={item.subscribers}
                                                subscribeState={item.subscribed}
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

export default Subscriptions;