// This native web component fetches data from the Codewars API and renders it as a badge
// Here is some information about web component https://developer.mozilla.org/en-US/docs/Web/Web_Components
// Here is the link to the Codewars API Docs: https://dev.codewars.com/#get-user

class CodeWarsBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userName = "Mpanasetckiy";
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
           font: 600 100%/1 system-ui, sans-serif;
        }
        data { 
            color: var(--rank);
            border: 3px solid; 
            padding: .25em .5em;
        }  
        p {
          color: #fff;
        }
        .badge {
          display: flex;
          column-gap: 1rem;
          align-items: center;
        }
      </style>
      <div class="badge">
      <data value="${this.userData.ranks.overall.score}">
      ${this.userData.ranks.overall.name}
      </data>
      <p>${this.userData.name}</p>
      <p>${this.userData.honor}</p>
      </div>
      `;
  }
}

class CodeWarsStats extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userName = "Mpanasetckiy";
    this.userData = {};
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

  render () {
    this.shadowRoot.innerHTML = `
    <style>
      p {
        color: #fff;
      }
    </style>
    <div>
    <p>Clan: ${this.userData.clan}</p>
    <p>Total Completed Kata: ${this.userData.codeChallenges.totalCompleted}</p>
    </div>`;
  }
}

customElements.define("codewars-badge", CodeWarsBadge);
customElements.define("codewars-stats", CodeWarsStats);
