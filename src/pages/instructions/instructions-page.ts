import "../../components/button/button"
import "../../components/option-to-choose/option-to-choose"

export function initInstructionsPage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "container-instructions-page";

    div.innerHTML = `
        <h4 class="text-instructions">
            Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
        </h4>
        <div class="button">
            <my-button class="button-start">¡Jugar!</my-button>
        </div>
        <div class="container-jugadas">
            <my-jugada jugada="piedra"></my-jugada>
            <my-jugada jugada="papel"></my-jugada>
            <my-jugada jugada="tijera"></my-jugada>
        </div>
    `;

    style.innerHTML = `
        .container-instructions-page {
            height: 100%;
            margin: auto;
            display: grid;
        }
        .text-instructions {
            font-family: American Typewriter;
            color: rgba(0, 0, 0, 1);
            font-size: 30px;
            max-width: 400px;
            text-align: center;
            padding: 20px;
        }
        .button {
            text-align: center;
        }
        @media (min-width: 960px) {
            .button {
                padding-top: 25px;
            }
        }
        .container-jugadas {
            display: grid;
            grid-template-columns: 100px 100px 100px;
            justify-content: center;
            align-content: end;
            padding-top: 30px;
        }
    `;

    const button = div.querySelector(".button-start");
    button.addEventListener("click", () => {
        params.goTo("/play");
    });

    div.appendChild(style);
    return div;
};