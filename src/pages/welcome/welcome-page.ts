import "../../components/button/button"
import "../../components/option-to-choose/option-to-choose"

export function initWelcomePage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "container-welcome-page";

    div.innerHTML = `
        <h2 class="title">Piedra, Papel o Tijera</h2>
        <div class="button">
            <my-button class="button-start">Comenzar</my-button>
        </div>
        <div class="container-jugadas">
            <my-jugada jugada="piedra"></my-jugada>
            <my-jugada jugada="papel"></my-jugada>
            <my-jugada jugada="tijera"></my-jugada>
        </div>
    `;

    style.innerHTML = `
        .container-welcome-page {
            height: 100vh;
            margin: auto;
            display: grid;
        }
        .title {
            color: rgba(0, 144, 72, 1);
            font-size: 100px;
            width: 300px;
            text-align: center;
            margin: auto;
        }
        @media (min-width: 960px) {
            .title {
                font-size: 130px;
                width: 550px;
            }
        }
        .button {
            text-align: center;
            padding-top: 50px;
        }
        @media (min-width: 960px) {
            .button {
                padding: 25px 0;
            }
        }
        .container-jugadas {
            display: grid;
            grid-template-columns: 100px 100px 100px;
            justify-content: center;
            align-content: end;
            gap: 20px;
        }
    `;

    const button = div.querySelector(".button-start");
    button.addEventListener("click", () => {
        params.goTo("/instructions");
    }); 

    div.appendChild(style);
    return div;
};