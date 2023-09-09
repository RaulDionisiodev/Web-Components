class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" }); // o mode diz se o componente pode ser manipulado
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() { 
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft =  document.createElement('div');
        cardLeft.setAttribute("class", "card__left");

        const author = document.createElement('span');
        author.textContent = "By " + (this.getAttribute('autor') || "Anonimous");

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link-url');
        
        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('newsContent')

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight =  document.createElement('div');
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img")
        newsImage.src = this.getAttribute('photo') || "assets/default.jpg"
        newsImage.alt = "Foto da notícia"
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() { }
}

customElements.define('card-news', CardNews) //as tags customizadas precisam ter sempre o hifén no nome

// Um componente é uma função JS que retorna HTML ou JS