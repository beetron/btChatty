import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className="mb-4 text-3xl font-semibold text-center text-gray-300">
          <span className="text-blue-400">btChatty </span>
        </h1>
        <form>
          <div className="mt-1">
            {/* <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label> */}
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
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
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
          >
            Don't have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
//           <h1 className="mb-4 text-3xl font-semibold text-center text-gray-300">
//             <span className="text-blue-400">btChatty </span>
//           </h1>
//           <form>
//             <div className="mt-1">
//               {/* <label className="label p-2">
//                 <span className="text-base label-text">Username</span>
//               </label> */}
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <div className="mt-1">
//               {/* <label className="label p-2">
//                 <span className="text-base label-text">Password</span>
//               </label> */}
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <a href="#" className="text-sm hover:text-blue-400 mt-2 inline-block">
//               Don't have an account?
//             </a>
//             <div>
//               <button className="btn btn-block btn-sm mt-2">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };

//   export default Login;
