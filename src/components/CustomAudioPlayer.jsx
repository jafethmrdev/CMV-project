import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ReySalvador from "../assets/audios/ReySalvador.mp3";

import { Grid, Typography, Divider } from "@material-ui/core";
import SubwayIcon from "@material-ui/icons/Subway";
import ExploreIcon from "@material-ui/icons/Explore";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import AssessmentIcon from "@material-ui/icons/Assessment";

const muiTheme = createMuiTheme({});
function CustomAudioPlayer() {
  const theme = useTheme();
  const src = [ReySalvador];
  return (
    <>
      <Grid container item xs={10}>
        <Grid container item xs={10} style={{ marginBottom: 25 }}>
          <Card>
            <Grid style={{ margin: 20 }}>
              <Typography variant="h6">
                <strong> REY SALVADOR</strong>
              </Typography>
            </Grid>
            <Grid style={{ margin: 20 }}>
              <Typography> SONG PROMESA</Typography>
            </Grid>
            <Divider style={{ margin: 20 }} />
            <ThemeProvider theme={muiTheme}>
              <AudioPlayer
                elevation={3}
                width="200px"
                variation="default"
                download={true}
                spacing={3}
                debug={false}
                autoplay={false}
                order="standart"
                preload="auto"
                loop={false}
                src={src}
              />
            </ThemeProvider>
          </Card>
        </Grid>
      </Grid>
    </>
  );
  /*
      <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
        />
  */
}

export default CustomAudioPlayer;
