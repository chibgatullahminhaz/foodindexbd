import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = (props) => {
    return (
        <>
        <Header /> 
        <main>
        <h1>Layout</h1>
        {props.children}
        </main>
       <Footer />
    </>
    )
}

export default Layout;