import './home.scss';
import { useState, useEffect } from 'react';
import Categories from '../../components/categories';
import Product from '../../components/product/index';
import Sort from '../../components/sort/index';

function Index() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const clothers = products.map((obj) => <Product key={obj.id} {...obj} />);

  return (
    <>
      <div className="container-top">
        <Categories />
        <Sort />
      </div>
      <div className="container-clothers">{clothers} </div>
    </>
  );
}

export default Index;
