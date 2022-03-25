import React, {useEffect} from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getLoggedUser } from "../Redux/loggedUser";

const HeaderComp = () => {

    const dispatch = useDispatch()
    const loggedUser = useSelector((state) => state.loggedUser.userData)
    useEffect(() => {
        dispatch(getLoggedUser())
    }, [])

    return(
        <>
        <header className="header-widget">
            <h1>Edvora</h1>
            <div className="loggeduser-card flexed-area">
                <h4>{loggedUser.name}</h4>
                <img src={loggedUser.url} />
            </div>
        </header>
            
        </>
    )
}

export default HeaderComp;