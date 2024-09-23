import React from "react";
import Button from "../../common/button/button.tsx";

const HeaderSection: React.FC = () => {
  return (
    <header className="bg-white py-12 px-[135px]">
      <div className="w-full flex items-center justify-between">
        {/* Left Content */}
        <div className="w-1/2 text-left gap-y-4">
          <h3 className="text-[24px] font-semibold leading-[36px] text-[#686868]">
            From Our Hearts to Your Home
          </h3>
          <h1 className="text-[48px] font-normal text-red-500">
            A Community{" "}
            <span className="text-orange-500 font-bold">
              Grocery <br />
              Giveaway Across Canada
            </span>
          </h1>
          <p className="text-[24px] font-semibold leading-[36px] text-[#686868]">
            Daily Basis Grocery Gift
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center gap-x-4">
            <Button className="pl-5 pr-2 flex items-center justify-between w-[222px] h-[60px] rounded-[30px] font-semibold text-[18px] leading-[21px] bg-custom-gradient text-white">
              <span>Get Coupon</span>
              <div className="w-[52px] h-[52px] rounded-full flex justify-center items-center bg-white">
                <img src="/images/_arrowRight.svg" alt="img" />
              </div>
            </Button>

            <Button className="pl-2 pr-4 flex flex-row-reverse items-center justify-between w-[222px] h-[60px] rounded-[30px] font-semibold text-[18px] leading-[21px] bg-transparent border border-[#CE221E] text-white">
              <span className="text-[#CE221E]">Watch video</span>
              <img src="/images/_playButton.svg" alt="img" />
            </Button>
          </div>

          {/* Quote */}
          <p className="mt-6 text-[32px] leading-[39px] font-bold text-[#E84A4A]">
            “One year Grocery gift from{" "}
            <span className="text-green-600">MR</span>”
          </p>

          {/* Customer Reviews */}
          <div className="mt-4 flex items-center space-x-3">
            <img
              src="/images/_reviewsProfile.png"
              alt="Customer Avatar"
              className="w-[109px] h-[52px]"
            />
            <div>
              <p className="text-sm">Our Happy Customers</p>
              <p className="text-sm font-bold">4.5 (567 Reviews)</p>
            </div>
          </div>

          {/* App Download */}
          <div className="mt-6 flex gap-4">
            <Button className="w-[156px] h-[60px]">
              <img src="/images/_playStore.png" alt="playStore" />
            </Button>
            <Button className="w-[156px] h-[60px]">
              <img src="/images/_ios.png" alt="playStore" />
            </Button>
            {/* Countdown */}
            <div className="inline-flex gap-2">
              <div className="w-[60px] h-[60px] rounded-full border border-[#686868] flex flex-col justify-center items-center">
                <h2 className="text-[24px] font-black leading-[29px]">04</h2>
                <p className="text-[13px] font-normal leading-[15px]">Hours</p>
              </div>
              <div className="w-[60px] h-[60px] rounded-full border border-[#686868] flex flex-col justify-center items-center">
                <h2 className="text-[24px] font-black leading-[29px]">45</h2>
                <p className="text-[13px] font-normal leading-[15px]">
                  Minutes
                </p>
              </div>
              <div className="w-[60px] h-[60px] rounded-full border border-[#686868] flex flex-col justify-center items-center">
                <h2 className="text-[24px] font-black leading-[29px]">32</h2>
                <p className="text-[13px] font-normal leading-[15px]">
                  Seconds
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-1/2">
          <img
            src="/images/_headerImage.png"
            alt="Grocery Giveaway"
            className="w-full h-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
