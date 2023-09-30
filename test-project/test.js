fetch("https://api.tvmaze.com/shows/82/episodes")
  .then(response => {if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw new Error(
        `Encountered something unexpected: ${response.status} ${response.statusText}`
      );
    }
  })
  .then((data) => {
    
  })
  .catch((error) => console.log(error));

  function makePageForEpisodes(episodeList) {
    const main = document.getElementById("main");
     //add search bar
const searchBar = document.createElement("input");
rootElem.appendChild(searchBar);
  // display number of episodes
  const displayEp = document.createElement("p");
  rootElem.appendChild(displayEp);
  displayEp.innerText = "test-text" + "73 episodes";
  }