import React from "react";
import AppHeader from "./includes/header"
import SideNavigation from "./includes/sideNav";
import Footer from "./includes/footer"
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return(
        <>
            <AppHeader />
            <div className="app-body">
                <div className="flexed-area">
                    <SideNavigation />
                    <div className="main-widget">
                        <div className="breadcrumb-area">
                            <div className="upload-widget flexed-area centralized-v">
                                <div>
                                    <img src="images/404.png" />
                                    <div>
                                        <h2>Sorry, Page not found.</h2>
                                        <p>Unfortunately the page you are looking for has been moved or deleted.</p>
                                    </div>
                                    <button>
                                        <Link to="/">
                                            Go to Homepage
                                        </Link>
                                    </button>
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

export default NotFoundPage;