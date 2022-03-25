import React from "react"
import Walkthrough from "./reusable/walkthrough"
import { Link } from "react-router-dom"

const Login = () => {
    return(
        <>
            <div className="auth-widget flexed-area apart">
                
                <div className="auth-main flexed-area">
                    <div>
                        <WelcomeMessage
                            title="Welcome to VidPlay"
                            msg="Ask a friend to use their phone or to send you a text message."
                        />
                        <h3 style={{color: "var(--notice-text)"}}>Login</h3>
                        {
                            loginParameters.map((item) => (
                                <AuthInput 
                                    key={item.title}
                                    inputTitle={item.title}
                                    inputType={item.inputType}
                                />
                            ))
                        }
                        <NavMsg 
                            question="Forgotten Password?"
                            actionName="Recover Password!"
                            link="/recover-password"
                        />
                        <button className="notsubscribed">Sign In</button>
                        <NavMsg 
                            question="Don't have an account? "
                            actionName="Sign Up!"
                            link="/signup"
                        />
                    </div>
                </div>
                
                <Walkthrough
                    img="images/login.png"
                />
            </div>
        </>
    )
}

export default Login;

export const NavMsg = ({question, link, actionName}) => {
    return(
        <p>{question} <span style={{color:"var(--notice-text)"}}>
            <Link to={link}>
                {actionName}
            </Link>
        </span></p>
    )
}

export const WelcomeMessage = ({title, msg}) =>{
    return(
        <>
            <div className="welcome-msg">
                <img src="logo/logo.png" /> 
                <h3>{title}</h3>
                <p className="grey-text">{msg}</p>
            </div>
        </>
    )
}

export const AuthInput = ({inputTitle, inputType}) => {
    return(
        <>
            <div className="auth-input-field">
                <h5>{inputTitle}</h5>
                <input type={inputType} placeholder={inputTitle} />
            </div>
        </>
    )
}

const loginParameters = [
    {
        title: "Mobile Number",
        inputType: "number"
    },
    {
        title: "Password",
        inputType: "password"
    }
]