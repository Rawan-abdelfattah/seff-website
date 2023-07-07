import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
const Form2 = () => {
  return (
    <section className='create-updtae-user'>
      <div className='pdx'>
        <div className='side-bar-header'>
          <p className='header'>upload certificate</p>
          <p>6th june 2023</p>
        </div>
        <Row>
          <Col xl={3} className='side-bar-content'>

            <div className='Side-bar'>

            </div>
          </Col>
          <Col xl={9}>

            <div className="form-header d-flex">
              <h1> certificate details</h1>

            </div>

            <Form className='form-content'>
              <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridStudentName">
                  <Form.Label>Student Name</Form.Label>
                  <Form.Select defaultValue="Choose..." className='input-form'>
                    <option></option>
                    <option></option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formAquiredDate">
                  <Form.Label>Aquired Date</Form.Label>
                  <Form.Control type="date" className='input-form' />
                </Form.Group>

                <Form.Group as={Col} controlId="formAquiredDate">
                  <Form.Label>upload date</Form.Label>
                  <Form.Control type="date" className='input-form' />
                </Form.Group>

              </Row>
              <Row className="mb-3">

                <Form.Group as={Col} controlId="formCourse">
                  <Form.Label>Course</Form.Label>
                  <Form.Select defaultValue="Choose..." className='input-form'>
                    <option></option>
                    <option></option>
                  </Form.Select>
                </Form.Group>
              </Row>

            </Form>
            <Col className='uploadecertificate'>
              <h2>upload certificate</h2>
              <div className='uploade-content'>
                <FontAwesomeIcon icon={faCloudArrowDown} className='' />
                <h3>drog & drop files or <a className='upload-browser'>browser</a></h3>
                <p>supported formate: JPEG.PNG.GIF.MP4.PDF.PSD.AL.Word.PPT</p>
              </div>
            </Col>
          </Col>
        </Row>


        <div className='action-form'>
          <button className='cancel btn-form'>Cancel</button>
          <button className='upload btn-form'>upload</button>
        </div>
      </div>
    </section>
  )
}
export default Form2;

