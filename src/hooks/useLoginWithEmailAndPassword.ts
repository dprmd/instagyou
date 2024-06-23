import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

export default function useLoginWithEmailAndPassword() {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    try {
      const tryLogin = await signInWithEmailAndPassword(email, password);
      console.log(tryLogin);
    } catch (error) {
      // TODO handle error ini dengan lebih baik
      console.log("error from catch", error);
    }
  };

  return { login, loading };
}
