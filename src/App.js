import { Routes,Route,HashRouter,RouterProvider, createBrowserRouter} from 'react-router-dom';
import Student_Portal from './Pages/Student_Portal/Student_Portal';
import Instructor_Portal from './Pages/Instructor_Portal/Instructor_Portal'
import "@fortawesome/fontawesome-free/css/all.css";
import Articalpage from "./Pages/Adminpanel/Articalpage/Articalpage";
import Jopspage from "./Pages/Adminpanel/Jopspage/Jopspage";
import Userspage from "./Pages/Adminpanel/Userspage/Userspage";
import Coursespage from "./Pages/Adminpanel/Coursespage/Coursespage";
import MainLayout from "./Layouts/MainLayout";
import CreateAndUpdatecourses from "./Components/CreateAndUpdatecourses/CreateAndUpdatecourses";



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
        { path: "createcourses", element: <CreateAndUpdatecourses /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
      <HashRouter>
        <Routes>
      {/* <Route path="/" element={<Student_Portal/>}/> */}
       {/* <Route path="/" element={<Instructor_Portal/>}/> */}
       </Routes>
      </HashRouter>



    </>
  );
}

export default App;


