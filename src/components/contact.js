import React from "react"
import AppHeader from "./includes/header"
import SideNavigation from "./includes/sideNav";
import Footer from "./includes/footer"

const Contact = () => {
    return(
        <>
            <AppHeader />
            <div className="app-body">
                <div className="flexed-area">
                    <SideNavigation />
                    <div className="main-widget">
                        <div className="breadcrumb-area">
                            <div className="contact-widget flexed-area apart">
                                <div className="contact-left">
                                    <h2>Get in Touch</h2>
                                    {
                                        ContactsItem.map((item) => (
                                            <ContactsCard 
                                                key={item.name}
                                                name={item.name}
                                                msg={item.msg}
                                            />
                                        ))
                                    }
                                </div>
                                <div className="contact-right">
                                
                                </div>
                            </div>

                                <hr />

                            {/* Message Inputs */}
                            <div>
                                <h2>Contact Us</h2>
                                <div className="contact-inputs flexed-area">
                                    {
                                        contactParameters.map((item) => (
                                            <ContactInputCard 
                                                key={item.title}
                                                title={item.title}
                                                inputType={item.inputType}
                                                inputLength={item.inputLength}
                                            />
                                        ))
                                    }
                                    <div className="contact-msg">
                                        <h5>Message</h5>
                                        <textarea placeholder="Message..."></textarea>
                                    </div>
                                    <button>Send Message</button>
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

export default Contact;

const ContactInputCard = ({title, inputType, inputLength}) => {
    return(
        <>
            <div className={inputLength == "long" ? "long-input" : "short-input"} >
                <h5>{title}</h5>
                <input type={inputType} placeholder={title} />
            </div>
        </>
    )
}

const contactParameters = [
    {
        title: "Full Name",
        inputType: "text",
        inputLength: "long"
    },
    {
        title: "Phone Number",
        inputType: "number",
        inputLength: "short"
    },
    {
        title: "Email Address",
        inputType: "email",
        inputLength: "short"
    },
]

const ContactsCard = ({name, msg}) => {
    return(
        <>
            <div>
                <h4>{name}</h4>
                <p className="grey-text">{msg}</p>
            </div>
        </>
    )
}

const ContactsItem = [
    {
        name: "Address:",
        msg: "86 Petersham town, New South wales Waedll Steet, Australia PA 6550"
    },
    {
        name: "Phone:",
        msg: "+91 12345-67890, (+91) 123 456 7890"
    },
    {
        name: "Mobile:",
        msg: "(+20) 220 145 6589, +91 12345-67890"
    },
    {
        name: "Email:",
        msg: "fromHeaven@gmail.com"
    },
    {
        name: "Website:",
        msg: "iDontKnow.com"
    },
]