import React from 'react';
import style from '@/app/ui/html/table.module.css'

interface UserData {
  id: number;
  word: string;
  cambridgeLink: string;
  wordLink: string;
  title: string;
  explanations: string;
  translations: string;
  inUse: string;
}

function MyTable() {
  const data: UserData[] = [
    {
      id: 1, word: "dictionary",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/dictionary",
      wordLink: "dictionary",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A book containing the words of a language " +
        "alphabetically arranged, with their meanings etc", translations: "Словник",
      inUse: "Look up any unknown words in the dictionary"
    },
    {
      id: 2, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A book containing other information alphabetically " +
        "arranged", translations: "Довідник",
      inUse: "A dictionary of place-names"
    },
    {
      id: 3, word: "persuasion",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/persuasion",
      wordLink: "persuasion",
      title: "Детальніше на Cambridge dictionary",
      explanations: "The act of persuading",
      translations: "Переконання",
      inUse: "He gave in to our persuasion and did what we wanted him to do"
    },
    {
      id: 4, word: "amusement",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/amusement",
      wordLink: "amusement",
      title: "Детальніше на Cambridge dictionary",
      explanations: "The state of being amused or of finding something funny",
      translations: "Радісне здивування",
      inUse: "A smile of amusement crossed her face"
    },
    {
      id: 5, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "An entertainmant or interest",
      translations: "Розвага, забава",
      inUse: "His childhood amusements included climbing trees"
    },
    {
      id: 6, word: "consolation",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/consolation",
      wordLink: "consolation",
      title: "Детальніше на Cambridge dictionary",
      explanations: "Something that consoles. " +
        "The act of consoling",
      translations: "Відрада, утіха",
      inUse: "(also adjective) a cnsolation prize (for someone who just failed to win)"
    },
    {
      id: 7, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "",
      translations: "",
      inUse: "His great wealth was no consolation for the loss of his reputation"
    },
    {
      id: 8, word: "faculty",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/faculty?q=faculties",
      wordLink: "faculty",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A power of the mind. " +
        "A natural power of the body, ability or skill. ",
      translations: "Здатність, здібність, обдарованість",
      inUse: "The faculty of reason. The faculty of hearyng. " +
        "She has a faculty for saying right thing."
    },
    {
      id: 9, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A section of university",
      translations: "Факультет",
      inUse: "The Faculty of Arts/Science"
    },
    {
      id: 10, word: "rouse",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/rouse?q=roused",
      wordLink: "rouse",
      title: "Детальніше на Cambridge dictionary",
      explanations: "To awake",
      translations: "Будити",
      inUse: "I'll rouse you at 6 o'clock"
    },
    {
      id: 11, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "To stir or excite",
      translations: "Збуджувати",
      inUse: "Her interest was roused by what he said"
    },
    {
      id: 12, word: "admiration",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/admiration",
      wordLink: "admiration",
      title: "Детальніше на Cambridge dictionary",
      explanations: "",
      translations: "Захоплення",
      inUse: "They were filled with admiration at the team's performance"
    },
    {
      id: 13, word: "remnant",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/remnant",
      wordLink: "remnant",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A small piece or amount or a small number left over from a larger piece, "
        + "amount or number",
      translations: "Залишок, рештка",
      inUse: "The shop is selling remnants of cloth at half price. " +
        "The remnant of the army"
    },
    {
      id: 14, word: "domestic",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/domestic",
      wordLink: "domestic",
      title: "Детальніше на Cambridge dictionary",
      explanations: "Of or in the house or home",
      translations: "Хатній, домашній",
      inUse: "A domestic servant"
    },
    {
      id: 15, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "Concerning one's private life or family.",
      translations: "Внутрішній",
      inUse: "Domestic problems"
    },
    {
      id: 16, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "(of animals) tame and living with or used by people",
      translations: "Свійський",
      inUse: "Cats are popular domestic pets"
    },
    {
      id: 17, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "Not foreign",
      translations: "Відчизняний",
      inUse: "A domestic airline"
    },
    {
      id: 18, word: "affair",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/affair?q=affairs",
      wordLink: "affair",
      title: "Детальніше на Cambridge dictionary",
      explanations: "Happenings etc witch are connected with a particular person or thing",
      translations: "Справа, діло",
      inUse: "The Suez affair"
    },
    {
      id: 19, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A thing",
      translations: "Річ, штука",
      inUse: "The new machine is a weird-looking affair"
    },
    {
      id: 20, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "Busines; concern(s)",
      translations: "Справи, заняття",
      inUse: "Where I go is entirely my own affair"
    },
    {
      id: 21, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A love relationship",
      translations: "Любовний зв'язок",
      inUse: "His wife found out about his affair with another woman"
    },
    {
      id: 22, word: "pity",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/pity",
      wordLink: "pity",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A feeling of sorrow for the troubles and sufferings of others",
      translations: "Жалість, співчуття",
      inUse: "He felt a great pity for her"
    },
    {
      id: 23, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A cause of sorrow or regret",
      translations: "Жалість, жаль",
      inUse: "What a pity (that) you can't come"
    },
    {
      id: 24, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "To feel pity for (someone)",
      translations: "Жаліти, співчувати",
      inUse: "She pitied him"
    },
    {
      id: 25, word: "contempt",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/contempt",
      wordLink: "contempt",
      title: "Детальніше на Cambridge dictionary",
      explanations: "Very low opinion; Scorn",
      translations: "Призирство, зневага",
      inUse: "She spoke with utter contempt of her husbend's behaviour/behavior"
    },
    {
      id: 26, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "Disregard for the law",
      translations: "Порушення норм права",
      inUse: "He is admitting to blatant contempt for the rules of the sport " +
        "in wich he competed"
    },
    {
      id: 27, word: "borough",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/borough",
      wordLink: "borough",
      title: "Детальніше на Cambridge dictionary",
      explanations: "In Britain, a town or area with certain rights",
      translations: "Невелике місто, яке має самоврядування",
      inUse: "The London Borough of Camden"
    },
    {
      id: 28, word: "exertion",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/exertion?q=exertions",
      wordLink: "exertion",
      title: "Детальніше на Cambridge dictionary",
      explanations: "The act of bringing forcefully into use",
      translations: "Використання",
      inUse: "The exertion of one's influance"
    },
    {
      id: 29, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "(an) Effort",
      translations: "Зусилля, напруження",
      inUse: "They failed inspite of their exertions"
    },
    {
      id: 30, word: "dignity",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/dignity",
      wordLink: "dignity",
      title: "Детальніше на Cambridge dictionary",
      explanations: "Stateliness or seriousness of manner",
      translations: "Достоїнство",
      inUse: "Holding her head high, she retreated with dignity"
    },
    {
      id: 31, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "Importance or seriousness",
      translations: "Важливість",
      inUse: "The dignity of the occasion"
    },
    {
      id: 32, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A privilege etc indicating rank",
      translations: "Титул, сан",
      inUse: "He had risen to the dignity of an office of his own"
    },
    {
      id: 33, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "One's personal pride",
      translations: "Гідність",
      inUse: "He had wounded her dignity"
    },
    {
      id: 34, word: "baronet",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english/baronet",
      wordLink: "baronet",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A man who has the lowest title of honor that can be given in the UK, " +
        "below a baron but above a knight, and given from father to son",
      translations: "",
      inUse: "On this ocassion he asked only for the baronet"
    },
    {
      id: 35, word: "arms",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/arms",
      wordLink: "arms",
      title: "Детальніше на Cambridge dictionary",
      explanations: "Weapons",
      translations: "Зброя",
      inUse: "Does the police force carry arms? "
    },
    {
      id: 36, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A design ets which is used as the symbol of the town, family etc " +
        "(see also coat of arms)",
      translations: "Герб",
      inUse: "Concluding with the arms and motto"
    },
    {
      id: 37, word: "motto",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english-ukrainian/motto",
      wordLink: "motto",
      title: "Детальніше на Cambridge dictionary",
      explanations: "(a short sentance or phrase which expresses) " +
        "a principle of behaviour etc",
      translations: "Девіз, гасло",
      inUse: "'Honesty is the best policy' is my motto"
    },
    {
      id: 38, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "A printed saying etc, often found inside a Christmas craker",
      translations: "Висловлення",
      inUse: ""
    },
    {
      id: 39, word: "presumptive",
      cambridgeLink: "https://dictionary.cambridge.org/dictionary/english/presumptive",
      wordLink: "presumptive",
      title: "Детальніше на Cambridge dictionary",
      explanations: "Belived to be something, or likely to be true, " +
        "based on the information that you have",
      translations: "",
      inUse: "Presumptive signs of pregnancy"
    },
    {
      id: 40, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "" +
        "",
      translations: "",
      inUse: ""
    },
    {
      id: 41, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "" +
        "",
      translations: "",
      inUse: ""
    },
    {
      id: 42, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "" +
        "",
      translations: "",
      inUse: ""
    },
    {
      id: 43, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "" +
        "",
      translations: "",
      inUse: ""
    },
    {
      id: 44, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "" +
        "",
      translations: "",
      inUse: ""
    },
    {
      id: 0, word: "",
      cambridgeLink: "",
      wordLink: "",
      title: "Детальніше на Cambridge dictionary",
      explanations: "" +
        "",
      translations: "",
      inUse: ""
    },

  ];

  return (
    <table className={style.colorTable}>
      <thead>
        <tr>
          <th className={style.colorTableTh}>Word</th>
          <th className={style.colorTableTh}>Explanation</th>
          <th className={style.colorTableTh}>Translations</th>
          <th className={style.colorTableTh}>In use</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className={style.colorTableTr}>
            <td className={style.colorTableTd} id={item.wordLink}><a href={item.cambridgeLink} rel="noreferrer"
              target="_blank" title={item.title}>{item.word}</a></td>
            <td className={style.colorTableTd}>{item.explanations}</td>
            <td className={style.colorTableTd}>{item.translations}</td>
            <td className={style.colorTableTd}>{item.inUse}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyTable;