import React from "react";
import Head from "./Head";
import Main from "./Main";
// import MainButton from "./MainButton"
import Footer from "./Footer";
import Form from "./Form";

export default function app () {
    return(
        <div>
            <Head />
            <Main />
            {/* <MainButton /> */}
            <Form />
            <Footer />
        </div>
    )
}
