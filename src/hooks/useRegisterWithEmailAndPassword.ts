import { doc, getDocs, setDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import useAuthStore from "../store/authStore";
import { collection, query, where } from "firebase/firestore";

export default function useSignupWithEmailAndPassword() {
  const setUser = useAuthStore((state) => state.setUser);
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const register = async ({
    email,
    username,
    fullname,
    password,
  }: {
    email: string;
    username: string;
    fullname: string;
    password: string;
  }) => {
    try {
      if (!email || !username || !fullname || !password) {
        alert("Please fill all fields");
        return;
      }

      const usersRef = collection(firestore, "users");
      const usernameCheck = query(usersRef, where("username", "==", username));
      const querySnapshot = await getDocs(usernameCheck);

      if (!querySnapshot.empty) {
        //  TODO handle error ini dengan lebih baik
        alert("username telah terdaftar");
        return;
      }

      const tryRegister = await createUserWithEmailAndPassword(email, password);
      if (!tryRegister && error) {
        alert(error);
        return;
      }

      if (tryRegister) {
        const UserDoc = {
          uid: tryRegister.user.uid,
          email: email,
          username: username,
          fullname: fullname,
          posts: [], // Post ID
          follower: [], // User ID
          following: [], // User ID
          bio: "",
          createdAt: Date.now(),
        };

        await setDoc(doc(firestore, "users", tryRegister.user.uid), UserDoc);
        localStorage.setItem("user-info", JSON.stringify(UserDoc));
        setUser(UserDoc);

        // TODO buat alert ini lebih bagus
        alert("Kamu Berhasil Sign up");
      }
    } catch (error) {
      // TODO handle error not with console
      console.log(error);
    }
  };

  return { loading, register };
}
