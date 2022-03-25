import React from "react"
import Walkthrough from "./reusable/walkthrough"
import { AuthInput } from "./login"
import { WelcomeMessage } from "./login"
import { Link } from "react-router-dom"

const Recover = () => {
    return(
        <>
            <div className="auth-widget flexed-area apart">
                
                <div className="auth-main flexed-area">
                    <div>
                        <WelcomeMessage
                            title="Reset Password"
                            msg="Ask a friend to use their phone or to send you a text message."
                        />
                        {
                            recoverParameters.map((item) => (
                                <AuthInput 
                                    key={item.title}
                                    inputTitle={item.title}
                                    inputType={item.inputType}
                                />
                            ))
                        }
                        <button className="notsubscribed">Recover Password</button>
                        <p>Don't have an account? <span style={{color:"var(--notice-text)"}}>
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </span></p>
                    </div>
                </div>
                
                <Walkthrough
                    img="images/login.png"
                />
            </div>
        </>
    )
}

export default Recover;

const recoverParameters = [
    {
        title: "Email Address / Mobile Number",
        inputType: "text"
    }
]