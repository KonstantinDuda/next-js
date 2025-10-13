import React from 'react'
import PersuasionOne from '../../posts/persuasion/one';

export default function Page() {
    return (
        <>
            <h2>Persuasion</h2>
            <h3>by Jane Austin. Release date: February 1, 1994</h3>
            <h3>Читаю завдяки <a href="https://www.gutenberg.org/ebooks/105"
                target="_blank" rel='noreferrer'>Project Gutenberg</a>.</h3>
            <PersuasionOne />
        </>
    );
}