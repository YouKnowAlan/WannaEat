import './categoryItem';
import showMealItem from '../view/showMealItem';

class CategoriesList extends HTMLElement {
  set categories(categories) {
    this._categories = categories;
    this.render();
  }

  renderError(message) {
    this.innerHTML = `
      <style>
        .placeholder {
              font-weight: lighter;
              color: rgba(0,0,0,0.5);
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
          }
      </style>`;
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.innerHTML = ``;
    this._categories.forEach((category) => {
      const categoryElement = document.createElement('category-item');
      categoryElement.setAttribute('class', 'swiper-slide');
      categoryElement.category = category;
      this.appendChild(categoryElement);
    });

    showMealItem();
  }
}

customElements.define('categories-list', CategoriesList);
