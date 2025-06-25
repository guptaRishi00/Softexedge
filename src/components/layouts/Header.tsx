import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#11151c] p-5 flex items-center justify-between">
      <Link href={"/"}>
        <Image src={"/logo.png"} width={100} height={100} alt="logo" />
      </Link>
      <nav className="">
        <ul className="flex items-center gap-10">
          {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
            <li key={item} className="text-sm font-semibold">
              <Link href={`/${item.toLowerCase()}`} className="text-white">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-white border border-white rounded-full p-2 ">
        <Menu size={20} />
      </div>
    </header>
  );
}
