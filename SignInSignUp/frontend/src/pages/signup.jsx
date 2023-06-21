import React, { useState } from "react";

const signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    console.log(formData);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // window.location.href = "/signin";
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className=" px-[4rem] py-[4rem]">
        <div>
          <form action="" className="flex flex-col" onSubmit={submitHandler}>
            <label htmlFor="" className="text-[1.5rem] mb-[0.2rem]">
              Username
            </label>
            <input
              type="text"
              className=" border border-gray-400 border-1 rounded-md mb-[2rem] text-[1.5rem] px-[1rem] py-[0.5rem] "
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <label htmlFor="" className="text-[1.5rem] mb-[0.2rem]">
              Email
            </label>
            <input
              type="email"
              className=" border border-gray-400 border-1 rounded-md mb-[2rem] text-[1.5rem] px-[1rem] py-[0.5rem]"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <label htmlFor="" className="text-[1.5rem] mb-[0.2rem]">
              Password
            </label>
            <input
              type="password"
              className=" border border-gray-400 border-1 rounded-md mb-[2rem] text-[1.5rem] px-[1rem] py-[0.5rem]"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <label htmlFor="" className="text-[1.5rem] mb-[0.2rem]">
              Confirm Password
            </label>
            <input
              type="password"
              className=" border border-gray-400 border-1 rounded-md mb-[2rem] text-[1.5rem] px-[1rem] py-[0.5rem]"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            <input
              type="submit"
              className="rounded-md mb-[2rem] text-[1.5rem] font-bold text-white px-[1rem] py-[0.5rem]
                         bg-blue-400 hover:text-blue-400 hover:bg-white transition-all hover:border hover:border-1 hover:border-blue-400"
              value={"Sign Up"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default signup;
