import { useState } from "react";
import { BsSend } from "react-icons/bs";
import {
  FaRegComment,
  FaRegHeart,
  FaRegBookmark,
  FaHeart,
} from "react-icons/fa6";

export default function PostFooter() {
  const [likes, setLikes] = useState(704);
  const [liked, setLiked] = useState(false);
  const [newComment, setComment] = useState("");

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div>
      <div className="flex justify-between py-2">
        <div className="flex gap-x-3">
          {liked ? (
            <FaHeart
              className={IconStyle + " fill-current text-red-500"}
              onClick={handleLike}
            />
          ) : (
            <FaRegHeart className={IconStyle} onClick={handleLike} />
          )}
          <FaRegComment className={IconStyle} />
          <BsSend className={IconStyle} />
        </div>
        <div>
          <FaRegBookmark className={IconStyle} />
        </div>
      </div>
      <div className="my-2 font-bold">{likes} likes</div>
      <div>
        <p>
          <span className="font-bold">adprmdi</span> Apakah pernah dapat API
          yang error tapi balikin 200 OK? Atau response nya kadang struktur nya
          A, kadang B, kadang berubah2. Apakah itu bagus kalo bikin API seperti
          itu? Di video ini kita bahas tentang best practice bikin Error di API
        </p>
      </div>
      <form className="my-2 flex w-full">
        <input
          type="text"
          className="flex-1 p-1 text-slate-700 outline-none"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        {newComment.length > 0 && (
          <button type="submit" className="text-sky-500 hover:text-sky-600">
            Post
          </button>
        )}
      </form>
    </div>
  );
}

const IconStyle = "w-6 h-6 cursor-pointer";
