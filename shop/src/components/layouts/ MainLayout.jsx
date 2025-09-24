import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import styled from 'styled-components';

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
  font-family: sans-serif;
  color: #374151;
`;

const MainLayout = () => {
  const isLoggedIn = false; // This can be managed with a state variable later

  return (
    <MainContainer>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="container mx-auto px-6 md:px-12 py-16">
        <Outlet />
      </div>
    </MainContainer>
  );
};

export default MainLayout;
