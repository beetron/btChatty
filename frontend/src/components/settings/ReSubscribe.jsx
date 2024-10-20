import useReSubscribe from "../../hooks/useReSubscribe";

const ReSubscribe = () => {
  const handleClick = useReSubscribe();
  return (
    <div className="flex flex-col justify-center items-start">
      <p className="dark:text-white text-1xl m-3">
        Only use if you aren't receiving notifications.
      </p>
      <div className="flex justify-center text-center w-full">
        <button className="btn btn-accent btn-md ms-2" onClick={handleClick}>
          ReSubscribe
        </button>
      </div>
    </div>
  );
};

export default ReSubscribe;
