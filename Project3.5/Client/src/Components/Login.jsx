import React from "react";
import axios from "axios";

const Login = () => {
  const submitHandler = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    axios.get("http://localhost:5000/api/login", { username, password });

    console.log(username, password);
  };
  return (
    <div>
      <div className="w-1/3">
        <form action="" onSubmit={submitHandler}>
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
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
