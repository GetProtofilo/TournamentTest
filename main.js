fetch('data/tournaments.json')
  .then(res => res.json())
  .then(tournaments => {
    const list = document.getElementById('tournament-list');
    tournaments.forEach(t => {
      const div = document.createElement('div');
      div.className = "bg-gray-800 p-4 rounded shadow";
      div.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${t.title}</h3>
        <p>Date: ${t.date}</p>
        <p>Prize: ${t.prize}</p>
        <p class="text-sm mt-2">${t.details}</p>
        <a href='register.html' class='mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600'>Register</a>
      `;
      list.appendChild(div);
    });
  });