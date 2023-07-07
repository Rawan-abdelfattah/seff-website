import React from 'react';
import { Container ,Row, Col ,Button ,Form} from 'react-bootstrap';

const Form1 =()=>{
    return(
<section className='create-updtae-user'>
<div  className='pdx'>
<div className='side-bar-header'>
            <p className='header'>create new user</p>
            <p>6th june 2023</p>
          </div>
    <Row>
        <Col xl={3} className='side-bar-content'>
         
<div className='Side-bar'>

</div>
        </Col>
        <Col xl={9}>

 <div className="form-header d-flex">
<h1> add user details</h1>
<a href='/'>publish </a>
</div>
 
           <Form  className='form-content'>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="Text" className='input-form'/>

        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" className='input-form'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridStatus">
          <Form.Label>Status</Form.Label>
          <Form.Select defaultValue="Choose..." className='input-form'>
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>
<Row className="mb-3">
<Form.Group as={Col} controlId="formGridEmail" className='email-addres'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
        <Form.Group as={Col} controlId="formRole">
          <Form.Label>Role</Form.Label>
          <Form.Select defaultValue="Choose..." className='input-form'>
            <option>Student</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        </Row>
       

      <Row className="mb-3">
       
      <Form.Group as={Col} controlId="formGridMobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="Text" className='input-form'/>

        </Form.Group>

        <Form.Group as={Col} controlId="formGridUserID">
          <Form.Label>User ID</Form.Label>
          <Form.Control type="text" className='input-form'/>
        </Form.Group>

      </Row>
      <Row className="mb-3">
        
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" className='input-form'/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridConfirmPassword">
          <Form.Label>Confirme Password</Form.Label>
          <Form.Control type="password" className='input-form'/>
        </Form.Group>
      </Row>
    </Form>
        </Col>
        
    </Row>
 
<Row  className='action-form'>
        <button className='cancel btn-form'>Cancel</button>
        <button className='save btn-form'>Save</button>
        </Row>
        </div>
</section>
    )
}
export default Form1;

