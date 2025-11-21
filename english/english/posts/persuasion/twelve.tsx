import React from 'react'

import style from "@/app/ui/english/blog/blog.module.css";
//import Link from 'next/link';

export default function PersuasionTwelve() {
    return (
        <>
            <div className={style.persuasionTwoFlex}>
                <ul className={style.persuasionTwoText}>
                    <li>
                        <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/'
                            title=""
                            target='_blank' rel='noreferrer'></a>
                    </li>

                    {/*<li>
                <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/'
                title=""
                target='_blank' rel='noreferrer'></a>
                        </li>*/}
                </ul >
            </div>
            <h3>Capter 10 &#8657;</h3>
            <div className={style.idDate}>21.11.2025 - .11.2025</div>
        </>
    );
}