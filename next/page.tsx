import Link from "next/link";
import React from "react";
import MyNextThemes from "./my-next-themes";

export default function Page() {
    return (
        <>
        <h1><Link href="./next">Next.js draft</Link></h1>
        <MyNextThemes />
        <h3><Link href=".">Повернутись на головну сторінку</Link></h3>
        </>
    );
}