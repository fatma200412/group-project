import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Grid } from "@mui/material";
import {
  faChevronRight,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { cardProducts } from "../../../redux/slices/cardSlice";
import { useEffect } from "react";
import styles from "./index.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function Login() {
  const cardProd = useSelector((state) => state.products.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cardProducts());
    console.log(cardProducts());
  }, [dispatch]);
  console.log(cardProd);
  return (
    <Container>
      <Grid
        container
        spacing={8}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={6}>
          <Typography
            style={{ fontFamily: "Mali", fontSize: "45px", fontWeight: "600" }}
            variant="h3"
            align="center"
            color="RGB(31, 51, 50)"
          >
            Login
          </Typography>
          <div
            style={{
              gap: "17px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography style={{ fontFamily: "Mali" }} variant="subtitle1">
              Home
            </Typography>
            <Typography style={{ marginTop: "3px" }}>
              <FontAwesomeIcon icon={faChevronRight} />
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontFamily: "Mali", marginBottom: "10px" }}
            >
              Account
            </Typography>
          </div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <label htmlFor="">Your email</label>
            <TextField variant="outlined" />
            <label htmlFor="">Password</label>
            <TextField variant="outlined" />
            <p>Forgot your password?</p>
            <button className={styles.signin}> Sign in</button>

            <div className={styles.textbetweenlines}>
              <div className={styles.line}></div>
              <p className={styles.or}>OR</p>
              <div className={styles.line}></div>
            </div>

            <button className={styles.create}>Create account</button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
