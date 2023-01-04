import React from "react";

const Login = () => {
  return (
    <div>
      <div className="w-1/3">
        <form action="">
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
        </form>
      </div>
    </div>
  );
};

export default Login;
