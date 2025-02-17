import React from "react";
import StartToAtributes from "./start-atributes";
import HtmlWithCSS from "./html-css";
import Citates from "./citates";
import Link from "next/link";
import Pictures from "./pictures";
import MyList from "./list";
import Frames from "./frames";
import CodeElement from "./code-elements";
import Forms from "@/app/html/forms/page";

export default function Page() {
    return (
        <>
            <h1><Link href="./html"> Html draft</Link></h1>
            <Forms />
            <CodeElement />
            <Frames />
            <MyList />
            <Pictures />
            <Citates />
            <HtmlWithCSS />
            <StartToAtributes />
            <h3><Link href=".">Повернутись на головну сторінку</Link></h3>
        </>
    );
}