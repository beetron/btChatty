import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    uniqueId: "",
  });

  const { loading, signup } = useSignup();

  const submitForm = async (e) => {
    e.preventDefault(); // prevent page refresh after submit
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up - <span className="text-blue-300">btChatty</span>
        </h1>
        <form onSubmit={submitForm}>
          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Must be at least 6 characters"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Must be at least 6 characters"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="Input password again"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Friend's Unique ID</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full input input-bordered h-10"
              value={inputs.uniqueId}
              onChange={(e) =>
                setInputs({ ...inputs, uniqueId: e.target.value })
              }
            />
          </div>
          <div>
            <Link
              to="/login"
              className="text-sm hover:underline hover:text-blue-400 mt-4 inline-block"
            >
              Already have an account?
            </Link>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign up for <span className="text-blue-400">btChatty</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder=""
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Must be at least 6 characters"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Confirm password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Must be at least 6 characters"
//               className="w-full input input-bordered h-10"
//             />
//             <a
//               href="#"
//               className="text-sm hover:underline hover:text-blue-400 mt-4 inline-block"
//             >
//               Already have an account?
//             </a>
//           </div>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
