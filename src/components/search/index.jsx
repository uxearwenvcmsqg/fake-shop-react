import searchIcon from '../../assets/search.svg';
import clearIcon from '../../assets/clear.svg';
import './search.scss';
import { useContext } from 'react';
import { SearchContext } from '../../App';

function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  
  return (
    <div className="search">
      <img className="search__iconSearch" src={searchIcon} alt="search" width={25} height={25} />
      <input
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
          onClick={() => setSearchValue('')}
        />
      )}
    </div>
  );
}

export default Search;
