// Replace these with your own image URLs and descriptions!
const photos = [
  {
    url: "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?auto=format&fit=crop&w=800&q=80",
    title: "Dreamy Forest",
    desc: "A misty forest landscape at sunrise."
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "City Lights",
    desc: "Urban cityscape with glowing lights at dusk."
  },
  {
    url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    title: "Waterfall",
    desc: "A powerful waterfall among green cliffs."
  }
  // Add more photos here...
];

function renderGallery() {
  const grid = document.getElementById('photoGrid');
  grid.innerHTML = '';
  photos.forEach((photo, idx) => {
    const card = document.createElement('div');
    card.className = "glass-container glass-container--rounded glass-container--small";
    card.style.cursor = "pointer";
    card.innerHTML = `
      <div class="glass-filter"></div>
      <div class="glass-overlay"></div>
      <div class="glass-specular"></div>
      <div class="glass-content glass-content--alone" style="flex-direction:column;">
        <img src="${photo.url}" alt="${photo.title}" style="width:100px;height:100px;border-radius:1rem;object-fit:cover;box-shadow:0 0 10px #fff4;">
        <h4 style="margin:0.5rem 0 0;color:#fb4268;">${photo.title}</h4>
      </div>
    `;
    card.onclick = () => openModal(idx);
    grid.appendChild(card);
  });
}

function openModal(idx) {
  const photo = photos[idx];
  document.getElementById('modalImg').src = photo.url;
  document.getElementById('modalTitle').textContent = photo.title;
  document.getElementById('modalDesc').textContent = photo.desc;
  document.getElementById('photoModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('photoModal').style.display = 'none';
}

// Init gallery on page load
window.onload = renderGallery;
