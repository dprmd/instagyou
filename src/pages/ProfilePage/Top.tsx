import Avatar from "../../components/Atoms/Avatar";
import PeopleStory from "../../components/Atoms/PeopleStory";

export default function Top() {
  return (
    <div className="border-b p-4">
      <div className="flex">
        {/* Avatar Field */}
        <div className="flex min-w-[30%] justify-center">
          <Avatar
            src="/img/people.jpeg"
            className="mt-[20%] h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36"
          />
        </div>

        {/* BioField */}
        <div>
          {/* Bio Top */}
          <div className="my-4 flex items-center justify-between">
            <span className="max-w-[30%] truncate font-bold">adprmdi</span>
            <div className="flex justify-end">
              <button className={ButtonStyle}>Follow</button>
              <button className={ButtonStyle}>Message</button>
            </div>
          </div>

          {/* Bio Middle */}
          <div className="my-4 flex gap-x-4 text-center text-sm">
            <span>
              1,152 <span className="font-bold">posts</span>
            </span>
            <span>
              37.8k <span className="font-bold">followers</span>
            </span>
            <span>
              123 <span className="font-bold">following</span>
            </span>
          </div>

          {/* Bio Bottom */}
          <div>
            <span className="my-2 inline-block text-sm font-bold">adprmdi</span>
            <p className="text-sm text-slate-800">
              ini adalah akun pembuat / CEO dari instagyou, instagyou dibuat
              menggunakan react js.
            </p>
          </div>
        </div>
      </div>

      {/* Sorotan */}
      <div className="my-4 flex gap-2">
        <PeopleStory
          title="love"
          srcImg="/img/people.jpeg"
          className="sm:h-18 sm:w-18 h-16 w-16"
          maxWTitle="max-w-16 sm:max-w-20"
        />
        <PeopleStory
          title="nature"
          srcImg="/img/people.jpeg"
          className="sm:h-18 sm:w-18 h-16 w-16"
          maxWTitle="max-w-16 sm:max-w-20"
        />
        <PeopleStory
          title="coding"
          srcImg="/img/people.jpeg"
          className="sm:h-18 sm:w-18 h-16 w-16"
          maxWTitle="max-w-16 sm:max-w-20"
        />
      </div>
    </div>
  );
}

const ButtonStyle =
  "mx-[2px] rounded-md bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600 duration-500 hover:text-slate-800";
