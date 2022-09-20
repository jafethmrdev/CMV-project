import { Typography } from '@mui/material'
import React from 'react'

function Seccion6() {
  return (
    <> <div
    style={{
      overflow: "hidden",
      width: "100%",
      justifyContent: "center",
      height: "auto",
    }}
    className="bg-zinc-100 m-auto justify-center align-middle pt-10 pl-6"
  >
    <Typography
      alignSelf={"center"}
      color={"black"}
      textAlign={"center"}
      fontSize={30}
      fontStyle={"oblique"}
    >
      ¡Ultimas publicaciones!
    </Typography>

    <div
      style={{
        width: "100%",
        justifySelf: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingTop: 15,
        height: 1000,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "326px",
          justifySelf: "center",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          height: 1000,
        }}
      ></div>
    </div>
  </div></>
  )
}

export default Seccion6