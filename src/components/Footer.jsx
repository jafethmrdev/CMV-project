import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography color={"whitesmoke"} variant="body2" paddingTop={3}>
      {"Copyright © "}
      <Link color="inherit" href="">
        Iglesia CVM Barranquilla
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const date = new Date().getFullYear();

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
      style={{ paddingLeft: "10%", paddingTop: 50 }}
    >
      <Container maxWidth="sm">
        <Typography color={"whitesmoke"} variant="inherit">
          Visítanos, queremos conocerte:
        </Typography>
        <Typography color={"whitesmoke"} variant="body2">
          Barranquilla - Cra 14 # 41-23
        </Typography>
        <Typography color={"whitesmoke"} variant="body2">
          Tel:xxxxxxx | Cel: +57 (xxx) xxx-xxxx | info@xxxx.xxx
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
