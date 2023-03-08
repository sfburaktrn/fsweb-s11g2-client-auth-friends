import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const InputLayer = styled.div`
  display: flex;
  flex-direction: column;
`;
function Login() {
  const [formData, setFormData] = useState({
    username: "workintech",
    password: "wecandoit",
  });
  const history = useHistory();
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:9000/api/login", formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/api/friendsList");
      })
      .catch((err) => console.log(err));
  }
  return (
    <InputLayer>
      <form onSubmit={handleSubmit}>
        Login
        <p>
          Username:
          <label htmlFor="username">
            <input
              onChange={handleChange}
              value={formData.username}
              name="username"
              id="username"
            ></input>
          </label>
        </p>
        <label htmlFor="password">
          Password:
          <input
            onChange={handleChange}
            value={formData.password}
            name="password"
          ></input>{" "}
        </label>
        <p>
          <button type="submit">submit</button>
        </p>
      </form>
    </InputLayer>
  );
}
export default Login;
