// Show tournaments
if (document.getElementById("tournament-list")) {
  const list = document.getElementById("tournament-list");
  const stored = JSON.parse(localStorage.getItem("tournaments")) || [];
  stored.forEach(t => {
    list.innerHTML += `
      <div class="card">
        <h2>${t.title}</h2>
        <p>Prize: ${t.prize}</p>
        <p>Date: ${t.date}</p>
        <a href="join.html" class="btn small">Join</a>
      </div>`;
  });
}

// Admin login + panel logic
function verify() {
  const pass = document.getElementById("admin-pass").value;
  if (pass === "admin123") {
    document.getElementById("admin-panel").classList.remove("hidden");
  } else {
    alert("Wrong password.");
  }
}

function addTournament() {
  const title = document.getElementById("title").value;
  const prize = document.getElementById("prize").value;
  const date = document.getElementById("date").value;
  const data = { title, prize, date };

  let list = JSON.parse(localStorage.getItem("tournaments")) || [];
  list.push(data);
  localStorage.setItem("tournaments", JSON.stringify(list));
  alert("Tournament added!");
  location.reload();
}
