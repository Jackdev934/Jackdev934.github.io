// =========================
// Modal Setup
// =========================
const charModal = document.getElementById("charModal");
const charModalTitle = document.getElementById("char-modal-title");
const charModalText = document.getElementById("char-modal-text");
const charCloseBtn = charModal.querySelector(".close");
const charModalSlides = document.getElementById("char-modal-slides");
const charPrevBtn = charModal.querySelector(".prev");
const charNextBtn = charModal.querySelector(".next");

let charCurrentSlide = 0;
let charSlides = [];

// =========================
// Character Data
// =========================
const charInfo = {
  // 🔥 Firelink Shrine
  "Blacksmith Andre": {
    imgs: ["https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/andre.jpg"],
    text: "A trusted blacksmith at Firelink Shrine. Andre reforges, infuses, and repairs weapons, aiding the Ashen One throughout their journey."
  },
  "Fire Keeper": {
    imgs: ["https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/fire_keeper.jpg"],
    text: "The guardian of the bonfire. She levels up souls into strength and remains bound to the flame."
  },
  "Leonhard the Ringfinger": {
    imgs: ["https://darksouls.fandom.com/wiki/File:Leonhard_DSIII.jpg"],
    text: "An enigmatic knight who tempts the Ashen One into serving Rosaria. Encourages invasions and walks the path of darkness."
  },
  "Ludleth of Courland": {
    imgs: ["https://darksouls.wiki.fextralife.com/file/Dark-Souls-3/ludleth.jpg"],
    text: "A Lord of Cinder who willingly linked the flame. Frail in body but strong in will, he offers soul transposition."
  },
  "Picklepum the Crow": {
    imgs: ["https://i.redd.it/zf7q9z1h18w21.jpg"],
    text: "A mischievous crow that trades odd items through the Pickle-Pee, Pump-a-Rum exchange."
  },
  "Shrine Handmaid": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/1/14/Shrine_Handmaid.jpg"],
    text: "An elderly vendor of Firelink Shrine. She expands her wares when given ashes."
  },
  "Sirris of the Sunless Realms": {
    imgs: ["https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/sirris.jpg"],
    text: "A loyal knight who aids the Ashen One against dark spirits. She follows a tragic path of duty and loss."
  },
  "Yuria of Londor": {
    imgs: ["https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/yuria.jpg"],
    text: "A dark figure guiding the Ashen One to the Usurpation of Fire. Devoted to Londor's destiny."
  },

  // 🏰 High Wall
  "Greirat of the Undead Settlement": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/0/00/Greirat.jpg"],
    text: "A thief who scavenges goods for the Ashen One. His fate depends on the player's choices."
  },
  "Emma, High Priestess of Lothric Castle": {
    imgs: ["https://i.ytimg.com/vi/gbNYYjNwY-8/maxresdefault.jpg"],
    text: "A priestess of Lothric who gifts the Small Lothric Banner, granting passage to the Undead Settlement."
  },
  "Lion Knight Albert": {
    imgs: ["https://darksouls.fandom.com/wiki/File:Lion_Knight_Albert.jpg"],
    text: "A phantom knight who aids in the battle against Vordt of the Boreal Valley."
  },

  // 🟤 Undead Settlement
  "Yoel of Londor": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/4/4d/Yoel_of_Londor.jpg"],
    text: "A sorcerer of Londor who offers to draw out the Ashen One's true strength in exchange for hollowing."
  },
  "Cornyx of the Great Swamp": {
    imgs: ["https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/cornyx.jpg"],
    text: "A pyromancer from the Great Swamp. Teaches flame sorceries and aids in the arts of pyromancy."
  },
  "Siegward of Catarina": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/8/80/Siegward.jpg"],
    text: "A jovial knight of Catarina, known for his onion-shaped armor. Loyal and courageous, though a bit bumbling."
  },
  "Irina of Carim": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/0/08/Irina_of_Carim.jpg"],
    text: "A blind maiden who sells miracles. Her fate changes based on the player's choices of miracles taught."
  },
  "Eygon of Carim": {
    imgs: ["https://darksouls.wiki.fextralife.com/file/Dark-Souls-3/eygon.jpg"],
    text: "A knight sworn to protect Irina of Carim. Brutal in combat, loyal to his ward."
  },
  "Velka the Goddess of Sin": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/2/2f/Velka.jpg"],
    text: "A mysterious deity of sin and retribution. Associated with absolution and dark faith."
  },
  "Holy Knight Hodrick": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/f/f4/Holy_Knight_Hodrick.jpg"],
    text: "Leader of the Mound-makers covenant. Both ally and foe, embodying chaos."
  },
  "Giant of the Undead Settlement": {
    imgs: ["https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/giant_archer.jpg"],
    text: "A giant archer perched atop a tower, alternately friend and foe depending on the Ashen One’s actions."
  },

  // 🛣 Road of Sacrifices
  "Orbeck of Vinheim": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/d/df/Orbeck.jpg"],
    text: "A sorcerer of Vinheim. Trains the Ashen One in sorceries in exchange for scrolls."
  },
  "Anri of Astora": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/1/1e/Anri.jpg"],
    text: "A wandering knight with a mysterious fate. Can become an ally, summon, or part of the Usurpation path."
  },
  "Horace the Hushed": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/5/54/Horace.jpg"],
    text: "Silent knight and companion to Anri of Astora. Fiercely loyal, wielding a greatshield."
  },

  // ⛪ Cathedral of the Deep
  "Rosaria, Mother of Rebirth": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/b/bd/Rosaria.jpg"],
    text: "Leader of the Rosaria’s Fingers covenant. Grants rebirth and respec in exchange for Pale Tongues."
  },
  "Unbreakable Patches": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/6/61/Patches.jpg"],
    text: "A trickster who deceives the Ashen One but can become a vendor at Firelink Shrine."
  },
  "Slave Knight Gael": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/d/de/Slave_Knight_Gael.jpg"],
    text: "A hollow knight seeking the Dark Soul of Man. Becomes the final boss of the series."
  },
  "Longfinger Kirk": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/7/73/Longfinger_Kirk.jpg"],
    text: "An invader clad in spiked armor. Member of Rosaria’s Fingers."
  },

  // 🌲 Farron Keep
  "Hawkwood": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/f/f0/Hawkwood.jpg"],
    text: "A deserter of the Undead Legion. Offers guidance at Firelink Shrine, later duels the Ashen One."
  },
  "Old Wolf of Farron": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/6/67/Oldwolf.jpg"],
    text: "The slumbering wolf deity of Farron, head of the Watchdogs of Farron covenant."
  },
  "Yellowfinger Heysel": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/2/28/Yellowfinger.jpg"],
    text: "A finger of Rosaria who invades the player in the swamps of Farron Keep."
  },

  // 🔥 Smouldering Lake
  "Knight Slayer Tsorig": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/7/73/Tsorig.jpg"],
    text: "An invader wielding the Fume Ultra Greatsword. Merciless and powerful."
  },
  "Great Swamp Cuculus": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/1/15/Cuculus.jpg"],
    text: "A phantom pyromancer allied with the Great Swamp, summonable for Old Demon King."
  },

  // ❄️ Irithyll
  "Alva, Seeker of the Spurned": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/a/af/Alva.jpg"],
    text: "An invader knight found in Irithyll. Once sought a cure for Saint Serreta."
  },
  "Archdeacon McDonnell": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/2/27/McDonnell.jpg"],
    text: "Head of the Aldrich Faithful covenant. Grants ranks for defending Anor Londo."
  },
  "Creighton the Wanderer": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/f/f6/Creighton.jpg"],
    text: "A murderous outlaw found in Irithyll. Known from Dark Souls II."
  },
  "Londor Pale Shade": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/3/37/Pale_Shade.jpg"],
    text: "A mysterious assassin from Londor. Appears as invader or summon depending on quests."
  },

  // 🏰 Irithyll Dungeon
  "Karla": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/6/67/Karla.jpg"],
    text: "A witch imprisoned in Irithyll Dungeon. Teaches dark sorceries and pyromancies."
  },

  // 🌙 Anor Londo
  "Company Captain Yorshka": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/f/fc/Yorshka.jpg"],
    text: "Captain of the Darkmoon Knights. Resides atop Anor Londo's tower."
  },

  // 📚 Grand Archives
  "Black Hand Gotthard": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/5/5e/Gotthard.jpg"],
    text: "One of the three Black Hands of the king. Dual-wields Gotthard Twinswords."
  },
  "Black Hand Kamui": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/c/cf/Kamui.jpg"],
    text: "A Black Hand of Lothric. Found in the Grand Archives, wields Onikiri and Ubadachi."
  },
  "Daughter of Crystal Kriemhild": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/6/65/Kriemhild.jpg"],
    text: "A crystal sorceress hostile phantom found in the Grand Archives."
  },

  // 🎨 Painted World
  "Sister Friede": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/b/b4/Sister_Friede.jpg"],
    text: "The eldest daughter of the Sable Church. Antagonist of Ashes of Ariandel."
  },
  "Sir Vilhelm": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/b/b6/Vilhelm.jpg"],
    text: "A knight guarding Friede. Wields the Onyx Blade."
  },
  "Corvian Settler": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/3/35/Corvian.jpg"],
    text: "A frail Corvian who warns the Ashen One about Ariandel’s rot."
  },
  "Painting Woman": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/5/52/Young_Painting_Woman.jpg"],
    text: "A mysterious girl destined to paint a new world."
  },
  "Livid Pyromancer Dunnel": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/6/65/Dunnel.jpg"],
    text: "An invader wielding pyromancies, found in the Painted World."
  },

  // 🏚 Dreg Heap
  "Stone-humped Hag": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/8/86/Stone-Humped_Hag.jpg"],
    text: "An NPC vendor who greets the player at the start of the Dreg Heap."
  },
  "Lapp": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/6/63/Lapp.jpg"],
    text: "An amnesiac knight in the Ringed City DLC, later revealed as Patches."
  },

  // 🔔 Ringed City
  "Shira": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/c/cf/Shira.jpg"],
    text: "A knight devoted to Filianore. A summon and an invader in the Ringed City."
  },
  "Locust Preacher": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/5/55/Locust_Preacher.jpg"],
    text: "Strange insect-like preachers offering cryptic wisdom in the Ringed City."
  },
  "Judicator Argo": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/2/2b/Judicator_Argo.jpg"],
    text: "Leader of the Spears of the Church covenant. Summons Halflight or players."
  },
  "Filianore": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/0/0a/Filianore.jpg"],
    text: "A princess revered in the Ringed City. Sleeping guardian of an illusory world."
  },
  "Moaning Knight": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/d/d6/Moaning_Knight.jpg"],
    text: "An invader loyal to Filianore. Wields the Moaning Shield."
  },
  "Ringed City Hollow": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/4/41/Ringed_City_Hollow.jpg"],
    text: "Hollow residents of the Ringed City, endlessly wandering."
  },
  "Silver Knight Ledo": {
    imgs: ["https://static.wikia.nocookie.net/darksouls/images/8/8d/Ledo.jpg"],
    text: "A massive knight wielding Ledo’s Great Hammer, found in the Ringed City."
  }
};

