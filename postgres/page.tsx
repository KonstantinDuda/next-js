import React from "react";

export default function Postgres() {
    return ( <>
        <h1 id="pstgrs">Postgres</h1>
        <a href="https://www.postgresql.org/docs/current/tutorial-createdb.html">&#8195;  В 
        підручнику</a>, не зрозумілим для мене є те куди саме я маю писати першу ж команду. 
        Можливо через те що я не знаю англійську на достатньо хорошому рівні. Спроба 
        виконати цю команду в терміналі VSCode та в PowerShell видали однаковий результат. 
        Спроби знайти щось подібне до файлу в який треба прописати шлях до інстальованого 
        постгрес як це могло би бути на лінукс не дав результатів в віндовс. Також там 
        пропонується прописати повний шлях до теки в якій встановлений постгрес, але в 
        прикладі явно опис не про віндовс. <br /> 
        Схоже що створити нову базу данних я не можу, тож доведеться слідувати <a 
        href="https://www.w3schools.com/postgresql/postgresql_getstarted.php"> звичному
        підручника</a>. Що бентежить безумовно, та що я можу зробити, я вперше стикнувся 
        з цим. Може пізніше мене цьому навчать.  <br />
        Здається вийшло війти у вже створену базу данних. База данних існує, але в ній 
        немає таблиць. Тож стандартний запит для перевірки коректності інстальованої 
        програми є перевірка її версії за допомогою <b>SELECT version();</b>. У мене 17.4.
        semicolon - крапка з комою. Окрім терміналу у Postgres є і програмка, та я не планую 
        її використовувати. Для сайту на Next з прикладу заради якого я почав знайомство з 
        Postgres мені потрібна інша таблиця, але поки я намагаюсь розібратись з бд я просто 
        буду повторювати туторіал і виписувати те що вважатиму важливим.
        <br /><br />



        <h3 id="pstgrsTable">Створення таблиці</h3>
        <div className="code">
        <b>CREATE TABLE</b> cars ( <br />
        &#8195; brand <b>VARCHAR</b>(255), <br />
        &#8195; model <b>VARCHAR</b>(255), <br />
        &#8195; year <b>INT</b> <br />
        ); <br />
        </div>
        &#8195; Отже треба написати CREATE TABLE, потім назву таблиці, в дужках назви
        колонок та їх типи через кому. Важливо не забути про semicolon. одразу виникає 
        питання, а які бувають типи данних в Postgres? Думаю про це пізніше буде. Наразі 
        варто запам'ятати <b>CREATE TABLE</b> - створити таблицю, <b>VARCHAR</b> - це 
        текстовий тип данних (255 кількість символів), <b>INT</b> - це цілочисельний тип.
        Створити таблицю вийшло з другого разу. <br />
        &#8195; Наступна команда: <b>SELECT * FROM</b> cars<b>;</b> - перевірка таблиці по 
        імені. Де зірочка означає що ми хочемо побачити всі колонки. Можна через коми 
        перелічити колонки які ми хочемо побачити.  
        Турбує те що термінал намагається видавати відповіді Українською мовою, а у нього не 
        виходить, тож я волів би перевести його на Англійську, та не знаю як. <br />
        &#8195; Щоб внести данні в таблицю використовується: <b>INSERT INTO</b> cars (brand, 
        model, year) <b>VALUES</b> ('Ford', 'Mustang', 1964);. Цікаво чи важливо щоб 
        послідовність в інсерті відповідала послідовності яка була вказана при створені 
        таблиці. З іншого боку очевидно що в інсерті та волью вони мають бути відповідними. 
        Перевірив, послідовність не залежить від того якою ви її зробили при створенні. 
        Відповідь консолі, якщо все зроблено правильно, має бути <b>INSERT 0 1</b>. Також 
        важливо відмітити що в прикладі не створюється ідентифікатор. Думаю що краще вчитись 
        зберігати данні одразу з ідентифікаторами. Думаю що пізніше про це напишуть. Можна 
        додавати одразу <b>масив данних</b> перелічуючи їх в різних парах лапок і розділяючи 
        комами. <br />
        &#8195; До існуючої таблиці можна додати колонку: <b>ALTER TABLE
        </b> cars <b>ADD</b> color VARCHAR(255);. Колонка буде пуста. Якщо все зроблено 
        правильно то відповідь буде <b>ALTER TABLE</b>. Ця команда змінює таблицю. Також 
        вона може змінювати і тип данних: <b>ALTER TABLE</b> cars <b>ALTER COLUMN
        </b> year <b>TYPE VARCHAR(4);</b>. Треба бути уважним адже INT переробити на текст 
        можливо, але зворотню операцію таблиця не виконає. Цією командою можна змінити 
        кількість символів кольору, наприклад і т.і. Видалити колонку: <b>ALTER TABLE
        </b> cars <b>DROP COLUMN color;</b>. <br />
        &#8195; <b>UPDATE</b> cars <b>SET</b> color = 'red' <b>WHERE</b> brand = 'Ford'; 
        - оновлення данних колонки. Важливо запам'ятати що данна команда впливає на 
        данні що вже існують в таблиці, на відміну від попередньої команди, що змінювала 
        саму таблицю. Якщо все зроблено правильно то відповідь буде <b>UPDATE 1</b>.
        Якщо пропустити Where то вся колонка буде змінена, це теж може знадобитись. <br />
        &#8195; <b>DELETE FROM</b> cars <b>WHERE</b> brand = 'Ford'; - видалення данних з 
        рядка таблиці. Якщо все зроблено правильно то відповідь буде <b>DELETE 1</b>. Важливо 
        розуміти що сам рядок залишиться але не матиме данних. Якщо пропустити Where то
        очиститься вся таблиця що буде ідентичним команді: <b>TRUNCATE TABLE</b> cars; <br />
        &#8195; Щоб видалити таблицю використовується: <b>DROP TABLE</b> cars;
        <h3 id="pstgrsTablesToDive">Занурення в бази данних</h3>
        &#8195; В підручнику є розділ що зветься <a 
        href="https://www.w3schools.com/postgresql/postgresql_create_demodatabase.php">
        Create Demo Database</a>, та в ньому база данних не створюється, там лише 
        створюються кілька таблиць і вони заповнюються данними для подальшого навчання. 
        Зато тут в таблицях є ідентифікатори, про які я вже згадував раніше. І створюються 
        вони так: cars_id <b>SERIAL NOT NULL PRIMARY KEY,</b>. Це означає що вони будуть 
        автоматично збільшуватись на одиницю при кожному новому записі. Також важливо 
        вказати що вони не можуть бути пустими. Це важливо для того щоб можна було
        використовувати їх як ключі для інших таблиць. Створив таблиці щоб самому пробувати
        все чому мене вчитимуть. На сайті копіюється код, а у власний термінал він 
        вставляється простим кліком правої кнопки миші.
        <br /><br />



        <h3 id="pstgrsWhere">Оператори WHERE</h3>
        &#8195; Раніше ми вже використовували WHERE. Тепер ознайомимось з його можливостями.
        <table className="colorTable">
            <thead>
                <tr>
                    <th>Оператор</th>
                    <th>Опис</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> = </td>
                    <td> Дорівнює </td>
                </tr>
                <tr>
                    <td> !=</td>
                    <td> Не дорівнює </td>
                </tr>
                <tr>
                    <td> &#62; </td>
                    <td> Більше </td>
                </tr>
                <tr>
                    <td> &#60; </td>
                    <td> Менше </td>
                </tr>
                <tr>
                    <td> &#62;= </td>
                    <td> Більше або рівне </td>
                </tr>
                <tr>
                    <td> &#60;= </td>
                    <td> Менше або рівне </td>
                </tr>
                <tr>
                    <td> BETWEEN </td>
                    <td> Перевірка, чи в діапазоні. Використовується з AND. 
                        Значення вказані в діапазоні враховуються</td>
                </tr>
                <tr>
                    <td> IN </td>
                    <td> Перевірка, чи дорівнює значення елементу в списку </td>
                </tr>
                <tr>
                    <td> AND </td>
                    <td> Логічне ТА </td>
                </tr>
                <tr>
                    <td> OR </td>
                    <td> Логічне АБО </td>
                </tr>
                <tr>
                    <td> LIKE </td>
                    <td> Пошук патерну (чутливий до регістру). Часто використовується з 
                        &#37; - що репрезентує нуль, один, або кілька символів, та з &#95;
                        - що репрезентує один символ </td>
                </tr>
                <tr>
                    <td> ILIKE </td>
                    <td> Пошук патерну як LIKE але не чутливий до регістру </td>
                </tr>
                <tr>
                    <td> IS NULL </td>
                    <td> Порожні значення </td>
                </tr>
                <tr>
                    <td> NOT </td>
                    <td> Не ...</td>
                </tr>
            </tbody>
        </table>
        Запит робиться так: <b>SELECT * FROM</b> cars <b>WHERE</b> brand = 'Ford';. <br />
        Використання AND: <b>SELECT * FROM</b> cars <b>WHERE</b> brand = 'Ford' <b>AND
            </b> model = 'Mustang';. <br />
        Використання OR: <b>SELECT * FROM</b> cars <b>WHERE</b> brand = 'Ford' <b>OR</b> model 
            = 'Mustang';. <br />
        Використання BETWEEN: <b>SELECT * FROM</b> cars <b>WHERE</b> year <b>BETWEEN
            </b> 1960 <b>AND</b> 1970;. <br /> 
        Використання IN: <b>SELECT * FROM</b> cars <b>WHERE</b> brand <b>IN</b> ('Ford', 
            'Volvo');. <br />
        Використання LIKE: <b>SELECT * FROM</b> cars <b>WHERE</b> model <b>LIKE</b> 'M%';. <br />
        Використання ILIKE: <b>SELECT * FROM</b> cars <b>WHERE</b> model <b>ILIKE</b> 'm%';. <br />
        Використання НЕ: <b>SELECT * FROM</b> cars <b>WHERE NOT</b> brand = 'Ford';. <br />
        Використання НЕ з іншими операторами: <b>SELECT * FROM</b> cars <b>WHERE
            </b> brand <b>NOT IN</b> ('Volvo', 'Mersedes', 'Toyota');. <br />
        <b>SELECT * FROM</b> cars <b>WHERE</b> brand <b>NOT ILIKE</b> 'b%';. (Виведе всі 
        значення де бренд починається не з b, не зважаючи на регістр) <br />
        У мене таблиця з автівками практично пуста тож я перевірю наприклад на orders що 
        для мене люб'язно створили раніше. Наприклад: SELECT customer_id, order_date FROM 
        orders WHERE customer_id BETWEEN 3 AND 6;, видало 45 пар, та довелось кілька 
        разів тицяти на Enter. Задав діапазон 4 - 6, отримав 38 результатів. Отже трійок 
        має бути 7. Перевірю: SELECT * FROM orders WHERE customer_id = 3; Все вірно.
        <br /><br />



        <h3>Тільки різні значення</h3>
        &#8195; <b>SELECT DISTINCT</b> customer_id <b>FROM</b> orders; - виведе всі унікальні
        значення. У мене вийшло 89 унікальних значень. Шкода що я ще не вмію сортувати данні. 
        Також цю команду можна використовувати з лічильником: <b>SELECT COUNT(DISTINCT
            </b> customer_id) <b>FROM</b> orders;
        <h3>Сортування</h3>
        <b>SELECT * FROM</b> products <b>ORDERED BY</b> price; - сортування по ціні. <br />
        <b>SELECT * FROM</b> products <b>ORDERED BY</b> price <b>DESC</b>; - сортування 
        по ціні в зворотньому порядку. <br />
        Сортування текстових данних виконується за алфавітом. 
        <h3>LIMIT</h3>
        &#8195; <b>LIMIT</b> - обмежує кількість виведених результатів. <b>OFFSET</b> - 
        з якого значення почати вивід, ви вводите нульове значення, а вивід починається з 
        першого! Якщо зробити запит: SELECT * FROM products LIMIT 40 OFFSET 40; то отримаю 
        37 значень, адже таблиця має лише 77 колонок.
        <h3>MIN та MAX</h3>
        <b>SELECT MIN</b>(price) <b>FROM</b> products; - виведе найдешевший товар. Такий 
        самий синтаксис у MAX. <b>AS</b> - дозволяє надати ім'я результату: SELECT MIN(price) 
        AS lowest_price FROM products;
        <h3>Кількість</h3>
        <b>SELECT COUNT</b>(customer_id) <b>FROM</b> customers; - виведе кількість 
        ідентифікаторів. Спіцефічні данні можна отримати за допомогою WHERE: <b>SELECT 
            COUNT</b>(customer_id) <b>FROM</b> customers <b>WHERE</b> city = 'London';
        <h3>Сумма</h3>
        Сумму числових значень можна отримати за допомогою SUM: <b>SELECT SUM
            </b>(quantity) <b>FROM</b> order_details;
        <h3>Середнє значення</h3>
        <b>SELECT AVG</b>(price) <b>FROM</b> production; - повертає середнє значення з чисел.
        В данному випадку це середня цінв всіх продуктів. Результат цієї операції можна 
        округлити до 2 знаків після коми, за допомогою ::NUMERIC: <b>SELECT AVG
            </b>(price)::NUMERIC(10,2) FROM products;
        <h3>LIKE</h3>
        <b>LIKE</b> - використовується в конструкції з WHERE. <b>SELECT * FROM
            </b> customers <b>WHERE</b> customer_name <b>LIKE</b> 'A%'; - запит на всі імена 
        що починаються з великої літери А і умовно необмеженої кількості символів після нього.
        Якщо %а% то всі імена з маленькою літерою А що не є першою і останньою літерою. Якщо 
        не важливо велика літера чи маленька то є <b>ILIKE</b>. Якщо вам потрібно обмежити 
        кількість літер то можна зробити запит: <b>SELECT * FROM</b> customers <b>WHERE
            </b> city <b>LIKE</b> '____'; - в данному випадку 4 літери. Будь яку можна задати.
        <h3>IN</h3>
        Використовується в конструкції з WHERE. Також може бути використано з NOT:<b>SELECT 
            * FROM</b> customers <b>WHERE</b> country <b>NOT IN</b> ('Germany', 'France', 
        'UK'); Також IN та NOT IN ьщжна використати з <b>SELECT</b>: <b>SELECT * FROM 
            </b> customers <b>WHERE</b> customer_id <b>IN</b> (<b>SELECT</b> customer_id <b>
            FROM</b> orders); - Так, тут треба розібратись. Треба дивитись від крапки з комою. 
        Отже в лапках ми беремо customer_id з orders, з цього створюється список з якого 
        ми будемо брати ті що збігаються з customer_id з таблиці customers. Здається 
        розібрався. <br /><br />




        <h3>BETWEEN</h3>
        Перевірка, чи в діапазоні. Використовується з AND. Значення вказані в діапазоні 
        враховуються. Виникає питання, як саме він видає значення, адже більшість таблиць не 
        будуть сортовані. У нас є таблиця з продуктами і ціни там не сортовані, от і 
        перевірю: <b>SELECT * FROM</b> products <b>WHERE</b> price <b>BETWEEN</b> 6 <b>
            AND</b> 9.20; - Пам'ятаємо що ці значення включені. Отримав не ті продукти що 
        знаходяться між 13 і 19 по product_id, а математично. Це логічно. Тож щоб 
        отримати те що я описав треба навчитись робити складніші запити. Будьте уважні 
        якщо користуєтесь <a 
        href="https://www.w3schools.com/postgresql/postgresql_between.php">данним 
        підручником</a>. Там products з великої букви і т.і. Хоча я отримав правильний 
        результат, але варто бути уважним, якщо створена таблиця в нижньому регістрі то 
        певне так до неї і варто звертатись, адже може бути інша таблиця але з першою 
        літерою у верхньому регістрі. Також WHERE працює і з текстовими данними: <b>SELECT * 
            FROM</b> products <b>WHERE</b> product_name <b>BETWEEN</b> 'Pavlova' <b>AND
                </b> 'Tofu'; - результат має бути базованим на алфавітній послідовності. 
        Я отримав лист з 23 значень і спочатку не зрозумів чому. Але сортування допомогло з 
        цим: <b>SELECT * FROM</b> products <b>WHERE</b> product_name <b>BETWEEN
            </b> 'Pavlova' <b>AND</b> 'Tofu' <b>ORDER BY</b> product_name;
        <h3>AS та об'єднання строк</h3>
        Псевдоніми створюються за допомогою <b>AS</b>. При цьому саме ключове слово можна 
        пропустити. Використовується при об'єднанні строк.  Об'єднання виконується за 
        допомогою &#124;&#124;.
        <h3>JOIN</h3>
        Використовується для об'єднання рядків на основі стовбця між ними. Не зовсім 
        зрозуміло. У нас є таблицi products та categories і в обох є стовбці category_id. 
        Об'єднання можуть бути: <a 
        href="https://www.w3schools.com/postgresql/postgresql_inner_join.php">
            <b>INNER</b></a> - Повертає записи, які мають відповідні 
        значення в обох таблицях. Є значенням за замовченням. <a 
        href="https://www.w3schools.com/postgresql/postgresql_left_join.php">
            <b>LEFT</b></a> - Повертає всі записи з лівої таблиці та 
        відповідні записи з правої таблиці. <a 
        href="https://www.w3schools.com/postgresql/postgresql_right_join.php">
            <b>RIGHT</b></a> - Повертає всі записи з правої 
        таблиці та відповідні записи з лівої таблиці. <a 
        href="https://www.w3schools.com/postgresql/postgresql_full_join.php">
            <b>FULL</b></a> - Повертає всі записи, 
        якщо є відповідність у лівій або правій таблиці. <a 
        href="https://www.w3schools.com/postgresql/postgresql_cross_join.php">
            <b>CROSS</b></a> - Сумнівна та існуюча можливість поєднати кожен рядок одної 
        таблиці з кожним рядком другої
        <h3>UNION</h3>
        Використовується для поєднання результатів кількох запитів: <b>SELECT</b> product_id, 
        product_name <b>FROM</b> products <b>UNION SELECT</b> testproduct_id, 
        product_name <b>FROM</b> testproducts <b>ORDERED BY</b> product_id; Але є обмеження 
        для таких запитів: <ul><li>У них має бути однакова кількість стовпців</li>
        <li>Стовпці повинні мати однакові типи данних</li><li>Стовпці повинні бути в одному 
        порядку</li></ul>. Видає тільки різні значення, отже якщо буде в кількох таблицях 
        що ви виводете однакови результати то покажуться ці результати тільки один раз. Якщо 
        потрібно отримувати кожен результат то можна використати <b>UNION ALL</b>. 
        <h3>GROUP BY</h3>
        Групує рядки з однаковими значеннями в якийсь загальний рядок. Щоб групувати 
        результати по колонкам, цей запит робиться з функціями як <b>COUNT(), MAX(), 
        MIN(), SUM(), AVG()</b>. <br /><br />




        <h3>HAVING</h3>
        Альтернатива WHERE яку можна використовувати з агрегатними функціями. <b>SELECT 
        COUNT</b>(customer_id), country <b>FROM</b> customers <b>GROUP BY</b> country <b>
        HAVING COUNT</b>(customer_id) &#62; 5; - Беремо кількість ідентифікаторів і колонку
        країн з customers груповані по країнні в яких кількість ідентифікаторів більше 5.
        І ніби все зрозуміло, але не впевнений що зміг би сам сформулювати такий запит.
        Наступні приклади ще більше мене заплутали. Ось наприклад: <b>SELECT
            </b> customers.customer_name, SUM(products.price) 
        <div className="code"><b>FROM
            </b> order_details <b>LEFT JOIN</b> products ON order_details.product_id = 
            products.product_id <b>LEFT JOIN</b> orders ON order_details.order_id = 
            orders.order_id <b>LEFT JOIN</b> customers ON orders.customer_id = 
            customers.customer_id <b>GROUP BY</b> customer_name <b>HAVING 
            SUM</b>(products.price) &#62; 1000.00;
        </div> 
        Отже ми отримуємо дві колонки, імена та сумму цін продуктів. From order_details для 
        мене не зрозуміла деталь. Потім ми об'єднуємо кілька рядків по принципу, беремо всі 
        записи з лівої таблиці і тільки співпадаючі з правої що дорівнюють ще певним 
        характеристикам та групуємо їх в загальний рядок при умові що сумма цін продуктів 
        більша за 1000.00. Ну, наразі я би точно не додумався до такого запису! 
        <h3>EXISTS</h3>
        Перевіряє чи є якийсь запис в підзаписі. Також може бути з NOT: <b>SELECT
            </b> customers.customer_name <b>FROM</b> customers <b>WHERE NOT EXISTS (
            SELECT</b> order_id <b>FROM</b> orders <b>WHERE</b> customer_id = 
            customers.customer_id); - отже беремо лише імена клієнтів, у яких немає 
            жодного запису в таблиці замовлень.
        <h3>ANY</h3>
        Дозволяє порівнювати значення стовпця з діапазоном інших значень. Як результат 
        повертає булеве значення, true при умові якщо хочаб одне значення відповідає запиту. 
        <div className="code">
            <b>SELECT</b> product_name <br />
            <b>FROM</b> products <br />
            <b>WHERE</b> products_id = <b>ANY</b> ( <br />
            &#8195; <b>SELECT</b> product_id <br />
            &#8195; <b>FROM</b> order_details <br />
            &#8195; <b>WHERE</b> quantity &#62; 120 <br />
            );
        </div>
        <h3>ALL</h3>
        Повертає булеве значення. true якщо всі значення відповідають умові. Синтаксис 
        подібний до ANY. 




        <h3>CASE ELSE</h3>
        Це Розгалуження. Виконується з <b>WHEN</b> та <b>END</b>. Можна використати AS 
        щоб назначити ім'я колонки. 
        <div className="code">
            <b>SELECT</b> product_name, <br />
            <b>CASE</b> <br />
            &#8195; <b>WHEN</b> price &#60; 10 <b>THEN</b> 'Low price product' <br />
            &#8195; <b>WHEN</b> price &#62; 50 <b>THEN</b> 'High price product' <br />
            <b>ELSE</b> <br />
            &#8195; 'Normal product' <br />
            <b>END AS</b> "price category" <br />
            <b>FROM</b> products;
        </div>
        <h3><a href="https://www.w3schools.com/postgresql/postgresql_exercises.php">Вправи</a></h3>
        <br /><br />
        
        
        
        <h3>Dashboard продовжуння</h3>
        Подальші дії виконуються в окремому проекті що я почав з самого початку по <a 
        href="https://nextjs.org/learn/dashboard-app"> данному 
        туторіалу</a> <br />
        Потім я спробував налаштувати файли для взаємодії з локальною базою данних за 
        допомогою <a 
        href="https://medium.com/@dekadekadeka/next-js-tutorial-with-local-database-quick-start-guide-394d48a0aada"> данного
        туторіала</a>. Та отримав помилки ще на кроці інсталяції pg та dotenv. Описати 
        помилки не знаю як, адже отримав дуже багато warn та error. Спроба npm install pg 
        dotenv --legacy-peer-deps за рекомендацією термінала результату не дала. Та 
        проблема була у використанні npm. <i>pnpm install pg dotenv</i> - спрацювала, тож 
        show must go on! Посіяти базу у мене так і не вийшло, тож за інструкцією з <a 
        href="https://www.w3schools.com/postgresql/postgresql_create_demodatabase.php">Create 
        Demo Database</a> та з данними з lib/placeholder-data я створив таблиці в SQL 
        Shell(psql). Ось приклад одної з них:
        <div className="code">
            <b>CREATE TABLE</b> customers( <br />
            &#8195;  id <b>VARCHAR(255)</b>,<br />
            &#8195;  name <b>VARCHAR(255)</b>,<br />
            &#8195;  email <b>VARCHAR(255)</b>,<br />
            &#8195;  image_url <b>VARCHAR(255)</b><br />
            );
        </div>
        Хоча гарним прикладом ідентифікатора було би зробити ціле число що автоматично 
        збільшується: <b>SERIAL NOT NULL PRIMARY KEY</b>.
        Та заповнив їх данними. На прикладі тієї самої таблиці:
        <div className="code">
            <b>INSERT INTO</b> customers (id, name, email, image_url) <br />
            <b>VALUES</b> <br />
            &#8195;  ('d6e15727-9fe1-4961-8c5b-ea44a9bd81aa', 'Evil Rabbit', 
                'evil@rabbit.com', '/customers/evil-rabbit.png'), <br />
            &#8195;  ('3958dc9e-712f-4377-85e9-fec4b6a6442a', 'Delba de Oliveira', 
                'delba@oliveira.com', '/customers/delba-de-oliveira.png'), <br />
            &#8195;  ('3958dc9e-742f-4377-85e9-fec4b6a6442a', 'Lee Robinson', 
                'lee@robinson.com', '/customers/lee-robinson.png'), <br />
            &#8195;  ('76d65c26-f784-44a2-ac19-586678f7c2f2', 'Michael Novotny', 
                'michael@novotny.com', '/customers/michael-novotny.png'), <br />
            &#8195;  ('CC27C14A-0ACF-4F4A-A6C9-D45682C144B9', 'Amy Burns', 'amy@burns.com', 
                '/customers/amy-burns.png'), <br />
            &#8195;  ('13D07535-C59E-4157-A011-F8D2EF4E0CBB', 'Balazs Orban', 
                'balazs@orban.com', '/customers/balazs-orban.png'); <br />      
        </div>
        Потім змінив файл app/lib/data.ts за прикладом. <br /><br />




        <h3>Fetching Data</h3>
        Після потрібних маніпуляцій за підручником я не отримав результату що був 
        відображений на картинці. А отримав я помилки. Данні з бази, з таблиці revenue я 
        отримую. Отже є якась проблема з їх відображенням. Вов, дуже дитяча помилка, я 
        пропустив <b>await</b> перед connectionPool.query у функції fetchRevenue. Є 
        вірогідність що я всеж не коректно створив таблиці. Наштовхнуло мене на цю думку те 
        що у fetchLatestInvoices в запиті до таблиці є invoices.id та в placeholder-data 
        в таблиці invoices такого поля немає. Та я просто замінив його на invoices.customer_id
        в запиті, в функції fetchLatestInvoices, в data. А ше в цій функції я замінив 
        data.map((invoice)...) на data.rows.map((invoice: LatestInvoiceRaw)...). А ще в цьому 
        запиті є <b>DESC LIMIT 5</b> чого я ще не знав про БД. Тож варто не тільки десь на 
        сторонньому сайті вчити основи роботи з БД, а і в документацію зазернути, думаю там 
        можна навчитись ще багато чому. Далі мені запропонували самому реалізувати 
        використання данних з бази, що ми отримаємо в fetchCardData в data.ts файлі. Також 
        тут можна подивитись як реалізується кілька запитів до бази і за допомогою <b>
        Promise</b> - обробка одразу трьох запитів. Реалізувати обробку цих данних нам треба 
        було в /dashboard/page.tsx де я додав до імпорта fetchCardData, та дописав кілька 
        строк: const cardData = await fetchCardData();
            const totalPaidInvoices = cardData.totalPaidInvoices;
            const totalPendingInvoices = cardData.totalPendingInvoices;
            const numberOfInvoices = cardData.numberOfInvoices;
            const numberOfCustomers = cardData.numberOfCustomers;
        розкоментував створення карток. У них в прикладі всі значення більші...  Потім я 
        подивився їх рішення і очевидно воно було краще мого: 
        <div className="code" >
        const &#123; <br />
        &#8195; numberOfInvoices, <br />
        &#8195; numberOfCustomers, <br />
        &#8195; totalPaidInvoices, <br />
        &#8195; totalPendingInvoices, <br />
        &#125; = await fetchCardData();
        </div>
        Важливо знати що запити до БД стають в чергу і наступний починає виконання тільки 
        після того як поточний віддасть результат. Це важливо розуміти якщо дні данні 
        залежать від інших. Та нам кажуть що <b>Promise.all()</b> та <b>
            Promise.allSettled()</b> - роблять всі запити одночасно, а я не знав що сама БД (
        в данному випадку PostgreSQL має багатопотоковість). <br /><br />





        <h3>Static and Dynamic Rendering</h3>
        Це вже не стосується роботи з БД, Це продовження знайомства з можливостями Next.js <br />
        Статичний рендеринг відбувається на сервері під час будування сайту. Тобто він 
        бере данні з бази заздалегідь. Це сильно пришвидшує завантаження сторінок, запуск 
        сайту, адже данні вже чекають поки їх передадуть на клієнт. Та якщо потрібна 
        актуальна інформація то цей метод може не підходити. <br />
        Динамічний рендеринг відбувається на кожен запит користувача. Зато дає актуальні 
        данні. Але деякі запити до БД можуть оброблятись доволі довго. Для симуляції такого 
        запиту є таймер в data.ts. Тож поки ми не отримаємо данні, користувач не бачитиме 
        інтерфейс, або не розумітиме що якісь процеси відбуваються. 

        <h3><a href="https://nextjs.org/learn/dashboard-app/streaming">Streaming</a></h3>
        Тут мова про багатопотоковість, завдяки якій можна розбити один великий і складний 
        сайт чи то програму на кілька малох і виконувати їх одночасно, видаючи результати як 
        тільки вони будуть готові. Можна використовувати багатопотоковість за допомогою <b> 
        loading.tsx</b> або на рівні компонентів для більшого роздрібнення. Контент з 
        loading.tsx файлу показується клієнту поки данні завантажуються. Він створюється на 
        рівні page.tsx файлу. Інколи отримую помилку: Each child in a list should have a 
        unique "key" prop, та поки ігнорую її. Так як теки customers та invoices знаходяться на 
        рівні loading файлу то він впливає і на них. Та це можна змінити створивши теку <b>
        (overview)</b> та поклавши в неї page та loading. Тепер loading та page це окрема група, 
        завдяки тому що тека з назвою в лапках не включається в загальний URL шлях. Тобто це 
        не /dashboard/(overview) а /dashboard, але тепер loading впливає на page та не впливає 
        на інші файли і теки на своєму рівні. <b>React Suspense</b> -допоможе розділити 
        програму на потоки, по компонентах. Далі за підручником, окрім змін в 
        dashboard/(overview)/page.tsx та описан змін в /app/ui/dashboard/revenue-chart.tsx, в 
        другому файлі мені ще й треба було позначити що month: Revenue, в div де 
        revenue.map(month). Також окрім того що описано під кнопкою Reveal the solution 
        мені довелось написати const latestInvoices: LatestInvoice[] = await 
        fetchLatestInvoices();, а не просто const latestInvoices = await fetchLatestInvoices();
        Тут ШІ мені не знадобився, адже підсказку я видалив в лапках де було вказано тип 
        latestInvoices константи. <br />
        Наступним кроком вказують на щось в файлі ui/dashboard/invoices/table і коли я туди 
        перейшов то побачив підкреслення червоним на 
        invoices?.map&#40;&#40;<ins>invoice</ins>&#41; =&#62; - тож варто вказати якийсь тип 
        цій змінній. По аналогії зі змінною latestInvoices можна побачити що там у нас 
        імпортувалась Revenue з @/app/lib/definitions, а fetchRevenue якраз повертає з БД все 
        з таблиці revenue. Тож схоже що мені треба якась дефениція для данних що повертаються 
        з fetchFilteredInvoices. Я так подумав. Хоча вірогідно я помиляюсь адже в підручнику 
        про це ні словом не обмовились. А в @/app/lib/definitions схоже що мені підходить 
        InvoicesTable але його імпорт викликає конфлікт імен. Тож я за допомогою пошуку 
        з'ясував що InvoicesTable з дефініцій використовується лиш в 3 файлах, тож в 
        дефініціях я перейменував його на InvoiceTable (прибрав s), переписав це в імпортах в 
        app/lib/data, тоді в app/ui/invoices/table імпортував цю таблицю та зробив константу 
        invoices масивом цих таблиць: const invoices: InvoiceTable [] = await 
        fetchFilteredInvoices(query, currentPage);. І у мене все запрацювало. Хоча помилка з 
        ключами нікуди не поділась, а я не знаю в якому файлі це треба виправити, щось не 
        можу зрозуміти... Далі корисні поради <a 
        href="https://nextjs.org/learn/dashboard-app/adding-search-and-pagination#best-practice-debouncing">
            про Debouncing</a> Річь безумовно корисна та я не планую публікувати це, тож 
        не буду вирішувати 6 deprecated subdependencies. 
        <br /> Перед публікацією свого сайту варто прочиати <a 
        href="https://nextjs.org/learn/dashboard-app/partial-prerendering">цей розділ</a>. <br />
