// This native web component fetches data from the Codewars API and renders it as a badge
// Here is some information about web component https://developer.mozilla.org/en-US/docs/Web/Web_Components
// Here is the link to the Codewars API Docs: https://dev.codewars.com/#get-user

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
            color: var(--rank);
            border: 3px solid; 
            padding: .25em .5em;
        }      
      </style>
        <data value="${this.userData.ranks.overall.score}">
        ${this.userData.ranks.overall.name}
        </data>`;
  }
}

customElements.define("codewars-badge", CodeWarsBadge);

const template = document.createElement("template");
template.innerHTML = `
<div class='user-card'>
<h3></h3>
<p id='user-name'></p>
<p id='name-of-user'></p>
<ul id='skills></ul>
<p id='clan'></p>
<p id='languages'></p>
</div>

<style>
.user-card{
  background-color:#1f1f2e;
  color:white;
  margin:2rem auto 2rem auto;
  width:60%
}
h3{
  margin:0;
  padding:0;
  
  
}
</style>
`;

class SelfCreated extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userName = "bkarimii";
    this.userData = [];
  }

  connectedCallback() {
    this.fetching()
      .then(() => this.render())
      .then(() => console.log("this is userData------->", this.userData))
      .then(console.log(this.userData.ranks), "<------------second console")
      .catch(error, console.log(error, "<---------- error happened"));
  }
  async fetching() {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${this.userName}`
    );

    const data = await response.json();
    this.userData = data;
  }

  render() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").textContent = "The User Profile:";
    this.shadowRoot.querySelector(
      "#user-name"
    ).textContent = `USER NAME: ${this.userData.username}`;
    this.shadowRoot.querySelector(
      "#name-of-user"
    ).textContent = `Name: ${this.userData.name}`;
    //`${this.userData.ranks.overall.color}`;
  }
}

window.customElements.define("self-created", SelfCreated);

const obj = {
  username: "some_user",
  name: "Some Person",
  honor: 544,
  clan: "some clan",
  leaderboardPosition: 134,
  skills: [
    "ruby",
    "c#",
    ".net",
    "javascript",
    "coffeescript",
    "nodejs",
    "rails",
  ],
  ranks: {
    overall: {
      rank: -3,
      name: "3 kyu",
      color: "blue",
      score: 2116,
    },
    languages: {
      javascript: {
        rank: -3,
        name: "3 kyu",
        color: "blue",
        score: 1819,
      },
      ruby: {
        rank: -4,
        name: "4 kyu",
        color: "blue",
        score: 1005,
      },
      coffeescript: {
        rank: -4,
        name: "4 kyu",
        color: "blue",
        score: 870,
      },
    },
  },
  codeChallenges: {
    totalAuthored: 3,
    totalCompleted: 230,
  },
};
