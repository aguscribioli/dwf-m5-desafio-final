customElements.define(
    "my-button",
    class extends HTMLElement {
        constructor() {
           super();
           this.render();
        }
        render(){
            const shadow = this.attachShadow({ mode: "open" });
            const button = document.createElement("button");
            const style = document.createElement("style");
            button.className = "root";
            
            style.innerHTML = `
                .root{
                    background-color: #006cfc;
                    color: rgba(216, 252, 252, 1);
                    border: 10px solid #001997;
                    border-radius: 10px;
                    font-family: "Odibee Sans", cursive;
                    font-size: 45px;
                    padding: 15px;
                    text-align: center;
                    cursor: pointer;
                    width: 100%;
                    max-width: 285px;
                }
            `
            button.textContent = this.textContent;
            shadow.appendChild(button);
            shadow.appendChild(style);
        };
    }
);