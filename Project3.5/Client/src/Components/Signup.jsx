import React from "react";
import axios from "axios";

const Signup = () => {
  const submitHandler = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    axios.post("http://localhost:5000/api/signup", { username, password });

    console.log(username, password);
  };

  return (
    <div>
      <div className="w-1/3">
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              className="border-black border-2"
              type="text"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="border-black border-2"
              type="text"
              name="password"
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
