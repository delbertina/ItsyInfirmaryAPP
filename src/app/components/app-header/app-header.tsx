'use client';

import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function AppHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Itsy Infirmary
        </Typography>
        <div>
          <IconButton onClick={() => console.log("Clicked to open settings")}>
            <SettingsIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
