import Avatar from "./Avatar";

export default function PostHeader() {
  return (
    <div className="mt-2 flex w-full justify-between p-1">
      <div className="flex items-center gap-x-2">
        <Avatar src="/img/people.jpeg" className="h-8 w-8" />
        <span className="cursor-pointer text-sm font-bold text-slate-700">
          Adi Permadi
        </span>
        <span className="h-[6px] w-[6px] rounded-full bg-slate-500"></span>
        <span className="text-sm text-slate-500">1d</span>
      </div>
      <div>
        <button className="p-1 text-sm text-sky-500 hover:text-sky-700">
          unfollow
        </button>
      </div>
    </div>
  );
}
