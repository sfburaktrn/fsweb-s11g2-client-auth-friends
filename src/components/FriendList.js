import { useState, useEffect } from "react";
import axios from "axios";
function FriendList() {
  const [friendList, setFriendList] = useState([]);
  useEffect(() => {
    const access_token = localStorage.getItem("token");
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          Authorization: access_token,
        },
      })
      .then((res) => {
        setFriendList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(friendList);
  return (
    <div>
      <h1>Friend List</h1>
      <div>
        {friendList.map((item) => (
          <h3 key={item.id}>
            -{item.name}-{item.email}
          </h3>
        ))}
      </div>
    </div>
  );
}
export default FriendList;
