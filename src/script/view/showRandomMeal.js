import callAPI from '../data/callAPI';
import '../component/getMeals';
import '../component/mealList';

const showRandomMeal = () => {
  const getMeal = document.querySelector('get-meals');
  const mealList = document.querySelector('meal-list');

  const renderResult = (result) => {
    mealList.meals = result;
  };

  const renderErrorResult = (message) => {
    mealList.renderError(message);
  };

  const onButtonClicked = async () => {
    try {
      const result = await callAPI.randomMeal();
      renderResult(result);
    } catch (message) {
      renderErrorResult(message);
    }
  };

  getMeal.clickEvent = onButtonClicked;
};

export default showRandomMeal;
