"use client";

import { useRouter, useSearchParams } from "next/navigation";
import navigation from "../public/resource/navigation.json";
import { useState } from "react";

export default function Header() {
  const router = useRouter();

  const [index, setIndex] = useState(parseInt(useSearchParams().get("index")!));

  function handlerClick(path: string, index: number) {
    setIndex(index);
    router.push(`${path}?index=${index}`);
  }

  return (
    <main className="header_main">
      <div className="header_logo">文奇的博客</div>

      <div className="header_navigation">
        {navigation.map((item, num) => (
          <div
            key={num}
            className={num === index ? "header_lable_check" : "header_lable"}
            onClick={() => {
              handlerClick(item.path, num);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </main>
  );
}