// =========================
// Modal Functions
// =========================
function openCharModal(name) {
  const info = charInfo[name];

  charModalTitle.textContent = name;
  charModalText.textContent = info ? info.text : "Description coming soon.";

  charModalSlides.innerHTML = "";
  charSlides = [];

  const images = info && info.imgs && info.imgs.length > 0
    ? info.imgs
    : ["https://via.placeholder.com/600x300?text=" + encodeURIComponent(name)];

  images.forEach((src) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide");
    const img = document.createElement("img");
    img.src = src;
    slideDiv.appendChild(img);
    charModalSlides.appendChild(slideDiv);
    charSlides.push(slideDiv);
  });

  charCurrentSlide = 0;
  showCharSlide(charCurrentSlide);

  charModal.style.display = "block";
}

function showCharSlide(index) {
  if (charSlides.length === 0) return;
  charSlides.forEach(s => (s.style.display = "none"));
  charSlides[index].style.display = "block";
}

function plusCharSlides(n) {
  if (charSlides.length === 0) return;
  charCurrentSlide = (charCurrentSlide + n + charSlides.length) % charSlides.length;
  showCharSlide(charCurrentSlide);
}

charPrevBtn.addEventListener("click", () => plusCharSlides(-1));
charNextBtn.addEventListener("click", () => plusCharSlides(1));

// Attach listeners
document.querySelectorAll(".char-card").forEach(card => {
  const name = card.getAttribute("data-char");
  card.querySelector("img").addEventListener("click", () => openCharModal(name));
  card.querySelector("button").addEventListener("click", () => openCharModal(name));
});

// Close modal
charCloseBtn.onclick = () => (charModal.style.display = "none");
window.onclick = (e) => {
  if (e.target === charModal) charModal.style.display = "none";
};