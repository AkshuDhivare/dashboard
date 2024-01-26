import React from "react";
import Box from "@mui/material/Box";
import SideNav from "../menu/SideNav";

function Settings() {
  return (
    <>
      <div className="container-fluid">
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <h1>Settings</h1>
        </Box>
      </div>
    </>
  );
}

export default Settings;
