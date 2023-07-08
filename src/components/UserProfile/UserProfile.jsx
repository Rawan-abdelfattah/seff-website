import React from 'react';
import './UserProfile.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Content = () => {
  return (
    <div className='home-content'>
      <div className='overlay'>
        <div className="container">
          <div className="content-user">
            <p>Profile</p>
            <div className="line my-2"></div>
            <p>6th June 2023</p>
            <div className="image-name">
              <div className="image-admin">

              </div>
              <div className="info-admin">
                <h2>Balqees Hamdi Sabir</h2>
                <p>Computer Science, internatoinal islamic universty</p>
              </div>
              <div className="edit-profile">
                <Button className='text-white text-uppercase btn-edit'>Edit Profile</Button>{' '}
              </div>

            </div>
            <div className="content mt-4">

              <div className="side-bar">
              </div>

              <div className="admin-information">
                <div className="about">
                  <h4>About</h4>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore quaerat ipsa ab veritatis dolor earum accusantium soluta consequuntur voluptatum.</p>
                </div>
                <h4 className='mt-5 nb-3 titel'>In Progress</h4>
                <div className="course mt-5">
                  <div className="course-info">
                    <h4>Introductoin to Data Analysis</h4>
                    <p><span className='instructuor'>Instructuor : </span>Mohammed Nour</p>
                  </div>

                  <h5>LEV.1</h5>
                </div>
                <div className="course mt-5">
                  <div className="course-info">
                    <h4>Introductoin to React Js</h4>
                    <p><span className='instructuor'>Instructuor : </span>Traiq Ali</p>
                  </div>

                  <h5>LEV.1</h5>
                </div>
                <h4 className='mt-5 nb-3 titel'>Pervoius</h4>
                <div className="course mt-5">
                  <div className="course-info">
                    <h4>System Analysis design</h4>
                    <p><span className='instructuor'>Instructuor : </span>Sarah Ahmed</p>
                  </div>

                  <h5>LEV.1</h5>
                </div>
                <div className="course mt-5">
                  <div className="course-info">
                    <h4>Introductoin to Web Develoment</h4>
                    <p><span className='instructuor'>Instructuor : </span>Alaa Sammer</p>
                  </div>

                  <h5>LEV.1</h5>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
export default Content;

