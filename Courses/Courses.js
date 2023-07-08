import React from "react";
import './Courses.css';
import im2 from "../../images/Rectangle 66.png"
import im3 from "../../images/Rectangle 60.png"


//   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { container,Card,Button } from 'react-bootstrap';
function Courses() {
    return (
      <>
<div className=" bg-image"  >
<div className="bg-layer" >
<div className="App">
  <div className='container'>
  <h5 style={{color:"#fff"}}>Courses</h5>
   
<div className='row'>
<Card style={{ width: '17rem'}}>
<Card.Img variant="top" src={im3} />
<Card.Title><h5>Python for Begineers</h5></Card.Title>
<Card.Text>
<p><span>Instructor:</span> Mohammed</p>
</Card.Text>
<Card.Body>
<p><span><i class="far fa-calendar-alt"></i>
</span>Wedensday,June 7th</p>
<p><span><i class="fas fa-clipboard-list"></i>
</span>12 Lessons</p>
<Button variant="primary">ENROLL</Button>
<br/>



<Card.Link href="#">Viwe Details</Card.Link>
</Card.Body>
</Card>

<Card style={{ width: '17rem'}}>
<Card.Img variant="top" src={im3} />
<Card.Title><h5>Python for Begineers</h5></Card.Title>
<Card.Text>
<p><span>Instructor:</span> Mohammed</p>
</Card.Text>
<Card.Body>
<p><span><i class="far fa-calendar-alt"></i>
</span>Wedensday,June 7th</p>
<p><span><i class="fas fa-clipboard-list"></i>
</span>12 Lessons</p>
<Button variant="primary">ENROLL</Button>
<br/>



<Card.Link href="#">Viwe Details <i class="fas fa-chevron-right"></i></Card.Link>
</Card.Body>
</Card>

<Card style={{ width: '17rem'}}>
<Card.Img variant="top" src={im3} style={{position:"relative"}}/>
{/* <img src={im3}  style={{position:"absolute",zIndex:"2",width:"100%",height:"50%",}} /> */}

<Card.Title><h5>Python for Begineers</h5></Card.Title>
<Card.Text>
<p><span>Instructor:</span> Mohammed</p>
</Card.Text>
<Card.Body>
<p><span><i class="far fa-calendar-alt"></i>
</span>Wedensday,June 7th</p>
<p><span><i class="fas fa-clipboard-list"></i>
</span>12 Lessons</p>
<Button variant="primary">ENROLL</Button>
<br/>


<Card.Link href="#">Viwe Details <i class="fas fa-chevron-right"></i></Card.Link>
</Card.Body>
</Card>
<Card style={{ width: '17rem'}}>
<Card.Img variant="top" src={im3} style={{position:"relative"}}/>
<Card.Title><h5>Python for Begineers</h5></Card.Title>
<Card.Text>
<p><span>Instructor:</span> Mohammed</p>
</Card.Text>
<Card.Body>
<p><span><i class="far fa-calendar-alt"></i>
</span>Wedensday,June 7th</p>
<p><span><i class="fas fa-clipboard-list"></i>
</span>12 Lessons</p>
<Button variant="primary">ENROLL</Button>
<br/>



<Card.Link href="#">Viwe Details <i class="fas fa-chevron-right"></i></Card.Link>
</Card.Body>
</Card>
</div>
</div>

<div className="jobs container  mt-4  m-auto">
<div className='row d-flex justify-content-between m-3'>
<div clas><h5 style={{color:"#fff"}}>Other Courses</h5></div>
<div className="search-container  d-flex flex-md-row">
          <input
            className="text-white  "
            id="search"
            type="text"
            placeholder="Search for courses "
           
          />
       {/* <span> <i style={{margiLeft:"-200px",position:"absolute"}} class="fas fa-search"></i></span> */}
        
        </div>
        </div>
        <div className="my-2 d-none d-lg-block ">
          <div className="w-90">
            
            <div className="row p-3 ">
              <div className="col-lg "></div>
              <div className="col-lg-5 col-md-12"></div>
              <div className="col-lg-2 font-weight-bold">Start Date</div>
              <div className="col-lg font-weight-bold">Level</div>
              <div className="col-lg-2"></div>
             
            </div>
          </div>
        </div>
        <div className="my-2  ">
          <div className="w-100">
            <div className="row Black-div p-3">
            
              <div className="col-lg col-md-12"><img src={im2}/></div>
              <div className="col-lg-5 col-md-12 d-flex flex-column">
                <h5>HTML</h5>
                 <p>12 lessons</p>
                 <p><span>Instructor:</span> Mohammed</p>
              </div>
            
              <div className="col-lg-2 col-6 d-flex flex-column justify-content-end">Thurasday, June 8th</div>
              {/* <div className="col-6 d-md-block d-lg-none">Role</div> */}
              <div className="col-lg col-6 d-flex flex-column justify-content-end">1</div>
              {/* <div className="col-6 d-md-block d-lg-none">Email</div> */}
              <div className="col-lg col-6 d-flex flex-column justify-content-end"><button>ENROLL</button>
              <p className='mb-2'>Viwe Details</p>
              </div>
              <div className="col-lg col-md-12 text-end">
                <i className="fa-regular fa-pen-to-square main-color fa-xl m-1" />
                <i className="fa-regular fa-trash-can main-color fa-xl m-1" />
              </div>
            </div>
          </div>



          <div className="w-100">
            <div className="row Black-div p-3">
              {/* <div className="col-md-6  d-md-block d-lg-none">Name</div> */}
              <div className="col-lg col-md-12"><img src={im2}/></div>
              <div className="col-lg-5 col-md-12 d-flex flex-column">
                <h5>HTML</h5>
                 <p>12 lessons</p>
                 <p><span>Instructor:</span> Mohammed</p>
              </div>
              {/* <div className="col-6 d-md-block d-lg-none">User ID</div> */}
              <div className="col-lg-2 col-6 d-flex flex-column justify-content-end">Thurasday, June 8th</div>
              {/* <div className="col-6 d-md-block d-lg-none">Role</div> */}
              <div className="col-lg col-6 d-flex flex-column justify-content-end">1</div>
              {/* <div className="col-6 d-md-block d-lg-none">Email</div> */}
              <div className="col-lg col-6 d-flex flex-column justify-content-end"><button>ENROLL</button>
              <p className='mb-2'>Viwe Details</p>
              </div>
              <div className="col-lg col-md-12 text-end">
                <i className="fa-regular fa-pen-to-square main-color fa-xl m-1" />
                <i className="fa-regular fa-trash-can main-color fa-xl m-1" />
              </div>
            </div>
          </div>

          <div className="w-100">
            <div className="row Black-div p-3 mb-0">
              {/* <div className="col-md-6  d-md-block d-lg-none">Name</div> */}
              <div className="col-lg col-md-12"><img src={im2}/></div>
              <div className="col-lg-5 col-md-12 d-flex flex-column">
                <h5>HTML</h5>
                 <p>12 lessons</p>
                 <p><span>Instructor:</span> Mohammed</p>
              </div>
              {/* <div className="col-6 d-md-block d-lg-none">User ID</div> */}
              <div className="col-lg-2 col-6 d-flex flex-column justify-content-end">Thurasday, June 8th</div>
              {/* <div className="col-6 d-md-block d-lg-none">Role</div> */}
              <div className="col-lg col-6 d-flex flex-column justify-content-end">1</div>
              {/* <div className="col-6 d-md-block d-lg-none">Email</div> */}
              <div className="col-lg col-6 d-flex flex-column justify-content-end"><button>ENROLL</button>
              <p className='mb-2'>Viwe Details</p>
              </div>
              <div className="col-lg col-md-12 text-end">
                <i className="fa-regular fa-pen-to-square main-color fa-xl m-1" />
                <i className="fa-regular fa-trash-can main-color fa-xl m-1" />
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>

</div>
</>
);
}
export default Courses;
