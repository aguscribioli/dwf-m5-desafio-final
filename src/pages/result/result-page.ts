import { state } from "../../state";
import "../../components/sign-result/sign-result";

export function initResultPage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "container-result-page";
    
    var currentState = state.getState();

    // movimientos de /play-page
    const currentPlayerChoice = currentState.currentGame.myPlay;
    const currentComputerChoice = currentState.currentGame.computerPlay;

    state.whoWon(currentPlayerChoice, currentComputerChoice);
    
    var playerScore = state.getState().historyScore.player;
    var computerScore = state.getState().historyScore.computer;

    div.innerHTML = `
    <div class="container-sign-result">
    <sign-result result="win" class="sign-result-win disable"></sign-result>
    <sign-result result="tie" class="sign-result-tie disable"></sign-result>
    <sign-result result="lose" class="sign-result-lose disable"></sign-result>
        </div>
        <div class="container-score-and-button">
            <div class="container-score">
            <p class="title-score">Score</p>
                <div class="container-history-score">
                    <p><u>Vos</u>: ${playerScore}</p>
                    <br>
                    <p><u>Computadora</u>: ${computerScore}</p>
                </div>
            </div>
            <div class="container-button">
                <my-button class="play-again-button enable">Volver a jugar</my-button>
                <my-button class="reset-score enable">Reiniciar historial</my-button>
            </div>
        </div>
    `;
    
    style.innerHTML = `
    .container-result-page {
            height: 100%;
            margin: auto;
            display: grid;
        }
        .container-sign-result {
            padding-top: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container-score-and-button {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        @media (min-width: 960px) {
            .container-score-and-button {
                flex-direction: initial;
                justify-content: center;
                gap: 100px;
                padding-bottom: 30px;
            }
        }
        .container-score {
            border: solid 8px;
            border-radius: 8px;
            width: 300px;
            background-color: white;
        }
        p {
            margin: 0;
        }
        .title-score{
            font-size: 60px;
            text-align: center;
            padding-top: 20px;
        }
        .container-history-score {
            font-size: 40px;
            text-align: right;
            padding: 10px 20px 20px 20px;
        }
        .container-button {
            display: flex;
            flex-direction: column;
            gap: 45px;
            padding: 30px 0;
            
        }
        .play-again-button, .reset-score {
            width: 100%;
            min-width: 285px;
        }
        .disable {
            display: none;
        }
        .enable {
            display: flex;
            justify-content: center;
        }
    `;
    
    // contenedores de las imagenes de los resultados
    const containerImgWin = div.querySelector(".sign-result-win") as HTMLElement;
    const containerImgTie = div.querySelector(".sign-result-tie") as HTMLElement;
    const containerImgLose = div.querySelector(".sign-result-lose") as HTMLElement;

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
    
    div.querySelector(".play-again-button").addEventListener("click", () => {
        params.goTo("/play");
    });

    div.querySelector(".reset-score").addEventListener("click", () => {
        state.restartScore();
        localStorage.removeItem("saved-state");
        params.goTo("/welcome");
    });

    div.appendChild(style);
    return div;
};