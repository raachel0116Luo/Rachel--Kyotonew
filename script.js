// ============================
// Create Map
// ============================

var map = L.map('map').setView([35.0116, 135.7681], 12);

// ============================
// Tile Layer
// ============================

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// ============================
// Emoji Icon Function
// ============================

function createEmojiIcon(emoji) {
  return L.divIcon({
    html: `<div class="emoji-icon">${emoji}</div>`,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });
}

// ============================
// Kyoto UNESCO Sites
// ============================

var sites = [

{
  name: "Kiyomizu-dera",
  coords: [34.9948, 135.7850],
  emoji: "⛩️",
  description: "Famous wooden temple with panoramic Kyoto views.",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kiyomizu-dera_in_Kyoto-r.jpg",
  link: "https://www.kiyomizudera.or.jp/en/"
},

{
  name: "Kinkaku-ji",
  coords: [35.0394, 135.7292],
  emoji: "✨",
  description: "The Golden Pavilion covered in gold leaf.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Kinkaku-ji_the_Golden_Pavilion_in_Kyoto_overlooking_the_lake.jpg",
  link: "https://www.shokoku-ji.jp/kinkakuji/"
},

{
  name: "Ginkaku-ji",
  coords: [35.0272, 135.7982],
  emoji: "🌸",
  description: "Elegant Zen temple known as the Silver Pavilion.",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Ginkakuji_Kyoto.jpg",
  link: "https://www.shokoku-ji.jp/ginkakuji/"
},

{
  name: "Ryoan-ji",
  coords: [35.0345, 135.7182],
  emoji: "🪨",
  description: "Famous Zen rock garden temple.",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Ryoanji_Kyoto.jpg",
  link: "https://www.ryoanji.jp/"
},

{
  name: "Nijo Castle",
  coords: [35.0142, 135.7482],
  emoji: "🏯",
  description: "Historic castle of the Tokugawa shogunate.",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Ninomaru_Palace_Nijo_Castle_Kyoto.jpg",
  link: "https://nijo-jocastle.city.kyoto.lg.jp/"
},

{
  name: "Tenryu-ji",
  coords: [35.0159, 135.6736],
  emoji: "🍃",
  description: "UNESCO Zen temple in Arashiyama.",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Tenryuji_Kyoto.jpg",
  link: "https://www.tenryuji.com/"
},

{
  name: "To-ji",
  coords: [34.9808, 135.7470],
  emoji: "🗼",
  description: "Temple with Kyoto’s iconic five-story pagoda.",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Toji-temple.jpg",
  link: "https://toji.or.jp/"
},

{
  name: "Byodo-in",
  coords: [34.8890, 135.8074],
  emoji: "🪽",
  description: "Phoenix Hall featured on the 10 yen coin.",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Byodo-in_Uji_Kyoto_Japan.jpg",
  link: "https://www.byodoin.or.jp/"
},

{
  name: "Ujigami Shrine",
  coords: [34.8904, 135.8091],
  emoji: "🦊",
  description: "One of Japan’s oldest surviving shrines.",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Ujigami_Shrine.jpg",
  link: "https://www.ujigamijinja.com/"
},

{
  name: "Daigo-ji",
  coords: [34.9517, 135.8195],
  emoji: "🌺",
  description: "Temple famous for cherry blossoms.",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Daigoji_Kyoto.jpg",
  link: "https://www.daigoji.or.jp/"
},

{
  name: "Ninna-ji",
  coords: [35.0311, 135.7138],
  emoji: "🌿",
  description: "Historic temple with Omuro cherry blossoms.",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Ninna-ji_Kyoto.jpg",
  link: "https://ninnaji.jp/"
},

{
  name: "Kozan-ji",
  coords: [35.0615, 135.6717],
  emoji: "🍂",
  description: "Mountain temple famous for autumn leaves.",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Kozanji_Kyoto.jpg",
  link: "https://kosanji.com/"
},

{
  name: "Saiho-ji",
  coords: [34.9918, 135.6668],
  emoji: "🌱",
  description: "The famous moss temple.",
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Saihoji_Kokedera.jpg",
  link: "https://saihoji-kokedera.com/"
},

{
  name: "Shimogamo Shrine",
  coords: [35.0390, 135.7721],
  emoji: "🍁",
  description: "Ancient shrine surrounded by forest.",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Shimogamo-jinja_Kyoto.jpg",
  link: "https://www.shimogamo-jinja.or.jp/"
},

{
  name: "Kamigamo Shrine",
  coords: [35.0603, 135.7528],
  emoji: "⛩️",
  description: "Historic shrine in northern Kyoto.",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kamigamo_Shrine.jpg",
  link: "https://www.kamigamojinja.jp/"
},

{
  name: "Enryaku-ji",
  coords: [35.0704, 135.8405],
  emoji: "⛰️",
  description: "Sacred temple complex on Mount Hiei.",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Enryakuji_Konpon_Chudo.jpg",
  link: "https://www.hieizan.or.jp/"
},

{
  name: "Nishi Hongan-ji",
  coords: [34.9913, 135.7517],
  emoji: "🏮",
  description: "Important Buddhist temple in central Kyoto.",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Nishi_Honganji_Kyoto.jpg",
  link: "https://www.hongwanji.kyoto/"
}

];

// ============================
// Generate Markers
// ============================

sites.forEach(site => {

  L.marker(site.coords, {
    icon: createEmojiIcon(site.emoji)
  })
  .addTo(map)
  .bindPopup(`
    <div class="popup-card">

      <img src="${site.image}" class="popup-image">

      <h2>${site.name}</h2>

      <p>${site.description}</p>

      <a href="${site.link}" target="_blank">
        Official Website
      </a>

    </div>
  `);

});

// ============================
// Sakura Falling Animation
// ============================

function createLeaf() {

  const leaf = document.createElement("div");

  leaf.innerHTML = "🌸";

  leaf.classList.add("sakura");

  leaf.style.left = Math.random() * window.innerWidth + "px";

  leaf.style.animationDuration =
    5 + Math.random() * 5 + "s";

  leaf.style.fontSize =
    16 + Math.random() * 20 + "px";

  document.body.appendChild(leaf);

  setTimeout(() => {
    leaf.remove();
  }, 10000);
}

setInterval(createLeaf, 800);