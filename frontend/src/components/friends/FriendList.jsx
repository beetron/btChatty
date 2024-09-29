import Friend from "./Friend";
import useGetFriends from "../../hooks/useGetFriends";

const FriendList = () => {
  const { loading, friends } = useGetFriends();

  if (loading) {
    return <div className="loading loading-spinner">Loading...</div>;
  }

  const sortedFriends = friends.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  return (
    <div className="w-full">
      {sortedFriends.map((friend) => (
        <Friend key={friend._id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
