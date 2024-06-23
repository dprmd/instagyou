import { Link } from "react-router-dom";
import useActiveLink from "../../hooks/useActiveLink";
import { IconType } from "react-icons";
import { Tooltip } from "react-tooltip";

type NavLinkProps = {
  disableOnMobile: boolean;
  text: string;
  to: string;
  ActiveIcon: IconType;
  InactiveIcon: IconType;
  locationListToApplyStyle?: string[];
};

export default function NavLink({
  disableOnMobile,
  text,
  to,
  ActiveIcon,
  InactiveIcon,
  locationListToApplyStyle,
}: NavLinkProps) {
  return (
    <Link
      className={
        LinkStyle +
        ` ${disableOnMobile ? "hidden sm:flex" : undefined} ` +
        useActiveLink(to, "font-bold text-slate-700").style
      }
      to={to}
      data-tooltip-id={text}
      data-tooltip-content={text}
      data-tooltip-place="right-end"
      data-tooltip-class-name="hidden sm:block md:hidden"
    >
      {useActiveLink(
        locationListToApplyStyle?.length ? locationListToApplyStyle : to,
      ).isMatch ? (
        <ActiveIcon className={IconStyle} />
      ) : (
        <InactiveIcon className={IconStyle} />
      )}
      <Tooltip id={text} />
      <span className="ml-2 hidden md:inline-block">{text}</span>
    </Link>
  );
}

const LinkStyle =
  "flex items-center px-4 py-2 active:bg-slate-100 sm:hover:bg-slate-100 my-2 rounded-xl duration-100 block md:w-full text-icon";
const IconStyle = "w-6 h-6 text-icon";
