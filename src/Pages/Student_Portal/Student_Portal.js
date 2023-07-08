import React from "react";
import Welcome from "../../Components/Welcome/Welcome";
import TopNav from '../../Components/TopNav/TopNav';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Registered_courses from "../../Components/Registered-courses/Registered_courses";
import Certifications from "../../Components/Certifications/Certifications";
import Circle_Progress from "../../Components/Circle_Progress_Bar/Circle_Progress";

function Student_Portal(){
 return(
    <div>
        <TopNav/>
        <Header/>
        <Welcome/>
        <Registered_courses/>
        <Circle_Progress/>
        <Certifications/>
        <Footer/>

    </div>
 )
}
export default Student_Portal;
