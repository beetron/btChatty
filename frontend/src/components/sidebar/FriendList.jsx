import Friend from "./Friend";
import useGetFriends from "../../hooks/useGetFriends";

const FriendList = () => {
  const { loading, friends } = useGetFriends();

  if (loading) {
    return <div className="loading loading-spinner">Loading...</div>;
  }

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {friends.map((friend) => (
        <Friend key={friend._id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
