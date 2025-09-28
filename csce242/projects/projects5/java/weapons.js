/* ================================
   Dark Souls III • Weapons Modal + Slider
   ================================ */

   const PH = "images/placeholder.png";


const weaponsData = {
  /* ---------- Straight Swords ---------- */
  "straight-swords": {
    longswords: [
      { name: "Long Sword", img: "weapons img/straight-swords/longswords/longsword.png", desc: "Reliable straight sword with a classic moveset and solid scaling for early to late game." },
      { name: "Lothric Knight Sword", img: "weapons img/straight-swords/longswords/lothric_knight_sword.png", desc: "Exceptional reach and thrusts; one of the strongest picks for refined or dex builds." },
      { name: "Sunlight Straight Sword", img: "weapons img/straight-swords/longswords/sunlight_straight_sword.png", desc: "A radiant blade once linked to the Warriors of Sunlight; its skill grants a weapon buff." },
      { name: "Astora Straight Sword", img: "weapons img/straight-swords/longswords/astora_straight_sword.png", desc: "A light straight sword with strong elemental infusion potential early on." },
      { name: "Irithyll Straight Sword", img: "weapons img/straight-swords/longswords/IrithyllStraightSword.png", desc: "Frost-infused sword with innate frostbite buildup and elegant, chilly trails." },
      { name: "Barbed Straight Sword", img: "weapons img/straight-swords/longswords/barbed_straight_sword.png", desc: "A serrated blade that causes bleed; favored by those who relish attrition." },
      { name: "Anri's Straight Sword", img: "weapons img/straight-swords/longswords/anris_straight_sword.png", desc: "Scales uniquely with luck; intertwined with Anri’s fate and endings." },
      { name: "Morion Blade", img: "weapons img/straight-swords/longswords/morion_blade.png", desc: "A risky pick that boosts damage at low HP; pairs with Red Tearstone strategies." }
    ],
    broadswords: [
      { name: "Broadsword", img: "weapons img/straight-swords/broadswords/broadsword.png", desc: "Short reach but high base damage; aggressive and straightforward." }
    ],
    shortswords: [
      { name: "Shortsword", img: "weapons img/straight-swords/shortswords/shortsword2.png", desc: "A compact blade with fast swings; great as an off-hand or parry complement." }
    ]
  },

  /* ---------- Greatswords ---------- */
  "greatswords": {
    standard: [
      { name: "Claymore", img: "weapons img/great-sword/standard/claymore.png", desc: "Iconic hybrid with thrusts and wide sweeps; consistent from start to finish." },
      { name: "Bastard Sword", img: "weapons img/great-sword/standard/bastard_sword.png", desc: "Simple, no-nonsense greatsword with dependable damage output." },
      { name: "Hollowslayer Greatsword", img: "weapons img/great-sword/standard/hollowslayer_greatsword.png", desc: "Deals bonus damage to hollows; elegant thrusts and slashes." },
      { name: "Executioner’s Greatsword", img: "weapons img/great-sword/standard/executioners_greatsword.png", desc: "Restores FP on kill; weighty and brutal." },
      { name: "Flamberge", img: "weapons img/great-sword/standard/flameberge.png", desc: "Wavy blade that inflicts bleed; a throwback to flame-like designs." }
    ],
    unique: [
      { name: "Wolf Knight’s Greatsword", img: "weapons img/great-sword/unique/wolf_knights_greatsword.png", desc: "Abyss-tempered heir to Artorias; graceful moveset for a greatsword." },
      { name: "Black Knight Sword", img: "weapons img/great-sword/unique/black_knight_greatsword.png", desc: "Smoldering blade with fire-slaying heritage and powerful R2s." },
      { name: "Onyx Blade", img: "weapons img/great-sword/unique/onyx_blade_-_final.png", desc: "Sulyvahn’s black flame; skill ignites the blade with dark fire." },
      { name: "Lorian’s Greatsword", img: "weapons img/great-sword/unique/lorians_greatsword.png", desc: "Warped by flame and teleporting strikes; demanding but stylish." },
      { name: "Gael’s Greatsword", img: "weapons img/great-sword/unique/gael's_greatsword.png", desc: "Worn with pilgrimage; wide arcs and relentless chases when mastered." }
    ]
  },

  /* ---------- Ultra Greatswords (Colossal) ---------- */
  "ultra-greatswords": {
    colossal: [
      { name: "Greatsword (Colossal)", img: PH, desc: "The massive slab, famed by certain strugglers; astonishing stagger and reach." },
      { name: "Zweihander", img: PH, desc: "Classic giant blade with pancake-slam knockdowns and crowd control." },
      { name: "Cathedral Knight Greatsword", img: PH, desc: "A heavy cathedral slab—slow, crushing, and authoritative." },
      { name: "Profaned Greatsword", img: PH, desc: "Glows with profaned flame; skill grants a fiery damage boost." },
      { name: "Astora Greatsword", img: PH, desc: "A lightweight ultra ideal for elemental infusions and dex hybrids." },
      { name: "Black Knight Greatsword", img: PH, desc: "A demon-slayer; wide, fiery arcs and high hyperarmor." }
    ],
    paired: [
      { name: "Fume Ultra Greatsword", img: PH, desc: "A monstrous, dense blade; supreme poise damage and guard-breaking power." }
    ]
  },

  /* ---------- Curved Swords ---------- */
  "curved-swords": {
    light: [
      { name: "Scimitar", img: PH, desc: "Swift, flowing cuts; an agile duelist’s friend." },
      { name: "Falchion", img: PH, desc: "Weightier curved sword with broad, meaty hits." },
      { name: "Carthus Curved Sword", img: PH, desc: "Fast, bleed-friendly, and infamous roll-catcher." },
      { name: "Shotel", img: PH, desc: "Hooked blade that punishes shield turtling." },
      { name: "Pontiff Knight Curved Sword", img: PH, desc: "Frost-kissed arcs that pressure and chase." }
    ],
    heavy: [
      { name: "Murakumo", img: PH, desc: "Long, sweeping powerhouse with destructive two-handed swings." },
      { name: "Carthus Shotel", img: PH, desc: "Hooked and vicious; circumvents guards with style." }
    ],
    paired: [
      { name: "Sellsword Twinblades", img: PH, desc: "Relentless paired slashes; melts bars with buffs." },
      { name: "Warden Twinblades", img: PH, desc: "Bleed-stacking paired blades favored by dark wardens." }
    ]
  },

  /* ---------- Curved Greatswords ---------- */
  "curved-greatswords": {
    heavy: [
      { name: "Exile Greatsword", img: PH, desc: "Savage force with bleed potential; feared in close quarters." },
      { name: "Carthus Curved Greatsword", img: PH, desc: "Long, punishing arcs that demand spacing mastery." }
    ],
    unique: [
      { name: "Old Wolf Curved Sword", img: PH, desc: "Boosts attacks on consecutive hits; a tribute to Farron’s pack." }
    ]
  },

  /* ---------- Katanas ---------- */
  "katanas": {
    standard: [
      { name: "Uchigatana", img: PH, desc: "Sharp, fast, and bleed-capable; obtainable early from the Sword Master." },
      { name: "Washing Pole", img: PH, desc: "Ridiculously long katana; spacing monster with durability costs." },
      { name: "Darkdrift", img: PH, desc: "A ghostly blade that slips through guards; hidden scabbard." }
    ],
    unique: [
      { name: "Black Blade", img: PH, desc: "Shorter, heavier katana with brutal strikes." },
      { name: "Chaos Blade", img: PH, desc: "Harms the wielder on hit; high risk, high reward." },
      { name: "Frayed Blade", img: PH, desc: "Abyss-touched, with unique R1→WA pressure and dark slashes." }
    ]
  },

  /* ---------- Daggers ---------- */
  "daggers": {
    standard: [
      { name: "Dagger", img: PH, desc: "Tiny reach, lightning speed; excels with backstabs and ripostes." },
      { name: "Bandit’s Knife", img: PH, desc: "Bleed-ready pokes and swift pressure." },
      { name: "Handmaid’s Dagger", img: PH, desc: "Restores small FP on hit; a curious utility blade." },
      { name: "Parrying Dagger", img: PH, desc: "Built to catch blows; pairs with riposte play." }
    ],
    paired: [
      { name: "Brigand Twindaggers", img: PH, desc: "Whirlwind combos for glass-cannon duelists." },
      { name: "Corvian Greatknife (alt classed dagger)", img: PH, desc: "A long, cruel knife favored by Corvians; nasty bleed tool." }
    ],
    special: [
      { name: "Mail Breaker", img: PH, desc: "Thrusting dagger that pierces armor cleanly." }
    ]
  },

  /* ---------- Thrusting Swords ---------- */
  "thrusting-swords": {
    standard: [
      { name: "Rapier", img: PH, desc: "Quick pokes, high counter-damage, great with buffs." },
      { name: "Estoc", img: PH, desc: "Thrusting reach with useful slashes; a PvP staple." },
      { name: "Irithyll Rapier", img: PH, desc: "Frost-touched stabs for attrition and pressure." }
    ],
    special: [
      { name: "Ricard’s Rapier", img: PH, desc: "Flurry skill unleashes a storm of thrusts." }
    ]
  },

  /* ---------- Axes ---------- */
  "axes": {
    small: [
      { name: "Hand Axe", img: PH, desc: "Light and lively; early-game workhorse." },
      { name: "Millwood Battle Axe", img: PH, desc: "Wild strength weapon with a howling warcry." },
      { name: "Butcher Knife", img: PH, desc: "Cleansing cleaver that heals on hit; stamina hungry." },
      { name: "Brigand Axe", img: PH, desc: "Aggressive small axe with chunky hits." }
    ],
    large: [
      { name: "Battle Axe", img: PH, desc: "Classic one-hander with big payoffs." },
      { name: "Dragonslayer’s Axe", img: PH, desc: "Lightning-wreathed chops that demolish knights." },
      { name: "Thrall Axe", img: PH, desc: "Small, quick, and vicious, favored by sneaks." }
    ],
    unique: [
      { name: "Man Serpent Hatchet", img: PH, desc: "Serpentine hatchet with jagged bite." },
      { name: "Dragon King Greataxe (legacy nod)", img: PH, desc: "A myth-tinged axe known for its crashing blows." }
    ]
  },

  /* ---------- Greataxes ---------- */
  "greataxes": {
    standard: [
      { name: "Greataxe", img: PH, desc: "Found in the swamps; enormous AR and staggering blows." },
      { name: "Demon’s Greataxe", img: PH, desc: "Demon-forged, heavy, and explosive with lava bursts." }
    ],
    unique: [
      { name: "Yhorm’s Great Machete", img: PH, desc: "Colossal cleaver with massive poise damage." },
      { name: "Black Knight Greataxe", img: PH, desc: "Demon-hungry and menacing; sweeping fire arcs." }
    ]
  },

  /* ---------- Hammers ---------- */
  "hammers": {
    standard: [
      { name: "Club", img: PH, desc: "Primitive but effective; breaks guards and bones alike." },
      { name: "Mace", img: PH, desc: "Clerical cudgel with strike damage and faith vibes." },
      { name: "Morning Star", img: PH, desc: "Spiked head that induces bleed." },
      { name: "Reinforced Club", img: PH, desc: "Nailed, crude, and surprisingly strong." }
    ],
    unique: [
      { name: "Warpick", img: PH, desc: "A piercing hammer that shreds defense." },
      { name: "Heysel Pick", img: PH, desc: "Strange scholar’s pick; odd but potent." }
    ]
  },

  /* ---------- Great Hammers ---------- */
  "great-hammers": {
    colossal: [
      { name: "Great Club", img: PH, desc: "The tree-trunk; deceptively nimble two-handed." },
      { name: "Large Club", img: PH, desc: "Shorter than the Great Club, still craters foes." },
      { name: "Smough’s Great Hammer", img: PH, desc: "Echoes of Anor Londo; thunderous, buttery slams." },
      { name: "Vordt’s Great Hammer", img: PH, desc: "Frost-laden blows that chill and crush." }
    ],
    unique: [
      { name: "Dragon Tooth", img: PH, desc: "A petrified dragon tooth; near indestructible." },
      { name: "Old King’s Great Hammer", img: PH, desc: "Burns with lingering chaos." }
    ]
  },

  /* ---------- Spears & Pikes ---------- */
  "spears": {
    spears: [
      { name: "Spear", img: PH, desc: "Classic thrusting control with safe spacing." },
      { name: "Winged Spear", img: PH, desc: "Reliable pokes and nimble recovery." },
      { name: "Dragonslayer Spear", img: PH, desc: "Lightning-kissed spear with iconic heritage." },
      { name: "Gargoyle Flame Spear", img: PH, desc: "Flame-belching spear that pressures at range." },
      { name: "Partizan", img: PH, desc: "Thrusts and sweeping slashes; hybrid utility." }
    ],
    pikes: [
      { name: "Pike", img: PH, desc: "Outranges most melee; wins on spacing and patience." },
      { name: "Lothric Knight Long Spear", img: PH, desc: "Disciplined reach and piercing ferocity." }
    ],
    paired: [
      { name: "Dragonslayer Swordspear", img: PH, desc: "Hybrid spear-sword with lightning arts and style." }
    ]
  },

  /* ---------- Halberds ---------- */
  "halberds": {
    standard: [
      { name: "Halberd", img: PH, desc: "Polearm fundamentals—sweet-spot mastery rewarded." },
      { name: "Lucerne", img: PH, desc: "Piercing halberd; punishes rolls and shields." },
      { name: "Red Hilted Halberd", img: PH, desc: "Versatile moveset with strong thrusts." }
    ],
    special: [
      { name: "Black Knight Glaive", img: PH, desc: "Demon-slayer halberd with fiery memory." },
      { name: "Glaive", img: PH, desc: "Wider sweeps; spacing tool with authority." }
    ]
  },

  /* ---------- Reapers (Scythes) ---------- */
  "reapers": {
    scythes: [
      { name: "Great Scythe", img: PH, desc: "Long, sweeping reaper with bleed and spacing dominance." },
      { name: "Pontiff Knight Great Scythe", img: PH, desc: "Frost-touched reaper with elegant arcs." },
      { name: "Friede’s Great Scythe", img: PH, desc: "Dual-phase ice and blackflame artistry." }
    ],
    unique: [
      { name: "Corvian Scythe", img: PH, desc: "Long-handled with savage R2s and bleed." }
    ]
  },

  /* ---------- Whips ---------- */
  "whips": {
    standard: [
      { name: "Whip", img: PH, desc: "No parries against it; safe chip and spacing." },
      { name: "Notched Whip", img: PH, desc: "Barbed lash that inflicts bleed." }
    ],
    unique: [
      { name: "Witch’s Locks", img: PH, desc: "Pyromancer’s hair-whip that scales with int/faith." },
      { name: "Spotted Whip", img: PH, desc: "Poison-tipped lashes for attrition." }
    ]
  },

  /* ---------- Fists & Claws ---------- */
  "fists-claws": {
    fist: [
      { name: "Caestus", img: PH, desc: "Parry king and brawler’s staple." },
      { name: "Dragon Bone Fist (nod)", img: PH, desc: "Legend echoes; close-quarters menace." },
      { name: "Demon’s Fist", img: PH, desc: "Paired infernal gauntlets with fiery arts." }
    ],
    claws: [
      { name: "Claw", img: PH, desc: "Rake and bleed; agile and stylish." },
      { name: "Manikin Claws", img: PH, desc: "Concealed blades with innate bleed and flips." }
    ]
  },

  /* ---------- Bows ---------- */
  "bows": {
    short: [
      { name: "Short Bow", img: PH, desc: "Fast draw for roll-shots and quick picks." },
      { name: "Composite Bow", img: PH, desc: "Tight, snappy shots; great for pressure." }
    ],
    long: [
      { name: "Longbow", img: PH, desc: "Steady aim and range for PvE utility." },
      { name: "Black Bow of Pharis", img: PH, desc: "High range and rapid fire potential." }
    ],
    great: [
      { name: "Dragonrider Bow (nod)", img: PH, desc: "Heavy draw and punishing hits." },
      { name: "Millwood Greatbow", img: PH, desc: "Detonating arrows and savage knockback." }
    ]
  },

  /* ---------- Crossbows ---------- */
  "crossbows": {
    light: [
      { name: "Light Crossbow", img: PH, desc: "Quick bolts and utility for status arrows." },
      { name: "Hand Crossbow", img: PH, desc: "One-handed firing for hybrid setups." }
    ],
    unique: [
      { name: "Heavy Crossbow", img: PH, desc: "Slower but heavier punch per shot." },
      { name: "Avelyn", img: PH, desc: "Triple-shot legend that deletes gaps." },
      { name: "Repeating Crossbow", img: PH, desc: "Rapid stagger pressure at mid-range." }
    ]
  },

  /* ---------- Staves (Sorcery) ---------- */
  "staves": {
    basic: [
      { name: "Sorcerer’s Staff", img: PH, desc: "Starter focus for pure sorcery." },
      { name: "Heretic’s Staff", img: PH, desc: "Great early scaling with int investment." },
      { name: "Court Sorcerer’s Staff", img: PH, desc: "Top-tier int scaling; glass-cannon caster’s choice." }
    ],
    unique: [
      { name: "Mendicant’s Staff", img: PH, desc: "Slight soul gain; a farm tool for scholars." },
      { name: "Sage’s Crystal Staff", img: PH, desc: "Burst damage under its weapon art chant." }
    ]
  },

  /* ---------- Chimes (Miracles) ---------- */
  "chimes": {
    basic: [
      { name: "Priest’s Chime", img: PH, desc: "Foundational miracle tool for early faith builds." },
      { name: "Cleric’s Sacred Chime", img: PH, desc: "Well-rounded miracle focus with decent scaling." },
      { name: "Talisman of the Sun (chime alt nod)", img: PH, desc: "A sunny focus favored by warriors of light." }
    ],
    unique: [
      { name: "Yorshka’s Chime", img: PH, desc: "Highest miracle spell-buff at high faith." },
      { name: "Saint’s Talisman (chime alt)", img: PH, desc: "Poise-casting miracle focus to tank interrupts." }
    ]
  },

  /* ---------- Talismans (Miracles) ---------- */
  "talismans": {
    standard: [
      { name: "Talisman", img: PH, desc: "Baseline miracle catalyst with balanced scaling." },
      { name: "Canvas Talisman", img: PH, desc: "Poise-casting makes close-range miracles safer." }
    ],
    special: [
      { name: "Sunlight Talisman", img: PH, desc: "Poise-casting and sun-blessed channeling." },
      { name: "White Hair Talisman", img: PH, desc: "Casts both pyromancies and miracles (hybrid tool)." }
    ]
  },

  /* ---------- Pyromancy Flames ---------- */
  "pyromancy": {
    standard: [
      { name: "Pyromancy Flame", img: PH, desc: "Foundational glove for fire arts; scales with int/faith." }
    ],
    unique: [
      { name: "Demon’s Scar", img: PH, desc: "A curved sword that also casts pyromancies—style and utility." }
    ]
  },

  /* ---------- Shields ---------- */
  "shields": {
    small: [
      { name: "Small Leather Shield", img: PH, desc: "Lightweight parry tool for dexterous duelists." },
      { name: "Target Shield", img: PH, desc: "Wider parry frames; classic riposte partner." },
      { name: "Buckler", img: PH, desc: "Fast parry window and quick guard raises." }
    ],
    medium: [
      { name: "Kite Shield", img: PH, desc: "Balanced, reliable blocking across damage types." },
      { name: "Crest Shield", img: PH, desc: "Magic resist specialty for sorcery-heavy areas." },
      { name: "Spirit Tree Crest Shield", img: PH, desc: "Lightning resist star; tailor to drakeslaying." }
    ],
    great: [
      { name: "Greatshield of Glory", img: PH, desc: "Immense guard but stamina recovery penalty." },
      { name: "Lothric Knight Greatshield", img: PH, desc: "Stable bulwark used by Lothric’s elites." },
      { name: "Yhorm’s Greatshield", img: PH, desc: "Gigantic slab that laughs at small arms." },
      { name: "Wolf Knight’s Greatshield", img: PH, desc: "Artorias’ emblem offering stalwart protection." }
    ]
  }
};

