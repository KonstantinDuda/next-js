import React from "react";
import Menu from './menu';
import style from '@/app/ui/menu/root.module.css';
import SideMenu from './side-menu';

export default function TopMenu({
  children, menuClassName,
}: {
  children?: React.ReactNode, menuClassName: string;
}) {
    return (
        <div className={`${style.main} ${menuClassName}`}>
            <div className={style.menuContainer}></div>
            <Menu menuClassName={style.menu} />
            <SideMenu menuClassName={style.sideMenu} />
            <div className={style.dataDiv}>
                {children} 
            </div>
        </div>
    );
}