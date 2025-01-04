import './sort.scss';
import rowDown from '../../assets/row-down.svg';
import { useState } from 'react';

function Sort() {
  const [activeSortElem, setActiveSortElem] = useState(0);
  const [open, setOpen] = useState(false);

  const list = ['популярности', 'цене', 'названию'];

  const selectSortOption = (index) => {
    setActiveSortElem(index);
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__text" onClick={() => setOpen(!open)}>
        <img src={rowDown} alt="row-down-menu" width={20} height={20} />
        <p>Сортировать по:</p>
        <span>{list[activeSortElem]}</span>
      </div>

      {open && (
        <ul className="sort__list">
          {list.map((name, i) => (
            <li
              key={i}
              onClick={() => selectSortOption(i)}
              className={activeSortElem === i ? 'active' : ''}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sort;
