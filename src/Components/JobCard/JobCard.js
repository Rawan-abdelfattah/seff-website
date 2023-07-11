import React from "react";
import "./JobCard.css";
import { Card, Button, Container, Col, Row, Form } from "react-bootstrap";
import itlogo from "../../assets/images/it.jpg";
import { useState } from "react";
const JobCard = () => {
  const [Data, setData] = useState(Array.from({ length: 3 }));

  return (
    <>
      {Data.map((items, index) => (
        <div className="job-card ">
        <Card className="gy-4 p-2 mb-4">
          <Card.Body className=" ">
            <div className="row">
              <div className="col-lg-1 col-12">
                <img src={itlogo} className="itlogo" />
              </div>
              <div className="col-lg-6 col-12 ms-2">
                <Card.Title>Front-End Developer</Card.Title>
                <Card.Subtitle className="mb-2">
                  <p>Eptikar IT-solutions, obour city</p>
                </Card.Subtitle>
              </div>
              <div className="col-lg-4 col-12 ">
                <div className="jobs-details row" style={{ textAlign: "end" }}>
                  <div className="col-lg-12 col-6 ">
                    <span>5000 EGP - 8000 EGP per month</span>
                  </div>
                  <div className="col-lg-12 col-6 ">
                    <span className="mt-0 col-lg-12 col-1">
                      <span>
                        <i class="fas fa-map-marker-alt main-color m-2"></i>
                      </span>
                      Onsite
                    </span>
                  </div>
                </div>
              </div>
            </div>

           
              <p className="col-lg-10 col-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer posuere erat a
                ante.
              </p>
           
            <div className="d-flex ">
              <Button className="btn2">React Js</Button>
              <Button className="btn2" style={{ marginLeft: "10px" }}>
                Development
              </Button>
            </div>

            <div className="row mt-4 ">
              <div className="col-lg-7 col-5 ms-2">
                <span>
                  <i
                    class="far fa-clock p-2 fs-4"
                    style={{ color: "#e1e1e16e", fontSize: "18px" }}
                  ></i>{" "}
                <span  className="">2h ago</span>  
                </span>
              </div>
              <div
                className="col-lg-4 col-6 mb-0"
                style={{ textAlign: "right" }}
              >
                <Button className="btn1 ">Viwe Details</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
        </div>
      ))}
    </>
  );
};
export default JobCard;
