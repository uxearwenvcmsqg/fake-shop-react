import '../categories/categories.scss';
import { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const category = ['all', 'mens clothing', 'womens clothing', 'jewelery', 'electronics'];

  return (
    <div className="categories">
      <ul>
        {category.map((elem, i) => (
          <li
            onClick={() => setActiveIndex(i)}
            className={activeIndex === i ? 'active' : ''}
            key={i}>
            {elem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
