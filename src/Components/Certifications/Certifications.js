import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Certifications.css'

function Certifications(){
    return(
        <section className="Certifications">
            <Container>
            <h2>Earned Certificates</h2>
            <div className="certification-download">
                 <div className="certification-content">
                      <h2>Introduction to React js</h2>
                      <div className="instructor-date">
                        <p><span>Instructor </span>: Tariq Ali</p>
                        <p><span>Date Acquired </span>: Monday, June 5th</p>
                      </div>
                 </div>
                  <Button className="btn-download">Download</Button>



            </div>

            </Container>


        </section>
    )
}
export default Certifications;
