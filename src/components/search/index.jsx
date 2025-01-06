import searchIcon from '../../assets/search.svg';
import clearIcon from '../../assets/clear.svg';
import './search.scss';

// eslint-disable-next-line react/prop-types
function Search({ value, setSearchValue }) {

  return (
    <div className="search">
      <img className="search__iconSearch" src={searchIcon} alt="search" width={25} height={25} />
      <input
        className="search__input"
        type="text"
        placeholder="поиск..."
        value={value}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {value && (
        <img className="search__iconClear" src={clearIcon} alt="clear" width={20} height={20} onClick={() => setSearchValue('')}/>
      )}
    </div>
  );
}

export default Search;
