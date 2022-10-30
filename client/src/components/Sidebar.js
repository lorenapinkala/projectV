import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import Contactus from "../commons/sidebuttons/Contactus";
import Aboutus from "../commons/sidebuttons/Aboutus";
import Stores from "../commons/sidebuttons/Stores";

const Sidebar = () => {
  return (
    <Box sx={{ width: "25%", backgroundColor: "#e63946" }}>
      <Stack
        spacing={3}
        sx={{
          paddingTop: "65px",
          direction: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          spacing: 1,
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 250,
            position: "fixed",
            backgroundColor: "#e63946",
            minHeight: "100vh",
            color:'#f1faee',
          }}
        >
          <Stores />
          <Aboutus />
          <Contactus />
        </List>
      </Stack>
    </Box>
  );
};

export default Sidebar;
