import React, { useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createuser = () => {
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");
  let goto = useNavigate();
  let nameData = (e) => {
    setName(e.target.value);
  };
  let salaryData = (e) => {
    setSalary(e.target.value);
  };
  let companyData = (e) => {
    setCompany(e.target.value);
  };
  let formHandle = (e) => {
    e.preventDefault();
    let payload = { name, salary, company };
    axios
      .post("http://localhost:3000/users", payload)
      .then(() => {
        console.log("Data has Been Inserted");
      })

      .catch(() => {
        console.log("Somethings is Fishy");
      });
    goto("/user")
  }
  return (
    <div id={style.myForm}>
      <form action="">
        <h2>Users Form</h2>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={nameData} />
        <label htmlFor="">Salary</label>
        <input type="text" value={salary} onChange={salaryData} />
        <label htmlFor="">Company</label>
        <input type="text" value={company} onChange={companyData} />
        <button onClick={formHandle}>Submit</button>
      </form>
    </div>
  );
};

export default Createuser;
