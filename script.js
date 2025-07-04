document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-btn");
  const usernameInput = document.getElementById("user-input");
  const statsContainer = document.querySelector(".stats-container");
  const easyProgressCircle = document.querySelector(".easy-progress");
  const mediumProgressCircle = document.querySelector(".medium-progress");
  const hardProgressCricle = document.querySelector(".hard-progress");
  const easyLabel = document.getElementById("easy-label");
  const mediumLabel = document.getElementById("medium-label");
  const hardLabel = document.getElementById("hard-label");
  const cardsStatsContainer = document.querySelector(".stats-cards");

  function validateUsername(username) {
    if (username.trim() === "") {
      alert("Username should not be empty");
      return false;
    }
    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const match = regex.test(username);
    match || alert("Invalid username");
    return match;
  }

  async function fetchUserDetails(username) {
    const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
    try {
      searchButton.textContent = "Searching...";
      searchButton.disabled = true;
      statsContainer.style.setProperty("display", "none");
      const response = await fetch(url);
      if (response.status !== 200) {
        throw new Error("Unable to fetch the user's details");
      }
      const data = await response.json();
      if (data["status"] !== "success") {
        throw new Error("User does not exist");
      }
      console.log("logging data: ", data);

      displayUserData(data);
    } catch (error) {
      statsContainer.innerHTML = "<p>No data found</p>";
      console.log("Error: ", error.message);
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;
      statsContainer.style.setProperty("display", "");
    }
  }

  function updateProgress(solved, total, label, circle) {
    const progressDegree = (solved / total) * 100;
    circle.style.setProperty("--progress-degree", `${progressDegree}%`);
    label.textContent = `${solved}/${total}`;
  }

  function displayUserData(data) {
    const totalEasy = data["totalEasy"];
    const totalMedium = data["totalMedium"];
    const totalHard = data["totalHard"];
    const solvedEasy = data["easySolved"];
    const solvedMedium = data["mediumSolved"];
    const solvedHard = data["hardSolved"];

    updateProgress(solvedEasy, totalEasy, easyLabel, easyProgressCircle);
    updateProgress(
      solvedMedium,
      totalMedium,
      mediumLabel,
      mediumProgressCircle
    );
    updateProgress(solvedHard, totalHard, hardLabel, hardProgressCricle);

    const cardsData = [
      { label: "Acceptance Rate", value: data["acceptanceRate"] },
      { label: "Ranking #", value: data["ranking"] },
      { label: "Contribution Points", value: data["contributionPoints"] },
      { label: "Reputation", value: data["reputation"] },
    ];

    console.log(cardsData);

    cardsStatsContainer.innerHTML = cardsData
      .map((data) => {
        return `
        <div class="card">
          <h3>${data.label}</h3>
          <p>${data.value}</p>
        </div>
      `;
      })
      .join("");
  }

  searchButton.addEventListener("click", function () {
    const username = usernameInput.value;
    const isValid = validateUsername(username);
    if (isValid) {
      fetchUserDetails(username);
    }
  });
});
