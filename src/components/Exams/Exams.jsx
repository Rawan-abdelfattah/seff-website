import React from 'react';
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight, faCalendarPlus, faClock } from '@fortawesome/free-solid-svg-icons';


export default function Exams() {
  return (
    <>
        <section className='exams text-light pt-5 position-relative  '>
        <div className="overlay  "></div>
            <div className="container p p-4">
                <h2>Exams</h2>
                <div className="line"></div>
                <p >6th june 2023</p>
            <div className="upcumming-exam pt-3">
                    <h2 className='pt-2 pb-2 h6'>Upcomming Exams</h2>
                    <div className='upcomming-det'>
                        <div className="row">
                            <div className="col-md-3 p-2">
                                <div>
                                 <FontAwesomeIcon icon={faCalendarPlus} className='icon me-2 ' />
                                    <span>Wednesday,june 7th</span>
                                </div>
                                <div className='mt-2'>
                                    <FontAwesomeIcon icon={ faClock} className='icon me-2 ' /> 
                                    <span>12:30 PM</span>
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <span className='mt-2'>Introduction To Data Analysis</span>
                                <p className='mt-2 '><span className='instructor_span '>Instructor:</span>Mohamed Omar</p>
                            </div>
                            <div className='col-md-2 d-flex justify-content-between  '>
                                <div className=" lev p-2">
                                    <h2 className='h6'>LEV.1</h2>
                                </div>
                                <div className=" na p-2">
                                    <h2 className='h6'>NA</h2>
                                </div>
                            </div>
                            <div className="col-md-3 p-2">
                                <button className='btn btn-secondary '>JOIN EXAM</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prev-exam mt-4">
                    <h2 className='pb-2 h6'>Previous Exams</h2>
                    <div className='upcomming-det'>
                        <div className="row">
                            <div className="col-md-3">
                            <div>
                                 <FontAwesomeIcon icon={faCalendarPlus} className='icon me-2 ' />
                                    <span>Wednesday,june 7th</span>
                                </div>
                                <div className='mt-2'>
                                    <FontAwesomeIcon icon={ faClock} className='icon me-2 ' /> 
                                    <span>12:30 PM</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <span className='mt-2'>Introduction To Data Analysis</span>
                                <p className='mt-2 '><span className='instructor_span '>Instructor:</span>Mohamed Omar</p>
                            </div>
                            <div className='col-md-2 d-flex justify-content-between  '>
                                <div className=" lev p-2">
                                    <h2 className='h6'>LEV.1</h2>
                                </div>
                                <div className=" na p-2">
                                    <h2 className='h6'>80/100</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <button className='btn btn-secondary d-none finish-btn'>FINISHED</button>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="prev-exam pt-2">
                    <div className='upcomming-det'>
                        <div className="row">
                            <div className="col-md-3">
                            <div>
                                 <FontAwesomeIcon icon={faCalendarPlus} className='icon me-2 ' />
                                    <span>Wednesday,june 7th</span>
                                </div>
                                <div className='mt-2'>
                                    <FontAwesomeIcon icon={ faClock} className='icon me-2 ' /> 
                                    <span>12:30 PM</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <span className='mt-2'>Introduction To Data Analysis</span>
                                <p className='mt-2 '><span className='instructor_span '>Instructor:</span>Mohamed Omar</p>
                            </div>
                            <div className='col-md-2 d-flex justify-content-between  '>
                                <div className=" lev p-2">
                                    <h2 className='h6'>LEV.1</h2>
                                </div>
                                <div className=" na p-2">
                                    <h2 className='h6'>70/100</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <button className='btn btn-secondary d-none finish-btn'>FINISHED</button>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="prev-exam pt-2">
                    <div className='upcomming-det'>
                        <div className="row">
                            <div className="col-md-3">
                            <div>
                                 <FontAwesomeIcon icon={faCalendarPlus} className='icon me-2 ' />
                                    <span>Wednesday,june 7th</span>
                                </div>
                                <div className='mt-2'>
                                    <FontAwesomeIcon icon={ faClock} className='icon me-2 ' /> 
                                    <span>12:30 PM</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <span className='mt-2'>Introduction To Data Analysis</span>
                                <p className='mt-2 '><span className='instructor_span '>Instructor:</span>Mohamed Omar</p>
                            </div>
                            <div className='col-md-2 d-flex justify-content-between  '>
                                <div className=" lev p-2">
                                    <h2 className='h6'>LEV.1</h2>
                                </div>
                                <div className=" na p-2">
                                    <h2 className='h6'>90/100</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <button className='btn btn-secondary d-none finish-btn'>FINISHED</button>
                            </div> 
                        </div>
                    </div>
                </div>
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
        </section>
    </>
  )
}
