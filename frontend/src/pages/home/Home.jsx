import React from "react";
import Friends from "../../components/sidebar/Friends";

const Home = () => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <Friends />
    </div>
  );
};

export default Home;
