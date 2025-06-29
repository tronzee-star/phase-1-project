const API_URL = "http://localhost:3000/seasons";

const seasonSelect = document.getElementById("season-select");
const playersDisplay = document.getElementById("players-display");
const addPlayerForm = document.getElementById("add-player-form");

// Populate season dropdown dynamically from JSON
function loadSeasonOptions() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((seasons) => {
      seasonSelect.innerHTML = "";
      seasons.forEach((season) => {
        const option = document.createElement("option");
        option.value = season.id;
        option.textContent = season.year;
        seasonSelect.appendChild(option);
      });

      // After loading seasons, load players for the first one
      if (seasons.length > 0) {
        fetchAndDisplayPlayers(seasons[0].id);
      }
    })
    .catch((error) => console.error("Error loading seasons:", error));
}

// Fetch and display players for a given season
function fetchAndDisplayPlayers(seasonId) {
  fetch(`${API_URL}/${seasonId}`)
    .then((response) => response.json())
    .then((season) => {
      displayPlayers(season.players);
    })
    .catch((error) => console.error("Error fetching players:", error));
}

// Render players on the page (with clearing and MVP highlighting)
function displayPlayers(players) {
  playersDisplay.innerHTML = ""; // ✅ Clear previous players each time!

  players.forEach((player) => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    // Highlight MVPs
    if (player.isMVP) {
      card.classList.add("mvp");
    }

    card.innerHTML = `
      <img src="${player.photo}" alt="${player.name}">
      <div>
          <h3>${player.name}</h3>
          <p>Shirt Number: ${player.shirtNumber}</p>
          <p>Goals: ${player.goals}</p>
          <p>Assists: ${player.assists}</p>
          <p>Trophies: ${player.trophies}</p>
          ${player.isMVP ? "<p><strong>MVP</strong></p>" : ""}
      </div>
    `;
    playersDisplay.appendChild(card);
  });
}

// When season changes in dropdown
seasonSelect.addEventListener("change", () => {
  const selectedSeasonId = seasonSelect.value;
  fetchAndDisplayPlayers(selectedSeasonId);
});

// Handle Add Player form
addPlayerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedSeasonId = seasonSelect.value;

  const newPlayer = {
    id: Date.now(), // Quick unique ID
    name: document.getElementById("name").value,
    shirtNumber: parseInt(document.getElementById("shirtNumber").value),
    goals: parseInt(document.getElementById("goals").value),
    assists: parseInt(document.getElementById("assists").value),
    trophies: parseInt(document.getElementById("trophies").value),
    photo: document.getElementById("photo").value,
    isMVP: document.getElementById("mvp").checked,
  };

  // Get current season
  fetch(`${API_URL}/${selectedSeasonId}`)
    .then((response) => response.json())
    .then((season) => {
      season.players.push(newPlayer);

      // Update season with new player
      return fetch(`${API_URL}/${selectedSeasonId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(season),
      });
    })
    .then(() => {
      fetchAndDisplayPlayers(selectedSeasonId);
      addPlayerForm.reset();
    })
    .catch((error) => console.error("Error adding player:", error));
});

// Initial load
loadSeasonOptions();
