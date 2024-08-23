import React from "react";
import "./Contact.css";
import Grid from "@mui/material/Grid";

import InstagramIcon from "@mui/icons-material/Instagram";
import InboxIcon from "@mui/icons-material/Inbox";

function Contact() {
  return (
    <div className="Contact">
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Grid container spacing={3} className="footer-links">
            <Grid item md={2}>
              <p>PROJETOS</p>
            </Grid>
            <Grid item md={2}>
              <p>SOBRE</p>
            </Grid>
            <Grid item md={2}>
              <p>CONTATO</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} className="contact">
          <p>example@email.com</p>
          <p>(xx) xxxxx-xxxx</p>
          <div style={{ marginTop: "64px" }}>
            <InstagramIcon /> <InboxIcon />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
