'use client'

import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import style from "@/app/ui/next/myown-theme-changer.module.css"
import Link from "next/link";

export default function MyOwnTheme() {
    const {theme, setTheme} = useTheme();
    const [classNameState, setClassNameState] = useState(style.buttonChanger);

    const [cloudState, setStateCloud] = useState(style.cloudMyOwnToDark);
    const [wbSunnyState, setStateWbSunny] = useState(style.wbSunnyMyOwnToDark);
    const [filterDramaState, setStateFilterDrama] = useState(style.filterDramaMyOwnToDark);
    const [darkModeState, setStateDarkMode] = useState(style.darkModeMyOwnToDark);

    useEffect(()=> {
    if(theme === 'dark') {
        setStateCloud(style.cloudMyOwnToDark);
        setStateWbSunny(style.wbSunnyMyOwnToDark);
        setStateFilterDrama(style.filterDramaMyOwnToDark);
        setStateDarkMode(style.darkModeMyOwnToDark);
    } else if(theme === 'light') {
        setStateCloud(style.cloudDarkToLight);
        setStateWbSunny(style.wbSunnyDarkToLight);
        setStateFilterDrama(style.filterDramaDarkToLight);
        setStateDarkMode(style.darkModeDarkToLight);
    } else {
        setStateCloud(style.cloudLightToMyOwn);
        setStateWbSunny(style.wbSunnyLightToMyOwn);
        setStateFilterDrama(style.filterDramaLightToMyOwn);
        setStateDarkMode(style.darkModeLightToMyOwn);
    }
    }, [theme, style.cloudMyOwnToDark])

    function onClickButton() {
        if(theme === 'dark') {
            setTheme('light');
            setClassNameState(style.buttonChangerLight);
            setStateCloud(style.cloudDarkToLight);
            setStateWbSunny(style.wbSunnyDarkToLight);
            setStateFilterDrama(style.filterDramaDarkToLight);
            setStateDarkMode(style.darkModeDarkToLight);
        } else if(theme === 'light') {
            setTheme('myown');
            setClassNameState(style.buttonChangerMyOwn);
            setStateCloud(style.cloudLightToMyOwn);
            setStateWbSunny(style.wbSunnyLightToMyOwn);
            setStateFilterDrama(style.filterDramaLightToMyOwn);
            setStateDarkMode(style.darkModeLightToMyOwn);
        } else if(theme === 'myown') {
            setTheme('dark');
            setClassNameState(style.buttonChangerDark);
            setStateCloud(style.cloudMyOwnToDark);
            setStateWbSunny(style.wbSunnyMyOwnToDark);
            setStateFilterDrama(style.filterDramaMyOwnToDark);
            setStateDarkMode(style.darkModeMyOwnToDark);
        }
    }

    return (
        <div>
            <h2>Створення власної теми</h2>
            Для створення власної теми додав у layout.tsx до <b>ThemeProvider
            </b> атрибут <ins>themes</ins>=&#123;[<i>&#34;light&#34;, &#34;dark&#34;, 
            &#34;myown&#34;</i>]&#125;, зі списком тем. Важливо вписати темну і світлу 
            теми якщо плануєте їх використовувати. Потім додати в global.css налаштування 
            вашої теми. І додати до перемикача теми можливість отримати вашу тему.<br /> 

            <div className={style.switcher}>
                <button className={`${classNameState} ${style.buttonChanger}`} 
                onClick={() => onClickButton() /*{
                    setTheme(theme === 'dark' ? 'light' : theme === 'light' ? 'myown' : 'dark')
                    setClassNameState(
                        classNameState === style.buttonChangerDark ? 
                        style.buttonChangerLight : classNameState === style.buttonChangerLight ?
                        style.buttonChangerMyOwn : style.buttonChangerDark)}*/}>
                    Перемикач теми</button>
                <i className={`${"material-icons"} ${cloudState} ${style.cloud}`}>
                    cloud</i>
                <i className={`${"material-icons"} ${filterDramaState} ${style.filterDrama}`}>
                    filter_drama</i>
                <i className={`${"material-icons"} ${wbSunnyState} ${style.wbSunny}`}>
                    wb_sunny</i>
                <i className={`${"material-icons"} ${darkModeState} ${style.darkMode}`}>
                    brightness_3</i>
            </div>
            При цьому <a href="https://github.com/KonstantinDuda/next-js/blob/0707939e2a00d37c9109080463e1a7484bf4ae5f/ui/next/myown-theme-changer.module.css"
             target="_blank" rel="noreferrer">
            файл з анімаціями</a> у мене вийшов довжиною в 382 строки! 
            І я сподівався що результат буде гарніше... Зато отримав досвід роботи з 
            useEffect і більше досвіду з useState як я їх використав можна <a 
            href="https://github.com/KonstantinDuda/next-js/blob/0707939e2a00d37c9109080463e1a7484bf4ae5f/next/my-own-theme.tsx"
             target="_blank" rel="noreferrer">
            подивитись тут</a>. Далі планую продовжити <Link href="/css">вивчення CSS
            </Link> щоб дізнатись чи можливо використати змінні з одного CSS файла в іншому. 
        </div>
    );
}