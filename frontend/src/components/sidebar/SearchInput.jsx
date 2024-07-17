import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-hot-toast";
import friendStore from "../../store/friendStore";
import useGetFriends from "../../hooks/useGetFriends";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedFriend } = friendStore();
  const { friends } = useGetFriends();

  const submitSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      setSearch("");
      return toast.error("Search query must be at least 3 characters long.");
    }
    const friend = friends.find((c) =>
      c.nickname.toLowerCase().includes(search.toLowerCase())
    );

    if (friend) {
      setSelectedFriend(friend);
      setSearch("");
    } else {
      toast.error("Friend not found.");
      setSearch("");
    }
  };

  return (
    <form onSubmit={submitSearch} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search friend..."
        className="w-full input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FiSearch className="w-5 h-5 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
