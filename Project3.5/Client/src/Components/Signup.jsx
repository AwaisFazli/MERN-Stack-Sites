import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="w-1/3">
        <form action="/api/signup" method="POST">
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
