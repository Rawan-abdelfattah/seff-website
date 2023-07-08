// import logo from './logo.svg';
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Sidebar from "./components/Sidebar/Sidebar";
import { Toggle } from "./components/Toggle/Toggle";
import AdminPanel from "./components/AdminPanel/AdminPanel";




function App() {
  let routes = createBrowserRouter([
    {
      pass: "",
      element: <MainLayout />,
      children: [
        { index: true, element: <AdminPanel /> },
        { path: "AdminPanel", element: <AdminPanel /> },


       
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
{/* 
      <Toggle>
      <Sidebar />
      <ArticleList />
    </Toggle> */}

    </>
  );
}

export default App;
