import React from "react";
import "./Home.css";
import Grid from "@mui/material/Grid";
import Logo from "../../assets/Sem Título-1.png";
import Header from "../../Components/Header/Header";

function Home() {
  return (
    <div className="Home">
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Header />
          <h1 className="title">SUJERA VISUAL</h1>
          <img
            src={Logo}
            style={{ marginTop: "64px" }}
            alt="Logo"
            className="logo"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
