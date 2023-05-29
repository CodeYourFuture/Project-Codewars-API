// This native web component fetches data from the Codewars API and renders it as a badge
// Here is some information about web component https://developer.mozilla.org/en-US/docs/Web/Web_Components
// Here is the link to the Codewars API Docs: https://dev.codewars.com/#get-user

class CodeWarsBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userName = "ahmedsaif2002";
    this.userData = [];
    this.challengeCategories = [];
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
  connectedCallback() {
    this.fetchUserDetails()
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

  async fetchUserDetails() {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/ahmedsaif2002`
    );
    const data = await response.json();
    this.userData = data;
  }

  async fetchChallengeCategories() {
    const response = await fetch(`https://www.codewars.com/api/v1/categories`);
    const data = await response.json();
    this.challengeCategories = data;
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
        :host {
           --rank: ${this.userData.ranks.overall.color};
           --completed: ${this.userData.codeChallenges.totalCompleted};
           font: 600 100%/1 system-ui, sans-serif;
           background-color: #f5f5f5;
           padding: 10px;
           display: inline-block;
        }

         h2 {
          font-size: 16px;
          font-weight: bold;
          margin-top: 10px;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        li {
          margin-bottom: 5px;
        }
        data { 
           color: var(--rank);
           border: 3px solid;
           padding: 0.25em 0.5em;
           display: inline-block;
        }      
      </style>
        <data value="${this.userData.ranks.overall.score}">
        ${this.userData.ranks.overall.name}
        </data>`;
        
  }
}


customElements.define("codewars-badge", CodeWarsBadge);
