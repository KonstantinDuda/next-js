"use client"

import React from 'react';
import { useState } from 'react';
import reactAlert from './react-alert';

export default function StateExample() {
    const [name, setName] = useState<string>("");
    console.log(name);

    return (
        <>
        <p id="reactUseState">У React є useState і його використовують для роботи з інпутами. useState повертає 
        змінну і її сетер. З цим хуком, як його називають <a href="
        https://uk.react.dev/reference/react/useState">можна познайомитись тут</a>. <br />
        Суть в тому що він дозволяє додавати змінну стану до компонента. Щоб його використати 
        треба імпортувати &#123; useState &#125; з react. Створюється змінна і сетер яким 
        присвоюється результат від useState. Виглядати це може так:
        </p>
        <p>
            const &#91; name, setName &#93; = useState(&#34;Taylor&#34;); або: <br />
            const &#91; age, setAge &#93; = useState(30); <br />
            const &#91; todos, setTodos &#93; = useState(() =&#62; createTodos()); <br />
            Початкове значення може бути відсутнє. Також, в кутастих лапках можна вказати 
            тип данних. Якщо не вводити значення за замовченням то бажано вказати тип: <br />
            const &#91; name, setName &#93; = useState&#60;string&#62;();
        </p>
        <p>
        Важливі застереження: <br />
        useState є хуком, тому ви можете викликати його лише на верхньому рівні вашого 
        компонента або ваших власних хуків. Ви не можете викликати внутрішні цикли чи умови. 
        Якщо вам це потрібно, витягніть новий компонент і перемістіть у нього стан. <br />
        У строгому режимі React двічі викличе вашу функцію ініціалізації , щоб допомогти вам 
        знайти випадкові домішки. Це поведінка лише для розробки і не впливає на виробництво. 
        Якщо ваша функція ініціалізації чиста (як і має бути), це не повинно впливати на 
        поведінку. Результат одного з викликів буде проігноровано. <br />
        І таких застережень там багато, тож краще пройти за посиланням вище і ознайомитись.
        </p>
        <p>
            Спроба використати цей useState призвела до цього: 

        </p>
        <form>
            <input type="text" defaultValue={name} onChange={(e) => 
                setName(e.currentTarget.value)} />
            <input type="button" value="Send" onClick={async () => 
                await reactAlert(name)} />
        </form>
        <br />
        Як в прикладі: const [name, setName] = useState&#60;string&#62;(&#34;&#34;); 
        оголосив перед return&#39;ом. На сторінці сама форма: <br />
        <div className="myCode">
            &#60;form&#62;<br />
            &#8195; &#60;input type=&#34;text&#34; defaultValue=&#123;name&#125; 
                    onChange=&#123;(e) =&#62; <br />
            &#8195; &#8195; setName(e.currentTarget.value)&#125; /&#62;<br />
            &#8195; &#60;input type=&#34;button&#34; value=&#34;Send&#34; 
                onClick=&#123;async() =&#62; <br />
            &#8195; &#8195; await reactAlert(name)&#125; /&#62;<br />
            &#60;/form&#62;
        </div>
        <br />
        Сама функція reactAlert в окремому файлі тож його треба імпортувати. І той 
        файл виглядає так:
        <div className="myCode">
        &#34;use client&#34;<br />
        <br />
        export default async function reactAlert(data: string) &#123;<br />
        &#8195; if (data != &#34;&#34; && data != null) &#123;<br />
        &#8195; &#8195; return alert(`&#39;You enter: &#39;$&#123;data&#125;&#39;`);<br />    
        &#8195; &#125; else &#123;<br />
        &#8195; &#8195; return alert(&#34;Please enter some data&#34;);<br />
        &#8195; &#125;<br />
        &#125;<br />
        </div>
        Хоча я не впевнений я коректно використав перевірку data... Можливо в TypeScript 
        це має виглядати інакше! Та я його ще не вчив...
        


        </>
    );
}