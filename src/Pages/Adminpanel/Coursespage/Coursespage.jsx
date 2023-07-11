import React from "react";
import { Button, Nav, Stack } from "react-bootstrap";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Courses from "../../../Components/CoursesList/CoursesList";
import AdminPanelTitle from "../../../Components/AdminPanelTitle/AdminPanelTitle";

export default function Coursespage() {
  return (
    <>
    <div className="admin-panel">
        <div className=" bg-image"  >
        <div className="bg-layer" >
      <div className="container">
        <Stack direction="horizontal" gap={2}>
          <div className="">
          <AdminPanelTitle/>
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
        <Stack gap={2} className="col mx-auto d-block d-lg-none">
          <Button variant="" className="Default-bg text-white  mb-4 hover-bg-color transition w-100">
            CREATE NEW COURSES
          </Button>
        </Stack>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
