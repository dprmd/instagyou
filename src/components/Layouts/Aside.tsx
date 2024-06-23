import { FaInstagram, FaRegSquarePlus, FaSquarePlus } from "react-icons/fa6";
import { GoHeart, GoHeartFill, GoHome, GoHomeFill } from "react-icons/go";
import {
  MdExplore,
  MdMessage,
  MdOutlineExplore,
  MdOutlineMessage,
  MdOutlineVideoLibrary,
  MdVideoLibrary,
} from "react-icons/md";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import NavLink from "../Atoms/NavLink";
import { Link } from "react-router-dom";
import useActiveLink from "../../hooks/useActiveLink";
import Avatar from "../Atoms/Avatar";
import { Tooltip } from "react-tooltip";

export default function Aside() {
  return (
    <aside
      className={`fixed z-10 bg-white px-4 lg:min-w-[250px] lg:max-w-[250px] ${MobileStyle} ${SmStyle} ${MdStyle}`}
    >
      {/* Top Section */}
      <Link
        to="/"
        className="my-3 flex hidden justify-center rounded-xl px-4 py-2 hover:bg-slate-100 sm:block md:justify-start"
      >
        <span className="hidden font-gwendolyn text-3xl font-bold md:block">
          Instagyou
        </span>
        <FaInstagram className="hidden h-6 w-6 sm:block md:hidden" />
      </Link>

      {/* Bottom Section */}
      <nav className="flex h-full items-center justify-around sm:mt-10 sm:flex-col sm:items-start sm:justify-start">
        {AllNavLink.map((navLink) => (
          <NavLink
            key={navLink.to}
            disableOnMobile={navLink.disableOnMobile}
            text={navLink.text}
            to={navLink.to}
            ActiveIcon={navLink.ActiveIcon}
            InactiveIcon={navLink.InactiveIcon}
            locationListToApplyStyle={navLink.locationListToApplyStyle}
          />
        ))}
        <Link
          // TODO ini dinamis berdasarkan akun yang sedang kamu login di dalamnya
          to="/profile/adprmdi"
          className={`my-2 block flex items-center rounded-xl px-4 py-2 text-slate-500 duration-100 active:bg-slate-100 md:w-full md:hover:bg-slate-100 ${useActiveLink(["/profile/adprmdi", "/profile/adprmdi/photos", "/profile/adprmdi/videos"], "font-bold text-slate-700").style}`}
          data-tooltip-id="Profile"
          data-tooltip-content="Profile"
          data-tooltip-place="right-end"
          data-tooltip-class-name="hidden sm:block md:hidden"
        >
          <Avatar src="/img/people.jpeg" className="h-6 w-6" />
          <span className="ml-2 hidden md:inline-block">Profile</span>
        </Link>
        <Tooltip id="Profile" />
      </nav>
    </aside>
  );
}

const MobileStyle =
  "min-w-screen bottom-0 left-0 right-0 border-t border-t-slate-400";
const SmStyle =
  "sm:top-0 sm:min-w-[90px] sm:max-w-[90px] sm:border-r sm:border-r-slate-400";
const MdStyle = "md:min-w-[200px] md:max-w-[200px] md:right-[80%] md:py-2";

const AllNavLink = [
  {
    disableOnMobile: false,
    text: "Home",
    to: "/",
    ActiveIcon: GoHomeFill,
    InactiveIcon: GoHome,
    locationListToApplyStyle: [],
  },
  {
    disableOnMobile: true,
    text: "Search",
    to: "/search",
    ActiveIcon: RiSearchFill,
    InactiveIcon: RiSearchLine,
    locationListToApplyStyle: [],
  },
  {
    disableOnMobile: false,
    text: "Explore",
    to: "/explore",
    ActiveIcon: MdExplore,
    InactiveIcon: MdOutlineExplore,
    locationListToApplyStyle: [],
  },
  {
    disableOnMobile: false,
    text: "Reels",
    to: "/reels",
    ActiveIcon: MdVideoLibrary,
    InactiveIcon: MdOutlineVideoLibrary,
    locationListToApplyStyle: [],
  },
  {
    disableOnMobile: false,
    text: "Messages",
    to: "/messages",
    ActiveIcon: MdMessage,
    InactiveIcon: MdOutlineMessage,
    locationListToApplyStyle: [],
  },
  {
    disableOnMobile: true,
    text: "Notifications",
    to: "/notifications",
    ActiveIcon: GoHeartFill,
    InactiveIcon: GoHeart,
    locationListToApplyStyle: [],
  },
  {
    disableOnMobile: false,
    text: "Create",
    to: "/create-post",
    ActiveIcon: FaSquarePlus,
    InactiveIcon: FaRegSquarePlus,
    locationListToApplyStyle: [],
  },
];
