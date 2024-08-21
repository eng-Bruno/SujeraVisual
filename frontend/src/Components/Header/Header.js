import React from "react";
import "./Header.css";
import Grid from "@mui/material/Grid";
import Logo from "../../assets/Sem Título-1.png";

function Header() {
  return (
    <div className="Header">
      <Grid container spacing={4}>
        <Grid item md={3}>
          HOME
        </Grid>
        <Grid item md={3}>
          PROJETOS
        </Grid>
        <Grid item md={3}>
          SOBRE
        </Grid>
        <Grid item md={3}>
          CONTATO
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
