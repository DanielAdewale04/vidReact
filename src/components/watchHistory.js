import React from "react"
import AppHeader from "./includes/header"
import SideNavigation from "./includes/sideNav";
import BcHeader from "./homeComp/bcHeader";
import Footer from "./includes/footer"

const WatchHistory = () => {
    return(
        <>
            <AppHeader />
                <div className="app-body">
                    <div className="flexed-area">
                        <SideNavigation />
                        <div className="main-widget">
                            <div className="breadcrumb-area">
                                <BcHeader title="Watch History" menuIcon="fi fi-rr-menu-dots" />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default WatchHistory