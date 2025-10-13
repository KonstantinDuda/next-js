import Link from 'next/link';
import React from 'react'

export default function LinkList() {
    return (
        <div>
            <h3>Link list:</h3>
            <Link href='/english/dictionary'>Словник</Link> <br />
            <Link href='/english/blog/persuasion'>Persuasion</Link> <br />
        </ div>
    );
}