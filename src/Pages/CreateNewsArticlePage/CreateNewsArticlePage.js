import React from 'react'
import CreateNewArticles from '../../Components/CreateNewArticles/CreateNewArticles';
import Header from '../../Components/Header/Header';
import TopNav from '../../Components/TopNav/TopNav';

const CreateNewsArticlePage = () => {
  return (
    <div>
      <TopNav/>
      <Header/>
      <CreateNewArticles/>
    </div>
  )
}
export default CreateNewsArticlePage;
