import './home.scss';
import Categories from '../../components/categories';
import Product from '../../components/product/index';
import Sort from '../../components/sort/index';
import Paginate from '../../components/pagination/index';

import { SearchContext } from '../../App';
import { useState, useEffect, useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCategoryName } from '../../redux/slices/filterSlice';

function Home() {
  const categoryName = useSelector((state) => state.filter.categoryName);
  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext);
  const [products, setProducts] = useState([]);
  // const [categoryName, setCategoryName] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  const OnChangeCategory = (name) => {
    console.log(name);
  };

  useEffect(() => {
    const order = sortType.sortProperty.includes('asc') ? 'desc' : 'asc';
    const sortBy = sortType.sortProperty.replace('asc', '');
    const skipLogic = currentPage === 1 ? '' : currentPage === 2 ? 15 : currentPage === 3 ? 30 : '';

    const fetchProducts = async () => {
      try {
        let url = `https://dummyjson.com/products?page=${currentPage}&limit=15&skip=${skipLogic}&sortBy=${sortBy}&order=${order}`;

        if (categoryName !== 'all') {
          url = `https://dummyjson.com/products/category/${categoryName}?limit=10&sortBy=${sortBy}&order=${order}`;
        }

        fetch(url)
          .then((response) => response.json())
          .then((data) => setProducts(data.products || []));
      } catch (err) {
        console.error('Ошибка при загрузке продуктов:', err);
      }
    };

    fetchProducts();
  }, [categoryName, sortType, searchValue, currentPage]);

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
        <Categories
          value={categoryName}
          onChangeCategory={(value) => dispatch(setCategoryName(value))}
        />
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
