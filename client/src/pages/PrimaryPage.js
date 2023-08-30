import React from 'react';
import { Outlet } from 'react-router-dom';

/* 
? This is connection between one Navbar and multiple pages.
? Outlet have other pages like Login, Home & Preview.
*/

const PrimaryPage = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default PrimaryPage;
