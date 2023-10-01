import React, { useState } from "react";

import User from "./User";
import "../components/Form.css";

function Form({ onUserFetch }) {
  const [username, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await User(username);
      onUserFetch(userData);
      console.log(userData);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name</label>
        <br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChange}
          required
        />
        <button type="submit">Get Info</button>
      </form>
    </div>
  );
}

export default Form;
