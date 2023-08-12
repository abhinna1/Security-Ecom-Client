import axios from "axios";
import React, { useEffect, useState } from "react";
import ServerRoutes from "../routes/ServerRoutes";
import ClientRoutes from "../routes/ClientRoutes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post(ServerRoutes.UserRoutes.login_route, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("session", res.data.id);
        res.status === 200
          ? window.location.href=ClientRoutes.Routes.home_route
          : alert("Invalid Credentials");
      }).catch(e=>{
        alert(e.response.data.message);
      })
  };
  return (
    <div className="flex justify-center items-center h-[90vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
