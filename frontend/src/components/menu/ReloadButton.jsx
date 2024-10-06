import { FiRefreshCw } from "react-icons/fi";

const ReloadButton = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="mt-auto">
      <FiRefreshCw
        className="w-8 h-8 text-white cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default ReloadButton;
