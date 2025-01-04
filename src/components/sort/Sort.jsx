import './sort.scss';
import rowDown from '../../assets/row-down.svg';
import { useState } from 'react';

function Sort() {
  const [activeSort, setActiveSort] = useState(0);
  const [open, setOpen] = useState(false);

  const list = ['популярности', 'цене', 'названию'];

  const onClickSort = (i) => {
    setOpen(!open);
    setActiveSort(i);
  };

  return (
    <div className="sort">
      <div className="sort__text">
        <img src={rowDown} alt="" />
        <p>сортировка по:</p>
        <span>{activeSort}</span>
      </div>
      {open && (
        <ul className="sort__list">
          {list.map((elem, i) => (
            <li key={i}>{elem}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sort;
