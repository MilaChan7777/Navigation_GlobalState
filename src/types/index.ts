class Appcontainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }


connectedCallback(){
    this.render();
}

changeName(){
    console.log("trin");
}

changePrice(){
    console.log("tran");
}

submitForm(){
    
}

render(){
    const title = this.ownerDocument.createElement("h1");
    title.innerText = "Añade un producto";
    this.shadowRoot?.appendChild(title);

    const productName = this.ownerDocument.createElement("input");
    productName.innerText = "Nombre del producto";
    productName.addEventListener("change", this.changeName);
    this.shadowRoot?.appendChild(productName);

    const productPrice = this.ownerDocument.createElement("input");
    productPrice.innerText = "Precio del producto";
    productPrice.addEventListener("change", this.changePrice);
    this.shadowRoot?.appendChild(productPrice);

    const save = this.ownerDocument.createElement("button");
    save.innerText = "Guardar el producto";
    save.addEventListener("click", this.submitForm);
    this.shadowRoot?.appendChild(save);
}
}

customElements.define('app-container', Appcontainer);