import React from 'react';
import search from './my-alert';
import StateExample from "./state";


export default function ReactForms() {

    return (
        <>
        <h1 id="reactForms">Форми</h1>
        30.01.2025 Форми в реакті виглядають приблизно так: <br /> 
        <div className="myCode">
        &#60;form action=&#123;search&#125;&#62;<br />
        &#8195; &#60;input name=&#34;query&#34; /&#62;<br />
        &#8195; &#60;button type=&#34;submit&#34;&#62;Search&#60;/button&#62;<br />
        &#60;/form &#62;<br />
        </div>
        <form action={search}>
            <input name="query" />
            <button type="submit">Search</button>
        </form>
        Дана форма не працює тому, що я не додавав жодної логіки, а ще я залишив відкриваючий 
        тег форми без атрибуту action. Але в прикладі я показав що в форму можна додати 
        екшен і назначити йому функцію, вона може виглядати так:<br />
        <div className="myCode">
        function search(formData: FormData) &#123; <br /> 
        &#8195; const query = formData.get(&#34;query&#34;);<br /> 
        &#8195; alert(`&#34;You search for &#34;$&#123;query&#125;&#34;`);<br />
        &#125;
        </div>
        Але у мене це все знову не працює... Тому я так і залишив form без action. Це дратує. <br />
        Аж ось виявилось що додавання &#34;use client&#34; в файлі де написана функція search 
        виправляє все.<br />
        Далі мені допомогли і ось що я дізнався:
        <StateExample />

        </>
    );
}