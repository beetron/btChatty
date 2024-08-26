import Friend from "./Friend";
import useGetFriends from "../../hooks/useGetFriends";

const FriendList = () => {
  const { loading, friends } = useGetFriends();

  if (loading) {
    return <div className="loading loading-spinner">Loading...</div>;
  }

  return (
    <div className="w-full">
      {friends.map((friend) => (
        <Friend key={friend._id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
