import React from "react"

const CategoryCard = ({name, img, viewsNo, verified}) => {
    return(
        <>
            <div className="category-card">
                <img src={img} />
                <h4>{name}</h4>
                <p style={{color:"var(--notice-text)"}}>{viewsNo} views</p>
            </div>
        </>
    )
}

export default CategoryCard;