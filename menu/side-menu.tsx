"use client"

import Link from "next/link";
import React from "react";
import style from "@/app/ui/menu/big-menu.module.css"
import { usePathname } from "next/navigation";

export default function SideMenu({
  menuClassName,
}: {
  menuClassName: string;
}) {
  const pathname = usePathname();

    if(pathname === '/html') {
      return (
        <div className={style.divSelector}>
        <button className={`${menuClassName} ${style.selector}`}>Тонка навігація</button>
      <div className={style.selectorContent}><HTMLLinks /></div></div>);
    } else if(pathname === '/css') {
      return (
        <div className={style.divSelector}>
        <button className={`${menuClassName} ${style.selector}`}>Тонка навігація</button>
      <div className={style.selectorContent}><CSSLinks /></div></div>);
    } else if(pathname === '/type-script') {
      return (
        <div className={style.divSelector}>
        <button className={`${menuClassName} ${style.selector}`}>Тонка навігація</button>
      <div className={style.selectorContent}><TypeScriptLinks /></div></div>);
    } else if(pathname === '/react') {
      return (
        <div className={style.divSelector}>
        <button className={`${menuClassName} ${style.selector}`}>Тонка навігація</button>
      <div className={style.selectorContent}><ReactLinks /></div></div>);
    } else if(pathname === '/next') {
      return (
        <div className={style.divSelector}>
        <button className={`${menuClassName} ${style.selector}`}>Тонка навігація</button>
      <div className={style.selectorContent}><NextLinks /></div></div>);
    } else {
    return (
      <div className={style.divSelector}>
        <button className={`${menuClassName} ${style.selector}`}>Тонка навігація</button>
        <div className={style.selectorContent}>
          <div>
            <Link className={style.links} href="/first-days" >First days</Link>
          </div>
          <HTMLLinks />
          <CSSLinks />
          <TypeScriptLinks />
          <ReactLinks />
          <NextLinks />
        </div>
      </div>
    );}
}

function ListConstructor({address, name, children}: 
  {address: string, name: string, children: React.ReactNode;}) {
  return (
  <div>
    <Link className={style.links} href={address} >{name}</Link>
      <ul className={style.selectorUl}>
            {children}
      </ul>
  </div>
  );
}

function HTMLLinks() {
  return (
    <ListConstructor address="/html" name="HTML">
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlForms">Форми</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlFormAtributes">Атрибути форми</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlFormElements">Елементи форми</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlInputAtributes">Атрибути input</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlInputForm">input типи</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlPCCode">Елементи компьютерного коду та 
          Семантичні елементи</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlStyle">Гід по стилю та сутності</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlURL">URL</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlFrames">Фрейми</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlMakets">Макети та адаптивний дизайн</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlLists">Списки</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlDiv">div та id</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlPictures">Зображення</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlTables">Таблиці</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlCite">Цитати</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlHtmlCss">HTML з CSS</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/html#htmlStartAtributes">Стартові атрибути</Link></li>
    </ListConstructor>
  );
}

function CSSLinks() {
  return (
    <ListConstructor address="/css" name="CSS">
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/css#cssLinks">Посилання</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/css#cssTransition">Переходи</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/css#cssAnimation">Анімації</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/css#cssAdaptive">Адаптивний дизайн</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/css#cssGridExampls">Grid в прикладах</Link></li>
    </ListConstructor>
  );
}

function TypeScriptLinks() {
  return (
    <ListConstructor address="/type-script" name="TypeScript">
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/type-script#tsLet">Змінні</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/type-script#tsArray">Масиви</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/type-script#tsTuple">Кортежи</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/type-script#tsObj">Об&#39;єкти</Link></li>
        <li className={style.selectorLi}><Link className={style.liLinks} 
          href="/type-script#tsInterfase">Інтерфейси</Link></li>
        <li className={style.selectorLi}><Link className={style.liLinks} 
          href="/type-script#tsOr">Або | Or</Link></li>
        <li className={style.selectorLi}><Link className={style.liLinks} 
          href="/type-script#tsFunc">Функції</Link></li>
        <li className={style.selectorLi}><Link className={style.liLinks} 
          href="/type-script#tsClass">Класи</Link></li>
        <li className={style.selectorLi}><Link className={style.liLinks} 
          href="/type-script#tsGenerics">&#1168;енерики</Link></li>
    </ListConstructor>
  );
}


function ReactLinks() {
  return (
    <ListConstructor address="/react" name="React">
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/react#reactForms">Форми в React</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/react#reactUseState">useState</Link></li>
    </ListConstructor>
  );
}

function NextLinks() {
  return (
    <ListConstructor address="/next" name="Next.js">
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/next#nextThemes">Тема</Link></li>
      <li className={style.selectorLi}><Link className={style.liLinks} 
        href="/next#nextMyOwnTheme">Власна тема</Link></li>
    </ListConstructor>
  );
}

