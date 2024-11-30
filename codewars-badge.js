// Existing component to display user's rank and honor points
class CodeWarsBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userName = "CodeYourFuture";
    this.userData = {};
  }

  connectedCallback() {
    this.fetchUserData()
      .then(() => {
        this.render();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async fetchUserData() {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${this.userName}`
    );
    this.userData = await response.json();
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
      </style>
      <data value="${this.userData.ranks.overall.score}">
        ${this.userData.ranks.overall.name}
      </data>
      <data value="${this.userData.honor}">
        Honor Points: ${this.userData.honor}
      </data>`;
  }
}

customElements.define("codewars-badge", CodeWarsBadge);

// New component to display user's username
class CodeWarsName extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userName = "CodeYourFuture"; // Set default username
    this.userData = {};
  }

  connectedCallback() {
    this.fetchUserData()
      .then(() => {
        this.render();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async fetchUserData() {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${this.userName}`
    );
    this.userData = await response.json();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          font: 600 100%/1 system-ui, sans-serif;
        }
        span {
          color: #333;
        }
      </style>
      <span>${this.userData.username}</span>`;
  }
}

customElements.define("codewars-name", CodeWarsName);
