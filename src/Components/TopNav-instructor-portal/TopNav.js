import React from 'react';
import './TopNav_instructor.css';

const TopNav = () => {
  return (
    <section className='top-nav d-lg-flex d-none' >
        <div className='container-xl d-flex justify-content-end p-2 px-xl-2 px-2'>
          <a className='top-nav-link text-white text-decoration-none text-uppercase ' href='#'>instructor portal</a>
          <a className='top-nav-link text-white text-decoration-none text-uppercase ' href='#'>exams</a>
          <a className='top-nav-link text-white text-decoration-none text-uppercase ' href='#'>profile</a>
          <a className='top-nav-link text-white text-decoration-none text-uppercase logout' href='#'>logout</a>

        </div>
    </section>
  )
}
export default TopNav;
