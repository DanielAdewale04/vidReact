import React from "react";
import BcHeader from "./bcHeader";
import CategoryCard from "../reusable/categoryCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const ChanCategories = () => {
    return(
        <>
            <div className="cards-widget">
                <BcHeader title="Channel Categories" menuIcon="fi fi-rr-menu-dots" />
                <div className="carousel-widget category-widget">
                    <Carousel 
                        responsive={responsive}
                        draggable={false}
                        showDots={false}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        transitionDuration={2000}
                    >
                    {
                        CategoriesList.map((item) => (
                            <CategoryCard 
                                key={item.id} 
                                name={item.name} 
                                verified={item.verified} 
                                img={item.img} 
                                viewsNo={item.views} />
                        ))
                    }
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default ChanCategories

export const CategoriesList = [
    {
        id: "1",
        img: "images/v1.png",
        name: "Unboxing Cool",
        views: "7,654",
        verified: true
    },
    {
        id: "7",
        img: "images/v1.png",
        name: "Services reviewing",
        views: "7,654",
        verified: false
    },
    {
        id: "2",
        img: "images/v1.png",
        name: "Technology Tutorial",
        views: "7,654",
        verified: false
    },
    {
        id: "3",
        img: "images/v1.png",
        name: "Cooking",
        views: "7,654",
        verified: false
    },
    {
        id: "4",
        img: "images/v1.png",
        name: "Education",
        views: "7,654",
        verified: false
    },
    {
        id: "5",
        img: "images/v1.png",
        name: "Your Life",
        views: "7,654",
        verified: false
    },
    {
        id: "6",
        img: "images/v1.png",
        name: "Lifestyle Advice",
        views: "7,654",
        verified: false
    },

]