import React from 'react';
import './MenuJob.css';
import {Card,Button,Container,Col,Row,Form} from 'react-bootstrap';
const MenuJob=()=> {
    return (
      <>
<div>

<div className="menu-job d-lg-block d-none">
                <br></br>
                {/* Fillter */}
                 <div className="m-auto menu-section ">
                  <div className="fitter-container p-3 d-flex justify-content-between align-items-center">
                    <div className="filter ">Filter</div>
                    <div className="clear-all">Clear All</div>
                  </div>


                  <div className="location"> 
                     <div className="location fw-bold">Location</div> 
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
   <Button variant="" className="Default-bg text-white mt-4 w-100  hover-bg-color transition mt-4 d-lg-block d-none">
Create ypur cv          </Button>
</div> 

</>
       )}
       export default MenuJob;