import React from "react";
import ThemeSwitch from "./theme-switch";

export default function MyNextThemes() {
    return (
        <>
        <h2 id="nextThemes">Зміна теми за допомогою next-themes</h2>
         Бажання змінити тему привело мене до розуміння що я робив цю програму не правильно. 
        В мобільній програмі я з самого початку закладав би можливість зміни теми, а тут я 
        просто вчився і тепер маю певну кількість данних і певну кількість css файлів що 
        зробить складнішим створення можливості змінити тему. Я пишу це все на Next.js тому 
        вирішив шукати можливості змінити тему саме з допомогою цього інструмента чи то 
        фреймворка. Хоча перед тим знайшов купу матеріалу по реакт темам. Та зупинився на <a 
        href="https://ui.shadcn.com/docs/dark-mode/next">цьому</a>. Де одразу стикнувся з 
        помилками тому що починав розробляти сайт не з того джерела. Це дратує звичайно. Тож 
        пошукаю ще. Загалом знадобилась інформація зі згаданого вище сайту. А ще з <a 
        href="https://www.npmjs.com/package/next-themes/v/0.0.6">цього сайту</a>, (що зрештую 
        мені не знадобився) і за допомогою <a 
        href="https://www.dhiwise.com/post/nextjs-theme-implementation-everything-you-need-to-know">
        цього сайту</a> (що мені навіть завадив) я виправив помилки що у мене були. Створив 
        нові, а після і їх виправив. <br />
        <ThemeSwitch />

        <h3>Думаю варто описати що я зробив:</h3>
        <h4>Створив файл theme-provider в теці ui:</h4>
        &#8195;  Це якраз те що зіпсувало мені все. Саме про цей файл я написав що він 
        мені завадив, адже саме після того як я його видалив моя програма почала працювати
        . <b>Важливо</b> те що зрештую я просто видалив цей файл, але тут згадку про нього 
        залишу, адже можливо я пізніше зможу розібратись як я можу використати щось з цього. 
        коректно. <br />
        <div className="myCode">
        &#39;use client&#39;<br />
        <br />
        import React from &#39;react&#39;;<br />
        import &#123; useEffect, useState&#125; from &#39;react&#39;;<br />
        import &#123;ThemeProvider as NextThemesProvider&#125; from &#39;next-themes&#39;;<br />
        <br />
        export default function ThemeProvider(&#123;<br />
        &#8195;     children, <br />
        &#125;: React.ComponentProps&#60;typeof NextThemesProvider&#62;) &#123;<br />
        <br />
        &#8195;  const [mounted, setMounted] = useState(false);<br />
        <br />
        &#8195;  useEffect(() =&#62; &#123;<br />
        &#8195; &#8195; setMounted(true);<br />
        &#8195;     &#125;, []);<br />
        <br />
        &#8195;  if(!mounted) return null;<br />
        <br />
        &#8195;  return (<br />
        &#8195; &#8195; &#60;NextThemesProvider attribute=&#34;class&#34;&#62;<br />
        &#8195; &#8195; &#8195; &#123;children&#125;<br />
        &#8195; &#8195; &#60;/NextThemesProvider&#62;<br />
        &#8195;  );<br />
        &#125;<br />
        </div>

        <h4>Змінив body у layout.tsx і імпортував theme-provider:</h4>
        Та зрештую я видалив всі атрибути. Якщо я залишаю attribute мої налаштування злітають.
        defaultTheme і enableSystem схоже просто не працює, адже сайт завжди вмикається з 
        темою на якій був закритий (перевіряв вимикаючи і запускаючи сервер).
        disableTransitionOnChange теж видалив хоча не знаю що він мав би робити. І до html 
        тегу додав suppressHydrationWarning.
        <div className="myCode">
        import &#123; ThemeProvider &#125; from &#39;next-themes&#39;; <br />
        <br />
        &#60;body&#62;<br />
        &#8195; &#60;ThemeProvider <br />
        &#8195; &#8195; attribute=&#34;class&#34;<br />
        &#8195; &#8195; defaultTheme=&#34;system&#34;<br />
        &#8195; &#8195; enableSystem=&#123;true&#125;<br />
        &#8195; &#8195; disableTransitionOnChange=&#123;true&#125;<br />          
        &#8195; &#8195; &#62;<br />
        &#8195; &#8195; &#123;children&#125;<br />
        &#8195;  &#60;/ThemeProvider&#62;<br />
        &#60;/body&#62;<br />
        <br />

        Зрештую: <br />
        &#60;body&#62;<br />
        &#8195;   &#60;ThemeProvider&#62; <br />
        &#8195; &#8195; &#123;children&#125;<br />
        &#8195;   &#60;/ThemeProvider&#62;<br />
        &#60;/body&#62;<br />
        </div>

        <h4>Створив окремий компонент для зміни теми:</h4>
        <div className="myCode">
        &#39;use client&#39;<br />
        <br />
        import &#123; useTheme &#125; from &#34;next-themes&#34;;<br />
        import React from &#34;react&#34;;<br />
        <br />
        export default function ThemeSwitch() &#123; <br />
        &#8195;  const &#123;theme, setTheme&#125; = useTheme();<br />
            <br />
        &#8195;  return (<br />
        &#8195; &#8195; &#60;button onClick=&#123;() =&#62; setTheme(theme === &#39;dark&#39; ? 
            &#39;light&#39; : &#39;dark&#39;)&#125;&#62;<br />
        &#8195; &#8195; &#8195; Перемикач теми&#60;/button&#62;<br />
        &#8195;  );<br />
        &#125;
        </div>

        <h4>Важливо додати ці самі теми в global.css:</h4>
        white здався мені занадто яскравим, тому змінив на сірий.
        <div className="myCode">
        [data-theme=&#39;light&#39;] &#123; <br />
        &#8195;   --background: rgba(220, 220, 220, 1); <br />
        &#8195;   --foreground: black; <br />
        &#125; <br />
        <br />
        [data-theme=&#39;dark&#39;] &#123; <br />
        &#8195;   --background: black; <br />
        &#8195;   --foreground: rgba(220, 220, 220, 1); <br />
        &#125; <br />
        </div>

        </>
    );
}