import React from 'react';
import style from '@/app/ui/html/forms/forms.module.css';

interface MyInputProps {
    type: string;
    description: string;
}

function MyInput({type, description} : MyInputProps) {
    return (
        <div className={style.iTCouple}> <input className={style.iTInput} type={type} />
            <span className={style.iTDescribe}><i>{type}</i> {description}</span></div>
    );
}

export default function FormInputs() {
    return (
        <form className={style.inputTypes}>
        <h3 id="htmlInputForm" className={style.iTHead}>input type`s:</h3>
            <MyInput type="text" description="- поле вводу" />
            <MyInput type="password" description="- поле вводу що приховує данні що в нього 
                вводять" />
            <MyInput type="email" description="- поле вводу емейлу" />
            <MyInput type="search" description="- поле пошуку. Поведінка за замовченням така
                 як і у text поля" />
            
            <span className={style.iTCouple}> <input className={style.iTInput} type="tel" 
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                <span className={style.iTDescribe}> <i>tel</i> - номер телефону. В данному 
                випадку використовується pattern=&#34;[0-9]&#123;3&#125;-[0-9]&#123;2&#125;-
                [0-9]&#123;3&#125;&#34; що не працює, в данному випадку...</span> </span>

            <MyInput type="url" description="- поле для вводу URL" />

            <span className={style.iTCouple}> <input className={style.iTInput} type="number" />
                <span className={style.iTDescribe}> <i>number</i> - число. Має <ins>min
                </ins> i <ins>max</ins> атрибути, де можна обмежити значення вводу.
                </span> </span>
            
            <MyInput type="radio" description="- визначає радіо-кнопку. Приклад трохи вище. 
                Дозволяє користувачу обрати лише одне значення з кнопок з однаковим className" />
            <MyInput type="checkbox" description="- визначає прапорець. 
                Користувачь може обрати одне або кілька значень варіантів. На відміну від 
                радіо-кнопок кожен прапорець це окремий елемент, а не частина з набору тож 
                повинен мати власне ім&#39;я" />
            <MyInput type="range" description="- діапазон. Повзунок що за 
                замовчеванням має діапазон 0-100" />
            <MyInput type="color" description="- поле вводу кольору" />
            <MyInput type="date" description="- для вводу дати" />
            <MyInput type="week" description="- поле вводу тижня і року" />
            <MyInput type="month" description="- місяць і рік" />
            <MyInput type="datetime-local" description="- дата і час" />
            <MyInput type="time" description="- час" />
            
            <span className={style.iTCouple}> <input className={style.iTInputFile} 
            type="file" />
                <span className={style.iTDescribe}> <i>file</i> - файл
                </span> </span>
            <span className={style.iTCouple}> <input className={style.iTInput} type="button" 
            value="Just a button" />
                <span className={style.iTDescribe}> <i>button</i> - кнопка. Також має 
                атрибут <i>value</i> - що визначає текст на кнопці
                </span> </span>
            <span className={style.iTCouple}> <input className={style.iTInput} type="reset" 
            value="Reset form data" />
                <span className={style.iTDescribe}> <i>reset</i> - кнопка скидування данних 
                форми. Також має атрибут <i>value</i> - що визначає текст на кнопці, має 
                певні значення за замовчуванням, тож може бути пропущеним
                </span> </span>
            <span className={style.iTCouple}> <input className={style.iTInput} type="submit" 
            value="Send data" />
                <span className={style.iTDescribe}> <i>submit</i> - кнопка для 
                надсилання данних форми. Також має атрибут <i>value</i>
                </span> </span>
        </form>
    );
}