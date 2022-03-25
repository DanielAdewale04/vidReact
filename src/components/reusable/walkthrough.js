import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const Walthrough = ({img}) => {
    return(
        <>
            <div className="auth-walkthrough flexed-area">
                <div>
                    <Carousel 
                        responsive={responsive}
                        showDots={true}
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        transitionDuration={2000}>
                        <div>
                            <img src={img} />
                            <h4>Create Video Contents</h4>
                            <p>Ask a friend to use their phone or to send you a text message.</p>
                        </div>
                        <div>
                            <img src={img} />
                            <h4>Create Video Contents</h4>
                            <p>Ask a friend to use their phone or to send you a text message.</p>
                        </div>
                        <div>
                            <img src={img} />
                            <h4>Create Video Contents</h4>
                            <p>Ask a friend to use their phone or to send you a text message.</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Walthrough;