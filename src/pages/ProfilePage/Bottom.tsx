import { Link } from "react-router-dom";
import useActiveLink from "../../hooks/useActiveLink";
import { AiFillPicture, AiOutlinePicture } from "react-icons/ai";
import { BsCameraVideo, BsCameraVideoFill } from "react-icons/bs";
import { RiFileList2Fill, RiFileList2Line } from "react-icons/ri";

export default function Bottom({ username }: { username: string | undefined }) {
  return (
    <nav className="flex w-full justify-center border-b">
      {/* Profile and Posts */}
      <Link
        to={`/profile/${username}`}
        className={
          useActiveLink(`/profile/${username}`, "border-t-2 border-t-slate-900")
            .style + LinkStyle
        }
      >
        {useActiveLink(`/profile/${username}`, "text-slate-800").isMatch ? (
          <RiFileList2Fill className={IconStyle} />
        ) : (
          <RiFileList2Line className={IconStyle} />
        )}
        <span className="hidden text-slate-700 sm:block">Posts</span>
      </Link>

      {/* Photos */}
      <Link
        to={`/profile/${username}/photos`}
        className={
          useActiveLink(
            `/profile/${username}/photos`,
            "border-t-2 border-t-slate-900",
          ).style + LinkStyle
        }
      >
        {useActiveLink(`/profile/${username}/photos`).isMatch ? (
          <AiFillPicture className={IconStyle} />
        ) : (
          <AiOutlinePicture className={IconStyle} />
        )}
        <span className="hidden text-slate-700 sm:block">Photos</span>
      </Link>

      {/* Videos */}
      <Link
        to={`/profile/${username}/videos`}
        className={
          useActiveLink(
            `/profile/${username}/videos`,
            "border-t-2 border-t-slate-900",
          ).style + LinkStyle
        }
      >
        {useActiveLink(`/profile/${username}/videos`).isMatch ? (
          <BsCameraVideoFill className={IconStyle} />
        ) : (
          <BsCameraVideo className={IconStyle} />
        )}
        <span className="hidden text-slate-700 sm:block">Videos</span>
      </Link>
    </nav>
  );
}

const LinkStyle = "px-6 py-3 text-sm font-bold flex items-center gap-x-2";
const IconStyle = "w-6 h-6 text-icon";
