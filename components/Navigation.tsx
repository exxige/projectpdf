import React from "react";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 pb-6 pt-7 lg:px-0">
      <Logo />
      <nav>
        <ul>
          <li>
              <a href="https://heyform.net/f/mYTgNrF4" className="rounded-full border-[1.5px] border-[#a6a6a6] bg-[#4dbbff] px-4 py-3 text-sm text-white transition-all hover:bg-[#4dbbff]/85">
                Post SEO resource
              </a>
           
          </li>
        </ul>
      </nav>
    </header>
  );
}
