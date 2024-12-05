import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 4,
        p: 2,
        backgroundColor: "black",  
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2" color="white">  
        © 2024 FinPouch. All rights reserved.
      </Typography>
      <Typography variant="body2" color="white">  
        <Link href="/terms" color="inherit">Terms of Service</Link> | 
        <Link href="/privacy" color="inherit">Privacy Policy</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
