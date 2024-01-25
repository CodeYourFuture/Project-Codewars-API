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

/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
let kataColor, kataValue, kataContent;
const template = document.createElement("template");
template.innerHTML = `
<div class='container'>
  <data id='dataTag'  value=${kataValue}></data>

  <div class='user-card'>
  <h3></h3>
  <p id='user-name'></p>
  <p id='name-of-user'></p>
  <p id='clan'></p>
  <ul id='skills'></ul>
  <div>
    <p id='overall-rank'></p>
    <p id='languages'></p>
  </div>
  </div>
  </div>

<style>
  :host{
    --rank: yellow;
    font: 600 100%/1 system-ui, sans-serif;
  }
  .container{
    background-color:#5c5a5a;;
    color:white;
    margin:2rem auto 2rem auto;
    width:60%;
    height:fit-content;
    padding:1rem;
  }
  .user-card{
    background-color:#1f1f2e;
    margin-top:1rem;
    padding:1rem;
  }
  h3{
    margin:0;
    padding:0;
    
  }
  ul{
    margin:0;
    padding:0;
  }
  li{
    margin-bottom:0.3rem;
  }
  span{
    margin-bottom:.25rem;
  }
  #dataTag{
    color:var(--rank);
    border: 3px solid ; 
    padding: .25em .5em;
    margin-bottom:1rem;
    
    
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
      .then(() => {
        kataColor = this.userData.ranks.overall.color;
        kataContent = this.userData.ranks.overall.name;
        kataValue = this.userData.ranks.overall.score;
        this.render();
      })
      .then(() => this.userData)
      .catch((error) => console.log(error, "<---------- error happened"));

    const fontAwesome = document.querySelector("#icon");
    fontAwesome.addEventListener("click", () => this.getUserName());
  }

  async fetching() {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${this.userName}`
    );

    const data = await response.json();
    this.userData = data;
  }

  getUserName() {
    const value = document.querySelector("input").value;
    if (value != "") {
      this.userName = value;
      console.log(this.userName, "<---------Username");
    } else {
      this.userName = "bkarimii";
    }
    console.log(123);
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
    const skillsList = this.shadowRoot.querySelector("#skills");
    const skillArray = this.userData.skills;
    if (skillArray.length != 0) {
      skillArray.forEach((skill) => {
        const li = document.createElement("li"); // Use document.createElement
        li.textContent = skill;
        skillsList.appendChild(li);
      });
    } else {
      skillsList.textContent = "Skills: No Skill To Display!";
    }

    this.shadowRoot.querySelector(
      "#clan"
    ).textContent = `Clan: ${this.userData.clan}`;
    this.shadowRoot.querySelector(
      "#overall-rank"
    ).textContent = `Overall Score: ${this.userData.ranks.overall.score}`;

    const languages = this.userData.ranks.languages;

    for (const key in languages) {
      const span = document.createElement("span");
      span.innerText = `${key}: ${languages[key].score}\n `;
      this.shadowRoot.querySelector("#languages").appendChild(span);
    }

    const dataTag = this.shadowRoot.querySelector("#dataTag");
    dataTag.textContent = kataContent;

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
