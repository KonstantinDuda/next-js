import style from "@/app/ui/html/frames.module.css";
import React from "react";

export default function Frames() {
    return (
        <>
        <h1>Фрейми</h1>
        28.01.2025 Фрейми використовують щов відображати вебсторінку на вебсторінці. <b>
        iframe</b> - фрейм. <ins>src</ins> - адреса url. <ins>title</ins> - опис. Також можна 
        визначити розмір фрейма. Стилізуванням можна вимкнути межу <i>border: none</i>. <ins>
        name</ins> - ім&#39;я фрейма на яке можна посилатись за допомогою <ins>target</ins> тега а.
        <h2>JavaScript</h2>
        <b>script</b> - скрипт. <ins>src</ins> - вказує на зовнішній файл скрипту. Метод що 
        часто використовують: <i>document.getElementById</i> - звернення до елемента по 
        ідентифікатору. Не буду тут сильно заглиблюватись в це. Про це пізніше.
        <h2>Head</h2>
        <b>head</b> - контейнер для метаданних. На скільки я зрозумів він знаходиться в 
        layout. Може містити в собі <b>title</b>, <b>meta</b> - <blockquote cite="
        https://w3schoolsua.github.io/html/html_head.html#gsc.tab=0">Метадані не будуть 
        відображатися на сторінці, але використовуються браузерами (як відображати контент 
        чи перезавантажувати сторінку), пошуковими системами (опис, ключові слова) та іншими 
        вебслужбами.</blockquote> meta зазвичай використовується для <ins>carset</ins> - 
        визначення набору символів (<i>UTF-8</i>), <ins>content</ins> - визначення ключових 
        слів для пошукових систем (<i>HTML, CSS, React, TypeScript, Next.js</i>). Але тут 
        мене трохи заплутали, тому що для ключових слів і для опису сторінки, і для визначення 
        автора використовують <ins>name</ins> i <ins>content</ins> теги, таким чином: meta 
        name=&#34;keywords&#34; content=&#34;HTML, CSS, JavaScript&#34;. eta name=&#34;description&#34; 
        content=&#34; Free Web tutorials&#34;. meta name=&#34;author&#34; content=&#34;John Doe&#34;. 
        Також meta використовують 
        для налаштування області перегляду за допомогою тих самих властивостей. Зазначається 
        що meta name=&#34;viewport&#34; content=&#34;width=device-width, initial-scale=1.0&#34; 
        необхідно вказувати на всіх вебсторінках... <b>base</b> - визначає базову URL-адресу. 
        Атрибути: <ins>href</ins>, <ins>target</ins> (<i>_blank</i>).
        <h2>Макети</h2>
        Елементи для створення макету сайту: <b>header</b> - заголовок документа або розділу, 
        <b>nav</b> - контейнер для посилань навігації, <b>section</b> - розділ, <b>article
        </b> - незалежна, автономна стаття, <b>aside</b> - контент окремий від основного  (
        наприклад бокова панель), <b>footer</b> - нижній колонтитул, <b>details</b> - 
        додаткові деталі, <b>summary</b> - заголовок для details. Розміщаються за допомогою 
        CSS. Поділяють на float, flexbox, framework (як bootstrap) та grid. Детальніше у 
        підручнику по CSS. Та враховуючи що я вже вподобав flex та grid я схиляюсь до 
        використання їх.
        <h2>Адаптивний веб-дизайн</h2>
        Вже згадана раніше meta з налаштуваннями name=&#34;viewport&#34; content=&#34;
        width=device-width, initial-scale=1.0&#34; для адаптивних сторінок описана як 
        необхідність. Я би волів керувати співвідношенням між шириною і висотою екрану, і в 
        заложності від цього по різному розміщати елементи один до одного. Принаймні я 
        користувався цими данними для того щоб по різному відображати програму при 
        вуртикальній і горизонтальній орієнтації телефона в мобільній розробці на Flutter. 
        Також тут рекомендується використовувати властивість <i>max-width</i> для зображень, 
        щоб вони не розтягувались. Гарна порада, як і заміна зображення в залежності від 
        розміра екрана за допомогою <b>pictures</b> та <b>source</b>. Розмір тексту можна 
        встановлювати не в пікселях, а 
        в <i>vw</i> - одиниця ширини області перегляду (1vw - 1% ширини області перегляду). 
        <b>Медіазапити</b> - те що я хотів дізнатись, в залежності від розміру оп елементи 
        відображаються горизонтально або вертикально: виконується за допомогою @media screen 
        and (max-width:...). Спробую створити якийсь приклад: 
        <div className={style.gridContainer}>
        <div className={style.headerDiv}>В цьому прикладі у мене є headerDiv з margin: avto, 
            padding: 5px та grid-column: 1 / 4
        </div>
        <div className={style.leftDiv}>Перший div що розміщається зліва, або зверху. В 
            залежності від розміру екрану
        </div>
        <div className={style.mainDiv}>Другий div що має бути посередині і зберігає в собі 
            основний контент, тому його розмір більше за інші контейнери. Маю зазначити що я 
            ніде не писав meta тег з необхідними налаштуваннями. Також хотів зазначити що <a 
            href="https://w3schoolsua.github.io/htmltryit/tryhtml_responsive_media_query.html"
            target="_blank" rel="noreferrer"> в прикладі</a> використовується float елемент 
            вирівнювання який мені не довподоби. Тож я використав display:grid. Код CSS:
            <div className={style.codeBlock}><b>.gridContainer</b> <br /> 
                &#8195; display: grid; &#8195;  row-gap: 22px; &#8195;  
                grid-template-columns: 20% 60% 20%; &#8195;  grid-template-rows: 2; 
                &#8195; background-color: rgba(155, 155, 155, 0.5); <br /> 
                &#8195; <b>.headerDiv</b> - margin: auto; &#8195; grid-column: 1 / 4; <br />
                &#8195; <b>.leftDiv</b> - background-color: rgba(125, 125, 125, 0.5); 
                &#8195; margin-left: 10px; <br />
                &#8195; <b>.mainDiv</b> - background-color: rgba(95, 95, 95, 0.5); 
                &#8195; margin-left: 10px; &#8195; margin-right: 10px; <br /> 
                &#8195; <b>.rightDiv</b> - background-color: rgba(125, 125, 125, 0.5);
                &#8195; margin-right: 10px; <br /> 
                &#8195; <b>@media screen and (max-width:800px)</b> - &#8195;  .headerDiv, 
                .leftDiv, .mainDiv, .rightDiv - margin: 10px; <br />
                &#8195; <b>.gridContainer</b> - display: block; 
                &#8195; background-color: rgba(155, 155, 155, 0.5); <br /> 
                &#8195; <b>.codeBlock</b> - background-color: white;
            </div>
                Тут мені знову допоміг ШІ. Цього разу Gemini підсказав, чому у мене пропадав 
                фон у gridContainer, коли я ставив значення на inline.
        </div>
        <div className={style.rightDiv}>І третій div.</div>
        </div>
        </>
    );
}