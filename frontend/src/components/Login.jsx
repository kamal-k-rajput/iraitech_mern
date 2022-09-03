import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios").default;
export const Login = () => {
  let navigate = useNavigate();
  // iraitechtoken;
  const [formData, setFormData] = useState({
    email: null,
    password: "",
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  function formSubmit(e) {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:5050/login", { ...formData })
      .then(function (response) {
        console.log(response);
        if ((response.status = "200")) {
          localStorage.setItem(
            "iraitechtoken",
            JSON.stringify(response.data.token)
          );
          alert("logged in sucessfully");
          navigate(`/`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={formSubmit}>
        <label>
          ENTER EMAIL
          <input
            type="email"
            name="email"
            required
            placeholder="enter email address"
            onChange={handleInputChange}
          />
        </label>
        <label>
          ENTER PASSWORD
          <input
            type="password"
            name="password"
            required
            placeholder="Enter email address"
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="LOG IN" />
      </form>
    </div>
  );
};
