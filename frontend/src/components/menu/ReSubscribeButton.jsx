import { IoMdNotifications } from "react-icons/io";
import useReSubscribe from "../../hooks/useResubscribe";

const ReSubscribeButton = () => {
  const { handleReSubscribe } = useReSubscribe();

  return (
    <div className="mt-auto">
      <IoMdNotifications
        className="w-8 h-8 text-white cursor-pointer"
        onClick={handleReSubscribe}
      />
    </div>
  );
};

export default ReSubscribeButton;
