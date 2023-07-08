import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function ContactUs() {
  return (
    <>
<section className='contact_us text-light  position-relative '>
  <div className="overlay"></div>
    <div className="container position-relative pt-5 ">
        <div className="row">
          <div className="contact_info col-md-6 pt-5 ">
            <h2 className='h6 font-weight-bold '>Contact us</h2>
            <div className='line'></div>
            <p className='py-1'>6th june 2023</p>
            <h2 className='pt-3 h6'>Visit us</h2>
            <p>here is the address of the organization</p>
            <h2 className='pt-3 h6'>Leave us An Email</h2>
            <p>mailto:seffutur@gmail.com</p>
            <h2 className='pt-3 h6'>Follow us on Social Media</h2>
              <div className='contact-icon text-white d-flex   justify-content-start gap-4'>
                            <FontAwesomeIcon icon={faFacebook}  className='social-icon'/>
                            <FontAwesomeIcon icon={faTwitter}   className='social-icon'/>
                            <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
                            <FontAwesomeIcon icon={faLinkedin}  className='social-icon'/>
              </div>
          </div>
          <div className="form-content col-md-6 d-flex justify-content-center   text-light">
            <div className="form_caption pt-2 ">
              <h2>GET IN TOUCH</h2>
              <p>we'd love to hear from you</p>
            <form >
                <div className ="row">
                <div className ="form-group col-md-6  ">
                    <label for="inputName" className='p-1'>First Name</label>
                    <input type="text" className ="form-control " id="inputName" placeholder=""/>
                  </div>
                  <div className ="form-group col-md-6 ">
                    <label for="inputLast" className='p-1'>Last Name</label>
                    <input type="text" className ="form-control" id="inputLast" placeholder=""/>
                  </div>
                  <div className ="form-group col-md-6 ">
                    <label for="inputEmail4" className='p-1'>Email</label>
                    <input type="email" className ="form-control" id="inputEmail4" placeholder=""/>
                  </div>
                  <div className ="form-group col-md-6 ">
                  <label for="inputPhone" className='p-1'>Phone Number</label>
                  <input type="number" className ="form-control" id="inputPhone" placeholder=" "/>
                </div>
                <div className ="form-group">
                  <label for="exampleFormControlTextarea1"className='p-1'>Message</label>
                  <textarea className ="form-control " id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='d-flex justify-content-end p-2'>
                <button type="submit" className ="btn btn-primary w-25  m-2 send_btn   ">Send</button>
                </div>
                </div>
              </form> 
            </div>
          </div>
        </div>
        </div>
  </section>
  
    </>
  )
}
