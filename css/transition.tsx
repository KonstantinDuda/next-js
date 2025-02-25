import React from "react";
import style from "@/app/ui/css/transition.module.css";
import Link from "next/link";

export default function MyTransition() {
    return (
        <>
            <h2 id="cssTransition">Переходи</h2>
            За переходи відповідають наприклад такі властивості як <ins>transition
            </ins>, <ins>transition-property</ins>, <ins>transition-duration</ins>, <ins>
            transition-timing-function</ins>. Що по суті 
            зрозуміло і по назві. Щоб використати перехід необхідно створити властивість, 
            до якої ви хочете додати ефект і тривалість ефекту (за замовчеванням = 0).
            Ось наприклад div що при наведенні вказівника (hover) збільшується по width 
            зі 100рх до 50% за 2 секунди. Для цього достатнь CSS, навіть TypeScript не 
            потрібен. 
            <div className={style.ruberDiv}></div>
            Зворотній процес навіть не потрібно записувати. Зміни можна записувати через 
            кому. <ins>transition-timing-function</ins> - задає криву швидкості ефекту 
            переходу, за допомогою <i>linear</i>, <i>ease</i>, <i>ease-in</i>, <i>ease-out
            </i> або <i>ease-in-out</i>. <ins>transition-delay</ins> - визначає затримку 
            перед початком анімації в секундах.

            <h2 id="cssAnimation">Анімації</h2>
            Також CSS дозволяє робити анімації без TypeScripte за допомогою <ins>animation
            </ins> властивостей та <b>@keyframes назваАнімації</b> - селектора, в який 
            записуються <b>from</b> і <b>to</b> селектори з початковим і кінцевим значеннями 
            анімації. Також замість них можна використовувати відсотки від 0 до 100%. 
            Анімація повертається до початкового стану після завершення, як і перехід. <ins>
            animation-name</ins> що варто прописати в об&#39;єкті що анімується.
            Окрім цього є ще <ins>animation-delay</ins> - затримка перед початком 
            анімації, <ins> animation-iteration-count</ins> - кількість повторень 
            анімації, <ins> animation-direction</ins> - напрямок анімації, може бути <i>
            normal</i>, <i>reverse</i>, <i>alternate</i> (вперед потім назад), <i>
            alternate-reverse</i> (спочатку назад потім вперед),<br />

            <ins>animation-timing-function</ins> - крива швидкості анімації, може бути <i>
            ease</i> - повільно--швидко--повільно (за замовченням), <i>linear</i> - 
            рівномірно, <i>ease-in</i> - повільно--швидко, <i>ease-out</i> - 
            швидко--повільно, <i>ease-in-out</i> - повільно--швидко--повільно (в чому тоді 
            різниця між ним і ease?), <i>cubic-bezier(n, n, n, n)</i> - власне визначення за 
            Без&#39;є. <br />

            <ins>animation-fill-mode</ins> - заповнення анімації, <i>none</i> (значення за 
            замовченям), <i>forwards</i> - елемент збереже значення стилю встановленні 
            останнім ключовим кадром, <i>backwards</i> - елемент збереже стиль першого 
            ключового кадру, <i>both</i> - анімація слідуватиме правилам як вперед так і 
            назад, розширюючи властивості анімації в обох напрямках думаю це варто 
            подивитись на прикладах, мені по опису не зовсім зрозуміло.<br />
            <br />
            <div className={style.animGrid}>
                <div className={style.animHead}>
                    Загальні налаштування: <br />
                    Головний div з налаштуваннями:
                    <ul>
                        <li>display: grid;</li>
                        <li>grid-template-columns: 50% 50%;</li>
                        <li>background-color: black;</li>
                    </ul>
                    В ньому div в якому цей опис. З налаштуваннями: 
                    <ul>
                        <li>margin: auto;</li>
                        <li>grid-column: 1 / 3;</li>
                    </ul>
                    На рівні з цим div ще 4 div контейнера з загальними налаштуваннями:
                    <ul>
                        <li>border: 4px solid grey;</li>
                        <li>margin: 10px;</li>
                        <li>padding: 10px;</li>
                    </ul>
                    В кожному з них є по div&#39;у і по pre тегу для опису анімацій і 
                    власних стилів. В свою чергу всі div&#39;и мають спільні стилі спочатку: 
                    <ul>
                        <li>width: 50px;</li>
                        <li>height: 50px;</li>
                        <li>background-color: rgba(120, 188, 233, 0.8);</li>
                        <li>animation-duration: 4s;</li>
                    </ul>
                </div>
                <div className={style.animContainerOne}>
                    <div className={style.animOneDescription}>
                        Перший div: 
                        <ul>
                            <li>animation-name: one;</li>
                            <li>animation-timing-function: cubic-bezier(
                                0.175, 0.885, 0.32, 1.275);</li>
                            <li>animation-fill-mode: forwards;</li>
                        </ul>
                        @keyframes one:
                        <ul>
                            <li>from &#123;width: 10%;&#125;</li>
                            <li>to &#123;width: 80%;&#125;</li>
                        </ul>
                    </div>
                    <div className={style.animOne}></div>
                </div>
                <div className={style.animContainerTwo}>
                    <div className={style.animTwoDescription}>
                        Другий div: 
                        <ul>
                            <li>animation-name: two;</li>
                            <li>animation-timing-function: ease-in;</li>
                            <li>animation-fill-mode: backwards;</li>
                        </ul>
                        @keyframes two:
                        <ul>
                            <li>10% &#123;width: 10%;&#125;</li>
                            <li>50% &#123;width: 110%;&#125;</li>
                            <li>100% &#123;width: 10%;&#125;</li>
                        </ul>
                    </div>
                    <div className={style.animTwo}></div>
                </div>
                <div className={style.animContainerThree}>
                    <div className={style.animThreeDescription}>
                        Третій div: 
                        <ul>
                            <li>animation-name: three;</li>
                            <li>animation-timing-function: ease-out;</li>
                            <li>animation-fill-mode: both;</li>
                        </ul>
                        @keyframes three:
                        <ul>
                            <li>from &#123;width: 10%;&#125;</li>
                            <li>to &#123;width: 100%;&#125;</li>
                        </ul>
                    </div>
                    <div className={style.animThree}></div>
                </div>
                <div className={style.animContainerFour}>
                    <div className={style.animFourDescription}>
                        Четвертий div: 
                        <ul>
                            <li>animation-name: four;</li>
                            <li>animation-timing-function: ease-in-out;</li>
                        </ul>
                        @keyframes four:
                        <ul>
                            <li>10% &#123;width: 10%;&#125;</li>
                            <li>33% &#123;width: 20%;&#125;</li>
                            <li>66% &#123;width: 120%;&#125;</li>
                            <li>100% &#123;width: 100%;&#125;</li>
                        </ul>
                    </div>
                    <div className={style.animFour}></div>
                </div>
            </div>
            <ins>animation-play-state</ins> - статус анімації.<br />
            В підручнику ні слова про те як запустити анімацію чи зупинити її...
            Схоже варто ближче познайомитись з TypeScripte. Хоча у мене вийшло реалізувати 
            просту анімацію для кнопки переключення теми в <Link 
            href="/next">next.js уроці</Link>.

        </>
    );
}