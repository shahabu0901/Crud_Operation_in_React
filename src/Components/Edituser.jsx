import React from "react";
import style from "./home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edituser = () => {
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");
  let navigate = useNavigate();
  let { abc } = useParams();
  // console.log(abc);
  useEffect((e) => {
    axios
      .get(`http://localhost:3000/users/${abc}`)
      .then((resp) => {
        setName(resp.data.name);
        setSalary(resp.data.salary);
        setCompany(resp.data.company);
      })

      .catch(() => {
        console.log("Somethings is Wrong");
      });
  }, [abc]);
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
      .put(`http://localhost:3000/users/${abc}`, payload)
      .then(() => {
        console.log("Data has Been Updated");
      })

      .catch(() => {
        console.log("Somethings is Fishy");
      });
    navigate("/user");
  };
  return (
    <div id={style.myForm}>
      <form action="">
        <h2>UDATE USER</h2>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={nameData} />
        <label htmlFor="">Salary</label>
        <input type="text" value={salary} onChange={salaryData} />
        <label htmlFor="">Company</label>
        <input type="text" value={company} onChange={companyData} />
        <button onClick={formHandle}>Update</button>
      </form>
    </div>
  );
};

export default Edituser;
