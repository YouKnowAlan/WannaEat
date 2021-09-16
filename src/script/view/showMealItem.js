import callAPI from '../data/callAPI';
import '../component/mealOnCategoryList';

const showMealItem = () => {
  const categoryItem = document.querySelectorAll('category-item');
  const mealsCategory = document.querySelector('meals-category');

  const getMealsCategory = async (category) => {
    try {
      const mealsCategoryData = await callAPI.mealsCategory(
        category.categoryValue
      );
      renderSuccess(mealsCategoryData);
    } catch (message) {
      renderFailed(message);
    }
  };

  const renderSuccess = (mealsCategoryData) => {
    mealsCategory.meals = mealsCategoryData;
  };

  const renderFailed = (message) => {
    mealsCategory.renderError(message);
  };

  categoryItem.forEach((category) => {
    category.clickCategory = async () => {
      await getMealsCategory(category);
    };
  });
};

export default showMealItem;
