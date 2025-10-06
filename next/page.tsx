import Link from "next/link";
import React from "react";
import MyNextThemes from "./my-next-themes";
import MyOwnTheme from "./my-own-theme";
import ReactNext from "./react-next";
import Dashboard from "./dashboard";

export default function Page() {
    return (
        <>
        <h1><Link href="./next">Next.js draft</Link></h1>
        <Dashboard />
        <ReactNext />
        <MyNextThemes />
        <MyOwnTheme />
        <h3><Link href=".">Повернутись на головну сторінку</Link></h3>
        </>
    );
}