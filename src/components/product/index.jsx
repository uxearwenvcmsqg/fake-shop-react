// eslint-disable-next-line react/prop-types
import styles from './product.module.scss';

function Product({ id, image, title, price, description, category }) {
  return (
    <div className={styles.product__container}>
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: '150px', objectFit: 'contain' }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
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
