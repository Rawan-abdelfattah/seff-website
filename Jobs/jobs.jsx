import React from 'react';
import './jobs.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


import {Card,Button,Container,Col,Row,Form} from 'react-bootstrap';
import itlogo from "./it.jpg"
export default function() {
  return (
    <>
     <div className=" bg-image"  >
        <div className="bg-layer" >
       <Header/>  
       <div style={{height:"100px"}}></div>

       <section className="job-screen">
        <Container className="pt-5">
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
              <p>
                <span className="gold-color ">Instractor</span> <span> : </span>
                <small>Tariq Ali</small>
              </p>
            </Col>
            <Col xs={12} md={6}>
              <form class="form-inline my-1 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn1 btn-outline-success my-1 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
              
            </Col>
          </Row>
        </Container>
      </section>

       <div></div> 
      <div className="container d-flex justify-content-center">
       
<div>

<div className="menu-job ">
                <br></br>
                {/* Fillter */}
                <div className="m-auto menu-section">
                  <div className="fitter-container p-3 d-flex justify-content-between align-items-center">
                    <div className="filter ">Filter</div>
                    <div className="clear-all">Clear All</div>
                  </div>


                  <div className="location">
                    {/* <div className="location fw-bold">Location</div> */}
                    <div className="location-form mt-3">
                      <Form.Group controlId="custom-select">
                        <Form.Label>Location</Form.Label>
                        <br />
                        <Form.Select as="select" className="rounded-0 shadow color-white">
                          <option className="d-none " value="">
                            Cairo
                          </option>
                          {["1", "2", "3", "4", "5"].map((option) => (
                            <option key={option} className="options-location">
                              Option {option}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    
                    </div>
                  </div>
                  {/* ********Check Box Section  */}
                  <div className="mt-5 icons">
                    <div className="job-type">
                      <Form>
                        <Form.Label>Jop Type</Form.Label>
                        {["Full Time", "Part Time", "Remot"].map(
                          (type, index) => (
                            <div key={`default-${index}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type="checkbox"
                                id={`default-${type}`}
                                label={type}
                              />
                            </div>
                          )
                        )}
                      </Form>
                    </div>
                                        </div>
                                        <div className="level">
                      <Form>
                        <Form.Label>Level</Form.Label>
                        {["Entery Level", "Intermediate", "Expert"].map(
                          (type, index) => (
                            <div key={`default-${index}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type="checkbox"
                                id={`default-${type}`}
                                label={type}
                              />
                            </div>
                          )
                        )}
                      </Form>
                    </div>
                    <div className="salary-range">
                      <Form>
                        <Form.Label>Salary Range</Form.Label>
                        {[
                          "under 4000 EGP",
                          "Between 4000 & 10000",
                          "More Than 1000EGP",
                        ].map((type, index) => (
                          <div key={`default-${index}`} className="mb-3">
                            <Form.Check // prettier-ignore
                              type="checkbox"
                              id={`default-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </div>



                  </div>


                  </div>

</div>
<div>
    <Card  className='col-6'>
      <Card.Body>
        <div className='row'>
          <div className='col-1'>
          <img src={itlogo} className='itlogo'/>
          </div>
          <div className='col-4'>
          <Card.Title >Front-End Developer</Card.Title>
          <Card.Subtitle className="mb-2"><p>Eptikar IT-solutions, obour city</p></Card.Subtitle>
          </div>
         <div className='col-2'></div>
          <div className='col-5 d-flex flex-column align-items-end'>
          <p className="mb-0">5000 EGP - 8000 EGP per month</p>
          <p className="mt-0"><i class="fas fa-map-marker-alt"></i>Onsite</p>
          </div>
        </div>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. 
        </Card.Text>
       <div className='d-flex'>
        <Button className='btn2'>React Js</Button>
        <Button className='btn2' style={{marginLeft:"20px"}}>Development</Button>
        </div>

        <div className='row'>
          <div className='col-2'>
          <p style={{fontWeight:"bold"}}><i class="far fa-clock" style={{color:"#e1e1e16e",fontSize:"18px"}}></i>  2h ago</p>
          </div>
          <div className='col align-items-end'>
          <Button className='btn1' style={{float:"right"}}>Viwe Details</Button>
          </div>
          </div>
      </Card.Body>
    </Card>

    <Card  className='col-6'>
      <Card.Body>
        <div className='row'>
          <div className='col-1'>
          <img src={itlogo} className='itlogo'/>
          </div>
          <div className='col-4'>
          <Card.Title >Front-End Developer</Card.Title>
          <Card.Subtitle className="mb-2"><p>Eptikar IT-solutions, obour city</p></Card.Subtitle>
          </div>
         <div className='col-2'></div>
          <div className='col-5 d-flex flex-column align-items-end'>
          <p className="mb-0">5000 EGP - 8000 EGP per month</p>
          <p className="mt-0"><i class="fas fa-map-marker-alt"></i>Onsite</p>
          </div>
        </div>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. 
        </Card.Text>
       <div className='d-flex'>
        <Button className='btn2'>React Js</Button>
        <Button className='btn2' style={{marginLeft:"20px"}}>Development</Button>
        </div>

        <div className='row'>
          <div className='col-2'>
          <p style={{fontWeight:"bold"}}><i class="far fa-clock" style={{color:"#e1e1e16e",fontSize:"18px"}}></i>  2h ago</p>
          </div>
          <div className='col align-items-end'>
          <Button className='btn1' style={{float:"right"}}>Viwe Details</Button>
          </div>
          </div>
      </Card.Body>
    </Card>


    <Card  className='col-6'>
      <Card.Body>
        <div className='row'>
          <div className='col-1'>
          <img src={itlogo} className='itlogo'/>
          </div>
          <div className='col-4'>
          <Card.Title >Front-End Developer</Card.Title>
          <Card.Subtitle className="mb-2"><p>Eptikar IT-solutions, obour city</p></Card.Subtitle>
          </div>
         <div className='col-2'></div>
          <div className='col-5 d-flex flex-column align-items-end'>
          <p className="mb-0">5000 EGP - 8000 EGP per month</p>
          <p className="mt-0"><i class="fas fa-map-marker-alt"></i>Onsite</p>
          </div>
        </div>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. 
        </Card.Text>
       <div className='d-flex'>
        <Button className='btn2'>React Js</Button>
        <Button className='btn2' style={{marginLeft:"20px"}}>Development</Button>
        </div>

        <div className='row'>
          <div className='col-2'>
          <p style={{fontWeight:"bold"}}><i class="far fa-clock" style={{color:"#e1e1e16e",fontSize:"18px"}}></i>  2h ago</p>
          </div>
          <div className='col align-items-end'>
          <Button className='btn1' style={{float:"right"}}>Viwe Details</Button>
          </div>
          </div>
      </Card.Body>
    </Card>
    </div>
    
    </div>  </div>  </div>
    {/* <Footer/> */}
    </>
    )}
