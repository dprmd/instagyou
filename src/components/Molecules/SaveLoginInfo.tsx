import { PiKeyhole } from "react-icons/pi";

export default function SaveLoginInfo() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="border border-slate-400 flex flex-col justify-center items-center w-[300px] text-center py-6">
        <PiKeyhole className="w-20 h-20 text-slate-600" />
        <h1 className="font-bold my-2">Save your login info ?</h1>
        <p className="my-2 px-3 text-sm">
          We can save your login info on this app so you don&apos;t need to
          enter it again.
        </p>
        <div className="w-[80%] my-2">
          <button
            className="w-full text-sm font-medium py-2 bg-primary hover:bg-sky-600 duration-500 text-white rounded-xl"
            type="button"
          >
            Save info
          </button>
          <button
            className="w-full text-sm font-medium py-2 text-black hover:text-slate-500 duration-500"
            type="button"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
