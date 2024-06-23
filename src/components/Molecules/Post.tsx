import PostContent from "../Atoms/PostContent";
import PostFooter from "../Atoms/PostFooter";
import PostHeader from "../Atoms/PostHeader";

export default function Post() {
  return (
    <div className="max-w-[99%] border-b border-b-slate-400 pb-3 sm:max-w-[80%] md:max-w-[90%] lg:max-w-[60%]">
      <PostHeader />
      <PostContent />
      <PostFooter />
    </div>
  );
}
