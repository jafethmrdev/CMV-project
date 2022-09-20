import { Container, Typography } from "@mui/material";
import Slide from "react-reveal/Slide";
import React from "react";

function Seccion1({ title, subtitle }) {
  return (
    <>
      <div className="bg-zinc-100 h-auto m-auto justify-center align-middle pt-16 pb-10">
        <Container className="container rounded">
          <Slide top duration={3000}>
            <Typography
              alignSelf={"center"}
              color={"black"}
              textAlign={"center"}
              fontSize={40}
              fontStyle={"oblique"}
            >
              ¡Un lugar para la familia!
            </Typography>
            <Typography
              alignSelf={"center"}
              color={"black"}
              textAlign={"center"}
              fontSize={25}
              component={"span"}
            >
              Somos una iglesia enfocada en la transformación y Restauración de
              la familia, y llevar al hombre al conocimiento de Dios.
            </Typography>
          </Slide>
        </Container>
      </div>
    </>
  );
}

export default Seccion1;
