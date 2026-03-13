import React from "react";
import { TbSquareRoundedLetterMFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span className="inline-flex items-center gap-2">
          <TbSquareRoundedLetterMFilled className="h-5 w-5" />
          Have a great day!
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
