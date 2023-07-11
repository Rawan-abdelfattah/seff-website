import React from "react";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBars,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
//bootstrap
import { Col, Container, Row } from "react-bootstrap";
// import itlogo from "../../../src/assets/images/i";

//style

// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import ButtonTop from "../../components/ButtonTop/ButtonTop";
import MenuCheckBoxs from "../menu-checkboxs/MenuCheckBoxs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./JobApp.css";
// import BackgroundLayer from "../BackgroundLayer/BackgroundLayer";
const JobApp = () => {
  return (
    <>
      {/* <Header /> */}

      {/* <BackgroundLayer /> */}
      <section className="job_app-screen ">
        <div className="bg-layer">
          <Container className="pt-3 ">
            <Row className="justify-content-md-center">
              <Col>
                <span style={{ disply: "none" }} className="mt-0">
                  <small>Job Application</small>
                </span>

                <p className="line my-1"></p>
                <span>
                  <small>6 jun 2023</small>
                </span>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <h2 className="txt-bold mt-5">Looking For a Job</h2>
                <span>
                  Hear ypu can find your beast match between 1000s and <br /> updated and
                  available positions.
                </span>
              </Col>
              <Col xs={12} md={6}>
                <form class="form-inline my-1 my-lg-0 mt-3">
                  <input
                    class="form-control mr-sm-2 mainLoginInput-search"
                    type="search"
                    placeholder="&#xF002; Search for a job "
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                  <span className="bar-icon">
                    <FontAwesomeIcon icon={faBars} size="lg" />{" "}
                  </span>
                </form>
              </Col>
            </Row>
          </Container>
          <Container className="apply-job justify-content-between mt-3 ">
            <Row>
              <Col lg={4} md={12} xs={12}>
                <MenuCheckBoxs />
              </Col>
              <Col lg={8}  md={12} xs={12} >
                <div className="contacts-job my-3">
                  <br></br>
                  <div className="comp-name mt-3 d-flex justify-content-between align-items-center  ">
                    <div className="job-company-post d-flex  ">
                      <span className="col-xs-12">
                        {/* <img src={itlogo} alt="company logo" /> */}
                      </span>
                      <div className="col-xs-12 ms-2 ">
                        <p className="job-titel mb-0">Front-end React JS Developer</p>
                        <p className="minmiz-font">
                          <small>Eptikar IT Solutions, Obour City </small>
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="mb-0 my-2">
                        5000 EGP - 8000 EGP per month{" "}
                        <span className="onsite-mob-view mt-0 onsite">
                          <span className="onsite-icon">
                            <FontAwesomeIcon icon={faLocationDot} />
                          </span>
                          Onsite
                        </span>
                      </div>
                      <p className="onsite-web-view mt-0 onsite  mb-0 ">
                        <span className="onsite-icon">
                          <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        Onsite
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="comp-post my-2">
                    <h2 className="txt-bold">Balqees Hamdi Sabir </h2>
                    <p>Computer Science, international islamic university</p>
                  </div>
                  <div className="filed-appliction">
                    <Form>
                      <Row className="mb-3 forrrm">
                        <Form.Group
                          className="email-field fields"
                          as={Col}
                          controlId="formGridEmail"
                        >
                          <Form.Label className="txt-bold ">Email</Form.Label>
                          <Form.Control
                            className="input-fields input-job input-email"
                            type="email"
                            placeholder=""
                            controlId="formGridEmail"
                          />
                        </Form.Group>
                        <Form.Group
                          className=" fields "
                          as={Col}
                          controlId="formGridEmail"
                        >
                          <Form.Label className="txt-bold">Years of Experinse</Form.Label>
                          <Form.Control
                            className="input-field input-job"
                            type="text"
                            placeholder=""
                          />
                        </Form.Group>
                      </Row>
                      <Form.Group className=" txt-bold">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          className="input-field input-job"
                          type="text"
                          placeholder=""
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="my-2">
                    <div className="my-3 txt-bold">Upload CV</div>
                    <div className="upload-cv ">
                      <div>
                        <FontAwesomeIcon icon={faCloudArrowUp} size="2xl" />{" "}
                      </div>
                      <div className="text-center">
                        <p className="text-center mt-3 txt-bold">
                          Drag & Drop file or{" "}
                          <span className="spcial-style" >Browser</span>
                        </p>
                        <p className="drag-drop-txt">
                          supported formate : JPEG, PNG, GIF, MP4, PDF, PSD,
                          Al,Word, PPT
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="btn-submit-app  text-end">
                    <Button variant="secondary" disabled>Cancel</Button>
                    <Button variant="warning">Submit</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* <ButtonTop /> */}
      {/* <Footer /> */}
    </>
  );
};

export default JobApp;
