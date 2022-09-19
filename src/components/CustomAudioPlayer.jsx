import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ReySalvador from "../assets/audios/ReySalvador.mp3";

const muiTheme = createMuiTheme({});
function CustomAudioPlayer() {
  const theme = useTheme();
  const src = [ReySalvador];
  return (
    <>
      <Card
        sx={{
          display: "flex",
          width: 300,
          height: 250,
          justifyContent: "center",
        }}
        elevation={2}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 18,
          }}
        >
          <CardContent sx={{ flex: "1 1 auto" }}>
            <Typography  variant="h5">
              REY SALVADOR
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              SONG PROMESA
            </Typography>
          </CardContent>
          <Box
            sx={{
              alignItems: "center",
              margin: 3,
              paddingBottom: 5,
              justifyContent: "center",
            }}
          >
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
          </Box>
        </Box>
      </Card>
      
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
