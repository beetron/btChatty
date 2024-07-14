import React from "react";
import Friend from "./Friend";

const Friends = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </div>
  );
};

export default Friends;

// const Messages = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//     </div>
//   );
// };

// export default Messages;
