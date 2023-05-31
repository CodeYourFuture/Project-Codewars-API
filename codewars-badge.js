// This native web component fetches data from the Codewars API and renders it as a badge
// Here is some information about web component https://developer.mozilla.org/en-US/docs/Web/Web_Components
// Here is the link to the Codewars API Docs: https://dev.codewars.com/#get-user

class CodeWarsBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userName = "Junitalama";
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
      `https://www.codewars.com/api/v1/users/${this.Junitalama}`
    );
    const data = await response.json();
    this.userData = data; // set the userData property with the fetched data
  }

  async fetchUserDetails() {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/Junitalama`
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
           font: 600 100%/1 system-ui, sans-serif;
        }
        data { 
            color: var(--rank);
            border: 3px solid; 
            padding: .25em .5em;
        }      
      </style>
        <data value="${this.userData.ranks.overall.score}">
        ${this.userData.ranks.overall.name}</data>

        <user value="${this.userData.name}">
        ${this.userData.name}</user><br><br><br>

        <honor value ="${this.userData.honor}">
        Honor : ${this.userData.honor}</honor><br> <br>

        <clan value ="${this.userData.clan}"> 
        Clan:${this.userData.clan}</clan><br><br>
        
        <challenge value ="${this.userData.codeChallenges.totalCompleted}">
        Total completed kata : ${this.userData.codeChallenges.totalCompleted}`;
  }
}


customElements.define("codewars-badge", CodeWarsBadge);
