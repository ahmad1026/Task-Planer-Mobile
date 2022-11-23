import React from "react";

export default function SignInForm() {
  return (
    <div className="h-screen border border-[#E4EDFF] bor mx-auto font-body">
      <div className="w-full flex flex-col mt-12 items-center gap-6">
        <div className="shadow-2xl flex items-center justify-center w-20 bg-white h-20 bg-white rounded-2xl">
          <img className="w-12" src="/logo.svg" alt="" />
        </div>
        <div className="text-primaryText text-center">
          <h1 className="text-2xl font-extrabold">My Study Life</h1>
          <p className="w-3/4 mx-auto text-base">
            Create a unique emotional story that describes better than words
          </p>
        </div>
        <div className="border_color w-full rounded-t-3xl border-t pt-8 px-6 font-bold text-primaryText">
          <h1>Signin With</h1>
          <div className="flex flex-col gap-10 mt-8">
            <div className="flex gap-8">
              <div className="border flex flex-1 items-center justify-center border-primary rounded-lg gap-2 px-4 py-4">
                <img src="/Google-logo.svg" alt="" />
                <h1 className="font-bold">Google</h1>
              </div>
              <div className="border flex flex-1 items-center justify-center border-primary rounded-lg gap-2 px-4 py-4">
                <img src="/Apple-logo (1).svg" alt="logo" />
                <h1 className="font-bold">Apple</h1>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="w-8 flex-1 divide-[#C4D7FF]">
                <hr className="border-[#C4D7FF]" />
              </div>
              <div className="text-xl font-normal">Or</div>
              <div className="w-8 flex-1">
                <hr className="border-[#C4D7FF]" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <input
                className="border rounded-lg border-[#C4D7FF] outline-none px-4 py-4"
                type="text"
                placeholder="d.che.nevsky@gmail.com"
              />
              <div className="w-full bg-primary rounded-lg py-4 text-white text-center">
                Continue
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
