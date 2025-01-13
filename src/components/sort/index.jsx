/* eslint-disable react/prop-types */
import './sort.scss';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import { useState } from 'react';

function Sort({ value, onChangeSort }) {
  const [open, setOpen] = useState(false);

  const listSort = [
    { name: 'популярности (ASC)', sortProperty: 'rating' },
    { name: 'популярности (DESC)', sortProperty: 'ratingasc' },
    { name: 'цене (ASC)', sortProperty: 'price' },
    { name: 'цене (DESC)', sortProperty: 'priceasc' },
    { name: 'алфавиту (ASC)', sortProperty: 'title' },
    { name: 'алфавиту (DESC)', sortProperty: 'titleasc' },
  ];

  const selectSortOption = (index) => {
    onChangeSort(index);
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__text" onClick={() => setOpen(!open)}>
        <img src={open ? arrowUp : arrowDown} alt="arrow-down-menu" width={20} height={20} />
        <p>Сортировать по:</p>
        <span>{value.name}</span>
      </div>

      {open && (
        <ul className="sort__popup">
          {listSort.map((obj, i) => (
            <li
              key={i}
              onClick={() => selectSortOption(obj)}
              className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sort;
