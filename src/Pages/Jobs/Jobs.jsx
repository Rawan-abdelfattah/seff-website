import React from "react";
import JobCard from "../../Components/JobCard/JobCard";
import JobScreen from "../../Components/JobScreen/JobScreen";
import MenuJob from "../../Components/MenuJob/MenuJob";
import {   Button, Container, Col, Row,Stack } from "react-bootstrap";
export default function () {
  return (
    <>
    <div className="jobs">

    
      <div className="  bg-image">
        <div className=" bg-layer">
          {/* <Header /> */}
          <div style={{ height: "100px" }}></div>
          <JobScreen />
          <div></div>
          <div className="container d-flex justify-content-center">
            <MenuJob />
            <Container>
              <Row>
                <Col md={12} xs={12}>
                  <JobCard />
                </Col>
              </Row>
            </Container>
          </div>
             <div className="container ">
        <Stack  gap={2} className="col  d-block d-lg-none p-3 mt-4">
          <Button variant="" className="Default-bg text-white  hover-bg-color transition mb-4 w-100">
            Create your cv
          </Button>
        </Stack>
      </div>
        </div>
        
 
      </div>  </div>
    </>
  );
}
