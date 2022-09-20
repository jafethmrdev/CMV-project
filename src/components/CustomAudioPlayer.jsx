import React from "react";
import { ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import ReySalvador from "../assets/audios/ReySalvador.mp3";
import { Grid, Typography, Divider } from "@material-ui/core";


function CustomAudioPlayer() {
  const theme = useTheme();
  const src = [ReySalvador];
  return (
    <Grid  item xs={10} style={{ marginBottom: 25 }} spacing={2}  direction={"column"}>
      <Card>
        <Grid style={{ margin: 20 }}>
          <Typography variant="h6">
            <strong> REY SALVADOR</strong>
          </Typography>
        </Grid>
        <Grid style={{ margin: 20 }}>
          <Typography> SONG PROMESA</Typography>
        </Grid>
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
      </Card>
    </Grid>
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
