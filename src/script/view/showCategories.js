import callAPI from '../data/callAPI';
import '../component/categoriesList';

const showCategories = () => {
  const categoriesList = document.querySelector('categories-list');
  categoriesList.setAttribute('class', 'swiper-wrapper');
  const renderCategories = (categories) => {
    categoriesList.categories = categories;
  };

  const renderErrorCategories = (message) => {
    categoriesList.renderError(message);
  };

  const getCategories = async () => {
    try {
      const categories = await callAPI.mealCategories();
      renderCategories(categories);
    } catch (message) {
      renderErrorCategories(message);
    }
  };

  getCategories();
};

export default showCategories;
