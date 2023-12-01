import React from "react";
import CardsProduct from "../../components/cards";
import style from "./index.module.css";

function Home() {
  return (
    <>
      <h1 className={style.home}>home</h1>
      <CardsProduct />
    </>
  );
}

export default Home;
