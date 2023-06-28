import { state } from "../../state";
import "../../components/sign-result/sign-result";

export function initResultPage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "container-result-page";
    
    const currentState = state.getState();
    
    div.innerHTML = `
        <h1>Hola</h1>
        <div class="container-sign-result">
            <sign-result result="win"></sign-result>
            <sign-result result="tie"></sign-result>
            <sign-result result="lose"></sign-result>
        </div>
    `;

    style.innerHTML = `
        .container-result-page {
            height: 100%;
            margin: auto;
            display: grid;
        }
        .container-sign-result {
        }
        .disable {
            display: none;
        }
        .enable {
            display: flex;
        }
    `;

    div.appendChild(style);
    return div;
};