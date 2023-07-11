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
import JobShowPage from './Components/JobShowPage/JobShowPage';



function App() {
  let routes = createBrowserRouter([
    {
      pass: "",
      element: <MainLayout />,
      children: [
        { index: true, element: <Userspage /> },
        { path: "articles", element: <Articalpage /> },
        { path: "jobs", element: <Jopspage /> },
        { path: "courses", element: <Coursespage /> },
        { path: "job", element: <Jobs /> },
        { path: "course", element: <Courses /> },        
        { path: "Student_Portal", element: <Student_Portal /> },
        { path: "UplaodCertifiacte", element: <UplaodCertifiacte /> },
        { path: "UserProfilePage", element: <UserProfilePage /> },
        { path: "Instructor_Portal", element: <Instructor_Portal /> },        
        { path: "CerateUpdateUser", element: <CerateUpdateUser /> },
        { path: "Signup", element: <Signup /> },
        { path: "Login", element: <Login /> },
        { path: "NewsPage", element: <NewsPage /> },
        { path: "Exams", element: <Exams /> },
        { path: "AdminPanel", element: <AdminPanel /> },
        { path: "Contact", element: <Contact /> },
        { path: "ShowNewsPage", element: <ShowNewsPage /> },
        { path: "CreateNewsArticlePage", element: <CreateNewsArticlePage /> },        
        // { path: "JobShowPage", element: <JobShowPage /> },
        { path: "BussinessPage", element: <BussinessPage /> },
      ],
    },
  ]);
  const [flag,setFlag]=useState(false);
  const HeaderDisplay=(window.location.pathname==='/signup' || window.location.pathname==='/login')?null :<Header flag={flag}/>
  const FooterDisplay=(window.location.pathname==='/signup' || window.location.pathname==='/login')?null: <Footer/>

  return (
    <>
    <RouterProvider router={routes} />
   {/* {HeaderDisplay}
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='business' element={<BussinessPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/businessDetails/:id' element={<NewsPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/exams' element={<Exams/>}/>
        <Route path='/adminPanel' element={<AdminPanel/>}/>

      </Routes>
     {FooterDisplay} */}







    </>
  );
}

export default App;


