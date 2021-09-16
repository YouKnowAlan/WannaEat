class GetMeals extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
        <style>
        :host {
            max-width: 80rem;
            display: block;
        }

        h2 {
            font: 1.75rem 'Inter', sans-serif;
            text-align: center;
        }

        button {
            display: block;
            border-radius: 0.5rem;
            background-color: #FFB830;
            color: black;
            border: none;
            font: 1.25rem 'Inter', sans-serif;
            padding: 0.75rem;
            margin: 2.5rem auto;
            cursor: pointer;
        }

        button:hover {
            background-color: black;
            color: white;
        }
        </style>
        <h2>Try hit the button below</h2>
        <button type="button" id="getRandomMeal">Get a meal</button>
    `;

    this.shadowDOM
      .querySelector('#getRandomMeal')
      .addEventListener('click', this._clickEvent);
  }
}

customElements.define('get-meals', GetMeals);
