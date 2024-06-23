import SuggestedAccount from "../../components/Atoms/SuggestedAccount";
import useAuthStore from "../../store/authStore";

export default function SuggestedAccounts() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="hidden p-4 md:block md:min-w-[30%] lg:min-w-[35%]">
      <SuggestedAccount
        isSuggested={false}
        onClick={() => {
          logout();
        }}
        customText="Logout"
      />
      <h2 className="my-4 text-slate-600">Suggested for you</h2>
      <SuggestedAccount isSuggested={true} />
      <SuggestedAccount isSuggested={true} />
      <SuggestedAccount isSuggested={true} />
      <SuggestedAccount isSuggested={true} />
    </div>
  );
}
