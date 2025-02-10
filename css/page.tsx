import React from "react";
import Link from "next/link";

export default function MyCSS() {
    return (
        <>
            <h1><Link href="./css">CSS draft</Link></h1>
            Приклад CSS коду для того щоб визначити назви: <br />
            <pre>
            p &#123;&#8201;     - це селектор <br />
            &#8201; color: red; &#8201;     - це властивість і значення властивості<br />
            &#125;
            </pre>
            <p>
                В даному прикладі написаний селектор елементу. Тобто кожен параграф у 
                компоненті до якого примінили CSS файл з таким селектором буде червоний. 
                Також можна стилізувати теги за допомогою звернення до їх id (#id) або імені 
                класу (.className). Також можна стилізувати наприклад тільки параграфи з 
                певним іменем класу. p clessName=paragraphName ... (В HTML) цей параграф і 
                всі з таким іменем можна стилізувати так: p.paragraphName. Що я пропустив в 
                HTML то це те що один об&#39;єкт можна називати кількома іменами через пробіл. 
                І це використовують в CSS.
            </p>
            <div>
                Я користуюсь модулями. Тож я маю створити CSS файл, дописати що це модуль 
                через крапку і потім вказати розширення через чергову крапку. Потім цей файл 
                імпортується у файлі де він буде використаний. Тоді я зможу присвоїти ім&#39;я 
                класу через модуль і використати це ім&#39;я в модулі, для стилізації. В HTML 
                виглядає це приблизно так: 
                <pre>
                import style from &#39;module place&#39;; <br />
                <br />
                p className=&#123;style.myP&#125;
                </pre>  
            </div>
            Трохи інформації яка поки що мені не цікава, хоча я всеж все це прочитаю. Просто не 
            буду нічого записувати: 
            <ul>
                <li><a href="https://w3schoolsua.github.io/css/css_comments.html#gsc.tab=0">
                    Коментарі</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_colors.html#gsc.tab=0">
                    Кольори</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_background.html#gsc.tab=0">
                    Фон</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_border.html">
                    Межі</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_margin.html">
                    Зовнішні відступи (margin)</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_padding.html">
                    Внутрішній відступ (padding)</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_dimension.html#gsc.tab=0">
                    Висота і ширина</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_boxmodel.html#gsc.tab=0">
                    Блочна модель</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_outline.html#gsc.tab=0">
                    Контур</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_text.html#gsc.tab=0">
                    Текст</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_font.html">
                    Шрифти</a>. Тема видається важливою та поки що я не маю бажання це 
                    змінювати</li>
                <li><a href="https://w3schoolsua.github.io/css/css_icons.html#gsc.tab=0">
                    Іконки</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_link.html#gsc.tab=0">
                    Посилання</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_list.html#gsc.tab=0">
                    Списки</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_table.html#gsc.tab=0">
                    Таблиці</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_display_visibility.html#google_vignette">
                    display</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_positioning_en.html#gsc.tab=0">
                    position</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_z-index_en.html#gsc.tab=0">
                    Слої</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_overflow.html#gsc.tab=0">
                    overflow</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_float.html#gsc.tab=0">
                    float та clear</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_inline-block.html#gsc.tab=0">
                    inline-block</a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
            <h3><Link href=".">Повернутись на головну сторінку</Link></h3>
        </>
    );
}