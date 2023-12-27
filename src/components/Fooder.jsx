import React from "react";

export const Fooder = () => {
  return (
    <div className="w-full pt-16 bg-neutral-100 border-gray-200 border-t flex justify-center">
      <div className="w-5/6">
        <div>
          <div className=" flex flex-col gap-6">
            <div className=" flex flex-col gap-6">
              <h2 className="text-gray-900 text-lg font-semibold font-['Work Sans'] leading-7">
                About
              </h2>
              <p className="w-[280px] text-zinc-500 text-base font-normal font-['Work Sans'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>

            <div>
              <p className="text-gray-900 text-base font-normal font-['Work Sans'] leading-normal">
                Email : info@jstemplate.net
              </p>
              <p className="text-gray-900 text-base font-normal font-['Work Sans'] leading-normal">
                Phone : 880 123 456 789{" "}
              </p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
