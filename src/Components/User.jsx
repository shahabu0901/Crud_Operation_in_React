import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import style from "./home.module.css";
import { Link } from "react-router-dom"
const User = () => {
  let [content, setContent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        console.log(res.data);
        setContent(res.data)
      })
      .catch(() => {
        console.log("data not found");
      });
  }, []);
  let deleteData = (x) => {
    axios.delete(`http://localhost:3000/users/${x}`);
    window.location.assign("/user");
  };
  return (
    <div id={style.userPage}>
      {content.map((x) => {
        return (
          <div id={style.profile}>
            <table>
              <tr>
                <th colSpan="2">USER:{x.id}</th>
              </tr>
              <tr>
                <td>NAME</td>
                <td>:{x.name}</td>
              </tr>
              <br />
              <tr>
                <td>SALARY</td>
                <td>:{x.salary}</td>
              </tr>
              <br />
              <tr>
                <td>COMPANY</td>
                <td>:{x.company}</td>
              </tr>
              <br />
              <tr>
                <td>
                  <button>
                    <Link to={`/edit1/${x.id}`}>EDIT</Link>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteData(x.id);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default User
