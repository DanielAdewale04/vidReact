import React from "react"

const ProfileInfo = ({coverImage, profileImage}) => {
    return(
        <>
            <div className="profile-info-widget">
                <div className="profile-img-display">
                    <div className="cover-img-card">
                        <img className="cover-img" src={coverImage} alt="Cover Picture" />
                    </div>
                    <img className="profile-img" src={profileImage} alt="Profile Picture" />
                    <div className="profile-social">
                        <p className="social-indicator">Social</p>
                        <p className="social-item">Facebook</p>
                        <p className="social-item">Twitter</p>
                        <p className="social-item">Google</p>
                    </div>
                </div>
                <ProfileNav profileName="Daniel Adewale" />
            </div>
        </>
    )
}

export default ProfileInfo;

export const ProfileNav = ({profileName}) => {
    return(
        <>
            <div className="profile-navigations">
                <div className="flexed-area apart centralized-v breadcrumb-area">
                    <h4 className="profile-name">{profileName}</h4>
                    <div className="profile-nav flexed-area centralized-v apart">
                        {
                            ProfileNavItem.map((item) => (
                                <p key={item.title}>{item.title}</p>
                            ))
                        }
                    </div>
                    <div className="profile-actions flexed-area centralized-v apart">
                        <div className="profile-search">
                            <input type="text" placeholder="Search" />
                            <i className="fas fa-search"></i>
                        </div>
                        <button className="notsubscribed">Subscribe <span>1.4M</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProfileNavItem = [
    {
        title: "Videos"
    },
    {
        title: "Playlist"
    },
    {
        title: "Channels"
    },
    {
        title: "Discussion"
    },
    {
        title: "About"
    },
    {
        title: "Donate"
    },
]