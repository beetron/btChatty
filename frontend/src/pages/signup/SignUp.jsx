import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up for <span className="text-blue-400">btChatty</span>
        </h1>
        <form>
          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full input input-bordered h-10"
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
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="Must be at least 6 characters"
              className="w-full input input-bordered h-10"
            />
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-400 mt-4 inline-block"
            >
              Already have an account?
            </a>
          </div>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign Up
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
