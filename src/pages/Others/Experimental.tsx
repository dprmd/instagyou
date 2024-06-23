import { Link } from "react-router-dom";

export default function Experimental() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="px-4 py-2 text-center">
        <h1 className="my-2 text-lg font-bold">This page is Experimental.</h1>
        <p className="my-2 text-slate-600">
          The link you are visiting is a feature that cannot be used yet because
          it is still under development.{" "}
          <Link to="/" className="my-2 block text-sky-500 hover:text-sky-600">
            Go back to instagyou
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
