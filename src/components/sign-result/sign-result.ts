customElements.define(
  "sign-result",
  class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render(){
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const result = this.getAttribute("result");
      const style = document.createElement("style");
      const image = document.createElement("img");
      
      style.innerHTML = `
      .win, .lose, .tie {
        text-align: center;
      }
      `
      
      div.className = result;
      
      if (result == "win") {
        image.src = require("url:../../images/result-won.png");
      } else if (result == "lose") {
        image.src = require("url:../../images/result-lost.png");
      } else if (result == "tie") {
        image.src = require("url:../../images/result-tie.png");
      }

      div.appendChild(image);
      shadow.appendChild(div);
      shadow.appendChild(style);
    };
  }
);