import style from '@/app/ui/html/forms/forms.module.css';
import Link from 'next/link';
import React from 'react';
import FormInputs from '@/app/html/forms/form-inputs';

export default function Page() {

    return (
        <>
        <h1 id="htmlForms">Форми</h1>
        <h4>
            Загалом про форми треба вчити саме в <Link href="../react">реакт</Link>. 
            Тож тут я опишу леше загальні данні.
        </h4>
        <b>form</b> - форми використовують для збору данних від користувача. <b>input</b> - 
        елемент форми що може мати різні <ins>type</ins>: <i>text</i> - однорядкове поле 
        вводу. <i>radio</i> - перемикач (для вибору одного з кількох варіантів). <i>
        submit</i> - кнопка відправки форми. <ins>name</ins> - для визначення полів, 
        перемикачів.  
        <form>
            Поле вводу: <input type="text" name="inputText" /><br />
        </form>
        Після натискання ентеру, схоже що я переходжу на 
        http://localhost:3000/?inputText = текст що я вводив в поле. Але схоже що знаходжусь 
        на тій самій сторінці що і був.
        У перемикачів в свою чергу, окрім type і name(однакові для однієї групи перемикачів), 
        є <ins>value</ins> - свого роду ідентифікатор, та <ins>checked</ins> (у випадку з 
        середовищем в якому я вчусь це defaultChecked=&#123;true&#125;) - обраний за 
        замовчуваням елемент. І вірогідно в HTML це так і працює, та не в середовищі де я 
        це все роблю... Пошук форм в Next.js привів до документації в якій одразу якісь 
        валідації, а я не знаю що воно таке... Подивився форми в <a href="
        https://uk.react.dev/reference/react-dom/components/form">React</a> і навіть окремо 
        в <a href="https://nextjs.org/docs/app/api-reference/components/form#reference">Next.js
        </a> і нічого не допомогло мені розібратись з тим, як я можу обробити данні з форми. 
        Приклад з React, з alert виглядає зрозумілим але у мене не працює, з помилками я не зміг 
        розібратись.
        <div className={style.formDiv}>
            <div className={style.theForm}>
            <form>
                <input type='radio' name='number' value='one' defaultChecked={true} /> One<br />
                <input type='radio' name='number' value='two' /> Two<br />
                <input type='radio' name='number' value='three' /> Three
            </form>
            </div>
            <div className={style.formDescription}>
                <div className="myCode">
                &#60;form&#62;<br /> 
                    &#8195; &#60;input type=&#39;radio&#39; name=&#39;number&#39; value=&#39;one&#39; 
                    defaultChecked=&#123;true&#125; /&#62; One &#60;br /&#62;<br />
                    &#8195; &#60;input type=&#39;radio&#39; name=&#39;number&#39; value=&#39;two&#39; /&#62; 
                    Two &#60;br /&#62;<br />
                    &#8195; &#60;input type=&#39;radio&#39; name=&#39;number&#39; value=&#39;three&#39; /&#62; 
                    Three <br />
                &#60;/form&#62;
                </div>
            </div>
        </div>
        Кнопка для відправки може бути просто <b>button</b> з <ins>type</ins>=<i>submit</i>.
        <p><b>fieldset</b> - використовується для групування данних у формі. <b>legend</b> - 
        заголовок для fieldset.</p>

        <h3 id="htmlFormAtributes">Атрибути form: </h3>
        <ins>action</ins> - дія що має бути виконана при надсиланні форми. В прикладі вказана 
        адреса. Якщо не прописати то вказується поточна сторінка. <br />
        <ins>target</ins> - визначає де буде відкриватись результат чи якось так. За 
        замовчанням <i>_self</i> на цій самій сторінці. <i>_blank</i> - відкриває в новій 
        вкладці. Ще може бути <i>_parent</i>, <i>_top</i>, <i>framename</i>. <br />
        <ins>method</ins> - метод який (get або post) буде використаний при надсиланні 
        форми. <i>get</i> - метод за замовчуванням. Відправленні данні форми будуть 
        відображені в полі адреси сторінки. Тож його не варто використовувати при надсиланні 
        особистих данних. <i>post</i> - не відображає данні в адресному ряду. Може бути 
        використаний для надсилання великого об&#39;єму данних. Данні в такому випадку 
        можуть бути закодовані. <br />
        <ins>encype</ins> - визначає як мають бути закодовані данні при відсиланні їх на 
        сервер. <br />
        <ins>autocomplete</ins> - вказує чи повинна форма мати автозаповнення (<i>on
            </i> або <i>off</i> ) <br />
        <ins>novalidate</ins> - якщо присутній то данні форми не мають перевірятись при 
            надсиланні. <br />
        <ins>name</ins> - ім&#39;я форми.<br />
        <ins>rel</ins> - визначає зв&#39;язок між пов&#39;язаним ресурсом і поточним 
        документом (уявлення не маю про що це).<br />

        <h3 id="htmlFormElements">Елементи form:</h3>
        <b>input</b> - найважливіший елемент форми. Про нього нижче.<br />
        <b>select</b> - випадаючий список, має атрибут <ins>name</ins>, <ins>size</ins> - 
            кількість видимих елементів, <ins>multiple</ins> - дозволяє обрати кілька 
            значень. Містить в собі <b>option</b> з атрибутом <ins>value</ins>. Також опція 
            може бути <ins>selected</ins> - обраною. За замовчанням перша опція є обраною<br />
        <b>textarea</b> - багаторядкове поле вводу. Має <ins>nsme</ins>, <ins>rows</ins>, 
            <ins>cols</ins>. Можна вказувати розмір в пікселях за допомогою CSS.<br />
        <b>button</b> - кнопка. Має <ins>type</ins>, <ins>onclick</ins><br />
        <b>datalist</b> - список попередньо визначених параметрів для input. <ins>id
            </ins> - ідентифікатор на який має посилатись <ins>list</ins> атрибут інпута.
            Має містити <b>option</b> вкладені елементи. <br />
        <b>output</b> - поле де виводиться висновок. Має <ins>name</ins>, <ins>for
            </ins> - не зовсім розібрався як це працює та в прикладі for=&#34;a b&#34;, 
            де a b це ідентифікатори інпутів, як я зрозумів...<br />

        <h3 id="htmlInputAtributes">Атрибути input: </h3>
        input - свого роду map що має ключ і значення. Значення це те що вводить користувач, 
        а ключ це <ins>name</ins>, якщо користуватись такою логікою. <br />
        <ins>name</ins> - кожне поле вводу повинно мати атрибут name. <br />
        <ins>checked</ins> - попередньо обране поле <br />
        <ins>disabled</ins> - відключення поля вводу<br />
        <ins>maxlength</ins> - визначає максимальну кількість символів для поля вводу<br />
        <ins>readonly</ins> - данні тільки для читання, не можуть бути змінені<br />
        <ins>required</ins> - обов&#39;язкове поле вводу<br />
        <ins>size</ins> - розмір поля вводу<br />
        <ins>step</ins> - визначає доступні інтервали номерів для поля вводу<br />
        <ins>value</ins> - визначає значення за замовчуванням<br />
        <ins>pattern</ins> - визначає регулярні вирази для перевірки вхідних данних<br />
        <ins>autocomplete</ins> - визначає чи буде автозаповнення. Якщо <i>on</i> то браузер 
            автоматично завершує введення значення на основі того що вводить юзер <br /> 
        <ins>novalidate</ins> - данні не перевіряються при відправленні форми <br />
        <ins>autofocus</ins> - це поле вводу стає вибраним автоматично <br />
        <ins>form</ins> - визначає одну або кілька форм до яких належить інпут. Має містити 
            ідентифікатор форми <br />
        <ins>formaction</ins> - має містити URL файлу що буде обробляти елемент. Перевизначає 
            action форми. <br />
        <ins>formenctype</ins> - визначає тип кодування при надсиланні (тільки для форм з 
            method=post). Перевизначає enctype форми <br />
        <ins>formmethod</ins> - метод HTTP для надсилання данних. Перевизначає атрибут метода 
            елемента форми <br />
        і т.і.

        <FormInputs />

        <div className={style.iTFormElements}>
                <span className={style.iTHead}> Не є типом інпуту!</span>
            <span className={style.iTCouple}> <textarea rows={3} cols={21}></textarea>
                <span className={style.iTDescribe}> <b>textarea</b> - багаторядкове
                поле вводу. В данному прикладі: rows=3, cols=2
                </span> </span>
            <span className={style.iTCouple}> 
                <select className={style.iTInput} id="sformSlect">
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three. And some text </option>
                </select>
                <span className={style.iTDescribe}> <b>select</b> - випадаючий список
                </span> </span>
            </div>
            Зрештую щоб навчитись користуватись формами в Next.js варто вчити <Link href="
            /react">
            React </Link>
        </>
    );
} 