import { IoMdNotifications } from "react-icons/io";
import useReSubscribe from "../../hooks/useReSubscribe";

const ReSubscribeButton = () => {
  return (
    <div className="mt-auto">
      <IoMdNotifications
        className="w-8 h-8 text-white cursor-pointer"
        onClick={useReSubscribe}
      />
    </div>
  );
};

export default ReSubscribeButton;
