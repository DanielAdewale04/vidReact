import React from "react"
import AppHeader from "./includes/header"
import SideNavigation from "./includes/sideNav";
import BcHeader from "./homeComp/bcHeader";
import Footer from "./includes/footer"
import VideoCard from "./reusable/videoCard";
import { VideosList } from "./homeComp/featuredVid";
import ChannelCard from "./reusable/channelCard";
import { ChannelsList } from "./homeComp/popularChannels"

const Account = () => {
    return(
        <>
            <AppHeader />
                <div className="app-body">
                    <div className="flexed-area">
                        <SideNavigation />
                        <div className="main-widget">
                            <div className="breadcrumb-area">
                                <div className="flexed-area apart">
                                    {
                                        AccountNavItems.map((item) => (
                                            <AccountNavCard
                                                key={item.type}
                                                amount={item.amount}
                                                icon={item.icon}
                                                type={item.type}
                                                bgColor={item.bgColor}
                                            />
                                        ))
                                    }
                                </div>
                                    <hr />
                                <div classtitle="cards-widget">
                                    <BcHeader title="My Videos" menuIcon="fi fi-rr-menu-dots" />
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
                                    <hr />
                                <div className="cards-widget">
                                    <BcHeader title="My Channels" menuIcon="fi fi-rr-menu-dots" />
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

export default Account

export const AccountNavCard = ({amount, type, bgColor, icon, link}) => {

    function ToggleBg () {
        if (bgColor === "blue"){
            return "account-main-nav-items blue-bg"
        }
        else if (bgColor === "green"){
            return "account-main-nav-items green-bg"
        }
        else if (bgColor === "yellow") {
            return "account-main-nav-items yellow-bg"
        }
        else return "account-main-nav-items red-bg"
    }
    return(
        <>
            <div className={ToggleBg()} >
                <i className={icon}></i>
                <h5>{amount} {type}</h5>
                    <hr />
                <div className="flexed-area apart centralized-v">
                    <p>View details</p>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        </>
    )
}

export const AccountNavItems = [
    {
        amount : "26",
        type:"Channel",
        icon:"fas fa-users",
        bgColor: "blue",
        link: "#"
    },
    {
        amount : "26",
        type:"Videos",
        icon:"fas fa-video",
        bgColor: "green",
        link: "#"
    },
    {
        amount : "26",
        type:"Categories",
        icon:"fas fa-list",
        bgColor: "yellow",
        link: "#"
    },
    {
        amount : "26",
        type:"New Videos",
        icon:"fas fa-cloud",
        bgColor: "red",
        link: "#"
    },
]