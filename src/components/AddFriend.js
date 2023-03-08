import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const InputLayer = styled.div`
  display: flex;
  flex-direction: column;
`;
function AddFriend() {
  const [friendData, setFriendData] = useState({
    name: "",
    email: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFriendData({
      ...friendData,
      [name]: value,
    });
  }
  const access_token = localStorage.getItem("token");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:9000/api/friends", friendData, {
        headers: { Authorization: access_token },
        data: {
          name: friendData.name,
          email: friendData.email,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <InputLayer>
      <form onSubmit={handleSubmit}>
        AddFriend
        <p>
          Friend Name:
          <label htmlFor="name">
            <input
              onChange={handleChange}
              value={friendData.name}
              name="name"
              id="name"
            ></input>
          </label>
        </p>
        <label htmlFor="email">
          Friend Emails:
          <input
            onChange={handleChange}
            value={friendData.email}
            name="email"
          ></input>{" "}
        </label>
        <p>
          <button type="submit">submit</button>
        </p>
      </form>
    </InputLayer>
  );
}
export default AddFriend;
