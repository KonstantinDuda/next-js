import Link from "next/link";
import React from 'react';
import ReactForms from "@/app/react/react-forms";

export default function Page() {
    return (
        <>
        <h1><Link href="./react">React draft</Link></h1>
        <ReactForms />
        <h3><Link href=".">Повернутись на головну сторінку</Link></h3>
        </>
    );
}