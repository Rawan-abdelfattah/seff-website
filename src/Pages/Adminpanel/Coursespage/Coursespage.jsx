import React from "react";
import Title from "../../../Components/Title/Title";
import { Button, Nav, Stack } from "react-bootstrap";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Courses from "../../../Components/CoursesList/CoursesList";
import { NavLink } from "react-router-dom";

export default function Coursespage() {
  return (
    <>
        <div className=" bg-image"  >
        <div className="bg-layer" >
      <div className="container">
        <Stack direction="horizontal" gap={2}>
          <div className="">
            <Title />
          </div>
          <div className="p-3 ms-auto">
            
            <button className="btn Default-bg text-white  d-none d-md-block hover-bg-color transition" style={{ marginTop: '250px' }}>
              CREATE NEW Course
            </button>
          </div>
        </Stack>

        <div className="row pt-5">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col ">
            <Courses />
          </div>
        </div>
      
      </div>

      <div className="container ">
        <Stack gap={2} className="col-md-5 mx-auto d-md-block d-md-none">
          <Button variant="" className="Default-bg text-white  mb-4 hover-bg-color transition">
            CREATE NEW COURSES
          </Button>
        </Stack>
      </div>
      </div>
      </div>
    </>
  );
}
