import { IoReturnUpBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="mt-auto">
      <IoReturnUpBackOutline
        className="w-8 h-8 text-white cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default HomeButton;
