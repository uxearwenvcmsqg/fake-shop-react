import { useState } from 'react';
import './product.scss';

// eslint-disable-next-line react/prop-types
function Product({ id, images, title, price, category, discountPercentage, rating }) {
  const [state, setState] = useState(0);

  return (
    <div className="product__container">
      <img
        src={
          images && images[0]
            ? images[0]
            : 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/19bafe9f-02df-45cf-bd43-296ee0fd11fc/anim=false,width=450/2024-06-24-09_16_1037430532215534.jpeg'
        }
        width={90}
        height={120}
      />
      <p>{title}</p>
      <span>Category: {category}</span>
      <div className="product__container__price">
        <h2>Price: ${price}</h2>
        <h3>${discountPercentage}</h3>
      </div>
      <div className="product__container__button">
        <h2>rating: {rating}</h2>
        <button onClick={() => setState(state + 1)}>
          Добавить
          <span>{state}</span>
        </button>
      </div>
    </div>
  );
}

export default Product;
