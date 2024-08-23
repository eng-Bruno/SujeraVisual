import React from "react";
import "./Projects.css";
import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import data from "./projects.json";

import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 1920, min: 1080 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1080, min: 720 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 720, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Projects() {
  return (
    <div className="Projects">
      <Grid container spacing={2} className="container">
        <Grid item md={1}>
          <div></div>
        </Grid>
        <Grid className="profile" item md={4}>
          <h1 className="profile-subtitle">PERFIL</h1>
          <Grid container spacing={2} className="container">
            <Grid item md={4}>
              <p>image</p>
            </Grid>
            <Grid item md={8}>
              <div className="icons">
                <PersonIcon />{" "}
                <span style={{ marginLeft: "8px" }}>Username</span>
              </div>
              <div className="icons">
                <WorkIcon /> <span style={{ marginLeft: "8px" }}>Artist</span>
              </div>
              <div className="icons">
                <LocationOnIcon />{" "}
                <span style={{ marginLeft: "8px" }}>Brasília, DF</span>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <h1 className="Subtitle">SOBRE</h1>
          <p className="about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
            lacus at elit sodales convallis tincidunt ultrices magna. Phasellus
            massa orci, tincidunt nec purus eu, lobortis vehicula libero. Nullam
            eleifend velit nec tellus, vel pretium elit commodo. Proin ac
            gravida libero, eget porta tellus. Aenean auctor ante et risus
            consequat, quis lobortis leo pharetra. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Mauris mi purus, ultrices
            fermentum aliquet varius.
          </p>
        </Grid>
        <Grid item md={1}>
          <div></div>
        </Grid>
      </Grid>

      <h1
        className="Subtitle"
        style={{ marginTop: "180px", marginLeft: "120px" }}
      >
        PROJETOS
      </h1>
      <div className="projects-session">
        <Grid container spacing={1} className="container">
          <Grid item md={12}>
            <Carousel
              responsive={responsive}
              autoPlaySpeed={1000}
              infinite={true}
              itemClass="carousel-item-padding-40-px"
            >
              {data.map((project, index) => (
                <div key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={project.image}
                      title={project.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="gray">
                        {project.technique}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Carousel>
          </Grid>
          <Grid
            container
            spacing={2}
            style={{ marginTop: "64px" }}
            className="button-container"
          >
            <button className="buttons">Projetos</button>

            <button className="buttons">Contato</button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Projects;
