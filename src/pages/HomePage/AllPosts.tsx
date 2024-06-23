import PostList from "../../components/Molecules/PostList";
import StoryList from "../../components/Molecules/StoryList";

export default function AllPosts() {
  return (
    <div className="w-full overflow-x-hidden px-5 py-3 md:w-[70%] lg:w-[65%]">
      <StoryList />
      <PostList />
    </div>
  );
}
