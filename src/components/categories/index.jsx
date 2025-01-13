import '../categories/categories.scss';

// eslint-disable-next-line react/prop-types
function Categories({ value, onChangeCategory }) {
  const category = ['all', 'beauty', 'fragrances', 'furniture', 'groceries'];
  return (
    <div className="categories">
      <ul>
        {category.map((categoryName, i) => (
          <li
            onClick={() => onChangeCategory(categoryName)}
            className={value === categoryName ? 'active' : ''}
            key={i}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
