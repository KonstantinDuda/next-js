import React from 'react';
import style from '@/app/ui/html/pictures.module.css';
import MyTable from './table';

export default function Pictures() {
    return (
        <>
            <h1>Зображення - </h1>
            <p><img src="/profile.jpg" alt="profile" width="100" height="100" 
            style={{ float: 'right'}} />
                23.01.2025. <b>img</b> - тег для відображення зображень. Він не має 
                закриваючого тегу. Атрибути: <ins>src</ins> - адреса зображення. <ins>
                alt</ins> - опис зображення (обов&#34;язковий, відображається у випадку якщо 
                зображення не завантажено і т.д.). <ins>width, height</ins> -
                розмір. <ins>float</ins> - вирівнювання (зображення може бути розміщенно, 
                наприклад <i>right</i> тобто праворуч від тексту, або ліворуч, для цього 
                можна розмістити їх в одному параграфі). <ins>border</ins> - рамка. В данному 
                проекті зображення шукається одразу з теки public, тож достатньо було лише 
                написати назву файлу і його розширення, після розміщення його в теці. Якщо 
                зображення десь на іншому сервері то треба прописати повний шлях. <ins>usemap
                </ins> - атрибут для вказання мапи, # - перший символ назви мапи.
            </p>
            <div className={style.myPicture}><img src="/workplace.jpg" alt="profile" 
            width="200" height="200" useMap="#workmap" style={{ float: 'left', 
            margin: '5px', }}/><map name="workmap"><area shape="rect" coords="10,20,140,180" 
            alt="computer" title="computer" /></map><p>
                <b>map</b> - тег для вказання мапи (карти) для зображення. 
                Властивості: <ins>name</ins> - назва зображення, <ins>shape</ins> - форма 
                областей, <ins>coords</ins> - координати областей. Тут я створив мапу на 
                комп&#34;ютері, і додав властивість <ins>title</ins> з написом computer. 
                Але створення мапи виглядає як вгадування, так як якогось зручного інструменту 
                для того щоб бачити описану ділянку немає. Пограв з CSS щоб наступний блок 
                тексту не був навпроти картинки, бо створювалась ілюзія що весь текст від 
                map приналежний до картинки. Для цього додав height: 210px; і знову 
                переконався що вказувати розміри це не дуже гарна ідея, тому що у вікні 
                браузера блок з текстом почав виглядати ідеально, фон описував картинку адже 
                її розмір 200px на 200px. Але якщо відкрити в телефоні то текст вилізає за ці 
                210px і налізає на той текст що йде після цього блоку, а якщо прибрати це 
                налаштування в 210рх то наступний текст починається навпроти картинки, та і 
                фон оточує лише текст і заходить лиш за частину картинки що робить це рішення 
                не привабливим. Зрештую видалив це налаштування, текст має бути читабельним 
                навіть якщо це буде не так гарно як я би того хотів. Потім навчусь як то робити 
                гарно.
                </p>
            </div>
            Також можна створити клікабельні ділянки, вони можуть бути <i>rect, circle, poly, 
            default</i> форми. Також до <b>area</b> можна додати властивість onClick для 
            TypeScript`а. <i>background-image</i>: url(&#34;...&#34;) - властивість для задання 
            фонового зображення. Вказати можна в атрибуті style. в який береться необхідний 
            елемент, як div, body. Малі зображення будуть повторюватись, щоб цього уникнути 
            можна вказати <ins>background-repeat</ins>: <i>no-repeat</i>. <ins>
            background-size</ins>: <i>cover</i> - збільшує зображення щоб охопити весь 
            елемент <ins>background-attachment</ins>: <i>fixed</i> - фонове зображення завжди 
            покриває весь елемент (не зрозумів що мається на увазі). <br />
            <b>picture</b> - тег для відображення зображення в залежності від розміру 
            екрану. <b>source</b> - вкладений тег, <ins>media</ins> - умова для 
            відображення. <ins>scrset</ins> - зображення. Наприклад: source media=&#34;(min-
            width: 650px)&#34; srcset=&#34;img_pink_flowers.jpg&#34; - якщо ширина екрану більше 650px то 
            відобразиться зображення img_pink_flowers.jpg. В одному picture може бути кілька 
            source. Важливо завжди використовувати img як останній елемент picture, на 
            випадок якщо жоден елемент не підходить, або браузер не підтримує picture. <br /> 
            Фавіконка - іконка яка відображається в адресному рядку браузера. Додається в 
            head за допомогою тегу <b>link</b> і властивостей <ins>rel</ins>=
            &#34;<i>icon</i>&#34; <ins>type</ins>=&#34;<i>image/png</i>&#34; <ins>href</ins>=
            &#34;<i>favicon.png</i>&#34;. <b>title</b> - назва сторінки, вказується в head. <br />
            <h2>Таблиці</h2>
            <b>table</b> - таблиця. <b>tr</b> - рядок таблиці. <b>th</b> - заголовок 
            таблиці (жирний шрифт і відцентрований текст). <b>td</b> - чарунка. При 
            використанні цих данних виникає помилка: &#34;In HTML, tr cannot be a child of table. 
            Add a tbody, thead or tfoot to your code to match the DOM tree generated by the 
            browser. This will cause a hydration error&#34;. Додав <b>thead</b> і <b>tbody
            </b> навмання, здається помилка зникла. Як використовувати <b>tfoot</b> не знаю. 
            Тож зараз таблиця виглядає так:
            <div className={style.divTable}>
                table: 
                <div className={style.divTableHead}>
                    thead:
                    <div className={style.divTableTr}>
                        tr:
                        <div className={style.divTableTh}>
                            th: th. th: Заголовок. th: Жирний шрифт. th: Відцентрований текст
                        </div>
                    </div>
                </div>
                <div className={style.divTableHead}>
                    tbody:
                    <div className={style.divTableTr}>
                        tr:
                        <div className={style.divTableTh}>
                            td: td. td: Чарунка. td: Звичайний текст. td: Вирівняний за лівим 
                            краєм.
                        </div>
                    </div>
                </div>
            </div>
            <table className={style.tableBorder}>
                <thead>
                    <tr>
                        <th className={style.tableBorderThTd}>th</th>
                        <th className={style.tableBorderThTd}>Заголовок</th>
                        <th className={style.tableBorderThTd}>Жирний шрифт</th>
                        <th className={style.tableBorderThTd}>Відцентрований текст</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td className={style.tableBorderThTd}>td</td>
                        <td className={style.tableBorderThTd}>Чарунка</td>
                        <td className={style.tableBorderThTd}>Звичайний текст</td>
                        <td className={style.tableBorderThTd}>Вирівняний за лівим краєм</td>
                    </tr>
                </tbody>
            </table>
            24.01.2025. Щоб межі таблиці були видні її можна стилізувати за допомогою, <ins>
            border</ins> до th, td (<i>1 px solid black</i> в данному випадку), а також <ins>
            border-collapse</ins>: <i>collapse</i> до самої table. <ins>text-align
            </ins> вирівнює текст. У тегів th i td є атрибути: <ins>colspan</ins> що 
            відповідає за те щоб чарунка охоплювала кілька колонок, <ins>rowspan
            </ins> відповідає за те щоб чарунка охоплювала кілька рядків. Але тоді таблиця 
            пишеться трохи інакше: table - tr - th, td. tr - th rowspan=&#34;2&#34;, td. tr - td. <b>
            caption</b> тег в таблиці що додає підпис (ставиться одразу після тегу table). 
            Також можна вказувати розміри таблиці, рядка, стовбця. <ins>padding</ins> - 
            відступ від края чарунки до її змісту. <ins>border-spacing</ins> - відстань між 
            чарунками. Гарний спосіб стилізувати таблицю це розфорбувати фон стовбців, або 
            рядків через один. Для цього можна використати <strong>селектор</strong> :<ins>
            nth-child</ins>(even) (<i>even</i> - парний, <i>odd</i>-непарний). Для цього 
            важливо звернути увагу і на заголовки, і на чарунки, і на рядки. Ось наприклад: 
            <MyTable />
            <b>colgroup</b> - тег для групування стовбців, для їх стилізації. Він має бути 
            дочірнім для table, і бути розташованим перед thead, tr, td... Внього вкладається 
            тег <b>col</b> з атрибутами <ins>span</ins>(кількість стовбців), style. Можна 
            використовувати кілька col&#39;ів. <ins>visibility</ins> - властивість що може 
            приховати стовпці (<i>collapse</i>). <br />
        </>
    );
}