import './home.scss';
import { useState, useEffect, useContext } from 'react';
import Categories from '../../components/categories';
import Product from '../../components/product/index';
import Sort from '../../components/sort/index';
import Paginate from '../../components/pagination/index';
import { SearchContext } from '../../App';

function Home() {
  const { searchValue } = useContext(SearchContext);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  useEffect(() => {
    const order = sortType.sortProperty.includes('asc') ? 'desc' : 'asc';
    const sortBy = sortType.sortProperty.replace('asc', '');
    const skipLogic = currentPage === 1 ? '' : currentPage === 2 ? 15 : currentPage === 3 ? 30 : '';

    const fetchProducts = async () => {
      try {
        let url = `https://dummyjson.com/products?page=${currentPage}&limit=15&skip=${skipLogic}&sortBy=${sortBy}&order=${order}`;

        if (category !== 'all') {
          url = `https://dummyjson.com/products/category/${category}?limit=10&sortBy=${sortBy}&order=${order}`;
        }

        fetch(url)
          .then((response) => response.json())
          .then((data) => setProducts(data.products || []));
      } catch (err) {
        console.error('Ошибка при загрузке продуктов:', err);
      }
    };

    fetchProducts();
  }, [category, sortType, searchValue, currentPage]);

  const clothers = products
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <Product key={obj.id} {...obj} />);

  return (
    <>
      <div className="container-top">
        <Categories value={category} onChangeCategory={(newCategory) => setCategory(newCategory)} />
        <Sort value={sortType} onChangeSort={(clickSort) => setSortType(clickSort)} />
      </div>
      <div className="container-clothers">{clothers}</div>
      <div className="container-paginate">
        <Paginate onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
}

export default Home;
