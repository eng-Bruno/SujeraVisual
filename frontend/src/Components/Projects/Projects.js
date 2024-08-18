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
import Image from "../../assets/image1.jpg";

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
      <Grid container spacing={2}>
        <Grid item md={7}>
          <h1 className="Subtitle">SOBRE</h1>
          <p className="about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
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
        PROJETOS
      </h1>
      <Grid container spacing={1}>
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
                    image={Image}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Button size="small">Compartilhar</Button>
                    <Button size="small">Informações</Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
