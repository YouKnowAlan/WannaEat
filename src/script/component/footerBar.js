import linkedinImg from '../../images/linkedin.svg';
import gmailImg from '../../images/gmail.svg';
import githubImg from '../../images/github-logo.svg';

class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .socialMedia-img {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }

            img {
                height: 1.5rem;
                margin: 1rem 1.5rem;
            }

            p {
              text-align: center;
              font: 0.75rem 'Inter', sans-serif;
              margin-bottom: 1rem;
            }
        </style>

        <div class="socialMedia-img">
            <a href="mailto:maulana8.mm@gmail.com?subject=subject" target="_blank">
             <img src=${gmailImg} alt="gmail" />
            </a>
            <a href="https://www.linkedin.com/in/maulanaichwan/" target="_blank">
             <img src=${linkedinImg} alt="linkedin" />   
            </a>
            <a href="https://github.com/YouKnowAlan" target="_blank">
             <img src=${githubImg} alt="github" />
            </a>
        </div>
        <p>Designed and Developed by Alan</p>
      `;
  }
}

customElements.define('footer-bar', FooterBar);
