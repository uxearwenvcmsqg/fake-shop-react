import './sort.scss';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType } from '../../redux/slices/filterSlice';

const listSort = [
  { name: 'популярности (ASC)', sortProperty: 'rating' },
  { name: 'популярности (DESC)', sortProperty: 'ratingasc' },
  { name: 'цене (ASC)', sortProperty: 'price' },
  { name: 'цене (DESC)', sortProperty: 'priceasc' },
  { name: 'алфавиту (ASC)', sortProperty: 'title' },
  { name: 'алфавиту (DESC)', sortProperty: 'titleasc' },
];

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);

  const [open, setOpen] = useState(false);

  const selectSortOption = (index) => {
    dispatch(setSortType(index));
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__text" onClick={() => setOpen(!open)}>
        <img src={open ? arrowUp : arrowDown} alt="arrow-down-menu" width={20} height={20} />
        <p>Сортировать по:</p>
        <span>{sort.name}</span>
      </div>

      {open && (
        <ul className="sort__popup">
          {listSort.map((obj, i) => (
            <li
              key={i}
              onClick={() => selectSortOption(obj)}
              className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sort;
