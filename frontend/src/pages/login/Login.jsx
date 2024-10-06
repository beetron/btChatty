import React from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { loading, login } = useLogin();

  const submitForm = async (e) => {
    e.preventDefault(); // prevent page refresh after submit
    await login(inputs);
  };

  return (
    <div className="min-h-screen flex items-center justify-center mx-auto">
      <div className="w-full p-6 rounded-lg ">
        <h1 className="mb-4 text-4xl font-semibold text-center">
          <span className="text-blue-300">btChatty </span>
        </h1>
        <form onSubmit={submitForm}>
          <div className="mt-1">
            {/* <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label> */}
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value.toLowerCase() })
              }
            />
          </div>
          <div className="mt-1">
            {/* <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label> */}
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:text-blue-400 mt-2 inline-block"
          >
            Don't have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
