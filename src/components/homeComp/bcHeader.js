import React from "react"

const BcHeader = ({title, menuIcon}) => {
    return(
        <>
            <div className="bc-header flexed-area apart centralized-v">
                <h3>{title}</h3>
                <div>
                    <i className={menuIcon}></i>
                </div>
            </div>
        </>
    )
}

export default BcHeader