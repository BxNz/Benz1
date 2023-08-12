import React, { useEffect } from "react";
import { Paper, Box, Typography, Avatar, Container } from "@mui/material";
import ProfileImg from "../assets/Piyaphong.jpg";
import axios, { Axios } from "axios";

function Profiel() {
  useEffect(() => {
    const token = localStorage.getItem("token");
if(token){
    axios({
      url: "http://localhost:3000/user",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
    }).then((res) => {
      console.log(res.data);
    });}
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        gap={2}
        height={"90vh"}
        alignItems={"center"}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            flex: 1,
            height: "50vh",
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ width: "10rem", height: "10rem" }} src={ProfileImg} />
            <Box sx={{ marginLeft: "1rem" }}>
              <Typography variant="h4" align="center">
                Benz
              </Typography>
              <Typography variant="body1" align="center">
                Piya@gmail.com
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper
          elevation={3}
          sx={{ padding: "2rem", flex: 1, height: "50vh", width: "90%" }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"6vh"}
            sx={{
              backgroundColor: "#f0f5f9",
              borderTopRightRadius: "1rem",
              borderTopLeftRadius: "1rem",
            }}
            p={"1rem"}
          >
            <Typography variant="body1" flex={1}>
              Username
            </Typography>
            <Typography variant="body1" flex={1}>
              :
            </Typography>
            <Typography variant="body1" flex={1}>
              Benz
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"6vh"}
            p={"1rem"}
          >
            <Typography variant="body1" flex={1}>
              Age
            </Typography>
            <Typography variant="body1" flex={1}>
              :
            </Typography>
            <Typography variant="body1" flex={1}>
              23
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"6vh"}
            sx={{
              backgroundColor: "#f0f5f9",
            }}
            p={"1rem"}
          >
            <Typography variant="body1" flex={1}>
              Email
            </Typography>
            <Typography variant="body1" flex={1}>
              :
            </Typography>
            <Typography variant="body1" flex={1}>
              Piya@gmail.com
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"6vh"}
            p={"1rem"}
          >
            <Typography variant="body1" flex={1}>
              Address
            </Typography>
            <Typography variant="body1" flex={1}>
              :
            </Typography>
            <Typography variant="body1" flex={1}>
              Vientiane, Laos
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"6vh"}
            sx={{
              backgroundColor: "#f0f5f9",
              borderBottomRightRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
            p={"1rem"}
          >
            <Typography variant="body1" flex={1}>
              Contact
            </Typography>
            <Typography variant="body1" flex={1}>
              :
            </Typography>
            <Typography variant="body1" flex={1}>
              +8562055980212
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Profiel;