/* --------------------------------
   2) DOM Elements
----------------------------------*/
const weaponModal = document.getElementById("weaponModal");
const closeWeapon = document.getElementById("closeWeapon");
const weaponGallery = document.getElementById("weaponGallery");
const weaponTitle = document.getElementById("weaponTitle");

const weaponDetailModal = document.getElementById("weaponDetailModal");
const closeWeaponDetail = document.getElementById("closeWeaponDetail");

/* --------------------------------
   3) GALLERY BUILDERS
----------------------------------*/
function buildSubclassGallery(weaponClass, subclass) {
  const subset = weaponsData?.[weaponClass]?.[subclass] || [];
  weaponGallery.innerHTML = "";

  if (subset.length === 0) {
    weaponGallery.innerHTML = `<p style="opacity:.8">No entries yet for <b>${subclass}</b>.</p>`;
    return;
  }

  // Create slides
  subset.forEach((w) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
      <img src="${w.img || PH}" alt="${w.name}" style="max-width:100%; border-radius:8px; margin-bottom:10px;">
      <h3>${w.name}</h3>
      <p>${w.desc}</p>
    `;
    weaponGallery.appendChild(slide);
  });

  // Init slider
  currentSlides = weaponGallery.querySelectorAll(".slide");
  slideIndex = 0;
  updateSlides();
}

/* --------------------------------
   4) SLIDER
----------------------------------*/
let slideIndex = 0;
let currentSlides = [];

function updateSlides() {
  if (!currentSlides.length) return;
  currentSlides.forEach((el, i) => {
    el.style.display = (i === slideIndex) ? "block" : "none";
  });
}

function nextSlide() {
  if (!currentSlides.length) return;
  slideIndex = (slideIndex + 1) % currentSlides.length;
  updateSlides();
}

function prevSlide() {
  if (!currentSlides.length) return;
  slideIndex = (slideIndex - 1 + currentSlides.length) % currentSlides.length;
  updateSlides();
}

/* --------------------------------
   5) MODAL OPEN/CLOSE
----------------------------------*/
function openSubclassModal(card) {
  const weaponClass = card.dataset.class;
  const subclass = card.dataset.subclass;

  weaponTitle.textContent = `${formatTitle(subclass)} (${formatTitle(weaponClass)})`;
  buildSubclassGallery(weaponClass, subclass);
  weaponModal.style.display = "block";
}

closeWeapon?.addEventListener("click", () => {
  weaponModal.style.display = "none";
});

closeWeaponDetail?.addEventListener("click", () => {
  weaponDetailModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === weaponModal) weaponModal.style.display = "none";
  if (e.target === weaponDetailModal) weaponDetailModal.style.display = "none";
});

/* --------------------------------
   6) WIRING
----------------------------------*/
document.querySelectorAll(".subclass-card .pill").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".subclass-card");
    openSubclassModal(card);
  });
});

/* --------------------------------
   7) UTIL
----------------------------------*/
function formatTitle(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

/* --------------------------------
   8) OPTIONAL: keyboard support
----------------------------------*/
document.addEventListener("keydown", (e) => {
  if (weaponModal.style.display === "block") {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "Escape") weaponModal.style.display = "none";
  }
});
