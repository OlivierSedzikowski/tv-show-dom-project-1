//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes); // cal the function makePageForEpisodes
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  const container = document.createElement("div");
  rootElem.appendChild(container);
  container.setAttribute("class", "container");
  // card function
  function cardFunction(value, index, array){
  const card = document.createElement("div");
  const epName = document.createElement("h3");
  const mediumImg = document.createElement("img");
  const summary = document.createElement("p");
  container.appendChild(card);
  card.appendChild(epName);
  card.appendChild(mediumImg);
  card.appendChild(summary);
  card.setAttribute("class", "card");
  mediumImg.setAttribute("class", "img");
  epName.textContent = value.name + " - " + "S0" + value.season + "E" + value.number.toString().padStart(2, '0');
  mediumImg.src = value.image.medium
  summary.innerHTML = value.summary;
}
  episodeList.forEach(cardFunction);
}

window.onload = setup;
