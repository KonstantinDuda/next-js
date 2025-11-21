import React from 'react'

import style from "@/app/ui/english/blog/blog.module.css";
//import Link from 'next/link';

export default function PersuasionEleven() {
    return (
        <>
            <div className={style.persuasionTwoFlex}>
                <div className={style.persuasionTwoImage}>
                    <ul >
                        <li>
                            <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/utter'
                                title="Повний, абсолютний. Вимовляти"
                                target='_blank' rel='noreferrer'>utter</a> - Complete or total.
                            To produce (sounds, eg cries, words ets) with the mouth
                        </li>
                        <li>
                            <a href='https://dictionary.cambridge.org/dictionary/english/estrangement'
                                title="Відчуження, відддалення, розлучення"
                                target='_blank' rel='noreferrer'>estrangement</a> - A period when
                            you are estranged from someone, or the fact of no longer being friendly
                        </li>
                        <li>
                            <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/accommodation'
                                title="Житло, проживання"
                                target='_blank' rel='noreferrer'>accommodation</a> - Room(s) in a
                            house or hotel in which to live, especially for a short time
                        </li>
                        <li>
                            <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/ridicule'
                                title="Висміювати, осміяння, глум"
                                target='_blank' rel='noreferrer'>ridicule</a> - To laughat. To
                            mock. Laughter at someone or something.
                        </li>
                        <li>
                            <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/refinement'
                                title="Витонченність, вишуканість. Удосконалення"
                                target='_blank' rel='noreferrer'>refinement</a> - Good manners,
                            good taste, polite speech etc. (an) improvement
                        </li>
                        <li>
                            <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/idly'
                                title="Ліниво. Марно"
                                target='_blank' rel='noreferrer'>idly</a> - Without any
                            particular purpose. Doing nothing
                        </li>
                        <li>
                            <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/assizes'
                                title="Засідання суду"
                                target='_blank' rel='noreferrer'>assizes</a> - (in Wales and
                            England until 1971) one or more of the meetings of the most
                            important court in each country, usually held four times a year
                            by a travelling judge
                        </li>
                    </ul>
                    <h3>Capter 8 &#8657;</h3>
                </ div>
                <div className={style.persuasionTwoText}>
                    <ul>
                        <li>
                            <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/flattery'
                                title="Лестощі, підлесливість"
                                target='_blank' rel='noreferrer'>flattery</a> - Insincere praise
                        </li>
                        <li>
                            <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/hitherto'
                                title="Досі. До цього часу"
                                target='_blank' rel='noreferrer'>hitherto</a> - Up to this
                            time
                        </li>

                        {/*<li>
                <a href='https://dictionary.cambridge.org/dictionary/english-ukrainian/'
                title=""
                target='_blank' rel='noreferrer'></a>
                        </li>*/}
                    </ul >
                    <h3>Chapter 9 &#8657;</h3>
                </div>
            </div>
            <div className={style.idDate}>18.11.2025 - 19.11.2025</div>
        </>
    );
}