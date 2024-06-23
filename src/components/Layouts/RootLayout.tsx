import { Outlet, useLocation } from "react-router-dom";
import Aside from "./Aside";
import NavbarTop from "./NavbarTop";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import NavbarWhenNotLoggedIn from "./NavbarWhenNotLoggedIn";

export default function RootLayout() {
  const pathname = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const canRenderAsideAndNavbarTop =
    user && pathname !== "/auth/login" && pathname !== "/auth/register";
  const canRenderNavbarWhenNotLoggedIn =
    !user &&
    !loading &&
    pathname !== "/auth/login" &&
    pathname !== "/auth/register";
  return (
    <div className="flex">
      {canRenderNavbarWhenNotLoggedIn ? <NavbarWhenNotLoggedIn /> : null}
      {canRenderAsideAndNavbarTop ? (
        <>
          <NavbarTop />
          <Aside />
        </>
      ) : null}
      <main
        className={`mainClassName my-[49px] overflow-x-hidden md:min-h-screen ${canRenderNavbarWhenNotLoggedIn ? StyleWhenNotLoggedIn : StyleWhenLoggedIn}`}
      >
        <Outlet />
      </main>
    </div>
  );
}

const StyleWhenNotLoggedIn =
  "mt-[49px] sm:mt-[49px] ml-0 sm:ml-0 md:ml-0 lg:ml-0 sm:px-[10%] md:px-[15%] lg:px-[20%]";
const StyleWhenLoggedIn = "sm:ml-[90px] sm:mt-0 md:ml-[200px] lg:ml-[250px]";
