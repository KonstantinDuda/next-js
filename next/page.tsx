import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <>
        <h1><Link href="./react">Next.js draft</Link></h1>
        
        <h3><Link href=".">Повернутись на головну сторінку</Link></h3>
        </>
    );
}