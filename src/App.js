// src/App.js
import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <Grid container spacing={2} style={{ height: "100vh" }}>
      <Grid item xs={4}>
        <Paper
          style={{
            height: "100%",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" gutterBottom>
            HTML
          </Typography>
          <Editor language="html" value={html} onChange={setHtml} />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper
          style={{
            height: "100%",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" gutterBottom>
            CSS
          </Typography>
          <Editor language="css" value={css} onChange={setCss} />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper
          style={{
            height: "100%",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" gutterBottom>
            JavaScript
          </Typography>
          <Editor language="javascript" value={js} onChange={setJs} />
        </Paper>
      </Grid>
      <Grid item xs={12} style={{ height: "50%" }}>
        <Paper
          style={{
            height: "100%",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Preview
          </Typography>
          <Preview html={html} css={css} js={js} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
