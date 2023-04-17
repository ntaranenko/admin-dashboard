// import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router";
// import { useSelector } from "react-redux";
import NavBar from "components/Navbar";

const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <NavBar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
