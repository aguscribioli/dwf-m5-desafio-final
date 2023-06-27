import "../../components/option-to-choose";
import "../../components/timer";
import { state, Jugada } from "../../state";

export function initPlayPage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "container-play-page";

    let computerMove: Jugada;
    let playerMove: Jugada;
    let counter = 3;
    let activeEvent: any = false;


    div.innerHTML = `
        <div class="container-jugadas-computer">
            <my-jugada jugada="tijera" class="computer-play-tijera"></my-jugada>
            <my-jugada jugada="papel" class="computer-play-papel"></my-jugada>
            <my-jugada jugada="piedra" class="computer-play-piedra"></my-jugada>
        </div>
        <my-timer class="container-timer"></my-timer>
        <div class="container-jugadas-player">
            <my-jugada jugada="piedra" class="player-play-piedra"></my-jugada>
            <my-jugada jugada="papel" class="player-play-papel"></my-jugada>
            <my-jugada jugada="tijera" class="player-play-tijera"></my-jugada>
        </div>
    `;

    style.innerHTML = `
        .container-play-page {
            height: 100%;
            margin: auto;
            display: grid;
        }
        .container-timer {
            text-align: center;
            height: 50vh;
        }
        .container-jugadas-player, .container-jugadas-computer {
            height: 50vh;
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            gap: 40px;
            justify-content: space-evenly;
            align-items: end;
        }
        @media (min-width:960px) {
            .container-jugadas-player, .container-jugadas-computer {
                gap: 80px;
            }
        }
        .container-jugadas-computer {
            transform: rotate(180deg);
            display: none;
        }
        .disable {
            display: none;
        }
        .enable {
            display: flex;
        }
    `;

    function activeEventOn() {
        activeEvent = true;
    };
    
    function randomComputerMove() {
        let randomNumber = Math.random();
        if (randomNumber < 1/3) {
            computerMove = "piedra";
        } else if (randomNumber < 2/3) {
            computerMove = "papel";
        } else { computerMove = "tijera" }
        return computerMove;
    }
    
    function stateSubscriber(playerMove, computerMove){
        state.subscribe(() => {});
    }

    function redirectToResult(){
        let counter = 1;
        setInterval(() => {
            counter--;
            if (counter == 0) {
                params.goTo("/welcome");
                clearInterval();
            }
        }, 3000)
    };

    const playerPlayPiedra = div.querySelector(".player-play-piedra");
    const playerPlayPapel = div.querySelector(".player-play-papel");
    const playerPlayTijera = div.querySelector(".player-play-tijera");
    const containerJugadasComputer = div.querySelector(".container-jugadas-computer");
    const computerPlayPiedra = div.querySelector(".computer-play-piedra");
    const computerPlayPapel = div.querySelector(".computer-play-papel");
    const computerPlayTijera = div.querySelector(".computer-play-tijera");
    const timer = div.querySelector(".container-timer");

    function showComputerPlay(){
        containerJugadasComputer.classList.add("enable");
        if (computerMove == "piedra") {
            computerPlayPiedra.classList.add("enable");
            computerPlayPapel.classList.add("disable");
            computerPlayTijera.classList.add("disable");
        } else if (computerMove == "papel") {
            computerPlayPapel.classList.add("enable");
            computerPlayPiedra.classList.add("disable");
            computerPlayTijera.classList.add("disable");
        } else {
            computerPlayTijera.classList.add("enable");
            computerPlayPiedra.classList.add("disable");
            computerPlayPapel.classList.add("disable");
        }
        timer.classList.add("disable");
    }
    
    (function myPlay(){
        playerPlayPiedra.addEventListener("click", () => {
            activeEventOn();
            playerMove = "piedra";
            randomComputerMove();
            showComputerPlay();
            playerPlayPapel.classList.add("disable");
            playerPlayTijera.classList.add("disable");
            state.setMove(playerMove, computerMove);
            stateSubscriber(playerMove, computerMove);
        });
        playerPlayPapel.addEventListener("click", () => {
            activeEventOn();
            playerMove = "papel";
            randomComputerMove();
            showComputerPlay();
            playerPlayPiedra.classList.add("disable");
            playerPlayTijera.classList.add("disable");
            state.setMove(playerMove, computerMove);
            stateSubscriber(playerMove, computerMove);
        });
        playerPlayTijera.addEventListener("click", () => {
            activeEventOn();
            playerMove = "tijera";
            randomComputerMove();
            showComputerPlay();
            playerPlayPiedra.classList.add("disable");
            playerPlayPapel.classList.add("disable");
            state.setMove(playerMove, computerMove);
            stateSubscriber(playerMove, computerMove);
        });
        redirectToResult();
    })();

    (function timesUp() {
        const intervalId = setInterval(() => {
            counter--;
          if (counter < 1 && activeEvent == false) {
            clearInterval(intervalId);
            params.goTo("/time-is-up");
          }
        }, 1000);
    })();
        
    div.appendChild(style);
    return div;
};