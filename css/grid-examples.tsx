import React from "react";
import style from "@/app/ui/css/adaptive.module.css"

export default function GridExamples() {
    return (
        <div className={style.myroot} id="cssGridExampls">
        <div className={style.myflex}>
            <div className={style.description}>
        Висота блоку з квадратами стане такою як висота текстового блоку якщо вкласти їх в 
        один flexbox? Так, але мені не подобається що в grid боксі між вкладеними 
        об&#39;єктами такі великі гепи! В данному випадку різниця саме в висоті, тому 
        проблему можна вирішити за допомогою <br /> align-content: center. Результат такого 
        рішення буде виглядати добре якщо прибрати колір фону для батьківського бокса:
            </div>
            <div className={style.firstBox}>
                <div className={style.element}></div>
                <div className={style.element}></div>
                <div className={style.element}></div>
                <div className={style.element}></div>
                <div className={style.element}></div>
                <div className={style.element}></div>
                <div className={style.element}></div>
                <div className={style.element}></div>
                <div className={style.element}></div>
            </div>
        </div>

        <div className={style.myflex}>
            <div className={style.description}>
            В цьому випадку я створив лише 7 вкладених елементів. Одному з них я задав <br />
            grid-column: 1 / 3; і margin-left: 41px; <br /> це перший елемент, як видно по даному 
            представленню. Також другому вкладеному (хоча це не важливо, адже його позиція 
            визначається в CSS, а не якою в черзі вона вписана в HTML) елементу я встановивив <br />
            grid-row: 2 / span 2; <br /> grid-column-start: 3; <br /> margin-top: 33px;
            </div>
            <div className={style.twoBox}>
                <div className={style.horTwoElement}></div>
                <div className={style.verTwoElement}></div>
                <div className={style.element}></div>
                <div className={style.element}></div>
                <div className={style.element}></div>
                <div className={style.element}></div>
                <div className={style.element}></div>
            </div>
        </div>

        <div className={style.myflex}>
            <div className={style.description}>
            Механізм з іменами за допомогою grid-area та grid-template-areas <a 
            href="https://w3schoolsua.github.io/css/css_grid_item.html#gsc.tab=0">описаний 
            тут</a> працює лише з простими прямокутниками. Я ось намагався реалізувати <br />
            &#39;namedElement namedElement .&#39; &#39;. namedElement .&#39; &#39;. . .&#39;,
            а вийшло ось це. Хоча я не впевнений що така штука що я описував може десь 
            знадобитись!
            </div>
            <div className={style.threeBox}>
                <div className={style.threeNamedElement}></div>
                <div className={style.threeElement}></div>
                <div className={style.threeElement}></div>
                <div className={style.threeElement}></div>
                <div className={style.threeElement}></div>
                <div className={style.threeElement}></div>
                <div className={style.threeElement}></div>
            </div>
        </div>

        <div className={style.myflex}>
            <div className={style.description}>
                .fOneElement &#123; <br /> width: var(--element-hw-twice); <br />
                grid-area: 1 / 1 / span 1 / 3; <br /> margin-left: 34px; &#125; <br />
                .fElement &#123; <br /> grid-area: 1 / 3 / 1 / 3; &#125; <br />
                .fThreeElement &#123; <br /> width: var(--element-hw-twice); <br />
                grid-area: 2 / 1 / 2 / 3; <br /> margin-left: 34px; &#125; <br />
                .fFourElement &#123; <br /> height: var(--element-hw-twice); <br />
                grid-area: 2 / 3 / 4 / 3; <br /> margin-top: 34px; &#125; <br />
                .fFiveElement &#123; <br /> grid-area: 3 / 1 / 3 / 1; &#125; <br />
                .fSixElement &#123; <br /> grid-area: 3 / 2 / 3 / 2; &#125; <br />
        </div>
            <div className={style.fourthBox}>
                <div className={`${style.element} ${style.fOneElement}`}></div>
                <div className={`${style.element} ${style.fTwoElement}`}></div>
                <div className={`${style.element} ${style.fThreeElement}`}></div>
                <div className={`${style.element} ${style.fFourElement}`}></div>
                <div className={`${style.element} ${style.fFiveElement}`}></div>
                <div className={`${style.element} ${style.fSixElement}`}></div>
            </div>
            </div>
        </div>
    );
}