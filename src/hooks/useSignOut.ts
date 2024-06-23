import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useAuthStore from "../store/authStore";

export default function useLogout() {
  const logoutUser = useAuthStore((state) => state.logout);
  const [signOut, ,] = useSignOut(auth);

  const logout = async () => {
    try {
      const tryLogout = await signOut();
      if (tryLogout) {
        // TODO buat alert ini lebih bagus
        localStorage.removeItem("user-info");
        logoutUser();
        alert("Kamu Keluar");
      } else {
        // TODO buat alert ini lebih bagus
        alert("Kamu gagal keluar");
      }
    } catch (error) {
      // TODO handle error ini dengan baik
      console.log(error);
    }
  };

  return { logout };
}
