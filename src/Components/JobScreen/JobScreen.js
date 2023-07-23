import React from "react";
import "./JobScreen.css";
import { Col, Row, Form, Button } from "react-bootstrap";
const JobScreen = () => {
  return (
    <>
      <section
        className="job-screens container "
        style={{ marginTop: "150px" }}
      >
        <Row className="justify-content-md-center">
          <Col>
            <span style={{ disply: "none" }} className="mt-0">
              <p className="line-after">Job</p>
            </span>
            <p className="line mb-1"></p>
            <span>
              <p>6 jun 2023</p>
            </span>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6} className="mb-4 ">
            <h2>Looking For a Job ?</h2>
            <span className="">
              Hear ypu can find your beast match between 1000s <br></br>
              and updated and available positions.
            </span>
            <p>
              <span className="gold-color ">Instractor</span> <span> : </span>
              <small>Tariq Ali</small>
            </p>
          </Col>
          <Col lg={6} className="  my-4 ">
            <div className="d-flex  flex-lg-row mt-4  p-3 ">
              <Form.Control
                className="input-sub my-2 w-100"
                size="lg"
                type="text "
                placeholder="Search for job"
              ></Form.Control>
              <Button className="btn-subscribe my-2">subscribe</Button>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};
export default JobScreen;
