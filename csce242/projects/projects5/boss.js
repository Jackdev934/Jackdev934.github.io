// Grab modal elements
const modal = document.getElementById("bossModal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

const modalSlides = document.getElementById("modal-slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;
let slides = [];

// Boss descriptions with multiple images
const bossInfo = {
  "Iudex Gundyr": {
    imgs: [
      "https://pm1.aminoapps.com/7105/56b238c23f85dceff1308cd99c0b3a2d30a5eebfr1-1056-756v2_uhq.jpg",
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/Iudex_Gundyr.jpg",
      "https://i.ytimg.com/vi/575YkIJSk24/maxresdefault.jpg"
    ],
    text: "Once a champion who arrived too late to link the fire, Gundyr is resurrected endlessly as a judge for Unkindled Ash. His hulking armor and halberd make him a formidable foe, and midway through the fight he becomes host to the writhing Pus of Man. Gundyr is resistant to poison and bleed but weak to fire and strike damage, making firebombs and blunt weapons highly effective."
  },
  "Vordt of the Boreal Valley": {
    imgs: [
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/10/dark-souls-3-vordt-of-boreal-valley.jpg",
      "https://darksouls3.wdfiles.com/local--files/boss-image:vordt/Vordt.jpg",
      "https://images.steamusercontent.com/ugc/1001432308775048608/AF8CF1E3BD898E30BCFFE21772ADE8B02C875424/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    ],
    text: "A once-loyal knight transformed into a frost-driven beast, Vordt serves as a corrupted sentinel of the Boreal Valley. His savage charges and frostbite breath freeze unwary travelers. He resists frost and dark damage, but fire is especially effective against him, and he has moderate vulnerability to lightning."
  },
  "Curse-Rotted Greatwood": {
    imgs: [
      "https://images.steamusercontent.com/ugc/1052100875014753956/AA3C73F8CE4F35C5F16678E7FA0779F29D1DBDD6/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
      "https://i.ytimg.com/vi/yX3MSBKvlnU/maxresdefault.jpg",
      "https://live.staticflickr.com/1922/45549384702_44b9a7fb39_b.jpg"
    ],
    text: "This massive, diseased tree houses the curses of countless souls. Its fight revolves around striking pus-filled sacs across its body, leading to grotesque transformations. The Greatwood is highly resistant to most damage types except strike and fire, which shatter its weak points and burn through its defenses. grotesque tree swollen with curses, its roots thrash with the weight of endless suffering."
  },
  "Crystal Sage": {
    imgs: [
      "https://soulslore.wdfiles.com/local--resized-images/data:crystal-sage/crystal-sage.jpg/medium.jpg",
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/dark_souls_3_crystal_sage.jpg",
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/Crystal_Sage_Casting.jpg?v=1497025479467"
    ],
    text: "A master sorcerer draped in flowing robes, the Crystal Sage bombards challengers with soul sorceries and conjured illusions. He resists magic damage but is vulnerable to physical strikes, particularly melee weapons that can pressure him before he teleports. Fire and lightning spells are also effective counters to his arcane wards."
  },
  "Deacons of the Deep": {
    imgs: [
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/053%20-%206SQeZqA.jpg",
      "https://i.ytimg.com/vi/LHz1dS37v9c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDi5r5a0gVoPqjLtjDpochgYyI_4w",
      "https://assets1.ignimgs.com/thumbs/2016/04/20/7076fb5efe1157b8d68d12c2b39a8243-1461174648/frame_0000.jpg?width=1280&format=jpg&auto=webp&quality=80"
    ],
    text: "This congregation of clerics serves Aldrich in endless ritual. The battle is against the collective horde, focusing on whichever deacon holds the red aura. They resist dark damage but are weak to fire and physical area-of-effect attacks, making pyromancy and sweeping weapons especially useful."
  },
  "Abyss Watchers": {
    imgs: [
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/abyss-watchers-dks3.jpg",
      "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/06/Abyss-Watchers.jpg?w=1600&h=900&fit=crop",
      "https://darksouls3.wdfiles.com/local--files/boss-image:abyss-watchers/Abyss_Watchers.jpg"
    ],
    text: "The undead legion sworn to fight the Abyss eventually turned their blades upon one another, consumed by endless bloodlust. The Watchers resist bleed and dark damage, but they are weak to lightning and thrust attacks. Their high mobility and parryable swings test timing and stamina management."
  },
  "High Lord Wolnir": {
    imgs: [
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/high-lord-wolnir-enemy-dark-souls-3-wiki-guide.jpg",
      "https://assets.vg247.com/current//2016/04/dark_souls_3_high_lord_wolnir.jpg",
      "https://cdna.artstation.com/p/assets/images/images/007/247/716/large/shawn-kok-ds3-sunsetarmour-preview-03.jpg?1504751241"
    ],
    text: "Once a conquering monarch, Wolnir now lingers as a colossal skeleton wrapped in cursed bracelets. He resists most physical and elemental attacks, but his weakness lies in his glowing bracelets—destroy them to drag him into the abyss. Holy and strike damage deal additional pressure when aimed correctly."
  },
  "Old Demon King": {
    imgs: [
      "https://static.wikia.nocookie.net/darksouls/images/c/cd/Old_demon_king_%282%29.jpg/revision/latest?cb=20160418174041",
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/old_demon_king-dks3_small.jpg",
      "https://www.svg.com/img/gallery/tragic-details-you-missed-in-dark-souls-3/the-old-demon-kings-final-moments-1659618906.jpg"
    ],
    text: "The final remnant of the chaos demons, this ancient monarch burns with the fading ember of the First Flame. He is resistant to fire but weak to lightning and dark damage, making miracles and sorceries effective choices. His massive firestorms and sweeps punish slow fighters."
  },
  "Pontiff Sulyvan": {
    imgs: [
      "https://lokeysouls.com/wp-content/uploads/2020/12/pontiffsulyvahn-1.jpg",
      "https://i.ytimg.com/vi/gbQAsFbcRzE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCxpuIlDYJJAvcRYJfwyFEKdl8NQw",
      "https://i.ytimg.com/vi/fo-Sc7ciEgk/maxresdefault.jpg"
    ],
    text: "A cruel pontiff ruling Irithyll, Sulyvahn wields twin blades—one of fire, one of magic—and can summon a shadow double to overwhelm challengers. He resists fire and dark but is weak to lightning. His relentless aggression rewards careful dodging and counterstrikes."
  },
  "Yhorm the Giant": {
    imgs: [
      "https://darksouls3.wdfiles.com/local--files/boss-image:yhorm1/Yhorm1.jpg",
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/Dark-Souls-3-Yhorm-the-Giant.jpg?w=1200&h=628&fit=crop",
      "https://origin.mos.cms.futurecdn.net/izAG3e6YrGShxbZWidQSqg.jpg"
    ],
    text: "Once a benevolent giant who became a Lord of Cinder, Yhorm can only be meaningfully felled using the Storm Ruler, a sword placed within his arena. Standard weapons deal little to him, as his immense size grants natural resistance. With the Storm Ruler, lightning-infused gusts of wind tear through his defenses."
  },
  "Aldrich, Devourer of Gods": {
    imgs: [
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/aldritch1_tc.jpg",
      "https://assetsio.gnwcdn.com/dark_souls_3_boss_how_to_beat_aldrich_devourer_of_gods.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      "https://origin.mos.cms.futurecdn.net/Mo8mugKN3TpwbZGN8MPzhg.jpg"
    ],
    text: "Once a holy cleric, Aldrich fell into cannibalism and transformed into a sludge-like horror. He devoured the gods, even consuming Gwyndolin. Aldrich resists dark and magic but is weak to fire. His arena-filling arrows and devastating soul spears make mobility and fire damage the best approach."
  },
  "Dancer of the Boreal Valley": {
    imgs: [
      "https://darksouls3.wdfiles.com/local--files/boss-image:dancer/Dancer.jpg",
      "https://soulslore.wdfiles.com/local--resized-images/data:dancer-of-the-frigid-valley/dancerface.jpg/medium.jpg",
      "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/06/Dancer-1.jpg?q=50&fit=crop&w=825&dpr=1.5"
    ],
    text: "A twisted knight corrupted into a spectral assassin, the Dancer wields ethereal blades in a haunting ballet of death. She resists magic and dark but is weak to lightning. Her unpredictable timing punishes hasty players, requiring patience and careful observation."
  },
  "Dragonslayer Armour": {
    imgs: [
      "https://static.wikia.nocookie.net/darksouls/images/0/07/Iron_Dragonslayer_Set.png/revision/latest?cb=20220123232512",
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/Dragonslayer_Armour_And_Butterflies.jpg",
      "https://i.ytimg.com/vi/5sk-e0uokOI/maxresdefault.jpg"
    ],
    text: "A suit of armor animated by the Pilgrim Butterflies, the Dragonslayer Armour crackles with lightning and wields a mighty axe. It resists lightning but is weak to dark damage. Staying aggressive and punishing its recovery windows is the key to victory."
  },
  "Oceiros, the Consumed King": {
    imgs: [
      "https://soulslore.wdfiles.com/local--resized-images/data:oceiros/king-oceiros.jpg/medium.jpg",
      "https://assetsio.gnwcdn.com/dark_souls_3_boss_how_to_beat_oceiros_the_consumed_king.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "https://images.steamusercontent.com/ugc/871874599756289747/5B66A7ACC62EB61CE431082F6DAD4BAF89715758/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    ],
    text: "Driven mad by obsession with his imagined child Ocelotte, Oceiros clings to visions and desperation. His dragon-like form grants him frost and magic attacks. He resists magic but is weak to lightning and frostbite. His erratic movement and cries of delusion make the fight unsettling."
  },
  "Champion Gundyr": {
    imgs: [
      "https://i.ytimg.com/vi/EvHEWS2YWOY/sddefault.jpg",
      "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/09/Dark-Souls-3-Champion-Gundyr.jpg?q=50&fit=crop&w=825&dpr=1.5",
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/champion_gundyr_header2.jpg"
    ],
    text: "In another timeline, Gundyr succeeded in his task and became the Champion. This version is more aggressive, chaining relentless combos with punishing kicks and grabs. He resists bleed and poison but is weak to lightning and frost damage. Timing rolls and counters is vital against his onslaught."
  },
  "Lothric and Lorian": {
    imgs: [
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/Lothric_&_Lorian_Risen.jpg",
      "https://darksouls3-fr.wiki.fextralife.com/file/Dark-Souls-3/lothricyoungerprince1_tc.jpg?v=1497128221340",
      "https://darksouls3.wdfiles.com/local--files/boss-image:twin-princesv1/Twin_Princesv1.jpg"
    ],
    text: "The twin princes embody the fading line of royalty. Lorian, crippled by curse, carries his younger brother Lothric into battle. Lorian strikes with a flaming greatsword while Lothric casts sorceries. They resist fire and dark but are weak to lightning. Their fight is a test of stamina, dodging, and perseverance."
  },
  "Ancient Wyvern": {
    imgs: [
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/Ancient%20Wyvern.jpg",
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/ancient-wyvern-enemies-dark-souls-3-wiki-guide.jpg",
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/dark-souls-3-ancient-wyvern.jpg?w=1600&h=900&fit=crop"
    ],
    text: "This towering dragon is defeated primarily through a plunging attack from above, rather than direct combat. Its natural resistances make normal weapons ineffective. Lightning-infused weapons or the scripted drop attack deal immense damage."
  },
  "Nameless King": {
    imgs: [
      "https://comicbook.com/wp-content/uploads/sites/4/2025/02/Dark-Souls-3-Nameless-King-Elden-Ring-Nightreign.jpg?w=1024",
      "https://i.ytimg.com/vi/SyFNPZN82kg/sddefault.jpg",
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/kingofthestorm1_tc.jpg"
    ],
    text: "A forgotten deity of war and storms, the Nameless King was cast out for allying with dragons. He resists lightning, befitting his stormy powers, but is weak to fire and frost. His fight, split between riding his stormdrake and dueling on foot, is one of the most challenging encounters in the game."
  },
  "Soul of Cinder": {
    imgs: [
      "https://i.ytimg.com/vi/Z8m6fRxzi3E/maxresdefault.jpg",
      "https://i.ytimg.com/vi/Z8m6fRxzi3E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-sfpi5T7JU1UgzK5Sf44369RZJw",
      "https://images.steamusercontent.com/ugc/2308722341887507397/DA31E03A3B75E7F486F369AAA153A9D2CE27FE95/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    ],
    text: "The final boss embodies all who linked the fire, shifting seamlessly between fighting styles of previous heroes. He resists most elements equally, but lightning and frost have slight advantages. His adaptability forces players to master dodging and endurance."
  },
  "Champion's Gravetender & Greatwolf": {
    imgs: [
      "https://darksouls3.wdfiles.com/local--files/boss-image:champions-gravetender/Champions_Gravetender.png",
      "https://i.ytimg.com/vi/KF6CeN4LkWo/maxresdefault.jpg",
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/champion's-gravetender-gravetender-greatwolf-enemies-dark-souls-3-wiki-guide.jpg"
    ],
    text: "The Gravetender and his loyal wolf guard a forgotten tomb. The Gravetender himself is a skilled swordsman, while the Greatwolf grows more ferocious as the fight progresses. They resist frost but are weak to lightning and fire."
  },
  "Sister Friede": {
    imgs: [
      "https://static.wikia.nocookie.net/darksouls/images/9/99/Sister_Friede_-_01.png/revision/latest?cb=20170324234745",
      "https://d1lss44hh2trtw.cloudfront.net/resize?type=webp&url=https%3A%2F%2Fshacknews-www.s3.amazonaws.com%2Fassets%2Farticle%2F2016%2F10%2F24%2FAshesDLC_1_1200x500.jpg&width=1032&sign=s360XlnWuSUtu4UF6Tn9g04bXsCrjLYkf7Z_fusru1U",
      "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/06/Sister-Fried-defeat.jpg?q=50&fit=crop&w=825&dpr=1.5"
    ],
    text: "The eldest of the Sable Church’s daughters, Friede conceals her ambition beneath cold restraint. She resists frost and magic but is weak to fire and lightning. Her three-phase battle tests endurance and adaptability, culminating in her wielding a scythe infused with flame."
  },
  "Demon Prince": {
    imgs: [
      "https://ds3-cinders.wdfiles.com/local--files/image-set-bosses:demon-prince/Demon-Prince.jpg",
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/demon-prince-enemies-dark-souls-3-wiki-guide.jpg",
      "https://preview.redd.it/what-are-yalls-thoughts-on-the-demon-prince-v0-ztixujxxawfd1.jpeg?width=1080&crop=smart&auto=webp&s=a1b84a020df839ee45386549cb94299ff139fb3f"
    ],
    text: "Formed from the ashes of two demon lords, the Demon Prince reignites the chaos flame. He is resistant to fire but weak to lightning. Depending on which demon dies first, he may unleash either fire or chaos sorcery in the second phase."
  },
  "Halflight, Spear of the Church": {
    imgs: [
      "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/08.jpg",
      "https://i.ytimg.com/vi/L12jdgYazME/maxresdefault.jpg",
      "https://i.imgur.com/lJnYcac.jpg"
    ],
    text: "Halflight is a guardian of the Ringed City, acting as a summoned champion of the church. He resists dark but is weak to lightning. In multiplayer, this role can be filled by other players, making the fight unpredictable."
  },
  "Darkeater Midir": {
    imgs: [
      "https://static.wikia.nocookie.net/dragons/images/1/13/1200.jpg/revision/latest?cb=20171011042808",
      "https://i.ytimg.com/vi/jPlWnCE4Edo/maxresdefault.jpg",
      "https://preview.redd.it/darkeater-midir-might-be-the-first-boss-im-forced-to-skip-v0-sjzkyawfq8me1.jpeg?auto=webp&s=86e5875b8d30c87871d92fa901877cc4fc00655a"
    ],
    text: "Tasked by the gods to consume the Abyss, Midir became corrupted by it. He resists dark, fire, and magic heavily, but lightning deals solid damage. His immense health pool and sweeping attacks make him one of the toughest challenges in the game."
  },
  "Slave Knight Gael": {
    imgs: [
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/01/dark-souls-3-slave-knight-gael.jpg",
      "https://i.ytimg.com/vi/AH4aXDm2Odw/sddefault.jpg",
      "https://fbi.cults3d.com/uploaders/14854341/illustration-file/2344270a-3f3c-47f8-b8d3-a95db21bb425/Untitled-1.jpg"
    ],
    text: "Gael, once humble, seeks the Dark Soul of Humanity to complete a painter’s vision. His long, grueling fight grows more frenzied as he absorbs the Dark Soul’s power. He resists bleed and poison but is weak to strike damage and lightning. His battle serves as the closing chapter of the Dark Souls saga."
  }
};

// Function to open modal with slideshow
function openModal(bossName) {
  const info = bossInfo[bossName];

  modalTitle.textContent = bossName;
  modalText.textContent = info ? info.text : "Placeholder description for " + bossName;

  // Clear old slides
  modalSlides.innerHTML = "";
  slides = [];

  // Always load at least one image
  const images = info && info.imgs && info.imgs.length > 0
    ? info.imgs
    : ["https://via.placeholder.com/600x300?text=" + encodeURIComponent(bossName)];

  images.forEach((src) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide");
    const img = document.createElement("img");
    img.src = src;
    slideDiv.appendChild(img);
    modalSlides.appendChild(slideDiv);
    slides.push(slideDiv);
  });

  currentSlide = 0;
  showSlide(currentSlide);

  modal.style.display = "block";
}

// Show specific slide
function showSlide(index) {
  if (slides.length === 0) return;
  slides.forEach(s => (s.style.display = "none"));
  slides[index].style.display = "block";
}

// Next/prev controls
function plusSlides(n) {
  if (slides.length === 0) return;
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Add event listeners
prevBtn.addEventListener("click", () => plusSlides(-1));
nextBtn.addEventListener("click", () => plusSlides(1));

document.querySelectorAll(".boss-card").forEach(card => {
  const bossName = card.getAttribute("data-boss");
  card.querySelector("img").addEventListener("click", () => openModal(bossName));
  card.querySelector("button").addEventListener("click", () => openModal(bossName));
});

// Close modal
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
