import React from 'react'
import CreateNewArticles from '../../Components/CreateNewArticles/CreateNewArticles';
import Header from '../../Components/Header/Header';
import TopNav from '../../Components/TopNav/TopNav';
import Footer from '../../Components/Footer/Footer';

const CreateNewsArticlePage = () => {
  return (
    <div>
      <TopNav/>
      <Header/>
      <CreateNewArticles/>
      <Footer/>
    </div>
  )
}
export default CreateNewsArticlePage;
