import React, { useState } from "react";
import { useEffect } from "react";
const axios = require("axios").default;
export const UserProfile = () => {
  const [user, setFormData] = useState({
    firstname: "",
    lastname: null,
    email: null,
    phone: "",
    password: "",
    address: null,
  });

  const token = localStorage.getItem("iraitechtoken");
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("http://localhost:5050/profile", config)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return <div>UserProfile</div>;
};
