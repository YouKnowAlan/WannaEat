import 'regenerator-runtime';
import 'tailwindcss/tailwind.css';
import './styles/style.scss';
import './script/component/appBar';
import './script/component/hero';
import './script/component/getMeals';
import './script/component/categoriesList';
import './script/component/mealOnCategoryList';
import './script/component/about';
import './script/component/footerBar';
import './script/view/swiper';
import './script/view/animatePage';
import showCategories from './script/view/showCategories';
import showRandomMeal from './script/view/showRandomMeal';

document.addEventListener('DOMContentLoaded', showRandomMeal);
document.addEventListener('DOMContentLoaded', showCategories);
