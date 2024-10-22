import React from "react";
import Logo from "./Logo";
import FormModal from "./FormModal";
import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 pb-6 pt-7 lg:px-0">
      <Logo />
      <nav>
        <ul>
          <li>
              <a href="https://forms.gle/ZgmJxaZD1xzM3B6d9" className="rounded-full border-[1.5px] border-[#a6a6a6] bg-black px-4 py-3 text-sm text-white transition-all hover:bg-black/85">
                Post SEO resource
              </a>
            {/* <FormModal>
            </FormModal> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
