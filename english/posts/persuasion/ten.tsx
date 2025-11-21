import React from 'react'

import style from "@/app/ui/english/blog/blog.module.css";
//import Link from 'next/link';

export default function PersuasionTen() {
    return (
        <>
            <div className={style.persuasionTwoFlex}>
                <ul className={style.persuasionTwoText}>
                    <li>
                        <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/impatient'
                            title="Нетерплячий"
                            target='_blank' rel='noreferrer'>impatient</a> - Not willing to
                        wait or delay. Not patient
                    </li>
                    <li>
                        <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/reckoning'
                            title="Розрахунок, обчислення"
                            target='_blank' rel='noreferrer'>reckoning</a> - Calkulation.
                        Counting. The settling of debts etc
                    </li>
                    <li>
                        <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/inevitably'
                            title="Певна річ, звичайно"
                            target='_blank' rel='noreferrer'>inevitably</a> - As you might
                        expect
                    </li>
                    <li>
                        <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/confinement'
                            title="Ув'язнення. Пологи"
                            target='_blank' rel='noreferrer'>confinement</a> - State of being
                        shut up or imprisoned. (the time of) The birth of a baby
                    </li>
                    <li>
                        <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/scolding'
                            title="Прочухан, лайка"
                            target='_blank' rel='noreferrer'>scolding</a> - A starn or
                        angry rebuke
                    </li>
                </ul>
                <ul className={style.persuasionTwoImage}>
                    <li>
                        <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/teasing'
                            title="Дражнити. Задирака"
                            target='_blank' rel='noreferrer'>teasing</a> - To annoy or
                        irritate on purpose. A person who enjoys teasing others
                    </li>
                    <li>
                        <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/excessively'
                            title="Надмірно"
                            target='_blank' rel='noreferrer'>excessively</a> - In a way that
                        is too much
                    </li>
                    <li>
                        <a href='https://dictionary.cambridge.org/dictionary/english/alienation'
                            title="Відчуження, віддалення. Божевілля"
                            target='_blank' rel='noreferrer'>alienations</a> - The feeling that
                        you have no connection with the people around you or that you are not
                        part of a group
                    </li>
                    <li>
                        <a href='https://dictionary.cambridge.org/dictionary/english/sobering'
                            title="Протвережуючий"
                            target='_blank' rel='noreferrer'>sobering</a> - Making you feel
                        serious or think about serious matters
                    </li>
                    <li>
                        <a href='https://dictionary.cambridge.org/dictionary/english/timidity'
                            title="Сором'язливість, боязкість"
                            target='_blank' rel='noreferrer'>timidity</a> - The quality of
                        being shy and nervous
                    </li>
                    {/*<li>
                <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/'
                title=""
                target='_blank' rel='noreferrer'></a>
                        </li>*/}
                </ul >
            </div>
            <h3>Capter 7 &#8657;</h3>
            <div className={style.idDate}>14.11.2025 - 17.11.2025</div>
        </>
    );
}