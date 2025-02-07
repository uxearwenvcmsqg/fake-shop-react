import searchIcon from '../../assets/search.svg';
import clearIcon from '../../assets/clear.svg';
import './search.scss';
import { useContext, useRef, useCallback, useState } from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

function Search() {
  const [value, setValue] = useState('');
  
  const onClickClear = () => {
    setSearchValue(''); //очистка глобально в app.js
    setValue(''); //очистка локально в search
    inputRef.current.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchDebounce = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    [],
  );
  
  const onChangeInput = (event) => {
    setValue(event.target.value);
    searchDebounce(event.target.value);
  };
  
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();
  
  return (
    <div className="search">
      <img className="search__iconSearch" src={searchIcon} alt="search" width={25} height={25} />
      <input
        ref={inputRef}
        className="search__input"
        type="text"
        placeholder="поиск..."
        value={value}
        onChange={(event) => {
          onChangeInput(event);
        }}
      />
      {value && (
        <img
          className="search__iconClear"
          src={clearIcon}
          alt="clear"
          width={20}
          height={20}
          onClick={() => onClickClear()}
        />
      )}
    </div>
  );
}

export default Search;
