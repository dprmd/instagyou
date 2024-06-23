import { Link } from "react-router-dom";
import { useState } from "react";
import InputField from "../Atoms/InputField";
import useSignupWithEmailAndPassword from "../../hooks/useRegisterWithEmailAndPassword";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, register } = useSignupWithEmailAndPassword();

  const handleSubmit = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    register({ email, username, fullname, password });
  };

  return (
    <>
      <div className="border border-slate-300 px-4 py-4">
        <h1 className="my-6 text-center font-gwendolyn text-3xl font-bold">
          Instagyou
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <InputField
            content={email}
            setContent={setEmail}
            type="email"
            id="email"
            placeholder="Email"
          />
          <InputField
            content={fullname}
            setContent={setFullname}
            type="text"
            id="fullname"
            placeholder="Full Name"
          />
          <InputField
            content={username}
            setContent={setUsername}
            type="text"
            id="username"
            placeholder="Username"
          />
          <InputField
            content={password}
            setContent={setPassword}
            type="password"
            id="password"
            placeholder="Password"
          />

          {/* Button */}
          <button
            type={loading ? "button" : "submit"}
            className="my-2 cursor-pointer rounded-md bg-sky-600 py-2 text-sm font-bold text-slate-100 hover:bg-sky-700"
          >
            {loading ? (
              <div className="custom-loader mx-auto h-5 w-5"></div>
            ) : (
              "Sign up"
            )}
          </button>

          {/* Or Separator */}
          <div className="my-2 flex items-center justify-center py-3">
            <span className="h-[0px] flex-1 border border-slate-200"></span>
            <span className="mx-3 text-sm font-bold text-slate-500">OR</span>
            <span className="h-[0px] flex-1 border border-slate-200"></span>
          </div>

          {/* Signup With Google*/}
          <div className="my-2 flex items-center justify-center">
            <img
              src="/img/google.png"
              alt="Login with Google"
              className="h-5 w-5"
            />
            <span className="mx-2 cursor-pointer text-sm font-bold text-slate-600">
              Signup with Google
            </span>
          </div>
        </form>
      </div>
      <div className="my-2 border border-slate-300 px-4 py-4 text-center text-sm font-bold">
        <span>Have an account ?</span>
        <Link to="/auth/login" className="cursor-pointer text-sky-500">
          {" "}
          Log in
        </Link>
      </div>
    </>
  );
}