<br />



        <h3>Adding pagination</h3>
        Не зрозумів. 
        <h3><a 
        href="https://nextjs.org/learn/dashboard-app/mutating-data">Mutating data</a></h3>
        В тегу form є атрибут <ins>action</ins> і він дозволяє викликати події. Далі по 
        підручнику ми створювали запит sql в файлі action.ts що створили. Тут як і раніше я 
        створив const connectionPool = require('@/db'); та робив запит через нього, а також 
        варто не забути взяти в лапки '' кожне значення в VALUES. Потім використовується 
        revalidatePath, щоб очистити кеш. Це потрібно тому-що данні зміняться, а вони ж 
        відображаються, я так це зрозумів. Моя неуважність знову показалась. Я тільки зараз 
        помітив що в кінці запитів до БД немає крапки з комою... За підручником далі має 
        бути звернення до ідентифікатора рахунка-фактури, який я не зробив тож спочатку
        через psql:
        <div className="code">
            <b>ALTER TABLE</b> invoices <br />                        
            <b>ADD</b> id <b>SERIAL NOT NULL PRIMARY KEY</b>; 
        </div>
        а потім продовжив навчання за підручником. І отримати помилку при натисканні на 
        кнопку редагування. Ну і раз я вже додав ідентифікатор до таблиці invoices, то треба 
        повернутись в data.ts та замінити в fetchFilteredInvoices invoices.customer_id на 
        invoices.id, в fetchLatestInvoices так само. Перевірити, як функції мають виглядати <a 
        href="https://github.com/vercel/next-learn/blob/main/dashboard/starter-example/app/lib/data.ts">
            можна тут</a>. І все запрацювало. <br />
        З розділу Mutating Data корисним я вважаю <a 
        href="https://nextjs.org/learn/dashboard-app/mutating-data#4-validate-and-prepare-the-data">
            Validate and prepare the data</a> де описано що перш ніж зберегти данні в БД 
        потрібно привести їх до правильного формату. Це можна зробити за допомогою чогось 
        подібного до інтерфейсу. А потім за допомогою <b>zod</b> умовно викониється 
        валідація (перевірка данних). Потім потрібно привести данні до потрібного типу. 
        revalidatePath з next/cashe та redirect з next/navigation - корисні речі. Також 
        дуже важливо освоїти <a 
        href="https://nextjs.org/learn/dashboard-app/mutating-data#1-create-a-dynamic-route-segment-with-the-invoice-id">
        Створення динамічних шляхів</a>. Поки що окрім відрізнення акаунтів я ще не знаю 
        навіщо ще це потрібно, та здається це використовувалось для блогу. І я планував 
        використати це для блогу про те як я буду вчити англійську. Але це вже після данного 
        підручника. Власне створюються вони через теку [id] в якій створюється тека, а вже в 
        ній page.tsx файл. Більше деталей за посиланням вище. <br />



        <h3><a href="https://nextjs.org/learn/dashboard-app/error-handling">Обробка помилок
            </a></h3>
        Конструкція виглядає так: <b>try</b> &#123; &#125; <b>catch</b> (error) &#123; &#125; 
        В прикладі їм огортають звернення до БД. В свою чергу redirect варто викликати за 
        межами try/catch блоку. Штучно викликати помилку можна за допомогою <b>throw
        </b> new Error('message'). Для обробки помилок що виловить try в next.js створюють 
        окремий файл <b>error.tsx</b> (слугує для усунення несподіваних помилок і 
        відображенню користувачу резервного інтерфейсу). В ньому можна обробити помилку. <b>
            reset</b> - функція що рендерить компонент наново. <b>notFound</b> - функція яку 
        можна використовувати якщо користувач намагається отримати ресурс якого не існує (як 
        наприклад щось із БД). Для того щоб показати користувачу інший інтерфейс, в данному 
        випадку створюється файл <b>not-found.tsx</b> (резервний інтерфейс). 

        <h3><a href="https://nextjs.org/learn/dashboard-app/improving-accessibility">Improving Accessibility
            </a></h3>
        Перевірити форму на стороні клієнта можна за допомогою атрибута <ins>required</ins> в 
        інпутах. Це обов'язкове поле, без якого форма не відправиться. <br />  
        На стороні сервера використовується хук <b>useActionState</b> from react. Не забудьте 
        вказати use client. <a href="https://nextjs.org/learn/dashboard-app/improving-accessibility#server-side-validation
        ">Ознайомитись з хуком</a>. Потім в action.ts, в FormScheme треба додати обробку 
        помилок, для змінних типу string це z.string(&#123;invalid_type_error: &#39;Введіть 
        данні&#39; &#125;), для number це z.coerce.number().gt(0, &#123; message: &#39;Будь 
        ласка введіть значення більше за 0&#39; &#125;), для перелічень z.enum(&#91;
        &#39;pending&#39;, &#39;paid&#39; &#93;,  &#123;invalid_type_error: &#39;Оберіть 
        статус будь ласка&#39; &#125;). І в createInvoice замість звичайного parse 
        використовується safeParse, якщо користуватись Zod. Але цей метод повертає об'єкт 
        або помилку, тож результат цього методу це одна змінна, а не <ins>n</ins> як було. 
        Тож тепер треба переписати і такі речі що спирались на кожну з тих змінних, це 
        наприклад amount. Та перед тим треба перевірити чи повернулась помилка, це можна 
        зробити за допомогою звичайного if:
        <div className="code"> if(!validatedFields.success) &#123; <br /> 
        &#8195; return &#123; <br /> 
        &#8195; &#8195; errors: validatedFields.error.flatten().fieldErrors, <br />
        &#8195; &#8195; message: 'Missing Fields. Failed to Create Invoice.', <br />
        &#8195; &#125;; <br />
        &#125;
        </div> 
        У випадку помилки ми виходимо з функції і повідомляємо користувача про те що сталась 
        помилка. Якщо помилки не сталось то зберігаємо данні в змінних і продовжуємо як і 
        раніше:  const &#123; customerId, amount, status &#125; = validatedFields.data; але 
        в catch тепер можна повернути повідомлення про помилку БД: return &#123; message: 
        &#39;Database Error: Failed to Create Invoice.&#39; &#125; 
        <br /><br />

        

        <h3><a href="https://nextjs.org/learn/dashboard-app/adding-authentication">Adding 
            Authentication</a></h3>
        <b>Authentication</b> - перевірки чи є користувач тим ким він себе називає. 
        Підтвердження може відбуваєтись за допомогою імені користувача і пароля. <br />
        <b>Authorization</b> - це підтвердження того що користувач має доступ до певних
        ресурсів. Після того як особу підтверджено (таким чином можна визначити чи це 
        користувач чи наприклад адміністратор). <br /> 
        Далі встановили <b>next-auth@beta</b> за допомогою <b>pnpm i</b>. Потім треба 
        згенерувати секрутний ключ за допомогою <b>openssl rand -base64 32</b>, для шифрування
        coocies, та я не планую публікувати це тож не знаю чи треба це робити... І цей ключ 
        треба прописати в .env як <b>AUTH_SECRET=your-secret-key</b> <br />
        Створити файл конфігурацій <b>auth.config.ts</b> в корені проекту. І в цьому ж файлі 
        за допомогою Next.js Middleware пишиться логіка для безпеки шляхів. По суті 
        перенаправляюща користувача зі торінки /dashboard на /auth/signin якщо він не 
        авторизований. А потім цей файл треба імпортувати в <b>middelvare.ts</b> що треба 
        створити в корені проекту. <br />
        Гарною практикою є хешування паролів перед тим як записувати їх у БД. Тож далі треба 
        створити ще один файл в корені <b>auth.ts</b> в ньому буде логіка входу на сайт. 
        Що включатиме запити до БД. Як і раніше варто не забути замінити postgress на 
        connectionPool. Точні зміни в інших файлах можна подивитись <a 
        href="https://nextjs.org/learn/dashboard-app/adding-authentication">по 
        посиланню</a>. 

        <h3><a href="https://nextjs.org/learn/dashboard-app/adding-metadata">Adding 
            Metadata</a></h3>


        </>
    );
}