import heroIcon from '../../images/iconHero.svg';

class Hero extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
          img {
            margin: 3rem auto;
            display: flex;
            justify-content: center;
            width: 80vw;
          }

          a {
            text-decoration: none;
            color: black;
          }

          .get-meals {
            display: flex;
            flex-direction: row;
            margin: 4rem auto;
            align-items: center;
            width: fit-content;
            transform: rotateX(270deg);
            -webkit-transform:rotate(270deg);
            -moz-transform:rotate(270deg);
            -o-transform:rotate(270deg);
            -ms-transform:rotate(270deg);
            cursor: pointer;
          }

          h3 {
            font: 600 1.25rem 'Inter', sans-serif;
          }

          .iconArrow {
            width: 1.25rem;
            height: 1.25rem;
          }

          @media (min-width: 1024px) {
            img {
              width: auto;
            }

            .get-meals {
              margin: 2.5rem auto;
            }
          }
        </style>

        <img src=${heroIcon} alt="hero icon" />
        <a class="hero-text" href="#dailymenu">
          <div class="get-meals">
              <svg xmlns="http://www.w3.org/2000/svg" class="iconArrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
              <h3>Get Meals</h3>
          </div>
        </a>
    `;
  }
}

customElements.define('hero-section', Hero);
