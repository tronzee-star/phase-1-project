# ⚽ Football Seasons Player Stats App

### 👤 Author: Your Name Here

---

## 📖 Project Description

This is a **Single Page Application (SPA)** built using **HTML**, **CSS**, and **JavaScript** that allows users to:

- View football players' stats across four seasons (2021 to 2024).
- Highlight each season’s **MVP (Most Valuable Player)**.
- Filter and display players dynamically by season.
- Add new players (with name, shirt number, goals, assists, trophies, photo, and MVP status) into a specific season.
- Interact asynchronously with a local JSON API using **JSON Server**.
- Update the page dynamically without reloads.

All data is stored in a `db.json` file and served locally using JSON Server.

---

## 🚀 Live Site

[🔗 Click here to view the live site on GitHub Pages](https://tronzee-star.github.io/phase-1-projec

---

## 🛠️ Project Setup Instructions

### ✅ Requirements:

- **Node.js** installed on your machine.
- **JSON Server** installed globally.

You can install JSON Server globally by running:

```bash
npm install -g json-server
✅ Running JSON Server (Backend):
Place your db.json file in the root of your project folder.

Start the JSON Server by running:

bash
Copy
Edit
npx json-server --watch db.json
This will start your local API at:

bash
Copy
Edit
http://localhost:3000/seasons
✅ Running the Frontend:
Open the project folder in Visual Studio Code.

Make sure you have the Live Server extension installed.

Right-click on your index.html file and select
Open with Live Server
The app will open in your browser and communicate with the JSON Server running locally.

✅ Feattures Summary:
🎯 Season Dropdown: Dynamically populated season selection.

🎯 Player Display: Shows player cards for the selected season.

🎯 MVP Highlight: Visually marks the Most Valuable Player for each season.

🎯 Add Player Form: Users can add new players to a selected season (with fields like name, goals, assists, trophies, etc.).

🎯 Dynamic Rendering: Page updates dynamically using JavaScript fetch and DOM manipulation.

🎯 Array Methods Used: Includes JavaScript array iteration (like .forEach() and .map()).

🎯 At Least 3 Event Listeners: Dropdown change, form submission, and potentially click or input events.

✅ Technologies Used:
HTML

CSS3 (with styling, background images, and responsive layout)

JavaScript (ES6+)

JSON Server (for mock REST API backend)

✅ License
This project is licensed under the MIT License.

✅ Copyright
© 2025 Bonfas Ogaro Here. All Rights Reserved.

