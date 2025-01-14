import './home.scss';
import Categories from '../../components/categories';
import Product from '../../components/product/index';
import Sort from '../../components/sort/index';
import Paginate from '../../components/pagination/index';

import axios from 'axios';

import { SearchContext } from '../../App';
import { useState, useEffect, useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCategoryName } from '../../redux/slices/filterSlice';

function Home() {
  const dispatch = useDispatch();
  // const categoryName = useSelector((state) => state.filter.categoryName);
  // const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const { categoryName, sort } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;

  const { searchValue } = useContext(SearchContext);
  const [products, setProducts] = useState([]);
  // const [categoryName, setCategoryName] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  // const [sortType, setSortType] = useState({
  //   name: 'популярности',
  //   sortProperty: 'rating',
  // });

  useEffect(() => {
    const order = sortType.includes('asc') ? 'desc' : 'asc';
    const sortBy = sortType.replace('asc', '');
    const skipLogic = currentPage === 1 ? '' : currentPage === 2 ? 15 : currentPage === 3 ? 30 : '';

    const fetchProducts = async () => {
      try {
        let url = `https://dummyjson.com/products?page=${currentPage}&limit=15&skip=${skipLogic}&sortBy=${sortBy}&order=${order}`;
        if (categoryName !== 'all') {
          url = `https://dummyjson.com/products/category/${categoryName}?limit=10&sortBy=${sortBy}&order=${order}`;
        }
        axios.get(url).then((response) => {
          const accessProducts = response.data.products ? response.data.products : [];
          setProducts(accessProducts);
        });
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
        <Sort />
      </div>
      <div className="container-clothers">{clothers}</div>
      <div className="container-paginate">
        <Paginate onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
}

export default Home;
