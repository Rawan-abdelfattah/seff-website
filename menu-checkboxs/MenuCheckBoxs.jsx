import React from "react";

//fontawesome

//bootstrap
import Form from "react-bootstrap/Form";

import "./MenuCheckBoxs.css";
const MenuCheckBoxs = () => {
  return (
    <>
      {" "}
      <div className="menu-job my-3">
        <br></br>
        {/* Fillter */}
        <div className="m-auto menu-section ">
          <div className="fitter-container p-3 d-flex justify-content-between align-items-center">
            <div className="filter ">Filter</div>
            <div className="clear-all">Clear All</div>
          </div>
          {/* location */}
          <div className="location">
            {/* <div className="location fw-bold">Location</div> */}
            <div className="location-form mt-3">
              <Form.Group controlId="custom-select">
                <Form.Label>Location</Form.Label>
                <br />
                <Form.Select as="select" className="rounded-0 shadow">
                  <option className="d-none " value="">
                    location
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
                {["Full Time", "Part Time", "Remot"].map((type, index) => (
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
    </>
  );
};

export default MenuCheckBoxs;
