import React from 'react'
import LinkList from '../../links';

import style from "@/app/ui/english/blog/blog.module.css";

export default function PersuasionOne() {
    return (
        <>
            <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/amusement'
                title='An entertainmant or interest. The state of being amused or of finding something funny'
                target='_blank' rel='noreferrer'>amusement</a> додано до словника. <br />
            Я вже зустрічав раніше подібне використання <b>but</b> як в цій частині
            речення: <i>never took up any book <ins>but</ins> Baronetage</i>. Що означає що
            він ніколи не брав до рук жодної книги <ins>окрім</ins> зазначеної. Це буде не
            просто. Книга зустрічає мене великою кількістю невідомих мені слів. Інколи я
            можу читати далі, просто пропускаючи невідомі слова, адже розумію з контексту, про
            що йдеться, та якщо їх багато то так вже не вийде... Мова про книгу в якій він
            знаходив &#39;<a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/consolation'
                title='The act of consoling. Something that consoles. Відрада, утіха'
                target='_blank' rel='noreferrer'>consolation
            </a> in a distressed one&#39;, there
            his <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/faculty'
                title='A power of mind. An ability or skill. A section of a university'
                target='_blank' rel='noreferrer'>faculties
            </a> were <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/rouse'
                title='To awake. To stir or excite'
                target='_blank' rel='noreferrer'>roused
            </a> into <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/admiration'
                title='Захоплення'
                target='_blank' rel='noreferrer'>admiration
            </a>. А ще <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/remnant'
                title='A small piece or amount or a small number left over from a larger piece, amount or number'
                target='_blank' rel='noreferrer'>remnant
            </a>, <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/domestic'
                title="Of or in the house or home. Concerning one's private life or family. Not foreign. (of animals) tame and living with or used by people"
                target='_blank' rel='noreferrer'>domestic
            </a>, <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/affair'
                title="A thing. Busines. Concern(s). Happenings etc witch are connected with a particular person or thing. A love relationship"
                target='_blank' rel='noreferrer'>affairs
            </a>, <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/pity'
                title='A cause of sorrow or regret. A feeling of sorrow for the troubles and sufferings of others'
                target='_blank' rel='noreferrer'>pity
            </a>, <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/contempt'
                title='Very low opinion. Scorn. Disregard for the law'
                target='_blank' rel='noreferrer'>contempt</a>.
            <br /><b> Esq.</b> - скорочення від Esquire - титул, що використовувався в Англії для
            позначення чоловіків високого соціального статусу, зазвичай тих, хто належав до
            дворянства або мав значний вплив у суспільстві. В свою чергу в америці його
            використання майже повнітсю обмежене юридичною сферою. Це титул шанобливого
            звернення до дипломатичних адвокатів, незалежно від статі (отримав таку відповідь
            на запитання до Gemini). <br />
            До свого сорому маю записати ще і <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/borough'
                title='In Britain, a town or area with certain rights'
                target='_blank' rel='noreferrer'>borough
            </a> до словника. А ще <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/exertion'
                title='The act of bringing forcefully into use. (an) Effort'
                target='_blank' rel='noreferrer'>exertions
            </a>, <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/dignity'
                title="Statelines or seriousness of manner. One's personal pride. Importance. A privilege etc indicating rank"
                target='_blank' rel='noreferrer'>dignity
            </a>, <a href='https://dictionary.cambridge.org/dictionary/english/baronet'
                title='A man who has the lowest title of honor that can be given in the UK below a baron but above a knight, and givin from father to son'
                target='_blank' rel='noreferrer'>baronet
            </a>, <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/arms'
                title='A design ets which is used as the symbol of the town, family etc. Weapons'
                target='_blank' rel='noreferrer'>arms
            </a>, <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/motto'
                title='A short sentence or phrase witch expresses. A printed saying etc, often found inside a Christmas craker'
                target='_blank' rel='noreferrer'>motto</a>. І це все на перших двох
            сторінках. <br />
            Поки записував слова в словник, за допомогою <a
                href='https://www.dictionary.cambridge.org' target="_blank"
                rel='noreferrer'>dictionary.cambridge.org</a>,
            випливла пропозиція пограти в їх ігри. А я і не знав що там таке є. Застряг
            на пів години, вже і грати не хотів, а натиснув подивитись рекламу щоб
            віддячити їм за гарно проведений час. Я знав що у мене малий словниковий запас,
            але це було весело. А далі повернувся до книги. <a
                href="https://dictionary.cambridge.org/dictionary/english/presumptive"
                title="Belived to be something, or likely to be true,  based on the information that you have"
                target='_blank' rel='noreferrer'>presumptive</a> -
            вже друге слово, після baronet, для якого немає перекладу в Cambridge. Та я
            все одно спочатку натискаю &#39;значення&#39; щоб зрозуміти що воно таке і лише
            якщо по ньому не розумію то дивлюсь переклад. Здебільшого вистачає і пояснення.
            <br /> Я почав додавати title до посилань і писати туди переклад слів. Та вирішив
            що вчиню інакше. На це також повпливало те що у мене занадто швидко розростається
            словник, а переводити його з файлі в БД я не маю бажання, адже є title до посилань...
            <ol>
                <li>Переведу посилання з локальних на ті що в моєму словнику, в більшості
                    випадків вели на dictionary.cambridge.org</li>
                <li>title - до посилань будуть поясненями, якщо по ньому не буде зрозуміло що
                    за слово то можна буде перейти по посиланню. За вийнятком пояснень типу:
                    consolation - something that consoles. The act of consolating.
                    Адже по таким &#39;explonations&#39; неможливо зрозуміти що мається на увазі якщо
                    не знати слово пояснення якого читаєшь</li>
                <li>Видалю власний словник, через те що в ньому більше немає потреби</li>
            </ol>
            Хочь це може ускладнити читання, адже я не зможу просто подивитись в свій блог і
            побачити переклад та продовжити читання, але мені не доведеться вести ще і словник.
            Сподіваюсь це не зробить вивчення слів складнішим.



            <div className={style.idDate}>07.10.2025 - 13.10.2025</div>
            <LinkList />
        </>
    );
}