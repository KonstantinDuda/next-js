import Link from "next/link";
import React from "react";
import MyTable from "./table";

export default function Page() {
    return (
        <>
            <h1><Link href="./html"> English dictionary </Link></h1>
             <MyTable />
            <h3><Link href=".">Повернутись на головну сторінку</Link></h3>
        </>
    );
}