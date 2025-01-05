import './home.scss';
import { useState, useEffect } from 'react';
import Categories from '../../components/categories';
import Product from '../../components/product/index';
import Sort from '../../components/sort/index';

function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all'); // Стартовое значение "all"
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  useEffect(() => {
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');

    const fetchProducts = async () => {
      try {
        let url = `https://dummyjson.com/products?sortBy=${sortType.sortProperty}&order=${order}`;

        if (category !== 'all') {
          url = `https://dummyjson.com/products/category/${category}?sortBy=${sortBy}&order=${order}`;
        }

        fetch(url)
          .then((response) => response.json())
          .then((data) => setProducts(data.products || []));
      } catch (err) {
        console.error('Ошибка при загрузке продуктов:', err);
      }
    };

    fetchProducts();
  }, [category, sortType]);

  const clothers = products.map((obj) => <Product key={obj.id} {...obj} />);

  return (
    <>
      <div className="container-top">
        <Categories value={category} onChangeCategory={(newCategory) => setCategory(newCategory)} />
        <Sort value={sortType} onChangeSort={(clickSort) => setSortType(clickSort)} />
      </div>
      <div className="container-clothers">{clothers}</div>
    </>
  );
}

export default Home;
