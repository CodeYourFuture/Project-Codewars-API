class CodeWarsBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userName = "fhkahin";
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
    this.userData = data; 
    return data;
  }

  render() {
    this.shadowRoot.innerHTML = `
    <data>
      <table>
        <tr>
          <td>Overall Rank</td>
          <td>${this.userData.ranks.overall.name}</td>
          <td>${this.userData.ranks.overall.score}</td>
        </tr>
        <tr>
          <td>JavaScript Rank</td>
          <td>${this.userData.ranks.languages.javascript.name}</td>
          <td>${this.userData.ranks.languages.javascript.score}</td>
        </tr>
        <tr>
          <td>Total Challenges Completed</td>
          <td colspan="2">${this.userData.codeChallenges.totalCompleted}</td>
        </tr>
      </table>
    </data>`;
  }
}

customElements.define("codewars-badge", CodeWarsBadge);
