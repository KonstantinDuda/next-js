import React from "react";
import Link from "next/link";

export default function ReactNext() {
    return (
    <>
    <h1 id="nextReactNext">React та Next.js</h1>
    Думки навчитись користуватись саме фрейморком Next.js привели мене до <Link
    href="https://nextjs.org/learn/react-foundations/what-is-react-and-nextjs"
    target="_blank" rel="noreferrer">цього посібника</Link>. Мені здавалось що в 
    цьому підручнику я не побачу чогось нового для себе. Аж ось я побачив дещо цікаве. 
    Тут в прикладі створили компонент, потім створили другий компонент і вклали в нього 
    перший, <Link 
    href="https://nextjs.org/learn/react-foundations/building-ui-with-components#nesting-components"> але 
    рендерять перший</Link>. Тож помилитись можуть навіть ті хто навчають, уважність вельме 
    важлива в програмуванні! Там пізніше про це написали, а я думав що вони помилились. 
    
    </>
    );
}