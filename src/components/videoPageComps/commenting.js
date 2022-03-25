import React from "react"

const Commenting = () => {
    return(
        <>
            <div className="video-channel-info">
                <CommentingHeader />
                    <hr />
                <CommentInputWidget 
                    img="images/v1.png"
                    noOfComments="2,048,362"
                />
                    <hr />
                <div>
                    <UserCommentCard 
                        userImage="images/v1.png" 
                        userName="Daniel Adewale"
                        time="2 mins ago"
                        likes="120"
                        unlikes="38"
                        comment="Was here impromptu in their first week, reacthe last order. Even though they had Chefs in their open kitchen they weren’t flexible to dish out few more items"
                    />
                    <UserCommentCard 
                        userImage="images/v1.png" 
                        userName="Daniel Adewale"
                        time="2 mins ago"
                        likes="120"
                        unlikes="38"
                        comment="Was here impromptu in their first week, reacthe last order. Even though they had Chefs in their open kitchen they weren’t flexible to dish out few more items"
                    />
                </div>
            </div>
        </>
    )
}

export default Commenting;

export const CommentingHeader = () => {
    return(
        <>
            <div>
                <div className="flexed-area centralized-v apart ">
                    <h4>VIDOE COMMENTS</h4>
                    <h4>DISQUS COMMENTS</h4>
                    <h4>FACEBOOK COMMENTS</h4>
                </div>
            </div>
        </>
    )
}

export const CommentInputWidget = ({img, noOfComments}) => {
    return(
        <>
            <div className="comment-input-widget">
                <div className="flexed-area centralized-v apart ">
                    <img src={img} />
                    <div className="comment-input">
                        <textarea placeholder="Add a public comment..."></textarea>
                        <p>{noOfComments} comments</p>
                    </div>
                    <div>
                        <button className="notsubscribed">Comment</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export const UserCommentCard = ({userImage, userName, comment, time, likes, unlikes}) => {
    return(
        <>
            <div className="user-comment-card">
                <div className="flexed-area apart">
                    <img src={userImage} />
                    <div>
                        <div className="flexed-area apart">
                            <h4>{userName}</h4>
                            <p className="grey-text">{time}</p>
                        </div>
                        <p className="comment-text grey-text">{comment}</p>
                        <div className="flexed-area">
                            <div className="reaction-card flexed-area">
                                <button><i className="fi fi-rr-thumbs-up"></i>{likes}</button>
                                <button><i className="fi fi-rr-thumbs-down"></i>{unlikes}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}