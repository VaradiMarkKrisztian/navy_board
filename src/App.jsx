import React from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddCircle from "@mui/icons-material/AddCircleRounded";
import CreateTaskPopup from "./CreateTaskPopup";

function App() {
  return (
    <div>
      <div>
        <AppBar position="static" sx={{ background: "#050A30" }}>
          <Toolbar>
            <Typography
              variant="h4"
              sx={{  flexGrow: 1, }} 
              style={{ fontWeight: 600 }}
            >
              The Navy Board
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <div className="container">
        <div className="todo">
          <AppBar position="static"  sx={{ background: "#7EC8E3" }}>
            <Toolbar>
              <Typography
                variant="h4"
                sx={{ flexGrow: 1, textAlign: "center", color: "#000C66"  }}
                style={{ fontWeight: 600 }}
              >
                TO DO
              </Typography>
            </Toolbar>
          </AppBar>
          <CreateTaskPopup />
        </div>

        <div className="inprogress">
          <AppBar position="static" sx={{ background: "#7EC8E3" }}>
            <Toolbar>
              <Typography
                variant="h4"
                sx={{ flexGrow: 1, textAlign: "center", color: "#000C66" }}
                style={{ fontWeight: 600 }}
              >
                IN PROGRESS
              </Typography>
            </Toolbar>
          </AppBar>
          <CreateTaskPopup />
        </div>

        <div className="inreview">
          <AppBar position="static" sx={{ background: "#7EC8E3" }}>
            <Toolbar>
              <Typography
                variant="h4"
                sx={{ flexGrow: 1, textAlign: "center", color: "#000C66" }}
                style={{ fontWeight: 600 }}
              >
                IN REVIEW
              </Typography>
            </Toolbar>
          </AppBar>
          <CreateTaskPopup />
        </div>
 
        <div className="done">
          <AppBar position="static" sx={{ background: "#7EC8E3" }}>
            <Toolbar>
              <Typography
                variant="h4"
                sx={{ flexGrow: 1, textAlign: "center", color: "#000C66" }}
                style={{ fontWeight: 600 }}
              >
                DONE
              </Typography>
            </Toolbar>
          </AppBar>
          <CreateTaskPopup />
        </div>
      </div>
    </div>
  );
}

export default App;
