// This native web component fetches data from the Codewars API and renders it as a badge
// Here is some information about web component https://developer.mozilla.org/en-US/docs/Web/Web_Components
// Here is the link to the Codewars API Docs: https://dev.codewars.com/#get-user

class CodeWarsBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userName = "Seyyednavid";
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
    console.log(data);
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
        h2,h3{
          color:white;
          background-color: black;
          padding: 0.5rem;
          text-align:center;
        }     
      </style>
        <data value="${this.userData.ranks.overall.score}">
        ${this.userData.ranks.overall.name}
        </data>
        <h2>FullName : ${this.userData.name}</h2>
        <h3>UserName : ${this.userData.username}</h3>
        <h3>Honor : ${this.userData.honor}</h3>
        <h3>Clan : ${
          this.userData.clan == "" ? "there is no clan" : this.userData.clan
        }</h3>
        <h3>ID : ${this.userData.id}</h3>
        <h3>Total Completed : ${
          this.userData.codeChallenges.totalCompleted
        }</h3>
        `;
  }
}

customElements.define("codewars-badge", CodeWarsBadge);