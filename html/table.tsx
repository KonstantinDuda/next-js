import React from 'react';
import style from '@/app/ui/html/table.module.css'

interface UserData {
  id: number;
  name: string;
  age: number;
  mail: string;
}

function MyTable() {
  const data: UserData[] = [
    { id: 1, name: 'John Doe', age: 30, mail: 'johd-doe@mail' },
    { id: 2, name: 'Jane Smith', age: 25, mail: 'jane-smith@mail'},
    { id: 3, name: 'Peter Grifin', age: 38, mail: 'peter-grifin@mail'},
    { id: 4, name: 'Lois Grifin', age: 35, mail: 'lois-grifin@mail'},
    { id: 5, name: 'Joe Swanson', age: 42, mail: 'joe-swanson@mail'},
  ];

  return (
    <table className={style.colorTable}>
      <thead>
        <tr>
          <th className={style.colorTableTh}>ID</th>
          <th className={style.colorTableTh}>Name</th>
          <th className={style.colorTableTh}>Age</th>
          <th className={style.colorTableTh}>Mail</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className={style.colorTableTr}>
            <td className={style.colorTableTd}>{item.id}</td>
            <td className={style.colorTableTd}>{item.name}</td>
            <td className={style.colorTableTd}>{item.age}</td>
            <td className={style.colorTableTd}>{item.mail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyTable;