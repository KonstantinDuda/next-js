import React from 'react';
import style from '@/app/ui/html/table.module.css'

interface UserData {
  id: number;
  word: string;
  link: string;
  title: string;
  explanations: string;
  translations: string;
  inUse: string;
}

function MyTable() {
  const data: UserData[] = [
    { id: 1, word: 'dictionary', 
        link: 'https://dictionary.cambridge.org/dictionary/english-ukrainian/dictionary',
        title: 'Детальніше на Cambridge dictionary', 
        explanations: 'a book containing the words of a language ' + 
        'alphabetically arranged, with their meanings etc', translations: 'словник', 
        inUse: 'Look up any unknown words in the dictionary'},
    { id: 2, word: '', 
        link: 'https://dictionary.cambridge.org/dictionary/english-ukrainian/dictionary',
        title: 'Детальніше на Cambridge dictionary', 
        explanations: 'a book containing other information alphabetically ' + 
        'arranged', translations: 'довідник', 
        inUse: 'A dictionary of place-names'},
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
            <td className={style.colorTableTd}><a href={item.link} rel="noreferrer" 
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