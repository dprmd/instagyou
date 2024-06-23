import { useLocation } from "react-router-dom";

export default function useActiveLink(path: string | string[], style?: string) {
  const location = useLocation();
  let isMatchInArray: boolean = false;

  if (typeof path === "object") {
    path.forEach((url) => {
      if (url === location.pathname) {
        isMatchInArray = true;
      }
    });
  }

  if (isMatchInArray) {
    return { isMatch: true, style: " " + style + " " };
  } else {
    if (location.pathname === path)
      return { isMatch: true, style: " " + style + " " };
    else return { isMatch: false, style: "" };
  }
}
