import React from "react";
import "./Home.css";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <div className="Home">
      <Grid container spacing={2}>
        <Grid item md={8}>
          <h1>SUJERA VISUAL</h1>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </div>
  );
}

export default Home;
