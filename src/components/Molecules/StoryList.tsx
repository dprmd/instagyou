import PeopleStory from "../Atoms/PeopleStory";

export default function StoryList() {
  return (
    <div className="no-scrollbar flex max-w-full gap-x-3 overflow-x-scroll px-2 py-2">
      <PeopleStory
        title="adprmdi"
        srcImg="/img/people.jpeg"
        className="h-14 w-14"
        maxWTitle="max-w-16"
      />
      <PeopleStory
        title="adprmdi"
        srcImg="/img/people.jpeg"
        className="h-14 w-14"
        maxWTitle="max-w-16"
      />
      <PeopleStory
        title="adprmdi"
        srcImg="/img/people.jpeg"
        className="h-14 w-14"
        maxWTitle="max-w-16"
      />
      <PeopleStory
        title="rapi"
        srcImg="/img/people.jpeg"
        className="h-14 w-14"
        maxWTitle="max-w-16"
      />
    </div>
  );
}
