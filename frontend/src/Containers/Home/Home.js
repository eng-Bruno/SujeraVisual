import React from "react";
import "./Home.css";
import Grid from "@mui/material/Grid";
import Logo from "../../assets/Sem Título-1.png";
import Header from "../../Components/Header/Header";

function Home() {
  return (
    <div className="Home">
      <Grid container spacing={2}>
        <Header />

        <Grid item md={6}>
          <h1 className="title" style={{ marginTop: "144px" }}>
            SUJERA VISUAL
          </h1>
        </Grid>
        <Grid item md={6}>
          <img
            src={Logo}
            style={{ marginTop: "48px" }}
            alt="Logo"
            className="logo"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
