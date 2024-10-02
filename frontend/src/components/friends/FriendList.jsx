import Friend from "./Friend";
import useGetFriends from "../../hooks/useGetFriends";
import useGetSocketDetectMessages from "../../hooks/useGetSocketDetectMessages";
import friendStore from "../../store/friendStore";

const FriendList = () => {
  const { loading, friends } = useGetFriends();
  // recentMessages is returned from useGetSocketDetectMessages
  const { recentMessages } = friendStore();

  // Any new messages will setRecentMessages,
  // and useGetFriends will re-run to update FriendList ordering
  useGetSocketDetectMessages();

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
