import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <>
        <h1 id="WELCOME"> Welcome to <a href="https://nextjs.org">Next.js!</a> </h1> 
        <div> 15.1.2025 Почав щось робити нарешті. Так як маю за мету вчити next.js 
          то почав з getting-started на сайті next.js. Але там дуже багато файлів 
          і розібратись в тому всьму мені не вдалось. Тому продовжив я з 
          https://nextjs.org/learn-pages-router/basics/create-nextjs-app/setup.
          Тут все доволі просто, але я видалив майже весь зміст файлу index.js і 
          перейменував його на index.tsx. global.css та Home.module.css я теж почистив,
          залишивши лише html і body в global файлі. А ще @media з усім вмістом в 
          Home.module.css. Мої спроби розібратись з next.js не дали результату, тому я 
          вирішив почати з HTML. Та за доволі довгий час прийшов до висновку що мені треба 
          розібратись з CSS та TypeScript. React&#39;у я приділив певний час і він мені здався 
          доволі зрозумілим. А от як зберігати данні і як красиво розміщати компоненти на 
          своїх місцях на сторінці я не розумію. Та всеж почну я з  HTML. Просто тому що я 
          вже наляканий цим всім, тому-що вже кілька місяців витратив на спроби вивчити той 
          Next.js і самостійно зробити хоч якийсь сайт я не спроможній...
        </div>
    <div>
        16.01.2025 Створив теку html в теці pages. Створив файл first-post.tsx.
        Імпортував його в index.tsx. Тут знадобились базові знання реакту. 
        Але результат вже є і це мені подобається, продовжу в цій теці створювати собі 
        чернетку по HTML. Сайт (якщо його можна так назвати) все-ще не містить 
        корисної інформації. Я читав про навігацію в Next.js але вже нічого не пам&#39;ятаю,
        схоже варто освіжити цю інформацію перш ніж йти далі...
        Хоча тепер у мене є сторінка за адресою
        http://localhost:3000/html/first-post, <Link href="/">(На головну)</Link>.
        Тобто з навігацією порядок. Хоча мені здавалось що в кожній новій теці має
        бути файл page.tsx щоб можна було переходити на сторінку за адресою... 
        Copilot наразі виглядає дуже крутою штукою, навіть цей текст дописує він сам, 
        достатньо тиснути Tab. Корисні 
        посилання: <a href="https://nextjs.org/learn-pages-router/basics/navigate-between-pages/pages-in-nextjs">
        Next.js basics by creating a very simple blog app/Navigate Between Pages</a>.
        Ще є ось таке: < a href="https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages">
        Learn Next.js/Creating Layouts and Pages</a>. 
        Але після створення мною файла page.tsx в теці html за туторіалом з першого посилання, 
        у мене все ще 404 сторінка за адресою http://localhost:3000/html, здається тут 
        потрібні якісь додаткові налаштування... Мені це сильно не подобається тому що я 
        зараз чомусь навчусь, а потім з&#39;ясується що так робити не можна чи не правильно... 
        Запитав у Gemini чому у мене не працює описаний в підручнику спосіб створення 
        сторінок. З купи варіантів де я міг помилитись найбільш вірогідним виглядає той що я 
        хотів відмовитись від нагромадження і тому обрав підхід з одного підручника, а 
        сподівався що він буде працювати так як я хочу. Та схоже 
        що це не особливість фреймворку, а <a 
        href="https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages#creating-the-dashboard-page">
          налаштований таким чином проект</a>. І мені такі 
        налаштування подобаються! Тож я спробую створити новий проект по тому туторіалу і 
        почистити його щоб потім створити те що я намагаюсь, (щоб воно не було).
      <div>
          17.01.2025 Створив новий проект за туторіалом, він працює. Тепер спробую максимально 
          його почистити і подивитись чи я все зіпсую коли видаю не зрозумілі для мене речі, 
          чи я все зламаю і доведеться пробувати знову. Тут наразі є теки: app (В якій я буду 
          розробляти). node modules (В якій для мене все незрозуміло, і думаю я її чіпати не 
          буду ). public (з картинками, і так я не планую продовжувати цей туторіал то я 
          видалю все що вкладено в цю теку, після видалення сайт працює). Також в теці app є 
          купа інших тек і файли page і layout. Файли я буду використовувати, а от теки мене 
          не цікавлять. Видалив сайт все ще працює. Також, в page.tsx залишив лише функцію 
          Page, з main тегом і в ньому пустий тег div. Тепер перенесу данні зі вчорашньої 
          спроби зробити чернетку. Цікаво те що тут навіть немає тега Head. Так як інформація
          описана за вчора і сьогодні не пов&#39;язана з HTML я поки що видалив ту теку. Але 
          тепер це все було в стартовому файлі, тож я створив теку first-days в ній файл 
          page.tsx і всі данні переніс в нього. Також видалив посилання створені в минулу 
          спробу. Цікаве зауваження, якщо в коді посилання перенести на нову строку то на 
          сайті між текстом і посиланням не буде пробілу! Тепер у мене є сторінка <Link 
          href="http://localhost:3000/first-days">first-days</Link>. <Link 
          href="/">(На головну)</Link> Але тепер немає http://localhost:3000/html/first-post,
    </div>
    </div>
    </>
    );
}