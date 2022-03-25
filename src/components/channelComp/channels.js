import React from "react";
import BcHeader from ".././homeComp/bcHeader";
import ChannelCard from "../reusable/channelCard";
import { ChannelsList } from "../homeComp/popularChannels"
import Pagination from "../reusable/pagination"

const Channels = () => {
    return(
        <>
            <div className="cards-widget">
                <BcHeader title="Channels" menuIcon="fi fi-rr-menu-dots" />
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
        </>
    )
}

export default Channels;