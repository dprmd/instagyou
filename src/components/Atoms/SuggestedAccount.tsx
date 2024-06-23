import Avatar from "./Avatar";

export default function SuggestedAccount({
  isSuggested,
  onClick,
  customText,
}: {
  isSuggested: boolean;
  onClick?: () => void;
  customText?: string;
}) {
  return (
    <div className="my-2 flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <Avatar src="/img/people.jpeg" className="h-11 w-11" />
        <div>
          <span className="block text-sm font-bold text-slate-700">
            adprmdi
          </span>
          {isSuggested && (
            <span className="block text-sm text-slate-700">
              Suggested for you
            </span>
          )}
        </div>
      </div>
      <button
        className="text-sm font-bold text-sky-700 hover:text-sky-500"
        onClick={onClick}
      >
        {customText ? customText : "Follow"}
      </button>
    </div>
  );
}
