// eslint-disable-next-line react/prop-types
import './product.scss';

function Product({ id, images, title, price, category }) {
  return (
    <div className="product__container">
      <img src={images} alt="product-image" width={150} height={150}/>
      <h3>{title}</h3>
      <p>
        <strong>Price:</strong> ${price}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
    </div>
  );
}

export default Product;
