
class CodeWarsBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userName = "CodeYourFuture";
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
        display:flex;
        justify-content:space-between;
        }   
        .container{
          display:flex;
          flex-direction:column;
          gap:1rem;
          width:60%;
          background:black;
          color:white;
          padding:2rem;
          border:2px solid black;
        }  
        .label{
          text-align:center;
          border: 3px solid white; 
          padding: .25em .5em;
          width:15rem;
        } 
        .rank{
          color:var(--rank);
          border: 3px solid var(--rank); 
          padding: .25em .5em;
          width:5rem;
        }
      </style>
      <div class="container">
      <data class="rank" value="${this.userData.ranks.overall.score}">
        ${this.userData.ranks.overall.name}
        </data>
        <data value="${this.userData.name}">Name:
        <span class="label">${this.userData.name}</span>
        </data>
        <data value="${this.userData.honor}"></span>
        Honor:
       <span class="label" >${this.userData.honor}</span>
        </data>
        <data value="${this.userData.clan}">
        Clan :
        <span class="label">${this.userData.clan}</span>
        </data>
        <data value="${this.userData.clan}">
        LeaderShip Board Position :
        <span class="label">${this.userData.leaderboardPosition}</span>
        </data>
        <data value="${this.userData.ranks.overall.rank}">
        Rank: 
        <span class="label">${this.userData.ranks.overall.rank}</span>
        </data>
        <data value="${this.userData.ranks.overall.score}">
        Score: 
        <span class="label">${this.userData.ranks.overall.score}</span>
        </data>
        <data value="${this.userData.ranks.languages.javascript.score}">
        JavaScript Score: 
        <span class="label">${this.userData.ranks.languages.javascript.score}</span>
        </data>
        <data value="${Object.keys(this.userData.ranks.languages)}">
        Languages: 
        <span class="label">${Object.keys(this.userData.ranks.languages)}</span>
        </data>
        </div>
        `
      ;
  }
}

customElements.define("codewars-badge", CodeWarsBadge);


