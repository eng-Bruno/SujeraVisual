import React from "react";
import "./Orçamento.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Orçamento() {
  return (
    <div className="Orçamento">
      <Grid container spacing={2}>
        <Grid item md={4} style={{ marginTop: "232px" }}>
          <h1 className="Subtitle" style={{ marginLeft: "120px" }}>
            Orçamento
          </h1>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%", marginLeft: "120px" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="email"
              label="EMAIL"
              variant="standard"
              fullWidth
              required
              InputProps={{
                disableUnderline: false,
              }}
            />
            <TextField
              id="assunto"
              label="ASSUNTO"
              variant="standard"
              fullWidth
              required
              style={{ marginTop: "24px" }}
              InputProps={{
                disableUnderline: false,
              }}
            />
            <TextField
              id="mensagem"
              label="MENSAGEM"
              variant="standard"
              multiline
              rows={10}
              fullWidth
              required
              style={{ marginTop: "24px" }}
              InputProps={{
                disableUnderline: false,
              }}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "#2c2c2c" }}
              fullWidth
            >
              Enviar
            </Button>
          </Box>
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>
    </div>
  );
}

export default Orçamento;
