// This native web component fetches data from the Codewars API and renders it as a badge
// Here is some information about web component https://developer.mozilla.org/en-US/docs/Web/Web_Components
// Here is the link to the Codewars API Docs: https://dev.codewars.com/#get-user

function extractCodeWarsAPI() {
  return fetch("https://www.codewars.com/api/v1/users/karam-ali").then(
    (res) => {
      if (!res.ok) {
        return "Error";
      }
      return res.json();
    }
  );
}

const cardLayout = document.querySelector(".card_layout");

function creatingElements(tag, classList, textContent) {
  const creatingElement = document.createElement(tag);
  if (classList) {
    creatingElement.classList.add(classList);
  }
  if (textContent) {
    creatingElement.textContent = textContent;
  }
  return creatingElement;
}

function renderUserData(data) {
  const rankAndHonor = creatingElements("div", "rank__honor");
  const rank = creatingElements("h1", "", `Rank: ${data.ranks.overall.name}`);
  const honor = creatingElements("h1", "", `Honor: ${data.honor}`);

  rankAndHonor.appendChild(rank);
  rankAndHonor.appendChild(honor);

  cardLayout.appendChild(rankAndHonor);
}

function renderMainInfo(data) {
  const mainCardInfo = creatingElements("div", "main__details");
  const username = creatingElements("h1", "", `Username: ${data.username}`);
  const userID = creatingElements("h1", "", `User ID: ${data.id}`);
  const languages = creatingElements("h1", "", "Languages: JavaScript");
  const score = creatingElements(
    "h1",
    "",
    `Score: ${data.ranks.overall.score}`
  );
  const totalCompleted = creatingElements(
    "h1",
    "",
    `Total Completed: ${data.codeChallenges.totalCompleted}`
  );

  mainCardInfo.appendChild(username);
  mainCardInfo.appendChild(userID);
  mainCardInfo.appendChild(languages);
  mainCardInfo.appendChild(score);
  mainCardInfo.appendChild(totalCompleted);

  cardLayout.appendChild(mainCardInfo);
}

function renderCardLabel() {
  const cardTitle = creatingElements("div", "comp__title", "CodeWars Tracker");
  cardLayout.insertAdjacentElement("beforeend", cardTitle);
}

function render() {
  extractCodeWarsAPI()
    .then((data) => {
      renderUserData(data);
      renderMainInfo(data);
    })
    .then(() => renderCardLabel());
}

window.onload = render;

