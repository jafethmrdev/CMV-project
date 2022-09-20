import * as React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import {
  Container,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Slideshow from "../components/Slideshow";
import SocialBanner from "../components/SocialBanner";
import ImageParallax from "../components/ImageParallax";
import Footer from "../components/Footer";
import CustomAudioPlayer from "../components/CustomAudioPlayer";
import { IGEmbed } from "react-ig-embed";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import Seccion1 from "../components/Seccion1";
import Seccion2 from "../components/Seccion2";
import Seccion3 from "../components/Seccion3";
import Seccion4 from "../components/Seccion4";
import Seccion5 from "../components/Seccion5";
import Seccion6 from "../components/Seccion6";

function HomeScreen() {
  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar />
      <Slideshow />
      <Seccion1 />
      <ImageParallax />
      <Seccion2 />
      <Seccion3 />
      <SocialBanner />
      <Seccion4 />
      <Divider />
      <Seccion5 />
      <Divider />
      <Seccion6 />
      <Footer />
    </>
  );
}

export default HomeScreen;
