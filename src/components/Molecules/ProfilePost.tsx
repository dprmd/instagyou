import { Link } from "react-router-dom";

export default function ProfilePost() {
  const a: number[] = [];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2 p-3">
        {a.length
          ? a.map((no) => {
              return (
                // {/* TODO disini link nya dinamis mengarah ke sebuah detail postingan dan detail postingan mirip seperti PostLists */}
                <Link
                  to="/profile/adprmdi/list/posts"
                  className="group relative block max-h-[150px] max-w-[120px] overflow-hidden sm:max-h-[200px] sm:max-w-[150px]"
                >
                  {/* TODO ini adalah image untuk posts di profile dan ini itu dinamis */}
                  <img src={`/img/${no}.jpg`} className="" />
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
}

// type PostDocument = {
//   id: string;
//   imgUrl: string;
//   likes: []; // User ID
//   comments: [];
//   caption: string;
//   createdAt: Date;
//   createdBy: string; // User ID
// };
