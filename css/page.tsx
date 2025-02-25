import React from "react";
import Link from "next/link";
import AdaptiveGrid from "./adaptive-grid";
import LinkList from "./link-list";

export default function MyCSS() {
    return (
        <>
            <h1><Link href="./css">CSS draft</Link></h1>
            Приклад CSS коду для того щоб визначити назви: <br />
            <div className="myCode">
            p &#123;&#8195;     - це селектор <br />
            &#8195; color: red; &#8195;     - це властивість і значення властивості<br />
            &#125;
            </div>
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
                <div className="myCode">
                import style from &#39;module place&#39;; <br />
                <br />
                p className=&#123;style.myP&#125;
                </div>  
            </div>
            Трохи інформації яка поки що мені не цікава, хоча я всеж все це прочитаю. Просто не 
            буду нічого записувати: 
        
            <LinkList />

            <AdaptiveGrid />
            Посилання де можна подивитись решту коду (якщо так його називати коректно) <a 
            target="_blank" rel="noreferrer"
            href="https://github.com/KonstantinDuda/next-js/blob/f6ff8d42b4e7139ca9d366df249168beedebc595/ui/css/adaptive.module.css">
                CSS файлу</a>. <br />
            Я десь читав про імпорт, але користуватись цим тут не навчили, допускаю що це не 
            єдине чого мене не навчили на цьому сайті. Я в свою чергу хотів би створити 
            змінні і завантажувати їх в CSS файлах де вони потрібні, а не плодити в кожному 
            файлі нові змінні з тими самими значенями. Тож враховуючи що я поки не планую 
            вчити SASS, і мені не подобалось те що таблиця в HTML де я описував <Link 
            href="/html#htmlAdaptive">адаптивний веб-дизайн</Link> не адаптувалась під зміну 
            теми, а завжди лишалась однаковою, я вирішив створити імена класів для чотирьох 
            сірих фонів і назначати їх блокам з темами. В свою чергу призначаючи в цих 
            класах для background color змінні з тем. Якось це складно в описі. Та сенс в тому  
            що тепер у мене для одного div є два класи, загальний що змінює колір фону і 
            описаний в окремому модулі конкретні стилі. Тепер якщо я хочу певні закругленя 
            для всього сайту я можу створити ще кілька імен класів для зовнішнього закругленя, 
            внутрішнього, для виділення border в різних темах і т.д., а потім додавати ці 
            імена до необхідних тегів. Тобто я сам прийшов до того від чого з самого початку 
            був не в захваті, адже мені не подобалось як виглядає Bootstrap, це перелік 
            того що я описую в окремому файлі але тепер безпосередньо в HTML файлі. 
            Мені це не подабалось, але схоже що це те чим я би користувався щоб не плодити 
            копії однакових властивостей і їх значень в купі різних CSS файлів. Схоже є 
            сенс вчити Bootstrap і не вигадувати велосипед! Або вчити Tailwind. Про нього 
            проект запитує коли ви його створюєте. 
            <br />


            <h3><Link href=".">Повернутись на головну сторінку</Link></h3>
        </>
    );
}