import Avatar from "./Avatar";

export default function PeopleStory({
  title,
  srcImg,
  className,
  maxWTitle,
}: {
  title: string;
  srcImg: string;
  className: string;
  maxWTitle: string;
}) {
  return (
    <div className="cursor-pointer">
      <div className="rounded-full border-2 border-pink-500 p-[2px]">
        <Avatar src={srcImg} className={className} />
      </div>
      <span
        className={`mt-1 inline-block min-w-full ${maxWTitle} truncate text-center text-sm text-slate-600`}
      >
        {title}
      </span>
    </div>
  );
}
