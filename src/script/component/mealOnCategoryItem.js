class MealCategory extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
              .random-meal-card {
                  border-radius: 0.5rem;
                  background-color: #FFB830;
                  padding: 0.75rem;
                  max-widthL 36vw;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
              }
  
              img {
                  border-radius: 0.5rem;
                  max-width: 35vw;
                  margin: auto;
              }
  
              h4 {
                  text-align: center;
                  font: 600 0.75rem 'Inter', sans-serif;
              }
  
              @media (min-width: 1024px) {
                  .random-meal-card {
                    max-width: 20vw;
                  }
      
                  img {
                    max-width: 18vw;
                  }
                }
          </style>
  
          <div class="random-meal-card">
              <img src=${this._meal.strMealThumb} alt="Random Meal Image" />
              <h4>${this._meal.strMeal}</h4>
          </div>
      `;
  }
}

customElements.define('meal-category', MealCategory);
