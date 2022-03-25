import React from "react"
import AppHeader from "./includes/header"
import SideNavigation from "./includes/sideNav"
import HomeMain from "./homeComp/main"

const Home = () => {
    return(
        <>
            <AppHeader />
            <div className="app-body">
                <div className="flexed-area">
                    <SideNavigation />
                    <HomeMain />
                </div>
            </div>
        </>
    )
}

export default Home;