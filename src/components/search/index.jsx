import searchIcon from '../../assets/search.svg';
import clearIcon from '../../assets/clear.svg';
import './search.scss';
import { useContext, useRef } from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

function Search() {
  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const testDebounse = debounce((debounce) => {
    console.log('test debounce: ', debounce);
  }, 2000);

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
    testDebounse();
  };

  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  return (
    <div className="search">
      <img className="search__iconSearch" src={searchIcon} alt="search" width={25} height={25} />
      <input
        ref={inputRef}
        className="search__input"
        type="text"
        placeholder="поиск..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {searchValue && (
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
