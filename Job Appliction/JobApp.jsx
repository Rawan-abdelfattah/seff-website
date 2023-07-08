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
import itlogo from "../../../src/assets/images/iti-logo.jpg";

//style
// import Header from "../../components/Header/Header";
// import ButtonTop from "../../components/ButtonTop/ButtonTop";
// import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ButtonTop from "../../components/ButtonTop/ButtonTop";
import MenuCheckBoxs from "../menu-checkboxs/MenuCheckBoxs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./JobApp.css";
const JobApp = () => {
  return (
    <>
      <Header />
      <section className="job-screen">
        <Container className="pt-3">
          <Row className="justify-content-md-center">
            <Col>
              <span style={{ disply: "none" }} className="mt-0">
                <small>Job</small>
              </span>

              <p className="line mb-1"></p>
              <span>
                <small>6 jun 2023</small>
              </span>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <h2>Locating For a Job</h2>
              <span>
                Hear ypu can find your beast match between 1000s and updated and
                available positions.
              </span>
            </Col>
            <Col xs={12} md={6}>
              <form class="form-inline my-1 my-lg-0 mt-3">
                <input
                  class="form-control mr-sm-2 mainLoginInput"
                  type="search"
                  placeholder="&#xF002; Search "
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
            <Col md={4}>
              <MenuCheckBoxs />
            </Col>
            <Col md={8} xs={10}>
              <div className="contacts-job my-3">
                <br></br>
                <div className="comp-name mt-3 d-flex justify-content-between align-items-center  ">
                  <div className="job-company-post d-flex  ">
                    <span className="col-xs-12">
                      <img src={itlogo} alt="company logo" />
                    </span>
                    <div className="col-xs-12 ms-2 ">
                      <p className="job-titel mb-0">Frontend Developer</p>
                      <p className="minmiz-font">
                        <small>Lorem ipsum dolor sit.</small>
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
                  <h2>Yousef Ehab Farok</h2>
                  <p>Computer Science, international islamic university</p>
                </div>
                <div className="filed-appliction">
                  <Form>
                    <Row className="mb-3">
                      <Form.Group
                        className=" email-field fields"
                        as={Col}
                        controlId="formGridEmail"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          className="input-fields"
                          type="email"
                          placeholder=""
                          controlId="formGridEmail"
                        />
                      </Form.Group>
                      <Form.Group
                        className=" fields"
                        as={Col}
                        controlId="formGridEmail"
                      >
                        <Form.Label>Years of Experinse</Form.Label>
                        <Form.Control
                          className="input-field fields"
                          type="number"
                          placeholder="2 Years"
                        />
                      </Form.Group>
                    </Row>
                    <Form.Group className=" ">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        className="input-field"
                        type="number"
                        placeholder=""
                      />
                    </Form.Group>
                  </Form>
                  {/* <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                      <Form.Label>Years of Experinse</Form.Label>
                      <Form.Control type="number" placeholder="2 Years" />
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="number" placeholder="+201100" />
                    </Form.Group>
                  </Form> */}
                </div>
                <div className="my-2">
                  <div className="my-2">Upload CV</div>
                  <div className="upload-cv ">
                    <div>
                      <FontAwesomeIcon icon={faCloudArrowUp} size="2xl" />{" "}
                    </div>
                    <div className="text-center">
                      <p className="text-center">
                        Drag & Drop file or{" "}
                        <span className="spcial-style">Browser</span>
                      </p>
                      <p className="small-style-text m-auto">
                        <small className="text-break text-lighjt small-style-text">
                          supported formate : JPEG, PNG, GIF, MP4, PDF, PSD,
                          Al,Word, PPT
                        </small>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="btn-submit-app text-end my-3">
                  <span className="mx-3  ">
                    <Button variant="warning">Submit</Button>
                  </span>
                  <span>
                    <Button variant="secondary" disabled>
                      Cancel
                    </Button>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ButtonTop />
      <Footer />
    </>
  );
};

export default JobApp;
