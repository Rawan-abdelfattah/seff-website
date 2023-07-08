import './App.css';
import Header from './components/Header/Header';
// import CreateNewArticles from './components/CreateNewArticles/CreateNewArticles';
import Footer from './components/Footer/Footer';
import UserProfile from './components/UserProfile/UserProfile';



function App() {
  return (
    <div className="App">
      <Header/>
      <UserProfile/>
      <Footer/>
    </div>
  );
}

export default App;
