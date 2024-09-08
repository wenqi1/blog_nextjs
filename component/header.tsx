"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  function handlerClick() {
    router.push("/home");
  }

  return (
    <main className="header_main">
      <div className="header_logo" onClick={handlerClick}>
        文奇的博客
      </div>

      <div className="header_navigation">
        <div className="header_lable">技术博客</div>
        <div className="header_lable">生活随笔</div>
        <div className="header_lable">旅游记录</div>
        <div className="header_lable">个人简历</div>
      </div>
    </main>
  );
}
