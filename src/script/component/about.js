import figmaIcon from '../../images/figma.svg';
import undrawIcon from '../../images/undrawIcon.svg';
import colorhuntIcon from '../../images/colorhuntIcon.svg';

class About extends HTMLElement {
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
            h2 {
                text-align: center;
                font: 600 1.75rem 'Inter', sans-serif;
                margin: 2.5rem auto;
            }

            .tools {
                max-width: 40vw;
                margin: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            a {
                padding: 2rem;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                text-decoration: none;
                color: black;
            }

            a:hover {
                border-radius: 0.75rem;
                background-color: #FFB830;
            }

            h4 {
                font: 600 1rem 'Inter', sans-serif;
                text-align: center;
            }

            img {
                height: 4rem;
            }
        </style>

        <h2>About this project</h2>
        <div class="tools">
            <a class="design" href="https://www.figma.com/">
                <h4>Desain Tools</h4>
                <img src=${figmaIcon} alt="figma"/>
            </a>
            <a class="illustrator" href="https://undraw.co/">
                <h4>Illustrator resources</h4>
                <img src=${undrawIcon} alt="undraw" />
            </a>
            <a href="https://colorhunt.co/">
                <h4>colors</h4>
                <img src=${colorhuntIcon} alt="colorhunt.co">
            </a>
        </div>
      `;
  }
}

customElements.define('about-page', About);
