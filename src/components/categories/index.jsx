import '../categories/categories.scss';

// eslint-disable-next-line react/prop-types
function Categories({ value, onChangeCategory }) {
  const category = ['all', 'beauty', 'fragrances', 'furniture', 'groceries'];
  return (
    <div className="categories">
      <ul>
        {category.map((elem, i) => (
          <li
            onClick={() => onChangeCategory(elem)}
            className={value === elem ? 'active' : ''}
            key={i}>
            {elem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
