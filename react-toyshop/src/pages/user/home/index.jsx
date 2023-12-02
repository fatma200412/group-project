import React from "react";
import CardsProduct from "../../../components/cards";
import style from "./index.module.css";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#88A9A8" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Grid
              container
              spacing={0}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // padding: "18px",
                color: "#F7FCF7",
                fontWeight: "500",
                fontFamily: "Bradley hand,cursive",
                textAlign: "center",
              }}
            >
              <Grid
                item
                sm={12}
                md={12}
                lg={3}
                xl={3}
                style={{ borderRight: "1px solid #F7FCF7", padding: "20px" }}
              >
                <p>Refer a Friend. Get 20% Off</p>
              </Grid>
              <Grid
                item
                sm={12}
                md={12}
                lg={3}
                xl={3}
                style={{ borderRight: "1px solid #F7FCF7", padding: "20px" }}
              >
                <p>Subscribe Today and Get $10</p>
              </Grid>
              <Grid item sm={12} md={12} lg={3} xl={3}>
                <p>Subscribe Today and Get $10</p>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Home;
