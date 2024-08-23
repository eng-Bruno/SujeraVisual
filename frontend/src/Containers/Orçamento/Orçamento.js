import React from "react";
import "./Orçamento.css";
import Grid from "@mui/material/Grid";

import Background from "../../assets/orçamento.png";

function Orçamento() {
  return (
    <div className="Orçamento">
      <Grid container spacing={2}>
        <Grid item md={6}></Grid>
        <Grid item md={6}></Grid>
      </Grid>
    </div>
  );
}

export default Orçamento;
