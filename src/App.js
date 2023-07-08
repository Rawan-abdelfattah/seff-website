import './App.css';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './components/Contact/ContactUs';
import Header from './components/Header/Header';
import Exams from './components/Exams/Exams';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='contact' element={<ContactUs/>}/>
        <Route path='exams' element={<Exams/>}/>
        <Route path='adminpanel' element={<AdminPanel/>}>
          <Route path='sidebar' element={<Sidebar/>}/>
        </Route>
      </Routes>
    <Footer/>
   </>
  );
}

export default App;
