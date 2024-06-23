import { useState } from "react";

type InputFieldProps = {
  type: string;
  id: string;
  placeholder: string;
  content: string;
  setContent(state: string, callback?: () => void): void;
};

export default function InputField({
  type,
  id,
  placeholder,
  content,
  setContent,
}: InputFieldProps) {
  const isPassword = type === "password" ? true : false;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative my-2">
      <input
        className="w-full rounded-sm bg-slate-100 px-3 py-2 text-sm outline-none placeholder:text-sm placeholder:text-slate-400 focus:ring-[0.5px] focus:ring-slate-700"
        type={isPassword ? (showPassword ? "text" : "password") : "text"}
        id={id}
        placeholder={placeholder}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={content}
      />
      {isPassword && content?.length > 0 ? (
        <div
          className="absolute right-0 top-0 flex h-full cursor-pointer items-center justify-center px-2"
          onClick={() => setShowPassword(!showPassword)}
        >
          <span className="text-sm font-bold text-slate-700 hover:text-slate-400">
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
      ) : null}
    </div>
  );
}
