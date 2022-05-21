import CategoryItem from '../../components/category-item/CategoryItem';
import './category.style.scss';

const Category = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};
export default Category;
