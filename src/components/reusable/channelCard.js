import React from "react"

const ChannelCard = ({img, subscribeState, channelName, subscribers}) => {
    return(
        <>
            <div className="channel-card">
                <div>
                    <img src={img} />
                </div>
                <button className={subscribeState ? "subscribed" : "notsubscribed"}>
                    {subscribeState ? "Subscribed" : "Subscribe"} {subscribers}
                </button>
                <div>
                    <h5>{channelName}</h5>
                    <p>{subscribers} Subscribers</p>
                </div>
            </div>
        </>
    )
}

export default ChannelCard