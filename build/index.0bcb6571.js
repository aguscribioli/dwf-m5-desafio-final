function e(e,n,t,a){Object.defineProperty(e,n,{get:t,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=n.parcelRequire93c5;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},n.parcelRequire93c5=r),r.register("7PhYn",(function(n,t){var a,r;e(n.exports,"resolve",(()=>a),(e=>a=e)),e(n.exports,"register",(()=>r),(e=>r=e));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},a=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),r("7PhYn").register(JSON.parse('{"di8mO":"index.0bcb6571.js","76nzR":"stone.3e5be059.png","3W9R0":"paper.a4a868e5.png","cN5Rf":"scissors.d1811bb6.png","be7Wh":"result-won.26617144.png","aXVhg":"result-lost.177029e1.png","XxUXg":"result-tie.f5fd92d9.png"}')),customElements.define("my-button",class extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("button"),t=document.createElement("style");n.className="root",t.innerHTML='\n                .root{\n                    background-color: #006cfc;\n                    color: rgba(216, 252, 252, 1);\n                    border: 10px solid #001997;\n                    border-radius: 10px;\n                    font-family: "Odibee Sans", cursive;\n                    font-size: 45px;\n                    padding: 15px;\n                    text-align: center;\n                    cursor: pointer;\n                    width: 100%;\n                    max-width: 285px;\n                }\n            ',n.textContent=this.textContent,e.appendChild(n),e.appendChild(t)}}),r.register("cX1xx",(function(e,n){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("76nzR")})),r.register("kVZsc",(function(n,t){var a;e(n.exports,"getBundleURL",(()=>a),(e=>a=e));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var n=r[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=n),n}})),r.register("5u3QP",(function(e,n){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("3W9R0")})),r.register("4AUoN",(function(e,n){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("cN5Rf")})),customElements.define("my-jugada",class extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=this.getAttribute("jugada"),a=document.createElement("style"),i=document.createElement("img");i.setAttribute("width","90px"),i.setAttribute("height","200px"),a.innerHTML="\n      .piedra, .papel, .tijera {\n        text-align: center;\n        cursor: pointer;\n      }\n      ",n.className=t,"piedra"==t?i.src=r("cX1xx"):"papel"==t?i.src=r("5u3QP"):"tijera"==t&&(i.src=r("4AUoN")),n.appendChild(i),e.appendChild(n),e.appendChild(a)}}),customElements.define("my-timer",class extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style");n.innerHTML='\n            <div class="countdown-number"></div>\n            <svg class="svg">\n            <circle class="svg-circle" r="90" cx="140" cy="140"></circle>\n            </svg>\n            ';let a=3;var r=n.querySelector(".countdown-number");r.textContent=a;const i=setInterval((()=>{a--,0==a&&clearInterval(i),r.textContent=a}),1e3);t.innerHTML="\n            .countdown-number {\n                position: relative;\n                top: 169px;\n                font-weight: 400;\n                font-size: 70px;\n                text-align: center;\n                color: black;\n            }\n            .svg {\n                width: 260px;\n                height: 280px;\n                transform: rotateY(-180deg) rotateZ(-90deg);\n            }\n            .svg-circle {\n                stroke-dasharray: 570px;\n                stroke-dashoffset: 0px;\n                stroke-linecap: round;\n                stroke-width: 10px;\n                stroke: black ;\n                fill: none;\n                animation: countdown 3s linear infinite forwards;\n            }\n            @keyframes countdown {\n                from {\n                  stroke-dashoffset: 0px;\n                }\n                to {\n                  stroke-dashoffset: 580px;\n                }\n            }",e.appendChild(n),e.appendChild(t)}}),r.register("ejjAD",(function(e,n){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("be7Wh")})),r("ejjAD"),r.register("efyfQ",(function(e,n){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("aXVhg")})),r("efyfQ"),r.register("4mAPE",(function(e,n){e.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("XxUXg")})),r("4mAPE");const i={data:{currentGame:{myPlay:"",computerPlay:"",currentResult:""},historyScore:{player:0,computer:0}},listeners:[],getState(){return this.data},setState(e){this.data=e;for(const e of this.listeners)e()},subscribe(e){this.listeners.push(e)},setMove(e,n){const t=this.getState();i.setState({...t,currentGame:{...t.currentGame,myPlay:e,computerPlay:n}})},setResult(e){const n=this.getState();i.setState({...n,currentGame:{...n.currentGame,currentResult:e}})},pushToHistory(e,n){const t=this.getState();i.setState({...t,historyScore:{...t.historyScore,player:t.historyScore.player+e,computer:t.historyScore.computer+n}})},getHistory(){const e=localStorage.getItem("saved-state");this.setState(JSON.parse(e))},whoWon(e,n){["piedra"==e&&"tijera"==n,"papel"==e&&"piedra"==n,"tijera"==e&&"papel"==n].includes(!0)&&(this.pushToHistory(1,0),this.setResult("ganaste"));["piedra"==e&&"papel"==n,"papel"==e&&"tijera"==n,"tijera"==e&&"piedra"==n].includes(!0)&&(this.pushToHistory(0,1),this.setResult("perdiste"));e==n&&(this.pushToHistory(0,0),this.setResult("empataste"))},restartScore(){i.setState({historyScore:{player:0,computer:0}})}};customElements.define("sign-result",class extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=this.getAttribute("result"),a=document.createElement("style"),i=document.createElement("img");a.innerHTML="\n      .win, .lose, .tie {\n        text-align: center;\n      }\n      ",n.className=t,"win"==t?i.src=r("ejjAD"):"lose"==t?i.src=r("efyfQ"):"tie"==t&&(i.src=r("4mAPE")),n.appendChild(i),e.appendChild(n),e.appendChild(a)}});const s=[{path:/\/welcome/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.className="container-welcome-page",n.innerHTML='\n        <h2 class="title">Piedra, Papel o Tijera</h2>\n        <div class="button">\n            <my-button class="button-start">Comenzar</my-button>\n        </div>\n        <div class="container-jugadas">\n            <my-jugada jugada="piedra"></my-jugada>\n            <my-jugada jugada="papel"></my-jugada>\n            <my-jugada jugada="tijera"></my-jugada>\n        </div>\n    ',t.innerHTML="\n        .container-welcome-page {\n            height: 100vh;\n            margin: auto;\n            display: grid;\n        }\n        .title {\n            color: rgba(0, 144, 72, 1);\n            font-size: 100px;\n            width: 300px;\n            text-align: center;\n            margin: auto;\n        }\n        @media (min-width: 960px) {\n            .title {\n                font-size: 130px;\n                width: 550px;\n            }\n        }\n        .button {\n            text-align: center;\n            padding-top: 50px;\n        }\n        @media (min-width: 960px) {\n            .button {\n                padding-top: 25px;\n            }\n        }\n        .container-jugadas {\n            display: grid;\n            grid-template-columns: 100px 100px 100px;\n            justify-content: center;\n            align-content: end;\n        }\n    ",n.querySelector(".button-start").addEventListener("click",(()=>{e.goTo("/instructions")})),n.appendChild(t),n}},{path:/\/instructions/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.className="container-instructions-page",n.innerHTML='\n        <h4 class="text-instructions">\n            Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n        </h4>\n        <div class="button">\n            <my-button class="button-start">¡Jugar!</my-button>\n        </div>\n        <div class="container-jugadas">\n            <my-jugada jugada="piedra"></my-jugada>\n            <my-jugada jugada="papel"></my-jugada>\n            <my-jugada jugada="tijera"></my-jugada>\n        </div>\n    ',t.innerHTML="\n        .container-instructions-page {\n            height: 100vh;\n            margin: auto;\n            display: grid;\n        }\n        .text-instructions {\n            font-family: American Typewriter;\n            color: rgba(0, 0, 0, 1);\n            font-size: 40px;\n            width: 400px;\n            text-align: center;\n            margin: auto;\n            padding-top: 40px;\n        }\n        @media (min-width: 960px) {\n            .title {\n                font-size: 130px;\n                width: 550px;\n            }\n        }\n        .button {\n            text-align: center;\n            padding-top: 60px;\n        }\n        @media (min-width: 960px) {\n            .button {\n                padding-top: 25px;\n            }\n        }\n        .container-jugadas {\n            display: grid;\n            grid-template-columns: 100px 100px 100px;\n            justify-content: center;\n            align-content: end;\n        }\n    ",n.querySelector(".button-start").addEventListener("click",(()=>{e.goTo("/play")})),n.appendChild(t),n}},{path:/\/play/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");let a,r;n.className="container-play-page";let s=3,o=!1;function c(){o=!0}function l(){let e=Math.random();return a=e<1/3?"piedra":e<2/3?"papel":"tijera",a}function d(e,n){i.subscribe((()=>{}))}function p(){let n=1;const t=setInterval((()=>{n--,0==n&&(e.goTo("/result"),clearInterval(t))}),2e3)}n.innerHTML='\n        <div class="container-jugadas-computer">\n            <my-jugada jugada="tijera" class="computer-play-tijera"></my-jugada>\n            <my-jugada jugada="papel" class="computer-play-papel"></my-jugada>\n            <my-jugada jugada="piedra" class="computer-play-piedra"></my-jugada>\n        </div>\n        <my-timer class="container-timer"></my-timer>\n        <div class="container-jugadas-player">\n            <my-jugada jugada="piedra" class="player-play-piedra"></my-jugada>\n            <my-jugada jugada="papel" class="player-play-papel"></my-jugada>\n            <my-jugada jugada="tijera" class="player-play-tijera"></my-jugada>\n        </div>\n    ',t.innerHTML="\n    .container-play-page {\n            height: 100vh;\n            margin: auto;\n            display: grid;\n        }\n        .container-timer {\n            text-align: center;\n            height: 50vh;\n        }\n        .container-jugadas-player, .container-jugadas-computer {\n            height: 50vh;\n            max-width: 600px;\n            margin: 0 auto;\n            display: flex;\n            gap: 40px;\n            justify-content: space-evenly;\n            align-items: end;\n        }\n        @media (min-width:960px) {\n            .container-jugadas-player, .container-jugadas-computer {\n                gap: 80px;\n            }\n        }\n        .container-jugadas-computer {\n            transform: rotate(180deg);\n            display: none;\n        }\n        .disable {\n            display: none;\n        }\n        .enable {\n            display: flex;\n        }\n        ";const u=n.querySelector(".player-play-piedra"),g=n.querySelector(".player-play-papel"),m=n.querySelector(".player-play-tijera"),y=n.querySelector(".container-jugadas-computer"),h=n.querySelector(".computer-play-piedra"),f=n.querySelector(".computer-play-papel"),x=n.querySelector(".computer-play-tijera"),b=n.querySelector(".container-timer");function v(){y.classList.add("enable"),"piedra"==a?(h.classList.add("enable"),f.classList.add("disable"),x.classList.add("disable")):"papel"==a?(f.classList.add("enable"),h.classList.add("disable"),x.classList.add("disable")):(x.classList.add("enable"),h.classList.add("disable"),f.classList.add("disable")),b.classList.add("disable")}return u.addEventListener("click",(()=>{c(),r="piedra",l(),v(),g.classList.add("disable"),m.classList.add("disable"),i.setMove(r,a),d(),p()})),g.addEventListener("click",(()=>{c(),r="papel",l(),v(),u.classList.add("disable"),m.classList.add("disable"),i.setMove(r,a),d(),p()})),m.addEventListener("click",(()=>{c(),r="tijera",l(),v(),u.classList.add("disable"),g.classList.add("disable"),i.setMove(r,a),d(),p()})),function(){const n=setInterval((()=>{s--,s<1&&0==o&&(clearInterval(n),e.goTo("/time-is-up"))}),1e3)}(),n.appendChild(t),n}},{path:/\/time-is-up/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.className="container-instructions-page",n.innerHTML='\n        <h4 class="text-instructions">\n            ¿Qué pasó?\n            <br>\n            ¿Se terminó el tiempo?\n        </h4>\n        <div class="button">\n            <my-button class="button-start">¡Volver a jugar!</my-button>\n        </div>\n    ',t.innerHTML="\n        .container-instructions-page {\n            height: 100vh;\n            margin: auto;\n            display: grid;\n        }\n        .text-instructions {\n            font-family: American Typewriter;\n            color: rgba(0, 0, 0, 1);\n            font-size: 40px;\n            width: 300px;\n            text-align: center;\n            margin: auto;\n            padding-top: 40px;\n        }\n        @media (min-width: 960px) {\n            .text-instructions {\n                font-size: 80px;\n                width: 800px;\n            }\n        }\n        .button {\n            text-align: center;\n            padding-top: 60px;\n        }\n        @media (min-width: 960px) {\n            .button {\n                padding-top: 25px;\n            }\n        }\n    ",n.querySelector(".button-start").addEventListener("click",(()=>{e.goTo("/play")})),n.appendChild(t),n}},{path:/\/result/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");n.className="container-result-page";var a=i.getState();const r=a.currentGame.myPlay,s=a.currentGame.computerPlay;i.whoWon(r,s);var o=i.getState().historyScore.player,c=i.getState().historyScore.computer;n.innerHTML=`\n    <div class="container-sign-result">\n    <sign-result result="win" class="sign-result-win disable"></sign-result>\n    <sign-result result="tie" class="sign-result-tie disable"></sign-result>\n    <sign-result result="lose" class="sign-result-lose disable"></sign-result>\n        </div>\n        <div class="container-score-and-button">\n            <div class="container-score">\n            <p class="title-score">Score</p>\n                <div class="container-history-score">\n                    <p><u>Vos</u>: ${o}</p>\n                    <br>\n                    <p><u>Computadora</u>: ${c}</p>\n                </div>\n            </div>\n            <div class="container-button">\n                <my-button class="play-again-button enable">Volver a jugar</my-button>\n                <my-button class="reset-score enable">Reiniciar historial</my-button>\n            </div>\n        </div>\n    `,t.innerHTML="\n    .container-result-page {\n            height: 100vh;\n            margin: auto;\n            display: grid;\n        }\n        .container-sign-result {\n            padding-top: 30px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        .container-score-and-button {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n        @media (min-width: 960px) {\n            .container-score-and-button {\n                flex-direction: initial;\n                justify-content: center;\n                gap: 100px;\n                padding-bottom: 30px;\n            }\n        }\n        .container-score {\n            border: solid 8px;\n            border-radius: 8px;\n            width: 300px;\n            background-color: white;\n        }\n        p {\n            margin: 0;\n        }\n        .title-score{\n            font-size: 60px;\n            text-align: center;\n            padding-top: 20px;\n        }\n        .container-history-score {\n            font-size: 40px;\n            text-align: right;\n            padding: 10px 20px 20px 20px;\n        }\n        .container-button {\n            display: flex;\n            flex-direction: column;\n            gap: 45px;\n            padding: 30px 0;\n            \n        }\n        .play-again-button, .reset-score {\n            width: 100%;\n            min-width: 285px;\n        }\n        .disable {\n            display: none;\n        }\n        .enable {\n            display: flex;\n            justify-content: center;\n        }\n    ";const l=n.querySelector(".sign-result-win"),d=n.querySelector(".sign-result-tie"),p=n.querySelector(".sign-result-lose"),u=i.getState().currentGame.currentResult;return"ganaste"==u?(l.classList.add("enable"),n.style.backgroundColor="var(--background-win-style)"):"perdiste"==u?(p.classList.add("enable"),n.style.backgroundColor="var(--background-lose-style)"):(d.classList.add("enable"),n.style.backgroundColor="var(--background-tie-style)"),n.querySelector(".play-again-button").addEventListener("click",(()=>{e.goTo("/play")})),n.querySelector(".reset-score").addEventListener("click",(()=>{i.restartScore(),localStorage.removeItem("saved-state"),e.goTo("/welcome")})),n.appendChild(t),n}}],o="/dwf-m5-desafio-final";function c(){return location.host.includes("github.io")}!function(e){function n(e){const n=c()?o+e:e;history.pushState({},"",e),t(n)}function t(t){const a=c()?t.replace(o,""):t;for(const t of s)if(t.path.test(a)){const a=t.component({goTo:n});e.firstChild&&e.firstChild.remove(),e.appendChild(a)}}"/"==location.pathname||location.host.includes("github.io")?n("/welcome"):t(location.pathname),window.onpopstate=()=>{t(location.pathname)}}(document.querySelector(".root"));
//# sourceMappingURL=index.0bcb6571.js.map
