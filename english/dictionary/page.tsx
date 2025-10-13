import Link from "next/link";
import React from "react";
import MyTable from "./table";

export default function Page() {
    return (
        <>
            <h1>Dictionary</h1>
            <h2><Link href="/english/blog"> Back to blog </Link></h2>
            <MyTable />
            <h3><Link href=".">Повернутись на головну сторінку</Link></h3>
        </>
    );
}