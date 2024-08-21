import { MdLogout } from "react-icons/md";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      <MdLogout
        className="w-8 h-8 text-white cursor-pointer"
        onClick={logout}
      />
    </div>
  );
};

export default LogoutButton;
