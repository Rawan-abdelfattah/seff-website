import React from 'react';
import './TopNav_student.css';

const TopNav_student = () => {
  return (
    <section className='top-nav-student d-lg-flex d-none' >
        <div className='container-xl d-flex justify-content-end p-2 px-xl-2 px-2'>
          <a className='top-nav-link text-white text-decoration-none text-uppercase ' href='#'>student portal</a>
          <a className='top-nav-link text-white text-decoration-none text-uppercase ' href='#'>exams</a>
          <a className='top-nav-link text-white text-decoration-none text-uppercase ' href='#'>profile</a>
          <a className='top-nav-link text-white text-decoration-none text-uppercase logout' href='#'>logout</a>

        </div>
    </section>
  )
}
export default TopNav_student;
