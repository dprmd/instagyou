import InputField from "../Atoms/InputField";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLoginWithEmailAndPassword from "../../hooks/useLoginWithEmailAndPassword";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useLoginWithEmailAndPassword();

  const handleSubmit = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <div className="border border-slate-300 px-4 py-4">
        <h1 className="my-6 text-center font-gwendolyn text-3xl font-bold">
          Instagyou
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <InputField
            type="email"
            id="email"
            placeholder="Email"
            content={email}
            setContent={setEmail}
          />
          <InputField
            type="password"
            id="password"
            placeholder="Password"
            content={password}
            setContent={setPassword}
          />

          {/* Button */}
          <button
            type={loading ? "button" : "submit"}
            className="my-2 cursor-pointer rounded-md bg-sky-600 py-2 text-sm font-bold text-slate-100 hover:bg-sky-700"
          >
            {loading ? (
              <div className="custom-loader mx-auto h-5 w-5"></div>
            ) : (
              "Log in"
            )}
          </button>

          {/* Or Separator */}
          <div className="my-2 flex items-center justify-center py-3">
            <span className="h-[0px] flex-1 border border-slate-200"></span>
            <span className="mx-3 text-sm font-bold text-slate-500">OR</span>
            <span className="h-[0px] flex-1 border border-slate-200"></span>
          </div>

          {/* Register With Google */}
          <div className="my-2 flex items-center justify-center">
            <img
              src="/img/google.png"
              alt="Login with Google"
              className="h-5 w-5"
            />
            <span className="mx-2 cursor-pointer text-sm font-bold text-slate-600">
              Login with Google
            </span>
          </div>

          {/* Forgot Password */}
          <span className="my-2 cursor-pointer text-center text-[12px] text-blue-900">
            Forgot password?
          </span>
        </form>
      </div>
      <div className="my-2 border border-slate-300 px-4 py-4 text-center">
        <Link
          to="/auth/register"
          className="cursor-pointer text-sm font-bold text-sky-500"
        >
          Create new account
        </Link>
      </div>
    </>
  );
}
