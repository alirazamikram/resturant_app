import React from "react";
import { navItems } from "../../../data/nav-items.ts";
import Button from "../button/button.tsx";

const Navbar = () => {
  return (
    <div className="w-full h-[120px] px-[135px] flex justify-between items-center font-montserrat">
      <img src="/images/_logo.svg" alt="logo" />
      <div className="flex gap-5 items-center">
        {navItems?.map((item, index) => {
          return (
            <h2
              key={index}
              className="text-[18px] font-medium leading-[21px] cursor-pointer"
            >
              {item.title}
            </h2>
          );
        })}
      </div>

      <div className="flex gap-5 items-center">
        <img src="/images/_translate.svg" alt="" />
        <img src="/images/_wallet.svg" alt="" />
        <Button className="w-[105px] h-9 rounded-[30px] text-sm leading-[19px] font-semibold text-[#F4E3E3EB] bg-custom-gradient">
          Sign in
        </Button>
        <img src="/images/_notification.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
