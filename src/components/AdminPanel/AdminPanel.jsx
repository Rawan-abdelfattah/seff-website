import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


export default function AdminPanel() {
  return (
    <>
      <section className='admin_Panel position-relative pt-4'>
       <div className="overlay"> </div>
         <div className="container-fluid ">
          <h2 className='h4 pt-4'>Admin Panel</h2>
           <div className="line"></div>
            <p >6th june 2023</p>
          <div className="row">
              <div className="col-md-3">
                {<Sidebar/>}
              </div>

              <div className="col-md-9 col-sm-12 ">
                <div className="col-md-12">
                <div className="title py-4 ">
              <h2 className='h4'>Applications for 'Job' at 'company name'</h2>
              <div className="title_line"></div>
            </div>
          </div>
                <table  className="table bg-transparent  p-2 ">
                      <thead className=' position-relative'  >
                        <tr className='bg-transparent '>
                          <th scope="col" className=' bg-transparent text-light col-md-4  '>Applicant</th>
                          <th scope="col" className=' bg-transparent text-light col-md-2 '>Experience</th>
                          <th scope="col" className=' bg-transparent text-light col-md-2'>Email</th>
                          <th scope="col" className=' bg-transparent text-light col-md-4'>Mobile Number</th>
                        </tr>
                      </thead>
                      <tbody >
                        <tr className='bg-transparent  '>
                          <td className=' bg-transparent text-light  col-md-4' >Here's the Applicant name</td>
                
                          <td className=' bg-transparent text-light  col-md-1'>2 Years</td>
                          <td className=' bg-transparent text-light  col-md-2 '>userone@gmail.com</td>
                          <td className=' bg-transparent text-light  col-md-2'>01025478945</td>
                          <td className=' bg-transparent text-light  col-md-3 ' ><button type="button" class="btn btn-secondary " >Download CV</button></td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <table className="table bg-transparent p-2 ">
                      <thead  >
                        <tr className='bg-transparent '>
                          <th scope="col" className=' bg-transparent text-light col-md-4 '>Applicant</th>
                          <th scope="col" className=' bg-transparent text-light col-md-2'>Experience</th>
                          <th scope="col" className=' bg-transparent text-light col-md-2'>Email</th>
                          <th scope="col" className=' bg-transparent text-light col-md-4'>Mobile Number</th>
                        </tr>
                      </thead>
                      <tbody >
                        <tr className='bg-transparent  '>
                          <td className=' bg-transparent text-light  col-md-3  ' >Here's the Applicant name</td>
                          <td className=' bg-transparent text-light  col-md-2'>2 Years</td>
                          <td className=' bg-transparent text-light  col-md-2 '>userone@gmail.com</td>
                          <td className=' bg-transparent text-light  col-md-2'>01025478945</td>
                          <td className=' bg-transparent text-light  col-md-3' ><button type="button" class="btn btn-secondary" >Download Cv </button></td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table bg-transparent p-2 ">
                      <thead  >
                        <tr className='bg-transparent '>
                          <th scope="col" className=' bg-transparent text-light col-md-4 '>Applicant</th>
                          <th scope="col" className=' bg-transparent text-light col-md-2'>Experience</th>
                          <th scope="col" className=' bg-transparent text-light col-md-2'>Email</th>
                          <th scope="col" className=' bg-transparent text-light col-md-4'>Mobile Number</th>
                        </tr>
                      </thead>
                      <tbody >
                        <tr className='bg-transparent  '>
                          <td className=' bg-transparent text-light  col-md-3   ' >Here's the Applicant name</td>
                          <td className=' bg-transparent text-light  col-md-2'>2 Years</td>
                          <td className=' bg-transparent text-light  col-md-2 '>userone@gmail.com</td>
                          <td className=' bg-transparent text-light  col-md-2'>01025478945</td>
                          <td className=' bg-transparent text-light  col-md-3' ><button type="button" class="btn btn-secondary" >Download CV</button></td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table bg-transparent p-2 ">
                      <thead  >
                        <tr className='bg-transparent '>
                          <th scope="col" className=' bg-transparent text-light col-md-4 '>Applicant</th>
                          <th scope="col" className=' bg-transparent text-light col-md-2'>Experience</th>
                          <th scope="col" className=' bg-transparent text-light col-md-2'>Email</th>
                          <th scope="col" className=' bg-transparent text-light col-md-4'>Mobile Number</th>
                        </tr>
                      </thead>
                      <tbody >
                        <tr className='bg-transparent  '>
                          <td className=' bg-transparent text-light  col-md-3   ' >Here's the Applicant name</td>
                          <td className=' bg-transparent text-light  col-md-2'>2 Years</td>
                          <td className=' bg-transparent text-light  col-md-2 '>userone@gmail.com</td>
                          <td className=' bg-transparent text-light  col-md-2'>01025478945</td>
                          <td className=' bg-transparent text-light  col-md-3' ><button type="button" class="btn btn-secondary" >Download CV</button></td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table bg-transparent p-2 ">
                      <thead  >
                        <tr className='bg-transparent '>
                          <th scope="col" className=' bg-transparent text-light col-md-4 '>Applicant</th>
                          <th scope="col" className=' bg-transparent text-light col-md-2'>Experience</th>
                          <th scope="col" className=' bg-transparent text-light col-md-2'>Email</th>
                          <th scope="col" className=' bg-transparent text-light col-md-4'>Mobile Number</th>
                        </tr>
                      </thead>
                      <tbody >
                        <tr className='bg-transparent  '>
                          <td className=' bg-transparent text-light  col-md-3   ' >Here's the Applicant name</td>
                          <td className=' bg-transparent text-light  col-md-2'>2 Years</td>
                          <td className=' bg-transparent text-light  col-md-2 '>userone@gmail.com</td>
                          <td className=' bg-transparent text-light  col-md-2'>01025478945</td>
                          <td className=' bg-transparent text-light  col-md-3' ><button type="button" class="btn btn-secondary" >Download CV</button></td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table bg-transparent p-2 ">
                      <thead  >
                        <tr className='bg-transparent '>
                          <th scope="col" className=' bg-transparent text-light col-md-4 '>Applicant</th>
                          <th scope="col" className=' bg-transparent text-light col-md-2'>Experience</th>
                          <th scope="col" className=' bg-transparent text-light col-md-2'>Email</th>
                          <th scope="col" className=' bg-transparent text-light col-md-4'>Mobile Number</th>
                        </tr>
                      </thead>
                      <tbody >
                        <tr className='bg-transparent  '>
                          <td className=' bg-transparent text-light  col-md-3   ' >Here's the Applicant name</td>
                          <td className=' bg-transparent text-light  col-md-2'>2 Years</td>
                          <td className=' bg-transparent text-light  col-md-2 '>userone@gmail.com</td>
                          <td className=' bg-transparent text-light  col-md-2'>01025478945</td>
                          <td className=' bg-transparent text-light  col-md-3' ><button type="button" class="btn btn-secondary" >Download CV</button></td>
                      </tr>
                    </tbody>
                  </table> */}
                  <nav aria-label="Page navigation example " className='mt-2'>
                    <ul className="pagination justify-content-end">
                        <li className="page-item disabled  d-flex align-items-center  justify-content-center">
                        <FontAwesomeIcon icon={faArrowCircleLeft} className='icon' /></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item d-flex align-items-center  justify-content-center">
                        <FontAwesomeIcon icon={faArrowCircleRight} className='icon' />
                        </li>
                      </ul>
                    </nav>
               </div>
               
             </div>
           </div>
      </section>
    </>
  )
}
