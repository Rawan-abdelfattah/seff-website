import react, {Fragment} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import {   faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FiUploadCloud} from 'react-icons/fi'
import './AdminPanelStyle.css'
import Sidebar from '../Sidebar/Sidebar';


const AdminPanel = () => {
  return (
    <div className=" bg-image"  >
        <div className="bg-layer" >
    <div className='container Admin'>
            <div className='row'>
                <div className='section-header'>
                    <h2 className='title_add'>Add Job details</h2>
                    <button>Publish</button>
                </div>
                <div className="col-md-3">
             <Sidebar/>
        </div>
                <div className='col-md-9 d-flex flex-column '>
                    <div className='row'>
                        <div className='col-md-9'>
                        <label className="mb-2">Company Name</label>
                        <input type='text' className='form-control'></input><br />
                        <div className='row'>
                        <div className="col">
                            <label>Faculty</label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className="col">
                            <label>Faculty</label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select><br />
        
                        </div>
                        </div>
                        </div>
                        <div className='col-md-3'>
                        <div className='col'>
                    <h3 className='company-logo'>Company Logo</h3>

                    <div className='upload-file'>
                        <FiUploadCloud className='upload-icon' />
                        <p className="drag-title">Drag & Drop files or <span>Browse</span></p>
                        <p className='drag-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo possimus iusto rerum. Id, temporibus iure. </p>
                    </div>
                </div>
                        </div>
                    </div>
                    <label>About Company</label>
                    <textarea className='textarea_about_company' />
                    
                    <div className='row'>
                    <div className='col-md-3'>
                        <label>Position</label><br></br>
                        <input type='text' style={{width: "100%"}} />
                    </div>
                    <div className='col-md-3'>
                        <label>Job Type</label><br />
                        <input type='text' style={{width: "100%"}} />
                    </div>
                    <div className='col-md-3 d-flex align-items-center gap-2' style={{padding: "30px 0"}}>
                        <div className='d-flex align-items-center gap-2'>
                            <input type='radio' name='place' id="remote" />
                            <label htmlFor='remote'>Remote</label>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <input type='radio' name='place' id="onSite" />
                            <label htmlFor='onSite' >On site</label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                    <label>Salary</label><br></br>
                        <input type='text' style={{width: "100%"}} />
                    </div>
                    <div className='col-md-3'>
                    <label>Salary</label><br></br>
                        <input type='text' style={{width: "100%"}} />
                        </div>
                    <div className='col-md-6'>
                    <label>Salary</label><br></br>
                        <input type='text' style={{width: "100%"}} />
                        </div>
                        <div className='col-12'>
                    <label>Job Description</label>
                    <textarea className='textarea_about_company' />
                </div>
                <div className='col-12'>
                    <label>Job Requrenents</label>
                    <textarea className='textarea_about_company' />
                </div>
                </div>
                <div className='col-12'>
                    <label>About Company</label>
                    <textarea className='textarea_about_company' />
                </div>
                </div>

                
                 <div className='buttons d-flex justify-content-end' >
                <button className='save'>Save</button>  
                <button className='cancel'>Cancel</button>
                </div> 
            </div>
                
              
     </div>
     </div>
     </div>
  )
}

export default AdminPanel