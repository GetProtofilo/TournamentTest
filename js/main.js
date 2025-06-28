fetch('data/tournaments.json')
  .then(res => res.json())
  .then(tournaments => {
    const list = document.getElementById('tournament-list');
    tournaments.forEach(t => {
      const div = document.createElement('div');
      div.className = "bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-orange-500/50";
      div.innerHTML = `
        <h3 class="text-2xl font-bold mb-2 text-orange-400">${t.title}</h3>
        <p class="mb-1"><strong>Date:</strong> ${t.date}</p>
        <p class="mb-1"><strong>Prize:</strong> ${t.prize}</p>
        <p class="text-sm mb-4 text-gray-300">${t.details}</p>
        <a href='register.html' class='glow-btn inline-block bg-orange-500 text-white px-4 py-2 rounded font-bold'>Register</a>
      `;
      list.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Failed to load tournaments:", err);
  });
