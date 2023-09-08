class TituloDinamico extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        //base
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo"); //props

        //estilo - todo estilo que eu crio na shadow dom só vale para a shadow dom e para o componente específico
        // o comportamento do componente é isolado do restante (scoped)
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;

            }
        `;

        //enviar para o shadow DOM
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)

    }

}

customElements.define('titulo-dinamico', TituloDinamico) //as tags customizadas precisam ter sempre o hifén no nome