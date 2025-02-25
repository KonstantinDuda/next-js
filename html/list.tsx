import React from "react";
import style from "@/app/ui/html/list.module.css";
import Link from "next/link";

export default function MyList() {
    return (
    <>
        <h1 id="htmlLists">Списки</h1>
        Про списки вже було, сподіваюсь тут роскриється щось важливе чи хоч цікаве. 
        <b>ul</b> - ненумерований список. <b>ol</b> - впорядкований список. <b>li</b> - 
        елемент. <ins>list-style-type</ins> - властивість CSS для стилізації ul списка (
        варіанти: <i>disc</i>, <i>circle</i>, <i>square</i>, <i>none</i>). У ol списка в свою 
        чергу є атрибут (блін я вже заплутався що таке властивість, а що атрибут). <ins>
        type</ins> що може бути <i>1</i>, <i>A</i>, <i>a</i>, <i>I</i>, <i>i</i>, i 
        відповідає за тип нумерації. <ins>start</ins> - атрибут вказує з якого значення 
        починається список. Список опису - це список термінів з їх описами. <b>dl</b> - список 
        опису. <b>dt</b> - термін. <b>dd</b> - опис терміну. Цими інструментами можна 
        створювати вкладені списки. 
        <h2>Блокові та вбудовані елементи</h2>
        27.01.2025 Блокові елементи розтягуються в ліво і право на скільки це можливо. Приклади 
        блокових елементів: <b>address, article, aside, blokquote, canvas, dd, div, dl, dt, 
        fieldset, figcaption, figure, footer, form, h1-h6, header, hr, li, main, nav, 
        noscript, ol, p, pre, section, table, tfoot, ul, video.</b><br />
        Вбудовані елементи не починаються з нового рядка, займають ширину вкладених данних.
        Приклади вбудованих елементів: <b>a, abbr, acronym, b, bdo, big, br, button, cite, 
        code, dfn, em, i, img, input, kbd, label, map, object, output, q, samp, script, 
        select, small, span, strong, sub, sup, textarea, time, tt, var.</b><br />
        Я вже користувався елементом div для стилізації. <span className={style.spanSentence}>
        І я задавався питанням, який тег використовувати якщо я захочу стилізувати частину 
        тексту, для цього є <b className={style.mySpan}>span</b>.</span> А в данному випадку я 
        ще і окремо стилізував саме слово span завдяки тому що style, class та id є загальними 
        атрибутами, тож я використав класс для тегу b.
        <h3 id="htmlDiv">div</h3>
        Вирівняти елементи div по горизонталі можна за допомогою CSS. Є кілька варіантів:<br />
        <div className={style.myFlex}>
            <div className={style.myDiv}>
                <ins>float</ins> - використовується для розміщення та форматування вмісту. 
                Дозволяє елементам плавати поруч один з одним, а не знаходитись один над 
                одним. (Мені цей варіант не довподоби. Тут можна подивитись як це виглядає: 
                <a href="https://w3schoolsua.github.io/htmltryit/tryhtml_div_float.html">
                приклад float </a>, мені не подобається що, якщо змінювати розмір вікна то 
                третини не залишаються однаковими і стають кутастими, не знаю як це пояснити, 
                сходіть подивіться). </div>
            <div className={style.myDiv}>
                <ins>display</ins>: <i>inline-block</i> - як на мене нічим не краще ніж float, а може і 
                гірше.
            </div>
            <div className={style.myDiv}>
                <ins>display</ins>: <i>flex</i> - Щоб працював треба оточити div іншим div. І цей варіант 
                мені подобається. Власне, я його і використав в данному випадку. Я також 
                додав margin: 10px; і width: 25%; до кожного вкладеного div для краси, інакше 
                частини займають ширину в залежності від вмісту і частина з inline-block стає 
                дуже не красивою і практично непридатною до читання. </div>
            <div className={style.myDiv}>
            <ins>display</ins>: <i>grid</i> - пропонує систему макета на основі сітки з рядками та 
                стовпцями, що полегшує розробку вебсторінки без використання плаваючих 
                елементів і позиціонування. Подобається мені як і flex але може визначати 
                більше одного рядка та позиціонувати кожен рядок окремо. Також потребує 
                оточити один div іншим div&#39;ом. А ще треба вказати ширину кожного стовпця в <i>
                grid-template-columns:</i> у відсотках.</div>
        </div>
        <h2 id="htmlId">id</h2>
        Закладки створюються за допомогою id. Спочатку закладка створюється за допомогою id=&#34;
        <Link href="/html#LIST">LIST</Link>&#34;, потім до посилання додається # з ім&#39;ям 
        ідентифікатора. Якщо посилання на закладку на іншій сторінці то спочатку назва 
        сторінки, потім # з ім&#39;ям ідентифікатора. Наприклад: <Link 
        href="/first-days#WELCOME">Перейти до Welcome</Link> що знаходиться в іншому файлі 
        у мене в проекті. Важливо відмітити що мені не довелось писати шлях до файлу і т.д., 
        достатньо просто написати ім&#39;я ідентифікатора. Я ж написав адресу щоб отримати 
        бажаний результат (тобто href=&#34;/first-days#WELCOME&#34;). Хоча в данному випадку 
        в закладці немає сенсу адже за адресою /first-days немає нічого окрім цього самого 
        Welcome.
    </>
    );
}