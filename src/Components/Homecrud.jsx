import React from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";

const Homecrud = () => {
  return (
    <section id={style.nav}>
      <Link to="/">CREATE-USER</Link>
      <Link to="/user">USER</Link>
    </section>
  )
}

export default Homecrud;
