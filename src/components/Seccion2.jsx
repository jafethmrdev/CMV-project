import { Typography } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";
function Seccion2() {
  return (
    <>
      <div
        style={{ height: "auto" }}
        className="bg-zinc-800 m-auto justify-center align-middle p-16 "
      >
        <Fade left duration={3000}>
          <Typography
            alignSelf={"center"}
            color={"whitesmoke"}
            textAlign={"center"}
            fontSize={30}
            fontStyle={"oblique"}
            paddingBottom={5}
          >
            {
              "¡Iglesia CVM Barranquilla te invita a visitarnos de manera presencial!"
            }
          </Typography>
        </Fade>
        <Fade right duration={3000}>
          <Typography
            alignSelf={"center"}
            color={"whitesmoke"}
            textAlign={"center"}
            fontSize={20}
            component={"span"}
            variant={"body2"}
            paragraph={true}
          >
            {
              "Disfruta de la Presencia de Dios en nuestro auditorio. Estamos abiertos los domingos en el horario 9:30 AM. Tambien puedes disfrutar de nuestros grupos de conexiones: Grupo parejas, Grupo de jovenes, Grupo de mujeres, entre otros. Te invitamos tambien a los grupos de sanacion y hacedores de disipulos. ¡Te Esperamos!"
            }
          </Typography>
        </Fade>
      </div>
    </>
  );
}

export default Seccion2;
