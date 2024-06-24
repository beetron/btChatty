import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search messages..."
        className="w-full input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FiSearch className="w-5 h-5 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search messages..."
//         className="w-full input input-bordered rounded-full"
//       />
//       <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//         <FiSearch className="w-5 h-5 outline-none" />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
