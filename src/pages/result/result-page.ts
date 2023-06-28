import { state } from "../../state";
import "../../components/sign-result/sign-result";

export function initResultPage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "container-result-page";
    
    var currentState = state.getState();
    
    div.innerHTML = `
        <div class="container-sign-result">
            <sign-result result="win" class="sign-result-win disable"></sign-result>
            <sign-result result="tie" class="sign-result-tie disable"></sign-result>
            <sign-result result="lose" class="sign-result-lose disable"></sign-result>
        </div>
    `;

    style.innerHTML = `
    .container-result-page {
            height: 100vh;
            margin: auto;
            display: grid;
        }
        .container-sign-result {
            margin: 40px;
        }
        .disable {
            display: none;
        }
        .enable {
            display: flex;
            justify-content: center;
        }
    `;
    
    // movimientos de /play-page
    const currentPlayerChoice = currentState.currentGame.myPlay;
    const currentComputerChoice = currentState.currentGame.computerPlay;

    // contenedores de las imagenes de los resultados
    const containerImgWin = div.querySelector(".sign-result-win") as HTMLElement;
    const containerImgTie = div.querySelector(".sign-result-tie") as HTMLElement;
    const containerImgLose = div.querySelector(".sign-result-lose") as HTMLElement;

    state.whoWon(currentPlayerChoice, currentComputerChoice);

    const result = state.getState().currentGame.currentResult;

    if (result == "ganaste") {
        containerImgWin.classList.add("enable");
        div.style.backgroundColor = "var(--background-win-style)";
    } else if (result == "perdiste") {
        containerImgLose.classList.add("enable");
        div.style.backgroundColor = "var(--background-lose-style)"
    } else { 
        containerImgTie.classList.add("enable");
        div.style.backgroundColor = "var(--background-tie-style)"
    }


    div.appendChild(style);
    return div;
};