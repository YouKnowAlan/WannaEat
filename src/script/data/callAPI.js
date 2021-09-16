import axios from 'axios';

class callAPI {
  static randomMeal() {
    const getDataFromAPI = async () => {
      const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
      try {
        const responses = await axios.get(URL);
        const data = await responses.data;
        const randomMeal = await data.meals;
        return randomMeal;
      } catch (err) {
        return err;
      }
    };
    return getDataFromAPI();
  }

  static mealCategories() {
    const getCategoriesFromAPI = async () => {
      const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
      try {
        const responses = await axios.get(URL);
        const data = await responses.data;
        const categories = await data.categories;
        return categories;
      } catch (err) {
        return err;
      }
    };
    return getCategoriesFromAPI();
  }

  static mealsCategory(categoriesKey) {
    const getMealsCategory = async () => {
      const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoriesKey}`;
      try {
        const responses = await axios.get(URL);
        const data = await responses.data;
        const mealsCategory = await data.meals;
        return mealsCategory;
      } catch (err) {
        return err;
      }
    };

    return getMealsCategory();
  }
}

export default callAPI;
