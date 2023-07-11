import React from "react";
import ButtonTop from "../../components/ButtonTop/ButtonTop";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
//style
import "./exsamResults.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faStopwatch20,
} from "@fortawesome/free-solid-svg-icons";
import BackgroundLayer from "../BackgroundLayer/BackgroundLayer";
const primaryColor = "#BF9B30";
const ExsamResults = () => {
  return (
    <>
      <Header />
      <BackgroundLayer />
      <section className="exsam-section ">
        <Container className="pt-5">
          <Row className="justify-content-md-center">
            <Col>
              <span style={{ disply: "none" }} className="mt-0">
                <small>online Exsam Result</small>
              </span>
              <p className="line mb-1"></p>
              <span>
                <small>6 jun 2023</small>
              </span>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <h2>Introduction to React js</h2>
              <span>
                <small>lev.1,20Marks</small>
              </span>
              <p>
                <span className="gold-color ">Instractor</span> <span> : </span>
                <small>Tariq Ali</small>
              </p>
            </Col>
            <Col xs={12} md={6}>
              <div className="date-section">
                <Row className="justify-content-between mb-2">
                  <Col>
                    <span className="gold-color mx-1">
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </span>{" "}
                    Date
                  </Col>
                  <Col>
                    <span className="gold-color mx-1">
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                    Time
                  </Col>
                  <Col>
                    {" "}
                    <span className="gold-color mx-1">
                      <FontAwesomeIcon icon={faStopwatch20} />
                    </span>
                    Duration
                  </Col>
                </Row>
                <Row className="justify-content-between">
                  <Col className="mx-3">Monday,Jun 5th</Col>
                  <Col>12:50 PM</Col>
                  <Col className="mx-3">1Hour</Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="time-Exsam" md={12}>
              <div className="time-Exsam  d-flex justify-content-end  mb-4">
                60&#58;00
              </div>
            </Col>
            <Col className="long-line" md={12}></Col>
          </Row>
        </Container>
        {/* Section show answer and the final score and score details  */}
        <Container className="score-details-section ">
          <Row className="exsam-results">
            <Col xs={12} md={5} className="mx-1">
              <div className="cricle">
                <svg viewBox="0 0 200 200">
                  {/* 1st */}
                  <circle
                    r="80"
                    cx="100"
                    cy="100"
                    fill="none"
                    strokeWidth="12"
                    stroke="#ccc"
                  />
                  {/* /*secnd cyrcle */}
                  <circle
                    r="80"
                    cx="100"
                    cy="100"
                    fill="none"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray="300 60"
                    stroke="#BF9B30"
                  />
                  {/* //3ed cyrcle */}
                  <circle
                    r="60"
                    cx="100"
                    cy="100"
                    fill="none"
                    strokeWidth="12"
                    stroke="#ccc"
                  />
                  <circle
                    r="60"
                    cx="100"
                    cy="100"
                    fill="none"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray="220 60"
                    stroke="#BF9B30"
                  />
                  {/* //text */}
                  <text
                    x="100"
                    y="110"
                    fontFamily="Open Sans"
                    fontSize="20"
                    textAnchor="middle"
                    fill="#fff"
                  >
                    19/20
                  </text>
                </svg>
              </div>
            </Col>
            <Col xs={12} md={5} className="mx-1">
              <div className="my-4">
                <Button
                  variant={primaryColor}
                  size="lg"
                  className="btn view-answers  "
                >
                  <p className="text-uppercase ms-auto">View Answer</p>
                </Button>
              </div>
            </Col>
          </Row>
          {/* score details  */}
          <Row className="score-details  d-flex justify-content-between d-grid gap-1">
            <Col xs={12} md={5} className="final-row">
              <p className="score-results fs-4">
                Number of questions answered&#58;
              </p>
            </Col>
            <Col xs={12} md={5} className="final-row">
              <p className="final-scor fs-4">20 Question</p>
            </Col>
            <Col xs={12} md={5} className="final-row">
              <p className="score-results fs-4">
                Number of questions answered correctly &#58;
              </p>
            </Col>
            <Col xs={12} md={5} className="final-row">
              <p className="final-scor fs-4">20 Question</p>
            </Col>
            <Col xs={12} md={5} className="final-row ">
              <p className="score-results fs-4">
                Number of wrong answers &#58;
              </p>
            </Col>
            <Col xs={12} md={5} className="final-row">
              <p className="final-scor fs-4">1 Answer</p>
            </Col>{" "}
            <Col xs={12} md={5} className="final-row">
              <p className="score-results  fs-4">Time Taken&#58;</p>
            </Col>
            <Col xs={12} md={5} className="final-row">
              <p className="final-scor fs-4 text-center">60&#58;00</p>
            </Col>
          </Row>
        </Container>
      </section>
      <ButtonTop />
      <Footer />
    </>
  );
};

export default ExsamResults;
