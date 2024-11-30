// This native web component fetches data from the Codewars API and renders it as a badge
// Here is some information about web component https://developer.mozilla.org/en-US/docs/Web/Web_Components
// Here is the link to the Codewars API Docs: https://dev.codewars.com/#get-user

class CodeWarsBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userName = "BakhatBegum";
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
<data>
<table>
<tr>
  <td>Rank: </td>
    <td>${this.userData.ranks.overall.name}</td>
    <td>${this.userData.ranks.overall.score}</td>
    <td>${this.userData.ranks.overall.color}</td>
</tr> 

<tr>
  <td>Honor: </td>
    <td>${this.userData.honor}</td>
</tr>

<tr>
    <td>JavaScript Rank: </td>
    <td>${this.userData.ranks.languages.javascript.name}</td>
    <td>${this.userData.ranks.languages.javascript.score}</td>
    <td>${this.userData.ranks.languages.javascript.color}</td>
</tr>

<tr>
      <td>Total Completed Kata: </td>
      <td>${this.userData.codeChallenges.totalCompleted}</td>
</tr>

</table>
</data>`
  }
}
customElements.define("codewars-badge", CodeWarsBadge);

