import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="px-4 py-2 text-center">
        <h1 className="my-2 text-lg font-bold">
          Sorry, this page isn&apos;t available.
        </h1>
        <p className="my-2 text-slate-600">
          The link you followed may be broken, or the page may have been
          removed.{" "}
          <Link to="/" className="my-2 block text-sky-500 hover:text-sky-600">
            Go back to instagyou
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
