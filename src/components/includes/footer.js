import React from "react"

const Footer = () => {
    return(
        <>
            <footer>
                <div className="flexed-area apart"> 
                    <div className="footer-big-widgets footer-company">
                        <div>
                            <img src="logo/logo.png" />
                        </div>
                        <div className="company-info">
                            <p className="grey-text">86 Petersham town, New South wales Waedll Steet, Australia</p>
                            <div className="flexed-area centralized-v">
                                <i className="fas fa-phone"></i>
                                <p> +123 456 789</p>
                            </div>
                            <div className="flexed-area centralized-v">
                                <i className="fas fa-envelope"></i>
                                <p> adewaled03@gmail.com</p>
                            </div>
                            <div className="flexed-area centralized-v">
                                <i className="fi fi-rr-globe"></i>
                                <p> www.iDontknow.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-small-widgets">
                        <h3>Company</h3>
                        <div>
                            {
                                CompanyItems.map((item) => (
                                    <FooterListCard 
                                        key={item.name} 
                                        itemName={item.name} 
                                        slug={item.slug} 
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer-small-widgets">
                        <h3>Features</h3>
                        <div>
                            {
                                FeaturesItems.map((item) => (
                                    <FooterListCard 
                                        key={item.name} 
                                        itemName={item.name} 
                                        slug={item.slug} 
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer-small-widgets">
                        <h3>Solutions</h3>
                        <div>
                            {
                                SolutionsItems.map((item) => (
                                    <FooterListCard 
                                        key={item.name} 
                                        itemName={item.name} 
                                        slug={item.slug} 
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer-big-widgets">
                        <div className="newsletter-widget">
                            <h3>Newsletter</h3>
                            <div>
                                <input placeholder="Email Address" />
                                <i className="fas fa-search"></i>
                            </div>
                            <p>It is a long established fact that a reader will be distracted by..</p>
                        </div>
                        <div className="download-app">
                            <h3>Download App</h3>
                            <div className="flexed-area centralized-v">
                                <img src="images/google.png" />
                                <img src="images/apple.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;

export const FooterListCard = ({itemName, slug}) => {
    return(
        <>
            <p className="grey-text">{itemName}</p>
        </>
    )
}

const CompanyItems = [
    {
        name: "About us",
        slug: "#"
    },
    {
        name: "Careers",
        slug: "#"
    },
    {
        name: "Legal",
        slug: "#"
    },
    {
        name: "FAQ",
        slug: "#"
    },
    {
        name: "Privacy",
        slug: "#"
    },
    {
        name: "Terms",
        slug: "#"
    },
    {
        name: "Contact us",
        slug: "#"
    },
]

const FeaturesItems = [
    {
        name: "Retention",
        slug: "#"
    },
    {
        name: "People",
        slug: "#"
    },
    {
        name: "Messages",
        slug: "#"
    },
    {
        name: "Infrastructure",
        slug: "#"
    },
    {
        name: "Platform",
        slug: "#"
    },
    {
        name: "Funnels",
        slug: "#"
    },
    {
        name: "Live",
        slug: "#"
    },
]

const SolutionsItems = [
    {
        name: "Enterprise",
        slug: "#"
    },
    {
        name: "Financial Services",
        slug: "#"
    },
    {
        name: "Consumer Tech",
        slug: "#"
    },
    {
        name: "Entertainment",
        slug: "#"
    },
    {
        name: "Product",
        slug: "#"
    },
    {
        name: "Marketing",
        slug: "#"
    },
    {
        name: "Analytics",
        slug: "#"
    },
]