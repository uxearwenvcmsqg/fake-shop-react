import React, { useState, useEffect } from 'react';
import Categories from '../../components/categories';
import Product from '../../components/product/index';
import './home.scss';
import Sort from '../../components/sort/Sort';

function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const clothers = products.slice(0, 3).map((obj) => <Product key={obj.id} {...obj} />);
  
  return (
    <>
      <div className="">
        {/* <Categories /> */}
        <Sort />
      </div>
      <div className="">{clothers}</div>
    </>
  );
}

export default Index;
