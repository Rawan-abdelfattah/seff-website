import './App.css';
import Header from './components/Header/Header';
import CreateNewArticles from './components/CreateNewArticles/CreateNewArticles';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <CreateNewArticles/>
      <Footer/>
    </div>
  );
}

export default App;
