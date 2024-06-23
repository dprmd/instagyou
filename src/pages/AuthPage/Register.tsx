import RegisterForm from "../../components/Molecules/RegisterForm";

export default function Register() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block">
        <div>
          <img src="/img/ig-preview.png" alt="Ig Preview" />
        </div>
      </div>
      <div className="w-[90vw] sm:w-[70vw] md:w-[380px]">
        <RegisterForm />

        {/* Get The App From Play Store or App Store */}
        <div className="my-4 text-center">
          <span>Get the app.</span>
          <div className="my-2 flex justify-center gap-x-2">
            <img
              className="w-32"
              src="/img/GetAppStore.png"
              alt="Get Instagyou on App Store"
            />
            <img
              className="w-32"
              src="/img/GetPlayStore.png"
              alt="Get Instagyou on Play Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
