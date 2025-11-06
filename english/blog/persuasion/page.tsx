import React from 'react'
import LinkList from '../../links';
import PersuasionOne from '../../posts/persuasion/one';
import PersuasionTwo from '../../posts/persuasion/two';
import PersuasionThree from '../../posts/persuasion/three';
import PersuasionFour from '../../posts/persuasion/four';
import PersuasionFive from '../../posts/persuasion/five';
import PersuasionSix from '../../posts/persuasion/six';
import PersuasionSeven from '../../posts/persuasion/seven';
import PersuasionEight from '../../posts/persuasion/eight';
//import PersuasionNine from '../../posts/persuasion/nine';

export default function Page() {
    return (
        <>
            <h2>Persuasion</h2>
            <h3>by Jane Austin. Release date: February 1, 1994</h3>
            <h3>Читаю завдяки <a href="https://www.gutenberg.org/ebooks/105"
                target="_blank" rel='noreferrer'>Project Gutenberg</a>.</h3>
            {/*<PersuasionNine />*/}
            <PersuasionEight />
            <PersuasionSeven />
            <PersuasionSix />
            <PersuasionFive />
            <PersuasionFour />
            <PersuasionThree />
            <PersuasionTwo />
            <PersuasionOne />
            <LinkList />
        </>
    );
}