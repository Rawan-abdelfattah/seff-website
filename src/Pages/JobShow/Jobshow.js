import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TopNav from '../../Components/TopNav/TopNav';
import JobShowPage from "../../Components/JobShowPage/JobShowPage";

function JobShow(){
    return(
        <div>
            <TopNav/>
            <Header/>
            <JobShowPage/>
            <Footer/>

        </div>
    )
}
