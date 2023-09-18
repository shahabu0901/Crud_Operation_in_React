import React from "react";
import Homecrud from "./Components/Homecrud";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createuser from "./Components/Createuser";
import User from "./Components/User";
import Edituser from "./Components/Edituser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Homecrud />
        <Routes>
          <Route element={<Createuser />} path="/" />
          <Route element={<User />} path="/user" />
          <Route element={<Edituser />} path="/edit/:abc" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
