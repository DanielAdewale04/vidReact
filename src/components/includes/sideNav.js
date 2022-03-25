import React from "react"

const SideNavigation = () => {
    return(
        <>
            <div className="side-nav-widget">
                {navItemList.map((item) => <SideNavItem key={item.id} name={item.name} icon={item.icon} />)}
                
                <hr />

                <h3>Subscriptions</h3>

                {SubItem.map((item) => <SubcriptionItem key={item.id} name={item.name} img={item.img} latest={item.latest} />)}
            </div>
        </>
    )
}

export default SideNavigation;

export const SideNavItem = ({name, icon}) => {
    return(
        <>
            <div className="side-nav-item flexed-area centralized-v">
                <i className={icon}></i>
                <h4>{name}</h4>
            </div>
        </>
    )
}

export const SubcriptionItem = ({name, img, latest}) => {
    return(
        <>
            <div className="side-nav-item flexed-area centralized-v">
                <img src={img} />
                <h4>{name}</h4>
            </div>
        </>
    )
}

const SubItem = [
    {
        id: "1",
        name: "Your life",
        img: "images/v1.png",
        latest: 4
    },
    {
        id: "2",
        name: "Unboxing",
        img: "images/v1.png",
        latest: 4
    },
    {
        id: "3",
        name: "Products / Services",
        img: "images/v1.png",
        latest: 4
    },
    {
        id: "4",
        name: "Gaming",
        img: "images/v1.png",
        latest: 4
    },
]

const navItemList = [
    {
        id: "1",
        name: "Home",
        icon: "fas fa-home"
    },
    {
        id: "2",
        name: "Channels",
        icon: "fas fa-users"
    },
    {
        id: "3",
        name: "History Page",
        icon: "fi fi-rr-time-past"
    },
    {
        id: "4",
        name: "Upload Video",
        icon: "fas fa-upload"
    },
    {
        id: "5",
        name: "Categories",
        icon: "fas fa-clipboard-list"
    }
]