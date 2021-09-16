class CategoryItem extends HTMLElement {
  set category(category) {
    this._category = category;
    this.render();
  }

  set clickCategory(event) {
    this._clickCategory = event;
    this.render();
  }

  get categoryValue() {
    return this.querySelector('p').innerText;
  }

  render() {
    this.innerHTML = `
        <button key=${this._category.idCategory} id="categoryItem" type="submit">
          <img src=${this._category.strCategoryThumb} alt="category item image"/>
          <p>${this._category.strCategory}</p>
        </button>
    `;

    this.querySelector('button#categoryItem').addEventListener(
      'click',
      this._clickCategory
    );
  }
}

customElements.define('category-item', CategoryItem);
