class AppBar extends HTMLElement {
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
          .nav-brand {
            font: bold 1.5rem 'Inter', sans-serif;
          }

          .item-list {
            font: 1rem 'Inter', sans-serif;
            display: flex;
            justify-content: space-between;
            width: 30%;
            text-transform: capitalize;
          }

          .item-nav {
            color: black;
            text-decoration: none;
          }

          .item-nav:hover {
            color: #FFB830;
            transition: .3s all;
          }
          
          @media screen and (max-width: 600px) {
            .nav-brand {
              padding-top: 1rem;
            }

            .item-list {
              width: 100%;
              justify-content: center;
              column-gap: 3rem;
              padding-bottom: 1rem;
            }
          }
        </style>

        <h2 class="nav-brand">WannaEat</h2>
        <div class="item-list">
            <a class="item-nav" href="#dailymenu">daily menu</a>
            <a class="item-nav" href="#categories">categories</a>
            <a class="item-nav" href="#about">about</a>
        </div>
      `;
  }
}

customElements.define('app-bar', AppBar);
