import React from "react";
import AppHeader from "./includes/header"
import SideNavigation from "./includes/sideNav";
import Footer from "./includes/footer"

const Upload = () => {
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
                                    <i className="fas fa-file-video"></i>
                                    <div>
                                        <h2>Select video files to upload</h2>
                                        <p>or drag and drop video files</p>
                                    </div>
                                    <button>
                                        <label for="select">Upload Files</label>
                                    </button>
                                    
                                    <input type="file" id="select"  />
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

export default Upload;