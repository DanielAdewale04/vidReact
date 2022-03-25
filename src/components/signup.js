import React from "react"
import Walkthrough from "./reusable/walkthrough"
import { AuthInput } from "./login"
import { WelcomeMessage } from "./login"
import { Link } from "react-router-dom"

const SignUp = () => {
    return(
        <>
            <div className="auth-widget flexed-area apart">
                
                <div className="auth-main flexed-area">
                    <div>
                        <WelcomeMessage
                            title="Welcome to VidPlay"
                            msg="Ask a friend to use their phone or to send you a text message."
                        />
                        <h3 style={{color: "var(--notice-text)"}}>SignUp</h3>
                        {
                            signupParameters.map((item) => (
                                <AuthInput 
                                    key={item.title}
                                    inputTitle={item.title}
                                    inputType={item.inputType}
                                />
                            ))
                        }
                        <button className="notsubscribed">Sign Up</button>
                        <p>Already have an account? 
                            <span style={{color:"var(--notice-text)"}}>
                                <Link to="/login">
                                    Sign In
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>
                
                <Walkthrough
                    img="images/login.png"
                />
            </div>
        </>
    )
}

export default SignUp;

const signupParameters = [
    {
        title: "Mobile Number",
        inputType: "number"
    },
    {
        title: "Password",
        inputType: "password"
    },
    {
        title: "Confirm Password",
        inputType: "password"
    },
]