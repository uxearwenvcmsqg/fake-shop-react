import searchIcon from '../../assets/search.svg';
import clearIcon from '../../assets/clear.svg';
import './search.scss';

function Search() {
  return (
    <div className="search">
      <img className="search__iconSearch" src={searchIcon} alt="search" width={25} height={25} />
      <input className="search__input" type="text" placeholder="поиск одежды" />
      <img className="search__iconClear" src={clearIcon} alt="clear" width={20} height={20} />
    </div>
  );
}

export default Search;
