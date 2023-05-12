import React from 'react';
import './Home.css'
import ContentArea from '../../components/contentArea/ContentArea';

import Login from '../../components/login/Login';
import SideBar from '../../components/sideBar/SideBar';
import TopBar from '../../components/topbar/TopBar';
import RightBar from '../../components/rightBar/RightBar';

function Home(props) {
    return (
      <div>
      <TopBar/>  
      <SideBar/>
      <ContentArea/>
      <RightBar/>
      </div>
         
      
    );
}

export default Home;