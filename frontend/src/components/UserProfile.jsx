import React, { useState } from "react";
import { useEffect } from "react";

const axios = require("axios").default;
export const UserProfile = () => {
  const [data, setData] = useState(false);
  const [user, setUser] = useState({
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
      .then((data) => {
        if ((data.status = "200")) {
          setData(true);
          setUser(data.user);
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [token]);
  return (
    <div>
      UserProfile
      {data ? (
        <div>
          <p>First Name:{user.firstname}</p>
          <p>Last Name :{user.lastname}</p>
          <p>Address{user.address}</p>
          <p>Email{user.email}</p>
          <p>Mobile Number{user.phone}</p>
          <p>Password{user.password}</p>
          first Name
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
