import React from "react";
import "./Projects.css";
import Grid from "@mui/material/Grid";

function Projects() {
  return (
    <div className="Projects">
      <Grid container spacing={2}>
        <Grid item md={7}>
          <h1 className="Subtitle">SOBRE</h1>
          <p className="about">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
            lacus at elit sodales convallis tincidunt ultrices magna. Phasellus
            massa orci, tincidunt nec purus eu, lobortis vehicula libero. Nullam
            eleifend velit nec tellus gravida, vel pretium elit commodo. Proin
            ac gravida libero, eget porta tellus. Aenean auctor ante et risus
            consequat, quis lobortis leo pharetra. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Mauris mi purus, ultrices
            fermentum aliquet varius.
          </p>
        </Grid>
        <Grid item md={1}>
          <div></div>
        </Grid>
        <Grid className="profile" item md={4}>
          <h1 className="Subtitle">PERFIL</h1>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <p>image</p>
            </Grid>
            <Grid item md={8}>
              <p>Username</p>
              <p>Work</p>
              <p>Location</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <h1 className="Subtitle" style={{ marginTop: "180px" }}>
        Projetos
      </h1>
      <Grid container spacing={2}>
        <Grid item md={7}></Grid>
      </Grid>
    </div>
  );
}

export default Projects;
