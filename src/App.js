import './App.css';
import Header from './components/Header/Header';
import UploadCertificate from './pages/UplaodCertifiacte/UploadCertificate';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <UploadCertificate />
      <Footer />
    </div>
  );
}

export default App;
