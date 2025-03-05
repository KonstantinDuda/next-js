import React from "react";
import Link from "next/link";
import MyTransition from "./transition";
import style from "@/app/ui/css/csslist.module.css";

export default function LinkList() {
    return (
        <ul>
        <div id="cssLinks" className={style.firstBox}>
            <div className={style.firBlist}>
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
                <li><a href="https://w3schoolsua.github.io/css/css_align.html#gsc.tab=0">
                    Макет. Вертикальне і горизонтальне вирівнювання</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_combinators.html#gsc.tab=0">
                Комбінатори - взаємозв&#39;язок між селекторами</a></li>
                    Пробіл - селектор нащадків. (.myClass p &#123;стилі будуть прийматись до 
                    всіх p що знаходяться всередень цього класу&#125;). <br />
                    &#62; - дочірній елемент (не зрозумів) <br />
                    + - сусідній родинний (на одному рівні з елементом і знаходиться одразу 
                        після нього) <br />
                    &#126; - батьківський селектор (всі елементи на рівні з цим)
                <li><a href="https://w3schoolsua.github.io/css/css_pseudo_classes.html#gsc.tab=0">
                    Псевдо класи</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_pseudo_elements.html#gsc.tab=0">
                    Псевдо елементи</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_image_transparency.html#gsc.tab=0">
                    Прозорість та непрозорість</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_navbar.html#gsc.tab=0">
                    Панель навігації</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_dropdowns.html#gsc.tab=0">
                    Випадаючі списки</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_image_gallery.html#google_vignette">
                    Галерея зображень</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_image_sprites.html#gsc.tab=0">
                    Спрайти зображень</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_attribute_selectors.html#gsc.tab=0">
                    Селектори атрибутів</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_form.html#gsc.tab=0">
                    Форми</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_counters.html#gsc.tab=0">
                    Лічильники</a></li>
                    <div>
                        Лічильники подібні до змінних. Користуватись ними можна за допомогою 
                        властивостей: <ins>counter-reset</ins> - сторення або скидання 
                        лічильника, <ins>counter-increment</ins> - щбільшення значення, <ins>
                            content</ins> - вставка згенерованого контенту, <i>
                            counter</i> або <i>counters</i> - функція що додає значення 
                            лічильника (є значеннями властивості content). 
                    </div>
                <li><a href="https://w3schoolsua.github.io/css/css_website_layout.html#gsc.tab=0">
                    Макет</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_units.html#gsc.tab=0">
                    Одиниці</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_specificity.html#gsc.tab=0">
                    Специфічність</a> та <a 
                    href="https://w3schoolsua.github.io/css/css_important.html#gsc.tab=0">
                    !important</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_borders.html#gsc.tab=0">
                    Закруглені кути</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_border_images.html#gsc.tab=0">
                    Зображення в якості межі елемента</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_backgrounds.html#gsc.tab=0">
                    Кілька фонів</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_colors.html#gsc.tab=0">
                    Кольори</a> та <a 
                    href="https://w3schoolsua.github.io/css/css_colors_keywords.html#gsc.tab=0">
                    Ключові слова кольору</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_gradients.html#gsc.tab=0">
                    Градієнти</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_shadows.html#gsc.tab=0">
                    Ефекти тіні</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_text_effects.html#gsc.tab=0">
                    Ефекти тексту</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_fonts.html#gsc.tab=0">
                    Шрифти</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_2dtransforms.html#gsc.tab=0">
                    2D трансформації</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_3dtransforms.html#gsc.tab=0">
                    3D трансформації</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css_tooltip.html#gsc.tab=0">
                    Підказки</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_images.html#gsc.tab=0">
                    Стилізація зображень</a> та <a 
                    href="https://w3schoolsua.github.io/css/css3_image_reflection.html#gsc.tab=0">
                        Відбиття зображення</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_object-fit.html#gsc.tab=0">
                    Властивості object-fit</a> та <a 
                    href="https://w3schoolsua.github.io/css/css3_object-position.html#gsc.tab=0">
                        object-position</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_masking.html#gsc.tab=0">
                    Маскування</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_buttons.html#gsc.tab=0">
                    Кнопки</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_pagination.html#gsc.tab=0">
                    Нумерація сторінок</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_multiple_columns.html#gsc.tab=0">
                    Кілька стовбців</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_user_interface.html#gsc.tab=0">
                    Користувацький інтерфейс</a></li>
            </div>
                <div className={style.myTransition}>
                    <MyTransition />
                </div>
        </div>

        <div className={style.secondBox}>
            <div className={style.secBlist}>
                <li><a href="https://w3schoolsua.github.io/css/css3_variables.html#gsc.tab=0">
                    Змінні</a></li>
                    <div>
                    Можна створювати глобальні змінні (але тільки на один файл) і локальні. <b>
                    var</b> - функція що використовують для вставки змінної. Синтаксис <b>var
                    </b>(<i>name</i>, <i>data</i>) де name - ім&#39;я змінної, data - не 
                    обов&#39;язкове значення на випадок якщо змінна не була знайдена. В 
                    селекторі <b>:root</b> створюються так звані глобальні змінні. Я 
                    скористався ними для <Link href="/next">перемикання між темами</Link>. 
                    Якщо існують глобальні та локальні змінні з одним іменем то бутуть 
                    виконані локальні. Змінні можна буде перевизначати за допомогою скриптів.
                    Також вони зручні для використання в медіа запитах. 
                    </div>
                <li><a href="https://w3schoolsua.github.io/css/css3_box-sizing.html#gsc.tab=0">
                    Розмір блоку</a></li>
                <li><a href="https://w3schoolsua.github.io/css/css3_mediaqueries.html#gsc.tab=0">
                    Медіа запити</a></li>
                    <div>
                        З моїм досвідом використання медіа запитів можна <Link 
                        href="/html#htmlInputForm">познайомитись тут</Link>, для цього 
                        змініть розмір веб переглядача після переходу по посиланню. Як я його 
                        реалізовував можна <a 
                        href="https://github.com/KonstantinDuda/next-js/blob/0707939e2a00d37c9109080463e1a7484bf4ae5f/ui/html/forms/forms.module.css"
                        target="_blank" rel="noreferrer">подивитись на github</a>. З цікавого 
                        тут є певні &#34;типові брекпоінти&#34; в <b>992 та 600px</b>.
                    </div>
            </div>
                <div className={style.myFlexbox}>
                    <li><a href="https://w3schoolsua.github.io/css/css3_flexbox.html#gsc.tab=0">
                        Flexbox</a></li>
                    <div>
                        <b>Батьківський контейнер і його властивості:</b> <br />
                        &#8195; Щоб зробити контейнер типу флекс бокса, треба встановити для селектора 
                        в який буде вкладатись перелік об&#39;єктів розположенням яких буде 
                        керувати бокс, властивість <ins>display</ins> встановити як <i>
                        flex</i>. <br />
                        &#8195; Тоді можна встановити напрям вкладених об&#39;єктів за 
                        допомогою <ins>flex-direction</ins> як <i>column</i> - колонка, або <i>
                        row</i> - рядок, або реверсивні значення тих самих типів, тобто <i>
                        column-reverse</i> та <i>row-reverse</i>. <br /> 
                        &#8195; При великій кількості елементів може знадобитись можливість перенесення 
                        вкладених елементів і це можна зробити за допомогою <ins>flex-wrap
                        </ins> - <i>wrap</i> або заборонити за допомогою <i>nowrap</i> для тої 
                        самої властивості, ще існує <i>wrap-reverse</i>. <br /> 
                        &#8195; Вище згадані дві властивості можна встановити за 
                        допомогою <ins>flex-flow</ins> перелічивши через пробіл direction значення 
                        а потім flex-wrap. <br /> 
                        &#8195; Вирівнювати вкладені елементи можна за допомогою <ins>
                        justify-content</ins> встановивши її як <i>center</i>, <i>flex-stert
                        </i>, <i>flex-end</i>, <i>space-around</i> - пробіли між вкладенями, а 
                        такоже перед і після, <i>space-between</i> - пробіли між вкладенями. <br />
                        &#8195; Також можна вирівнювати вкладеня по вертикалі. Для цього є <ins>
                        align-items</ins> з <i>center</i>, <i>flex-start</i>, <i>flex-end
                        </i>, <i>stretch</i> - заповняє контейнер, <i>baseline</i> - (не 
                        зрозумів), <ins>align-content</ins> - (не зрозумів). <br />
                        <br />
                        <b>Вкладені елементи і їх властивості:</b> <br />
                        &#8195; За допомогою <ins>order</ins> властивості можна змінювати послідовність  
                        вкладень просто встановлюючи для нього значення від 1 і далі.<br />
                        &#8195; <ins>flex-grow</ins> - розтягує зміст одного відносно іншого, залежить від 
                        значеня в цифрах (наприклад 1 до 3 і т.п.), за замовчуваням 0. <br />
                        &#8195; <ins>flex-shrink</ins> - стискає елемент, за замовченям 1 <br />
                        &#8195; <ins>flex-basis</ins> - визначає початкову довжину <br />
                        &#8195; <ins>flex</ins> - одна властивість для flex-grow, flex-shrink та flex-basis саме 
                        в такій послідовності. <br />
                        &#8195; І ще щось робить <ins>align-self</ins> <br />
                    </div>
                </div>
            </div> 
        </ul>
    );
}