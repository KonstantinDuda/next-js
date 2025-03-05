import Link from "next/link";
import React from "react";

export default function TypeScript() {
    return (
        <>
        <h1> <Link href="./type-script">TypeScripte</Link></h1>

        &#8195;  Я вирішив вчити і користуватись TypeScript щоб уникнути помилок з JavaScript 
        про які вже чув. Та зіштовхнувся з тим що типізованому скрипту вчать лише тих людей 
        що вже знають явовий скрипт. Тож мені, як людині що його не знає доведеться навчитись 
        робити помилки яких я намагався уникнути щоб потім навчитись їх не робити. Чи я щось 
        не зрозумів? Принаймні так навчає <a 
        href="https://w3schoolsua.github.io/typescript/typescript_special_types.html#gsc.tab=0">
        цей підручник</a>. Трохи познайомивши мене зі змінними і навіть не пояснивши як я 
        можу використати їх в HTML мені підсовують код з unknown типом в якому купа того 
        що я не знаю, а потім ще і кажуть порівняти все це жахіття з прикладом в якому лише 
        три дуже короткі строки коду і лише одне використання чогось що як я сподівався мені 
        пояснять пізніше. І при цьому лякаючому коді з unknown мені кажуть що це безпечніша 
        альтернатива для any. Здається мене навмисно намагаються залякати підсовуючи на 
        стільки разюче різні шматки коду і порівнюючи простий але небезпечний код з 
        великим і страшним але безпечним. Я мав би подумати що мені вже не цікаво писати 
        безпечний код, а отже я маю не просто відмовитись від unknown, а і взагалі
        відмовитись від TypeScript і вчити старий недобрий JavaScript! Або пошукати інший 
        курс, якщо вийде... 
        <br />
        <h3 id="tsLet">Змінні</h3>
        &#8195;  Змінні створюються за допомогою <b>let</b>. Констатни (змінна якій не можна 
        змінити значення) створюються за допомогою <b>const</b> замість let (завжди, коли це 
        можливо варто створювати константи замість звичайних змінних). Ще змінні можна 
        створити за допомогою <b>var</b>, непогане поясненя різниці є <a href="
        https://www.youtube.com/watch?v=0mEWHLTJxg0">по посиланню</a>. Тип змінної може 
        визначатись автоматично, якщо при створенні присвоїти їй значеня. Також тип можна 
        вказати явно, через двокрапку. Данні можуть бути прості, типу: <b>string</b>, <b>
        number</b>, <b>boolean</b>. Менш поширені: <b>bigint</b>, <b>symbol</b>. Також типи 
        можуть бути Спеціальні, типу: <b>any</b> - це будьякий з простих типів (може навіть 
        власні), <b>unknown</b> - типу те саме але безпечніше, <b>never</b> - не думаю що 
        мені варто користуватись цим або будь яким зі спеціальних типів данних поки я не 
        впевнений що інших варіантів у мене немає, <b>undefined</b> та <b>null</b> - гадки 
        немаю як ними користуватись. 
        <br />
        <h3 id="tsArray">Масиви</h3>
        &#8195;  Масиви створюються за допомогою квадратних дужок: const names: string&#91;
        &#93; = &#91;&#93;; Масиви можеть бути лише для читання <b>readonly</b>: const names:
        readonly string&#91;&#93; = &#91;&#34;Some text&#34;&#93;; До масивів додаються 
        значення за допомогою push: names.push(&#34;Dylan&#34;).
        <br />
        <h3 id="tsTuple">Кортежі</h3>
        &#8195;  Кортежі це масив з попередньо визначеною довжиною і може містити різні типи 
        в одному кортежі, тому послідовність тут має велике значення і не може бути зміненою.
        Ствоюються кортежі так: let ourTuple: &#91;number, boolean, string&#93;; 
        ініціалізація відбувається так: ourTuple = &#91;5, false, &#39;текст&#39;&#93;. 
        Кортежі теж можуть бути лише для читання: const myReadonlyTuple: <b>readonly</b> 
        &#91;number, number, boolean&#93; = &#91;4, 6, true&#93;; Іменовані кортежі: 
        const graph: &#91;<b>x</b>: number, <b>y</b>: number&#93; = &#91;55.2, 45.9&#93;; 
        Кортежі можна <a 
        href="https://w3schoolsua.github.io/react/react_es6_destructuring.html#gsc.tab=0">
            деструктуризувати</a>. 
        <br />
        <h3 id="tsObj">Об&#39;єкти</h3>
        <div className="myCode">
        const car: &#123; type: string, model: string, year: number 
        &#125; = &#123; <br /> 
        &#8195;  type: &#34;Toyota&#34;, <br /> 
        &#8195;  model: &#34;Corola&#34;, <br /> &#8195;  year: 2009 <br /> 
        &#125;;
        </div>
        За допомогою знаку питання визначається необов&#39;язкові властивості: mileage?: 
        number. Підписи індексів (покищо не зрозумілий для мене інструмент): <br /> const 
        nameAgeMap: &#123;&#91;index: string&#93;: number&#125; = &#123;&#125;; <br />
        nameAgeMap.Jack = 25; // немає помилки. <br /> nameAgeMap.Mark = &#34;Fifty&#34; // 
        Помилка: тип string не може бути призначений типу number. То навіщо тоді там те 
        визначеня типу в квадратних дужках? <br />
        &#8195;  Переліки: enum CardinalDirections &#123;North, East, South, West&#125;. 
        Числові: enum StatusCodes &#123;NotFound = 404, Success =200, Accepted = 202, 
        BadRequest = 400&#125; Текстові: enum CardinalDirections &#123;North = &#34;
        North&#34;, East = &#34;East&#34;, South = &#34;South&#34;, West = &#34;West&#34;
        &#125;. <br />
        <h3 id="tsInterfase">Псевдоніми та Інтерфейси</h3>
        &#8195;  Псевдоніми та інтерфейси дозволяють легко спільно використовувати типи між 
        різними змінними/об’єктами. Псевдонім здався мені чимось абсолютно непотрібним, а 
        може навіть шкідливим. Ну наприклад я пишу на початку файлу щось типу: type CarYear = 
        number, потім десь створюю константу: const carYeadr: CarYear = 2001, і десь в коді, 
        значно пізніше я створюю об&#39;єкт: const car: Car = &#123; year: carYear, type: 
        string, model: string&#125;. Чим це краще ніж написати що year це number? Мені треба 
        йти по коду вгору і шукати що воно таке, це carYear. <br />
        &#8195;  Інтерфейси: interface Rectangle &#123; height: number, width: number&#125;
        &#8195;  const rectangle: Rectangle = &#123; height: 20, width: 10&#125;; &#8195;  
        Розширення одного інтерфейса іншим: interface ColorRectangle extends Rectangle 
        &#123; color: string &#125; &#8195; const colorRect: ColorRectangle = &#123; height:
        20, width: 10, color: &#34;red&#34; &#125;; <br />
        <h3 id="tsOr">Об&#39;єднання</h3>
        &#8195;  Вертикальна ліній (|) символ or (або). За допомогою цього об&#39;єднання можна 
        дозволити одній змінній мати якийсь конкретний тип або інший конкретний тип. code: 
        string | number. Та цим треба вміти користуватись.
        <h3 id="tsFunc">Функції</h3>
        &#8195;  function getTime(параметр: тип параметра): number (тип данних що має 
        повертати ця функція) &#123; return new Data().getTime(); &#125;. void - якщо функція 
        нічого не повертає. Як і в об&#39;єктах можна зробити не обов&#39;язковими за 
        допомогою знаку питання. <br /> 
        Можна надавати параметрам значенння за замовчуванням: 
        function pow(value: number, exponent: number = 10) &#123; return value ** (невідома
        операція) exponent; &#125; <br /> 
        В React часто використовують іменовані параметри: function divide(&#123;dividend, 
        divisor&#125; : &#123; dividend: number, divisor: number&#125;) &#123;...&#125; <br />
        Інші параметри мають бути масивом: function add(a:number, b: number, ...rest: 
        number&#91;&#93;) &#123; return a + b + rest.reduce((p, c) =&#62; p + c, 0); &#125; 
        Псевдо типи я не зрозумів. Не знаю навіщо і не знаю як цим користуватись. <br />
        Кастинг. Перетворення типу данних. Я проти цього! <br />
        <h3 id="tsClass">Класи</h3>
        &#8195;  class Person &#123; name: string &#125; const person = new Person(); 
        person.name = &#34;Jane&#34;; <br />
        Модифікатори видимості: <b>public</b> - за замовчуваням, доступно будь-де. <b>private
        </b> - дозволяє доступ до члена класу з класу. <b>protected</b> - дозволяє доступ до 
        члена класу від самого себе та будь-яких класів, які його успадковують. <br />
        Члени класів можуть бути readonly. <br />
        Ключове слово <b>this</b> у класі зазвичай посилається на екземпляр класу. <br />
        Властивості параметра (я так зрозумів що так звуться методи): <div className="myCode">
        class Person &#123; <br />
        &#8195;  public constructor(private name: string) &#123;&#125; <br /> 
        &#8195;  public getName(): string &#123; <br />
        &#8195;  &#8195;  return this.name; <br />
        &#8195;  &#125; <br />
        &#125; </div>
        readonly - актуально і для членів класів <br />
        Використання інтерфейcів в класах за допомогою <b>implements</b>: <br />
        Класи можуть розширюватись іншим класом, але тільки одним, за допомогою <b>extends
            </b>:
        <div className="myCode">interface Shape &#123; <br /> 
        &#8195;  getArea: () =&#62; number; <br /> 
        &#125; <br /> 
        class Rectangle implements Shape &#123;  <br />
        &#8195;  public constructor(protected readonly width: number, protected readonly 
            height: number) &#123;&#125; <br /> 
        &#8195;  public getArea(): number &#123; <br />
        &#8195;  &#8195;  return this.width * this.height; <br /> 
        &#8195;  &#125; <br /> 
        &#125; <br /> 
        class Square extends Rectangle &#123; <br /> 
        &#8195;  public constructor(width: number) &#123; <br /> 
        &#8195;  &#8195;  super(width, width); <br />
        &#8195;  &#125; <br /> &#125;  
        </div>
        Перевизначити члени класу можна за допомогою <b>override</b>:
        <div className="myCode">
            class Rectangle implements Shape &#123; <br /> 
            &#8195;  public toString(): string &#123; <br /> 
            &#8195;  &#8195;  return &#96;Rectangle&#91;width=&#36;&#123;this.width&#125;, 
                height=&#36;&#123;this.height&#125;&#93;&#96;; <br />
            &#8195;  &#125; <br />
            &#125; <br />
            class Square extends Rectangle &#123; <br /> 
            &#8195;  public override toString(): string &#123; <br /> 
            &#8195;  &#8195;  return 
                &#96;Square&#91;width=&#36;&#123;this.width&#125;&#93;&#96;; <br /> 
            &#8195;  &#125; <br /> &#125;  
        </div>
        Абстрактні класи як база для реалізації в класах які будуть ними розширені. Члени 
        абстрактного класу що мушуть бути перевизначені теж відзначаються як <b>abstract
        </b> адже не мають власної реалізації: 
        <div className="myCode">
            abstract class Poligon &#123; <br /> 
            &#8195;  public abstract getArea(): number; <br />
            &#8195;  public toString(): string &#123; <br /> 
            &#8195;  &#8195;  return 
                &#96;Poligon&#91;area=&#36;&#123;this.getArea()&#125;&#93;&#96;; <br />
            &#8195;  &#125; <br />
            &#125; <br />
            class Rectangle extends Poligon &#123; <br /> 
            &#8195;  public constructor(...) &#123; super(); &#125; Про <b>super</b> в 
                підручнику жодного слова <br />
            &#8195;  public override getArea(): number &#123; <br /> 
            &#8195;  &#8195;  return this.width * this.height; <br /> 
            &#8195;  &#125; <br /> 
            &#125;  
        </div>
        <h3 id="tsGenerics">Дженерики</h3>

        <h3><Link href=".">Повернутись на головну сторінку</Link></h3>
        </>
    );
}