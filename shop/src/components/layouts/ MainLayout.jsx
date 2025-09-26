import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import {
  MainContainer
} from "./ MainLayout.styled";


const MainLayout = () => {
  const isLoggedIn = false; 

  return (
    <MainContainer>
      <Navbar isLoggedIn={isLoggedIn} />
      <div>
        <Outlet />
      </div>
    </MainContainer>
  );
};

export default MainLayout;
