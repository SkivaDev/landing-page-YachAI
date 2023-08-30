import React from "react";

import ray_icon from '../assets/images/ray_icon.svg';
import plus_icon from '../assets/images/plus_icon.svg';
import book_icon from '../assets/images/book_icon.svg';
import profile_icon from '../assets/images/profile_icon.svg';

function Header() {
  const links = ["Features", "Business", "Education", "Resources"];

  return (
    <header className="w-full h-[64px] bg-head_black flex justify-center items-center">
      <nav className="max-w-[1097] flex justify-between items-center gap-[165px]">
          <ul className="flex justify-center gap-[44px] text-white2 text-[14px]">
            {links.map((link, i) => (
              <li key={i}>
                <a href="">{link}</a>
              </li>
            ))}
          </ul>
        <div className="flex items-center justify-center gap-[24px] text-[14px]">
          <button className="flex gap-[4px] px-[10px] pt-[9px] pb-[13px] rounded-xl bg-yellow ">
            <img src={ray_icon} alt="ray_icon" />
            Upgrade
          </button>
          <button className="flex gap-[8px] px-[10px] pt-[9px] pb-[13px] rounded-xl bg-light_purple text-white">
            <img src={plus_icon} alt="plus_icon" />
            Create Quiz
          </button>
          <button className="flex gap-[8px] px-[10px] pt-[9px] pb-[13px] rounded-x text-white">
            <img src={book_icon} alt="book_icon" />
            My Library
          </button>
          <button className="flex justify-center items-center rounded-full bg-light_purple p-[12px]">
            <img src={profile_icon} alt="profile_icon" className="w-[16px] h-[16px]"/>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
