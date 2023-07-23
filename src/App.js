import { Routes,Route,HashRouter,RouterProvider, createBrowserRouter} from 'react-router-dom';
import Student_Portal from './Pages/Student_Portal/Student_Portal';
import Instructor_Portal from './Pages/Instructor_Portal/Instructor_Portal'
import "@fortawesome/fontawesome-free/css/all.css";
import Articalpage from "./Pages/Adminpanel/Articalpage/Articalpage";
import Jopspage from "./Pages/Adminpanel/Jopspage/Jopspage";
import Userspage from "./Pages/Adminpanel/Userspage/Userspage";
import Coursespage from "./Pages/Adminpanel/Coursespage/Coursespage";
import MainLayout from "./Layouts/MainLayout";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import React, { useState } from 'react';
import CerateUpdateUser from './Pages/CreateUpdateUser/CerateUpdateUser';
import UplaodCertifiacte from './Pages/UplaodCertifiacte/UploadCertificate';
import UserProfilePage from './Pages/UserProfilePage/UserProfilePage';
import Signup from './Pages/SignupPage/Signup';
import Login from './Pages/LoginPage/Login';
import NewsPage from './Pages/ShowNewsPage/NewsPage';
import Exams from './Pages/ExamsPage/Exams';
import AdminPanel from './Pages/AdminPanelPage/AdminPanel';
import Contact from './Pages/ContactPage/Contact';
import Jobs from "./Pages/Jobs/Jobs";
import Courses from "./Pages/Courses/Courses";
import ShowNewsPage from "./Pages/ShowNewsPage/NewsPage";
import CreateNewsArticlePage from './Pages/CreateNewsArticlePage/CreateNewsArticlePage';
import BussinessPage from './Pages/BusinnessPage/Business';


import CreateAndUpdatecourses from './Components/CreateAndUpdatecourses/CreateAndUpdatecourses';
import CreateAndUpdatejobs from './Components/CreateAndUpdatejobs/CreateAndUpdatejobs';
import StudentUserspage from './Pages/Adminpanel/StudentUsersPage/StudentUserspage';



function App() {
  let routes = createBrowserRouter([
    {
      pass: "",
      element: <MainLayout />,
      children: [

        { path: 'users', element: <Userspage /> },
        { path: "articles", element: <Articalpage /> },
        { path: "jobs", element: <Jopspage /> },
        { path: "courses", element: <Coursespage /> },
        { path: "StudentUsers", element: <StudentUserspage /> },
        { path: "UplaodCertifiacte", element: <UplaodCertifiacte /> },
        { path: "CerateUpdateUser", element: <CerateUpdateUser /> },
        { path: "CreateNewsArticlePage", element: <CreateNewsArticlePage /> },        
        { path: "CreateAndUpdatecourses", element: <CreateAndUpdatecourses /> },
        { path: "CreateAndUpdatejobs", element: <CreateAndUpdatejobs /> },
        { path: "job", element: <Jobs /> },
        { path: "course", element: <Courses /> },  
      ],
    },
  ]);

              
        // { path: "Student_Portal", element: <Student_Portal /> },
        // { path: "UserProfilePage", element: <UserProfilePage /> },
        // { path: "Instructor_Portal", element: <Instructor_Portal /> }, 
        //  { path: "Signup", element: <Signup /> },
        // { path: "Login", element: <Login /> },
        //   { path: "Exams", element: <Exams /> },
        // { path: "AdminPanel", element: <AdminPanel /> },
        // { path: "JobShowPage", element: <JobShowPage /> },
        // { path: "NewsPage", element: <NewsPage /> },
        // { path: "Contact", element: <Contact /> },
        // { path: "ShowNewsPage", element: <ShowNewsPage /> },
        // { path: "BussinessPage", element: <BussinessPage /> },


        // <Route path='/users' element={<Userspage/>}/>
        // <Route path='/articles' element={<Articalpage/>}/>
        // <Route path='/jobs' element={<Jopspage/>}/>
        // <Route path='/course' element={<Coursespage/>}/>
        // <Route path='/UplaodCertifiacte' element={<UplaodCertifiacte/>}/>
        // <Route path='/CerateUpdateUser' element={<CerateUpdateUser/>}/>
        // <Route path='/CreateNewsArticlePage' element={<CreateNewsArticlePage/>}/>
        // <Route path='/CreateAndUpdatecourses' element={<CreateAndUpdatecourses/>}/>
        // <Route path='/CreateAndUpdatejobs' element={<CreateAndUpdatejobs/>}/>










  const [flag,setFlag]=useState(false);
  const HeaderDisplay=(window.location.pathname==='/signup' || window.location.pathname==='/login')?null :<Header flag={flag}/>
  const FooterDisplay=(window.location.pathname==='/signup' || window.location.pathname==='/login')?null: <Footer/>

  return (
    <>
    <RouterProvider router={routes} />


{/* {HeaderDisplay}
  <Routes>

  <Route path='/users' element={<Userspage/>}/>
          <Route path='/articles' element={<Articalpage/>}/>
          <Route path='/jobs' element={<Jopspage/>}/>
          <Route path='/course' element={<Coursespage/>}/>
          <Route path='/UplaodCertifiacte' element={<UplaodCertifiacte/>}/>
          <Route path='/CerateUpdateUser' element={<CerateUpdateUser/>}/>
          <Route path='/CreateNewsArticlePage' element={<CreateNewsArticlePage/>}/>
          <Route path='/CreateAndUpdatecourses' element={<CreateAndUpdatecourses/>}/>
          <Route path='/CreateAndUpdatejobs' element={<CreateAndUpdatejobs/>}/>

    </Routes>
     {FooterDisplay} */}







    </>
  );
}

export default App;


