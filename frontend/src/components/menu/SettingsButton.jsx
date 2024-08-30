import { MdSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SettingsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/settings");
  };
  return (
    <div className="mt-auto">
      <MdSettings
        className="w-8 h-8 text-white cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default SettingsButton;
