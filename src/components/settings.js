import React from "react"
import AppHeader from "./includes/header"
import SideNavigation from "./includes/sideNav";
import BcHeader from "./homeComp/bcHeader";
import Footer from "./includes/footer"

const Settings = () => {
    return(
        <>
            <AppHeader />
                <div className="app-body">
                    <div className="flexed-area">
                        <SideNavigation />
                        <div className="main-widget">
                            <div className="breadcrumb-area">
                                <BcHeader title="Settings" menuIcon="fi fi-rr-menu-dots" />
                                <div>
                                    <form>
                                        <div className="settings-input-flex flexed-area">
                                            {
                                                settingsParameters.map((item) => 
                                                    <SettingInputs 
                                                        key={item.title}
                                                        title={item.title}
                                                        inputType={item.inputType}
                                                    />)
                                            }
                                            <div className="settings-address">
                                                <h5 className="grey-text">Address</h5>
                                                <textarea placeholder="Address"></textarea>
                                            </div>
                                        </div>
                                        <div className="settings-action-btns">
                                            <button>Cancel</button>
                                            <button className="notsubscribed">Save Changes</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
        </>
    )
}   

export default Settings;

const SettingInputs = ({title, inputType}) => {
    return(
        <>
            <div className="settings-input-field">
                <h5 className="grey-text">{title}</h5>
                <input type={inputType} placeholder={title} />
            </div>
        </>
    )
}

const settingsParameters = [
    {
        title: "First Name",
        inputType: "text"
    },
    {
        title: "Last Name",
        inputType: "text"
    },
    {
        title: "Mobile Number",
        inputType: "number"
    },
    {
        title: "Email Address",
        inputType: "email"
    },
    {
        title: "Zip Code",
        inputType: "number"
    },
    {
        title: "Country",
        inputType: "text"
    },
    {
        title: "City",
        inputType: "text"
    },
    {
        title: "State",
        inputType: "text"
    },
]