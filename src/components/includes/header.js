import React from "react"
import { SearchRounded } from "@material-ui/icons";
import { AddCircle } from "@material-ui/icons";


const AppHeader = () => {
    return(
        <>
            <header>
                <div className="header-widget">
                    <div className="flexed-area centralized-v apart">
                        <div className="logo-area">
                            <img src="logo/logo.png" alt="App Logo" />
                        </div>
                        <HeaderSearch ph="Search for..." />
                        <div className="header-nav flexed-area centralized-v apart">
                            <div className="flexed-area centralized-v">
                                <i className="small-icon"><AddCircle /></i>
                                <p> Upload Video</p>
                            </div>
                            <div>
                                <i className="fas fa-bell"></i>
                            </div>
                            <div>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="logged-user-card flexed-area apart centralized-v">
                                <img src="images/avatar-male-1.jpg" />
                                <p>Daniel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default AppHeader;

export const HeaderSearch = ({ph}) => {
    return(
        <>
            <div className="header-search-bar">
                <input type="text" placeholder={ph} /> 
                <i className="small-icon"><SearchRounded /></i>
            </div>
        </>
    )
}