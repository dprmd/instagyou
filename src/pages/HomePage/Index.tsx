import AllPosts from "./AllPosts";
import SuggestedAccount from "./SuggestedAccounts";

export default function HomePage() {
  return (
    <div className="flex h-full w-full">
      <AllPosts />
      <SuggestedAccount />
    </div>
  );
}
