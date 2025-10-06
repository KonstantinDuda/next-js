import Link from "next/link";
import React from "react";
import style from "@/app/ui/menu/root.module.css"

export default function Menu({
  menuClassName,
}: {
  menuClassName: string;
}) {
    return (
      <div className={`${style.divSelector} ${style.divSelectorMenu}`}>
      <button className={`${style.selector} ${style.selectorMenu} ${menuClassName}`}>
        Меню</button>
      <div className={`${style.selectorContent} ${style.selectorContentMenu}`}>
        <Link className={style.links} href="/" >Головна</Link>
        <Link className={style.links} href="/first-days" >First days</Link>
        <Link className={style.links} href="/html" >HTML</Link>
        <Link className={style.links} href="/css" >CSS</Link>
        <Link className={style.links} href="/type-script" >TypeScripte</Link>
        <Link className={style.links} href="/react" >React</Link>
        <Link className={style.links} href="/next" >Next.js</Link>
        <Link className={style.links} href="/english" >English</Link>
        </div>
      </div>
    );
}