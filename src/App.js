import './App.css';
import Header from './components/Header/Header';
 import CerateUpdateUser from './pages/CreateUpdateUser/CerateUpdateUser'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <CerateUpdateUser/>
      <Footer/>
    </div>
  );
}

export default App;
