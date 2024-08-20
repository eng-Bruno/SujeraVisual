import React from "react";
import "./Home.css";
import Grid from "@mui/material/Grid";
import Logo from "../../assets/Sem Título-1.png";

function Home() {
  return (
    <div className="Home">
      <Grid container spacing={2}>
        <Grid item md={12}>
          <h1 className="title">SUJERA VISUAL</h1>
          <img
            src={Logo}
            style={{ width: "350px", height: "350px", marginTop: "48px" }}
            alt="Logo"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
