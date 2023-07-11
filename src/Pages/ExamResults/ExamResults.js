import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TopNav from '../../Components/TopNav/TopNav';
import ExsamResults from "../../Components/ExsamResults/ExsamResults";

function JobShow(){
    return(
        <div>
            <TopNav/>
            <Header/>
            <ExsamResults/>
            <Footer/>

        </div>
    )
}
