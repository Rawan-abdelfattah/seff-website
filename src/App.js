import { Routes,Route,HashRouter} from 'react-router-dom';
import Student_Portal from './Pages/Student_Portal/Student_Portal';
import Instructor_Portal from './Pages/Instructor_Portal/Instructor_Portal'
function App() {
  return (
    <div >
     <HashRouter>
      <Routes>
      <Route path="/" element={<Student_Portal/>}/>
      {/* <Route path="/" element={<Instructor_Portal/>}/> */}
      </Routes>
    </HashRouter>


    </div>
  );
}

export default App;
