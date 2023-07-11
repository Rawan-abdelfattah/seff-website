import React from "react";
// import ButtonTop from "../../Components/ButtonTop/ButtonTop";
// import Header from "../../Components/Header/Header";
// import Footer from "../../Components/Footer/Footer";
import {FaRegClock} from 'react-icons/fa6';

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
//bootstrap
import { Col, Container, Row, Button } from "react-bootstrap";
import itlogo from "../../assets/images/it.jpg";

//style
import "./jobShowPage.css";
import MenuCheckBoxs from "../menu-checkboxs/MenuCheckBoxs";

const JobShowPage = () => {


  return (
    <>
      {/* <Header /> */}

      <section className="job-screen-show">
        <div className="bg-layer">
        <Container className="pt-3">
          <Row className="justify-content-md-center">
            <Col className="job-title">
              <span style={{ disply: "none" }} className="mt-0">
                <small>Job</small>
              </span>
               <div>
                
               </div>
              <p className="line mb-1"></p>
              <span>
                <small>6th jun 2023</small>
              </span>
            </Col>
          </Row>
          <Row>
            <Col className="Looking-job" xs={12} md={6}>
              <h2>Looking For a Job?</h2>
              <span>
                Hear ypu can find your beast match between 1000s of updated and
                available positions.
              </span>
            </Col>
            <Col xs={12} md={6}>
              <form className="form-inline my-1 my-lg-0 mt-3">
                <input
                  className="form-control mr-sm-2 mainLoginInput"
                  type="search"
                  placeholder="&#xF002; Search for a job "
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
                <span className="bar-icon">
                  <FontAwesomeIcon icon={faBars}  />{" "}

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
                    <div className="mb-0 content-onsite">
                      5000 EGP - 8000 EGP Per Month{" "}
                      <span className="onsite-mob-view mt-0 onsite">
                        <span className="onsite-icon">
                          <FontAwesomeIcon icon={faLocationDot} className="loctaion-icon" />
                        </span>
                        Onsite
                      </span>
                    </div>
                    <p className="mt-0 onsite onsite-web-view">
                      <span className="onsite-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      Onsite
                    </p>
                  </div>
                </div>
                <div className="comp-post my-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt tenetur nobis minima officia minus perferendis
                    accusantium incidunt iure, ab nesciunt provident eaque ex
                    quo cupiditate sit! Odio, a. Debitis praesentium totam
                    dolore odit, reprehenderit sit vel. Eos ab error velit
                    beatae, nulla quas accusamus provident illum perferendis
                    illo quae. Quidem.
                  </p>
                </div>
                <div className="search-key">
                  <span>
                    <Button className=" " variant="outline-warning">
                      React Js
                    </Button>
                  </span>
                  <span>
                    <Button className=" mx-3" variant="outline-warning">
                      Development
                    </Button>
                  </span>
                </div>
                <div className="posted-time my-2">
                  <span className="me-2 icon">
                  <FaRegClock />
                  </span>
                  2 h ago
                </div>
                <div className="about-comp mt-4">
                  <h4 className="">About Us</h4>

                  <p className="info-font-size">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus quia error ullam tenetur quos blanditiis cupiditate
                    molestias deleniti reprehenderit nobis!
                  </p>
                </div>
                <div className="job-desc ">
                  <h4>Job Description </h4>
                  <p className="info-font-size">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatem nobis illum optio commodi explicabo iusto ea
                    similique a laborum saepe!
                  </p>
                </div>
                <div className="job-requermnets mt-4">
                  <h4>Job Requermnets </h4>
                  <p className="info-font-size">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum rem repellendus, id maxime ex quae enim neque eaque
                    fugit commodi.
                  </p>
                </div>
                <div className="btn-apply">
                  <Button style={{ colo: "#fff" }} variant="warning">
                    Apply
                  </Button>
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

export default JobShowPage;
