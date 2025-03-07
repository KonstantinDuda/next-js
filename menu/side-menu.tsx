"use client"

import Link from "next/link";
import React from "react";
import style from "@/app/ui/menu/root.module.css"
import { usePathname } from "next/navigation";

export default function SideMenu({
  menuClassName,
}: {
  menuClassName: string;
}) {
  const pathname = usePathname();

    if(pathname === '/html') {
      return (
        <ListConstructor address="/html" name="HTML" menuClassName={menuClassName}>
          <HTMLLinks />
        </ListConstructor>);
    } else if(pathname === '/css') {
      return (
        <ListConstructor address="/css" name="CSS" menuClassName={menuClassName}>
          <CSSLinks />
        </ListConstructor>);
    } else if(pathname === '/type-script') {
      return (
        <ListConstructor address="/type-script" name="TypeScript" 
            menuClassName={menuClassName}>
          <TypeScriptLinks />
        </ListConstructor>);
    } else if(pathname === '/react') {
      return (
        <ListConstructor address="/react" name="React" menuClassName={menuClassName}>
          <ReactLinks />
        </ListConstructor>);
    } else if(pathname === '/next') {
      return (
        <ListConstructor address="/next" name="Next.js" menuClassName={menuClassName}>
          <NextLinks />
        </ListConstructor>);
    } else {
    return (
      <MyNav menuClassName={menuClassName}>
          <div>
            <Link className={style.links} href="/first-days" >First days</Link>
          </div>
          <MyLink address="/html" name="HTML">
            <HTMLLinks /></MyLink>
          <MyLink address="/css" name="CSS">
            <CSSLinks /></MyLink>
          <MyLink address="/type-script" name="TypeScript">
            <TypeScriptLinks /></MyLink>
          <MyLink address="/react" name="React">
            <ReactLinks /></MyLink>
          <MyLink address="/next" name="Next.js">
            <NextLinks /></MyLink>
      </MyNav>
    );}
}

function MyNav({children, menuClassName}: 
  {children: React.ReactNode, menuClassName: string;}) {
  return (
    <div className={`${style.divSelector} ${style.divSelectorSideMenu}`}>
      <button className={`${menuClassName} ${style.selector} ${style.selectorSideMenu}`}>
        Тонка навігація</button>
      <div className={`${style.selectorContent} ${style.selectorContentSideMenu}`}>
        {children}
      </div>
    </div>
  );
}
function MyLink({address, name, children}: 
  {address: string, name: string, children: React.ReactNode;}) {
  return (
    <>
      <Link className={style.links} href={address} >{name}</Link>
      <ul className={style.selectorUl}>
        {children}
      </ul>
    </>
  );
}

function ListConstructor({address, name, children, menuClassName}: 
  {address: string, name: string, children: React.ReactNode, menuClassName: string;}) {
  return (
    <MyNav menuClassName={menuClassName}>
      <MyLink address={address} name={name}>
        {children}
      </MyLink>
    </MyNav>
  );
}

function HTMLLinks() {
  const htmlLinks: {name: string, address: string}[] = [
    {name: "Форми",           address: "/html#htmlForms"},
    {name: "Атрибути форми",  address: "/html#htmlFormAtributes"},
    {name: "Елементи форми",  address: "/html#htmlFormElements"},
    {name: "Атрибути input",  address: "/html#htmlInputAtributes"},
    {name: "input типи",      address: "/html#htmlInputForm"},
    {name: "Елементи компьютерного коду та Семантичні елементи",
                              address: "/html#htmlPCCode"},
    {name: "Гід по стилю та сутності", address: "/html#htmlStyle"},
    {name: "URL",             address: "/html#htmlURL"},
    {name: "Фрейми",          address: "/html#htmlFrames"},
    {name: "Макети та адаптивний дизайн", address: "/html#htmlMakets"},
    {name: "Списки",          address: "/html#htmlLists"},
    {name: "div та id",       address: "/html#htmlDiv"},
    {name: "Зображення",      address: "/html#htmlPictures"},
    {name: "Таблиці",         address: "/html#htmlTables"},
    {name: "Цитати",          address: "/html#htmlCite"},
    {name: "HTML з CSS",       address: "/html#htmlHtmlCss"},
    {name: "Стартові атрибути", address: "/html#htmlStartAtributes"},
    ];

  return (<>
      {htmlLinks.map((link, index) => (
        <li className={style.selectorLi} key={index}><Link className={style.liLinks} 
          href={link.address}>{link.name}</Link></li>
      ))}</>
  );
}

function CSSLinks() {
  const cssLinks: {name: string, address: string}[] = [
    {name: "Посилання",       address: "/css#cssLinks"},
    {name: "Переходи",        address: "/css#cssTransition"},
    {name: "Анімації",        address: "/css#cssAnimation"},
    {name: "Адаптивний дизайн",address: "/css#cssAdaptive"},
    {name: "Grid в прикладах",address: "/css#cssGridExampls"},
  ];

  return (
    <>
      {cssLinks.map((link, index) => (
        <li className={style.selectorLi} key={index}><Link className={style.liLinks} 
          href={link.address}>{link.name}</Link></li>
      ))}
    </>
  );
}

function TypeScriptLinks() {
  const tsLinks: {name: string, address: string}[] = [
    {name: "Змінні",          address: "/type-script#tsLet"},
    {name: "Масиви",          address: "/type-script#tsArray"},
    {name: "Кортежи",         address: "/type-script#tsTuple"},
    {name: "Об'єкти",         address: "/type-script#tsObj"},
    {name: "Інтерфейси",      address: "/type-script#tsInterfase"},
    {name: "Або | Or",        address: "/type-script#tsOr"},
    {name: "Функції",         address: "/type-script#tsFunc"},
    {name: "Класи",           address: "/type-script#tsClass"},
    {name: "Генерики",        address: "/type-script#tsGenerics"},];

  return (
    <>
      {tsLinks.map((link, index) => (
        <li className={style.selectorLi} key={index}><Link className={style.liLinks} 
          href={link.address}>{link.name}</Link></li>
      ))}
    </>
  );
}


function ReactLinks() {
  const reactLinks: {name: string, address: string}[] = [
    {name: "Форми в React",    address: "/react#reactForms"},
    {name: "useState",         address: "/react#reactUseState"},
  ];

  return (
    <>
      {reactLinks.map((link, index) => (
        <li className={style.selectorLi} key={index}><Link className={style.liLinks} 
          href={link.address}>{link.name}</Link></li>
      ))}
    </>
  );
}

function NextLinks() {
  const nextLinks: {name: string, address: string}[] = [
    {name: "Тема",            address: "/next#nextThemes"},
    {name: "Власна тема",     address: "/next#nextMyOwnTheme"},];

  return (
    <>
      {nextLinks.map((link, index) => (
        <li className={style.selectorLi} key={index}><Link className={style.liLinks} 
          href={link.address}>{link.name}</Link></li>
      ))}
    </>
  );
}

