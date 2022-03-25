import React from "react"
import AppHeader from "./includes/header"
import SideNavigation from "./includes/sideNav";
import BcHeader from "./homeComp/bcHeader";
import Footer from "./includes/footer";
import CategoryCard from "./reusable/categoryCard";
import { CategoriesList } from "./homeComp/chanCategories";
import Pagination from "./reusable/pagination";

const Categories = () => {
    return(
        <>
            <AppHeader />
            <div className="app-body">
                <div className="flexed-area">
                    <SideNavigation />
                    <div className="main-widget">
                        <div className="breadcrumb-area">
                            <BcHeader title="Categories" menuIcon="fi fi-rr-menu-dots" />
                            <div>
                                <div className="page-category">
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
                                </div>
                                <Pagination />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;