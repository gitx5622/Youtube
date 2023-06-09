import React from 'react';
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" height={45} />
        <Typography color="#fff" variant="p" fontWeight="bold" px={2}>
        Foxxy-Youtube
    </Typography>
    </Link>
    <SearchBar />
  </Stack>
  )
}

export default NavBar