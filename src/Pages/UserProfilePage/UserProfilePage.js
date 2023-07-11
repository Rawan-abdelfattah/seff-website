import React from 'react'
import UserProfile from '../../Components/UserProfile/UserProfile'
import Header from '../../Components/Header/Header';
import TopNav from '../../Components/TopNav/TopNav';
import Footer from '../../Components/Footer/Footer';

const UserProfilePage = () => {
  return (
    <div>
      <TopNav/>
      <Header/>
      <UserProfile/>
    </div>
  )
}
export default UserProfilePage;
