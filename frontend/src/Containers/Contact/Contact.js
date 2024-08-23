import React from "react";
import "./Contact.css";
import Grid from "@mui/material/Grid";

import InstagramIcon from "@mui/icons-material/Instagram";
import InboxIcon from "@mui/icons-material/Inbox";
import { Link } from "@mui/material";

function Contact() {
  return (
    <div className="Contact">
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Grid container spacing={3} className="footer-links">
            <Grid item md={2}>
              <Link underline="none" href="#" color="inherit">
                <p>PROJETOS</p>
              </Link>
            </Grid>
            <Grid item md={2}>
              <Link underline="none" href="#" color="inherit">
                <p>SOBRE</p>
              </Link>
            </Grid>
            <Grid item md={2}>
              <Link underline="none" href="#" color="inherit">
                <p>CONTATO</p>
              </Link>
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
