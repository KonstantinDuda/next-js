import React from 'react'

import style from "@/app/ui/english/blog/blog.module.css";
import Link from 'next/link';

export default function PersuasionThree() {
    return (
        <>
            &#8195;
            <ul>
                <li>
                    <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/amiable'
                        title="Люб'язний. Доброзичливий"
                        target='_blank' rel='noreferrer'>amiable</a> - Likeable. Pleasant and
                    good-tempered.
                </li>
            </ul>
            Though - знайоме слово. Та я завжди його забуваю. Спробую пізніше
            знайти <a href='https://www.youtube.com/watch?v=fGSVNwNFckU'
                title=""
                target='_blank' rel='noreferrer'>посилання на відео</a> в якому розбирають
            його та схожі на нього слова, виписати їх собі і додати сюди <Link
                href='./you-tube#makashovskiyThough'
                title=""
                target='_blank' rel='noreferrer'>посилання</ Link>, на мій запис про те
            відео.
            <ul><li><a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/indifference?q=indifference'
                title="Байдужість. Посередність"
                target='_blank' rel='noreferrer'>indifference</a> - The state of showing no
                interest in, or concern about, something. </li></ul>
            &#8195; <b>
                Я тут усвідомив що мені не обов&#39;язкого взагалі переходити до словника щоб
                дізнатись переклад. Якщо я записую слово, значить я його не знаю. Тож я можу
                одразу писати його пояснення через тере, а в title писати його переклад. Та
                посилання я всеж буду додавати, адже там можна буде подивитись приклади їх
                використання. </b> <br />
            <ul>
                <li>
                    <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/bequeath'
                        title="Заповідати"
                        target='_blank' rel='noreferrer'>bequeath</a> - to leave (personal
                    belongings) by will.
                </li>
                <li>
                    <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/confide'
                        title="Зізнаватися. Довіряти"
                        target='_blank' rel='noreferrer'>confide</a> - To tell one&#39;s
                    private thoughts to someone
                </li>
                <li>
                    <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/guidance'
                        title="Керівнитство"
                        target='_blank' rel='noreferrer'>guidance</a> - Advice towards doing
                    something.
                </li>
                <li>
                    <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/conceited'
                        title="Зарозумілий. Самовдоволений"
                        target='_blank' rel='noreferrer'>conceited</a> - Having too much
                    pride in oneself.
                </li>
                <li>
                    <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/acquaintance'
                        title="Знайомство. Знання"
                        target='_blank' rel='noreferrer'>acquaintance</a> - A person whom one
                    knows slightly. (with with) <sub>formal</sub> knowlage.
                </li>
                <li>
                    <a
                        href='https://dictionary.cambridge.org/dictionary/english-ukrainian/fancy'
                        title="Уподобання, пристрасть. Уява, фантазія. Вигадка"
                        target='_blank' rel='noreferrer'>fancy</a> - A sudden (often unexpected)
                    liking or desire. The power of the mind to imagine things. Something
                    imagined.
                </li>
            </ul>


            <a href=''
                title=""
                target='_blank' rel='noreferrer'></a>
            <div className={style.idDate}>17.10.2025</div>
        </>
    );
}