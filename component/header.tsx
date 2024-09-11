"use client";

import { useRouter } from "next/navigation";
import navigation from "../public/resource/navigation.json";

export default function Header() {
  const router = useRouter();

  function handlerClick(path: string) {
    router.push(path);
  }

  return (
    <main className="header_main">
      <div
        className="header_logo"
        onClick={() => {
          handlerClick("/home");
        }}
      >
        文奇的博客
      </div>

      <div className="header_navigation">
        {navigation.map((item, index) => (
          <div
            key={index}
            className="header_lable"
            onClick={() => {
              handlerClick(item.path);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </main>
  );
}
