import React from "react"

const Pagination = () => {
    return(
        <>
            <div className="pagination-widget">
                <div className="pagination-child">
                    <i className="fas fa-angle-left"></i>
                    <p className="active">1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        </>
    )
}

export default Pagination;