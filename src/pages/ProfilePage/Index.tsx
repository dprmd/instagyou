import { Outlet, useParams } from "react-router-dom";
import Bottom from "./Bottom";
import Top from "./Top";

export default function ProfilePage() {
  const { username } = useParams();

  return (
    <div className="min-h-full min-w-full">
      <Top />
      <Bottom username={username} />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
