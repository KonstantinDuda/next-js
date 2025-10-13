import Link from 'next/link';
import React from 'react'
import LinkList from '../../links';

import style from "@/app/ui/english/blog/blog.module.css";

export default function PersuasionOne() {
    return (
        <>
            <Link href='/english/dictionary#amusement' title='Розвага, забава'>amusement
            </Link> додано до словника. <br />
            Я вже зустрічав раніше подібне використання <b>but</b> як в цій частині
            речення: <i>never took up any book <ins>but</ins> Baronetage</i>. Що означає що
            він ніколи не брав до рук жодної книги <ins>окрім</ins> зазначеної. Це буде не
            просто. Книга зустрічає мене великою кількістю невідомих мені слів. Інколи я
            можу читати далі, просто пропускаючи невідомі слова, адже розумію з контексту, про
            що йдеться, та якщо їх багато то так вже не вийде... Мова про книгу в якій він
            знаходив &#39;<Link href='/english/dictionary#consolation'
                title='Відрада, утіха'>consolation
            </Link> in a distressed one&#39;, there
            his <Link href='/english/dictionary#faculty'
                title='Здатність, здібність, обдарованість'>faculties
            </Link> were <Link href='/english/dictionary#rouse'
                title='Будити, збуджувати'>roused
            </Link> into <Link href='/english/dictionary#admiration'
                title='Захоплення'>admiration
            </Link>. А ще <Link href='/english/dictionary#remnant'
                title='Залишок, рештка'>remnant
            </Link>, <Link href='/english/dictionary#domestic'
                title='Хатній, домашній. Внутрішній. Свійський. Відчизняний'>domestic
            </Link>, <Link href='/english/dictionary#affair'
                title="Справа, діло, заняття. Річ, штука. Любовний зв'язок">affairs
            </Link>, <Link href='/english/dictionary#pity'
                title='Жалість, співчуття'>pity
            </Link>, <Link href='/english/dictionary#contempt'
                title='Призирство, зневага'>contempt</Link>.
            <br /><b> Esq.</b> - скорочення від Esquire - титул, що використовувався в Англії для
            позначення чоловіків високого соціального статусу, зазвичай тих, хто належав до
            дворянства або мав значний вплив у суспільстві. В свою чергу в америці його
            використання майже повнітсю обмежене юридичною сферою. Це титул шанобливого
            звернення до дипломатичних адвокатів, незалежно від статі (отримав таку відповідь
            на запитання до Gemini). <br />
            До свого сорому маю записати ще і <Link href='/english/dictionary#borough'
                title='Невелике місто, яке має самоврядування'>borough
            </Link> до словника. А ще <Link href='/english/dictionary#exertion'
                title='Використання'>exertions
            </Link>, <Link href='/english/dictionary#dignity'
                title='Достоїнство, важливість. Титул, сан. Гідність'>dignity
            </Link>, <Link href='/english/dictionary#baronet'
                title='...'>baronet
            </Link>, <Link href='/english/dictionary#arms'
                title='Герб. Зброя'>arms
            </Link>, <Link href='/english/dictionary#motto'
                title='Девіз, гасло. Висловлювання'>motto</Link>. І це все на перших двох
            сторінках. <br />
            Поки записував слова в словник, за допомогою <a
                href='https://www.dictionary.cambridge.org' target="_blank"
                rel='noreferrer'>dictionary.cambridge.org</a>,
            випливла пропозиція пограти в їх ігри. А я і не знав що там таке є. Застряг
            на пів години, вже і грати не хотів, а натиснув подивитись рекламу щоб
            віддячити їм за гарно проведений час. Я знав що у мене малий словниковий запас,
            але це було весело. А далі повернувся до книги. <Link
                href="/english/dictionary#presumptive" title="...">presumptive</Link> -
            вже друге слово, після baronet, для якого немає перекладу в Cambridge. Та я
            все одно спочатку натискаю &#39;значення&#39; щоб зрозуміти що воно таке і лише
            якщо по ньому не розумію то дивлюсь переклад. Здебільшого вистачає і пояснення.



            <div className={style.idDate}>07.10.2025 - </div>
            <Link href='/english/dictionary#'></Link>
            <LinkList />
        </>
    );
}