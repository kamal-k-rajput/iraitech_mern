import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
const axios = require("axios").default;
export const Registration = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: null,
    email: null,
    phone: "",
    password: "",
    address: null,
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function submitForm(e) {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:5050/register", { ...formData })
      .then(function (response) {
        console.log(response);
        if ((response.status = "200")) {
          localStorage.setItem(
            "iraitechtoken",
            JSON.stringify(response.data.token)
          );
          alert("account created sucessfully");
          navigate(`/`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="form-container">
      <h2>Registration</h2>
      <form onSubmit={submitForm}>
        <label>
          First Name
          <input
            type="text"
            name="firstname"
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastname"
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          Mobile Number
          <input
            type="number"
            name="phone"
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address
          <input
            type="text"
            name="address"
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            required
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
