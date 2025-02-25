import React from "react";
import Menu from './menu';
import style from '@/app/ui/root.module.css';
import SideMenu from './side-menu';

export default function TopMenu({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <div className={style.main}>
            <div className={style.menuContainer}></div>
            <Menu menuClassName={style.menu} />
            <SideMenu className={style.sideMenu}>sideMenu</SideMenu>
            <div className={style.dataDiv}>
                {children}
            </div>
        </div>
    );
}