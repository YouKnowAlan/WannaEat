class MealItem extends HTMLElement {
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
            h3 {
                font: 600 1.25rem 'Inter', sans-serif;
                text-align: center;
            }
            .random-meal-card {
                border-radius: 0.5rem;
                background-color: #FFB830;
                max-width: 80vw;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            img {
                border-radius: 0.5rem;
                max-width: 60vw;
                margin: auto;
            }

            h4 {
                text-align: center;
                font: 600 1rem 'Inter', sans-serif;
            }
            
            .line-break {
                background-color: black;
                width: 100%;
                height: 2px;
            }

            p {
                text-align: center;
                font: 1rem 'Inter', sans-serif;
                cursor: pointer;
            }

            p:hover {
                text-decoration: underline;
                color: white;
                font-weight: 600;
            }

            @media (min-width: 1024px) {
                .random-meal-card {
                  max-width: 30vw;
                }
    
                img {
                  max-width: 20vw;
                }
              }
        </style>

        <h3>Gotcha!</h3>
        <div class="random-meal-card">
            <img src=${this._meal.strMealThumb} alt="Random Meal Image" />
            <h4>${this._meal.strMeal}</h4>
            <div class="line-break"></div>
            <p>More Detail</p>
        </div>
    `;
  }
}

customElements.define('meal-item', MealItem);
