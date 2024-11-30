// This native web component fetches data from the Codewars API and renders it as a badge
// Here is some information about web component https://developer.mozilla.org/en-US/docs/Web/Web_Components
// Here is the link to the Codewars API Docs: https://dev.codewars.com/#get-user

class CodeWarsBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userName = "PERicci";
    this.userData = [];
  }

  connectedCallback() {
    this.fetchActivity()
      .then(() => {
        this.render();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // fetch the data from the Codewars API
  async fetchActivity() {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${this.userName}`
    );
    const data = await response.json();
    this.userData = data; // set the userData property with the fetched data
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --rank: ${this.userData.ranks.overall.color};
          --font-sans-serif: 'Lato', sans-serif;
        }
        data { 
          color: var(--rank);
          border: 3px solid; 
          padding: .25em .5em;
        }
        .container-horizontal {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: flex-start;
          gap: 1em;
          margin: 2rem 0 1rem;
        }

        .title {
          display: inline-block;
          font-family: var(--font-sans-serif);
          font-size: 2rem;
          margin: 0;
        }      
      </style>
      <div class="container-horizontal">
        <data value="${this.userData.ranks.overall.score}">
        ${this.userData.ranks.overall.name}
        </data>
        <h1 class="title">${this.userData.username}</h1>
      </div>`;
  }
}

customElements.define("codewars-badge", CodeWarsBadge);
