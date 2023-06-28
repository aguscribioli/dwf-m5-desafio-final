export type Jugada = "piedra" | "papel" | "tijera";
const imgWin = require("url:./images/result-won.png")
const imgLose = require("url:./images/result-lost.png")
const imgTie = require("url:./images/result-tie.png")

const state = {
    data: {
        currentGame: {
            myPlay: "",
            computerPlay: "",
            currentResult: "",
        },
        historyScore: {
            player: 0,
            computer: 0,
        }
    },
    listeners: [],
    getState() {
        return this.data;
    },
    setState(newState) {
        this.data = newState;
        for (const callback of this.listeners) {
            callback();
        }
    },
    subscribe(callback: (any) => any) {
        this.listeners.push(callback);
    },
    setMove(myMove: Jugada, computerMove: Jugada) {
        const currentState = this.getState();
        state.setState({
            ...currentState,
            currentGame: {
                ...currentState.currentGame,
                myPlay: myMove,
                computerPlay: computerMove
            }
        })
    },
    setResult(result: any) {
        const currentState = this.getState();
        state.setState({
            ...currentState,
            currentGame: {
                ...currentState.currentGame,
                currentResult: result
            }
        })
    },
    pushToHistory(playerScore: number, computerScore: number) {
        const currentState = this.getState();
        state.setState({
            ...currentState,
            historyScore: {
                ...currentState.historyScore,
                player: currentState.historyScore.player + playerScore,
                computer: currentState.historyScore.computer + computerScore
            }
        })
    },
    getHistory() {
        const localData = localStorage.getItem("saved-state");
        this.setState(JSON.parse(localData));
    },
    whoWon(myMove: Jugada, computerMove: Jugada) {
        const ganarConPiedra = myMove == "piedra" && computerMove == "tijera";
        const ganarConPapel = myMove == "papel" && computerMove == "piedra";
        const ganarConTijera = myMove == "tijera" && computerMove == "papel";
        const gane = [ganarConPiedra, ganarConPapel, ganarConTijera].includes(true);
        
        if(gane) {
            this.pushToHistory(1, 0);
            this.setResult("ganaste");
        }
        
        const perderConPiedra = myMove == "piedra" && computerMove == "papel";
        const perderConPapel = myMove == "papel" && computerMove == "tijera";
        const perderConTijera = myMove == "tijera" && computerMove == "piedra";
        const perdi = [perderConPiedra, perderConPapel, perderConTijera].includes(true);

        if(perdi) {
            this.pushToHistory(0, 1);
            this.setResult("perdiste");
        }
        
        const empate = myMove == computerMove;

        if(empate) {
            this.pushToHistory(0, 0);
            this.setResult("empataste");
        }
    },
    restartScore() {
        state.setState({
            historyScore: {
                player: 0,
                computer: 0
            }
        })
    }
};

export { state };