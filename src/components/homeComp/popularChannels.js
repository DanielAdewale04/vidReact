import React from "react";
import BcHeader from "./bcHeader";
import ChannelCard from "../reusable/channelCard";

const PopularChannels = () => {
    return(
        <>
            <div classtitle="cards-widget">
                <BcHeader title="Popular Channels" menuIcon="fi fi-rr-menu-dots" />
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
        </>
    )
}

export default PopularChannels

export const ChannelsList = [
    {
        id: "1",
        img: "images/v1.png",
        name: "Channels Name",
        subscribers: "1.8M",
        verified: true,
        subscribed: true,
    },
    {
        id: "7",
        img: "images/v1.png",
        name: "Channels Name",
        subscribers: "7,654",
        verified: false,
        subscribed: false,
    },
    {
        id: "2",
        img: "images/v1.png",
        name: "Channels Name",
        subscribers: "7,654",
        verified: false,
        subscribed: false,
    },
    {
        id: "3",
        img: "images/v1.png",
        name: "Channels Name",
        subscribers: "7,654",
        verified: false,
        subscribed: false,
    },
    {
        id: "4",
        img: "images/v1.png",
        name: "Channels Name",
        subscribers: "7,654",
        verified: false,
        subscribed: true,
    },
    {
        id: "5",
        img: "images/v1.png",
        name: "Channels Name",
        subscribers: "7,654",
        verified: false,
        subscribed: false,
    },
]