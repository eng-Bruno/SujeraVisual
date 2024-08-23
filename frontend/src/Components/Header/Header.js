import React from "react";
import "./Header.css";
import Grid from "@mui/material/Grid";
import Logo from "../../assets/Sem Título-1.png";
import { Link } from "@mui/material";

function Header() {
  return (
    <div className="Header">
      <Grid container spacing={4}>
        <Grid item md={3}>
          <Link underline="none" href="home" color="inherit">
            HOME
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link underline="none" href="projetos" color="inherit">
            PROJETOS
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link underline="none" href="sobre" color="inherit">
            SOBRE
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link underline="none" href="contato" color="inherit">
            CONTATO{" "}
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
