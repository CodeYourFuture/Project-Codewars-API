// This native web component fetches data from the Codewars API and renders it as a badge
// Here is some information about web component https://developer.mozilla.org/en-US/docs/Web/Web_Components
// Here is the link to the Codewars API Docs: https://dev.codewars.com/#get-user

class CodeWarsBadge extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    this.attachShadow({ mode: "open" });
    this.userName = "SalihaPopal";
    this.userData = [];
  }
//The actual updates are all handled by the life cycle callbacks, which are placed inside the class definition as methods. The connectedCallback() runs each time the element is added to the DOM 
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
      `https://www.codewars.com/api/v1/users/${this.SalihaPopal}`
    );
    const data = await response.json();
    this.userData = data; // set the userData property with the fetched data
  }

  async fetchUserDetails() {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/SalihaPopal`
    );
    const data = await response.json();
    this.userData = data;
  }

  async fetchCodeChallenges() {
    const response = await fetch(`https://www.codewars.com/api/v1/challenges`
    );
    const data = await response.json();
    this.codeChallenges = data; 
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
        user{
          line-height: 1.5;
        } 
        honor, clan, leaderboardPosition, skills, ranks, codeChallenges
        {
          background-color: rgba(0,0,0,0.05);
    padding: 3px;
    border-radius: 3px;
        }
        
      </style>
        <data value="${this.userData.ranks.overall.score}">
        ${this.userData.ranks.overall.name}
        </data>
        <user value="${this.userData.name}">
        ${this.userData.name}</user><hr>

        <honor value ="${this.userData.honor}">
        Honor : ${this.userData.honor}</honor><hr>

        <clan value ="${this.userData.clan}"> 
        Clan:${this.userData.clan}</clan><hr>

        <leaderboardPosition value ="${this.userData.clan}"> 
        LeaderboardPosition:${this.userData.leaderboardPosition}</leaderboardPosition><hr>

        <skills value ="${this.userData.skills}"> 
        Skills:${this.userData.skills}</skills><hr>

        <ranks value ="${this.userData.ranks}"> 
        Ranks:${this.userData.ranks}</ranks><hr>

        
        <challenge value ="${this.userData.codeChallenges.totalCompleted}">
        Total completed kata : ${this.userData.codeChallenges.totalCompleted}<hr>
        `
  }
}

customElements.define("codewars-badge", CodeWarsBadge);
