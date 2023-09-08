class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" }); // o mode diz se o componente pode ser manipulado
        shadow.innerHTML = "<h1>Hello world</h1>"
    }

    build() { }

    styles() { }
}

customElements.define('card-news', CardNews) //as tags customizadas precisam ter sempre o hifén no nome

// Um componente é uma função JS que retorna HTML ou JS