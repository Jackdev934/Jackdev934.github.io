
// Modal Setup
const charModal = document.getElementById("charModal");
const charModalTitle = document.getElementById("char-modal-title");
const charModalText = document.getElementById("char-modal-text");
const charCloseBtn = charModal.querySelector(".close");
const charModalImg = document.getElementById("char-modal-img");

// Character Data
const charInfo = {
  // Firelink Shrine
  "Blacksmith Andre": {
    imgs: ["character images/andre.jpeg"],
    text: "Andre is a blacksmith who has served countless Unkindled across ages. Once appearing in the original Dark Souls, he returns in Firelink Shrine as a steadfast craftsman. He reforges and infuses weapons, repairs equipment, and reinforces Estus Flasks. Lore suggests Andre has been around since the Age of Fire, possibly kept alive by his connection to the flame. He is a regular NPC and never invades or assists in combat. Andre remains permanently at Firelink Shrine, and you can interact with him throughout the game to manage upgrades. He does not have a questline, but he expands his services as you provide him with different coal items."
  },
  "Fire Keeper": {
    imgs: ["character images/fire.jpeg"],
    text: "The Fire Keeper is the maiden bound to the flame at Firelink Shrine. She serves as the main level-up NPC, drawing out the Ashen One’s true strength by channeling souls into power. Gentle and mysterious, her blindfold suggests she is a keeper of unseen truths about the linking of fire. In her dialogue, she hints at longing to see a world without flame. She is a regular NPC and never leaves Firelink. In certain endings, she plays a role in extinguishing the flame or granting the Ashen One the chance to usher in a new age. Her questline is tied to the Fire Keeper’s Eyes, which allow her to “see” the darkness and alter the game’s ending."
  },
  "Leonhard the Ringfinger": {
    imgs: ["character images/lion.jpeg"],
    text: "Leonhard is a mysterious knight encountered early at Firelink Shrine. He gifts the Ashen One Cracked Red Eye Orbs, encouraging them to invade other players and pursue the path of Rosaria’s Fingers covenant. His questline is tied to Rosaria, Mother of Rebirth, where he eventually murders her, forcing the player to seek revenge. Leonhard is a regular NPC but becomes hostile later in his questline. He begins at Firelink Shrine near the thrones, then moves to Rosaria’s Bedchamber. Ultimately, he becomes an invader/boss fight when you hunt him down for Rosaria’s soul."
  },
  "Ludleth of Courland": {
    imgs: ["character images/ludleth.jpeg"],
    text: "One of the five Lords of Cinder, Ludleth is a withered figure who willingly linked the First Flame. Unlike the other Lords, he remains seated on his throne at Firelink Shrine, devoted to his choice. Despite his frail form, he allows the Ashen One to transpose souls into powerful boss weapons and spells. Ludleth is a regular NPC with no invasions or summon signs. He never leaves his throne in Firelink Shrine, though his dialogue changes as you progress. If killed, his ashes allow soul transposition to continue, suggesting his role transcends his physical form."
  },
  "Picklepum the Crow": {
    imgs: ["character images/pickle.jpeg"],
    text: "Picklepum (sometimes called “Pump-a-Rum”) is a crow merchant residing in a tree near Firelink Shrine. Though unseen, their chirping voice invites the player to drop items into their nest in exchange for rare goods. They are part of the long-running crow traders in the series, echoing Snuggly from Dark Souls 1. Picklepum is a regular NPC and does not invade or appear in combat. They never relocate, always staying at their nest. Their only “questline” is trading items, often giving unique rewards for seemingly useless objects like prism stones or rubbish."
  },
  "Shrine Handmaid": {
    imgs: ["character images/shrine.jpeg"],
    text: "The Shrine Handmaid is the elderly vendor of Firelink Shrine. She sells basic supplies and weapons, and her inventory expands when you give her ashes found in the world. Lore hints she is tied to the old Firelink Shrine of Dark Souls 1, as she recognizes items from that age. She remains in Firelink Shrine for the entire game. She has no questline but can potentially die if you kill her, at which point her ashes are dropped and her shop remains accessible."
  },
  "Sirris of the Sunless Realms": {
    imgs: ["character images/sirris.jpeg"],
    text: "Sirris is a wandering knight who eventually pledges herself to the Ashen One if treated with kindness. She first appears in Firelink Shrine after the player progresses through early bosses. Her questline involves battling invaders together and ultimately assisting in her duel against her own grandfather, Hodrick. She is both a summonable ally and a quest NPC. She can be summoned for several boss fights, and if you complete her questline, she gifts you her armor and sword upon her death. She relocates to Firelink Shrine temporarily during her questline."
  },
  "Yuria of Londor": {
    imgs: ["character images/yuria.jpeg"],
    text: "Yuria is one of the Sable Church’s emissaries and an important NPC for the “Usurpation of Fire” ending. She appears in Firelink Shrine if Yoel of Londor dies after fully hollowing the Ashen One. She teaches advanced sorceries and pushes the player toward marrying Anri in a dark ritual. She is a regular NPC but will turn hostile if her allies (such as the Londor Pale Shade) are killed. She remains in Firelink Shrine, watching over the Ashen One’s choices."
  },

  // High Wall
  "Greirat of the Undead Settlement": {
    imgs: ["character images/greirat.jpeg"],
    text: "A thief found locked in a cell beneath the High Wall of Lothric. Once freed, he moves to Firelink Shrine, where he offers to scavenge goods from distant lands. His questline has him leaving multiple times to scavenge; his survival depends on whether the player summons aid. If successful, he brings back new items for sale. Greirat is a regular NPC but can die permanently if sent on dangerous trips without proper support."
  },
  "Emma, High Priestess of Lothric Castle": {
    imgs: ["character images/emma.jpeg"],
    text: "Emma is a priestess stationed in Lothric Castle. She gives the Ashen One the Small Lothric Banner to progress to the Undead Settlement. Later, she gifts the Way of Blue covenant item. She is not an invader or summon, and she never relocates to Firelink Shrine. She dies after the Dancer of the Boreal Valley boss fight is triggered, marking her as a story NPC tied to progression."
  },
  "Lion Knight Albert": {
    imgs: ["character images/albert.jpeg"],
    text: "A phantom ally summonable to help defeat Vordt of the Boreal Valley. He is not a persistent NPC with dialogue but is notable as one of the few phantom allies tied to Lothric. His presence reinforces the theme of loyal knights serving Lothric Castle. He does not appear in Firelink Shrine or elsewhere."
  },

  // Undead Settlement
  "Yoel of Londor": {
    imgs: ["character images/yoel.jpeg"],
    text: "Yoel is a pilgrim of Londor found among corpses near the Foot of the High Wall bonfire. If freed, he relocates to Firelink Shrine and offers to “draw out true strength,” granting free levels in exchange for hollowing. His questline ties into the Usurpation of Fire ending, but if all levels are drawn, he dies, and Yuria takes his place. Yoel is a regular NPC with no combat role."
  },
  "Cornyx of the Great Swamp": {
    imgs: ["character images/cornyx.jpeg"],
    text: "Cornyx is a pyromancer found in a cage in the Undead Settlement. Once freed, he moves to Firelink Shrine, teaching pyromancies and upgrading flame catalysts. His presence expands pyromancer gameplay. Cornyx is a regular NPC and does not invade or appear outside Firelink after relocation."
  },
  "Siegward of Catarina": {
    imgs: ["character images/siegward.jpeg"],
    text: "A jovial “onion knight” who aids the player in several locations, including the Undead Settlement, Irithyll, and against Yhorm the Giant. His questline involves helping him through his adventures and culminates in his self-sacrifice after defeating Yhorm. Siegward is a summonable ally but not an invader. He appears in multiple areas before ultimately fulfilling his quest."
  },
  "Irina of Carim": {
    imgs: ["character images/irina.jpeg"],
    text: "A blind maiden found imprisoned in the Undead Settlement. If freed, she relocates to Firelink Shrine, where she sells miracles. Her fate depends on whether the player teaches her dark miracles—she can either remain as a holy maiden or descend into darkness. Eygon of Carim’s questline is tied to hers."
  },
  "Eygon of Carim": {
    imgs: ["character images/eygon.jpeg"],
    text: "A knight sworn to protect Irina. He first appears near her cell and relocates to Firelink Shrine if she does. He aids in boss fights if summoned. If Irina falls to darkness, Eygon becomes hostile. Otherwise, his loyalty persists until his death, after which his gear can be found."
  },
  "Velka the Goddess of Sin": {
    imgs: ["character images/velka.jpeg"],
    text: "Though not a physical NPC in Dark Souls 3, Velka’s presence is felt through statues and items tied to sin and absolution. She embodies retribution and forgiveness, themes carried from earlier games. Her role is symbolic rather than interactive."
  },
  "Holy Knight Hodrick": {
    imgs: ["character images/holy.jpeg"],
    text: "The leader of the Mound-Makers covenant, encountered as both a mad phantom invader and a duel partner. He can be found in the Undead Settlement pit and later in Sirris’ questline. His covenant is tied to chaos and bloodshed, making him a unique invader NPC."
  },
  "Giant of the Undead Settlement": {
    imgs: ["character images/giant.jpeg"],
    text: "A giant archer atop a tower who initially fires at the player but can become friendly if spoken to. If befriended, he aids the player by killing enemies in other areas with his arrows. He never relocates to Firelink Shrine and has no questline beyond this assistance."
  },

  // Road of Sacrifices
  "Orbeck of Vinheim": {
    imgs: ["character images/orbeck.jpeg"],
    text: "A sorcerer trapped in the Road of Sacrifices, found in the ruins beyond the Crystal Sage. He relocates to Firelink Shrine if given a promise to use his magic, selling sorceries and scroll upgrades. His questline involves collecting scrolls, after which he either leaves or dies, depending on player actions. He never invades but can be summoned for certain fights."
  },
  "Anri of Astora": {
    imgs: ["character images/anri.jpeg"],
    text: "A central NPC whose fate varies depending on the player’s choices. Found alongside Horace the Hushed, Anri is tied to the Usurpation of Fire ending if manipulated by Yuria, or can live and fight alongside the Ashen One in other paths. Anri’s gender changes depending on the player’s character. They travel through multiple zones and may end up either married to the Ashen One in a dark ritual, dead, or living peacefully depending on quest outcomes."
  },
  "Horace the Hushed": {
    imgs: ["character images/horace.jpeg"],
    text: "A mute knight and companion of Anri of Astora. Loyal and strong, Horace aids in combat and can be summoned as an ally. His fate is grim, as he eventually loses himself to hollowing in Smouldering Lake. Anri’s questline requires informing them of Horace’s fate. He never relocates to Firelink Shrine."
  },

  // Cathedral of the Deep
  "Rosaria, Mother of Rebirth": {
    imgs: ["character images/rosaria.jpeg"],
    text: "A mysterious matron found in the Cathedral, leader of Rosaria’s Fingers covenant. She allows players to respec their stats and change appearance. Her covenant encourages invasions, and she is later murdered by Leonhard if his questline is followed. She does not move to Firelink Shrine and plays a unique covenant role."
  },
  "Unbreakable Patches": {
    imgs: ["character images/patches.jpeg"],
    text: "A trickster NPC who ambushes players by locking them in traps, but later sells useful items if forgiven. Patches can move to Firelink Shrine after being confronted in the Cathedral. His questline ties into Siegward’s, as he impersonates him and steals his armor. He can invade or be an ally depending on choices."
  },
  "Slave Knight Gael": {
    imgs: ["character images/gael.jpeg"],
    text: "Introduced here as a mercenary NPC who can be summoned for certain boss fights, Gael later becomes the final boss of the Ringed City DLC. Initially found in the Cathedral, he also appears in the Painted World to urge the player into the DLC. His story is tragic, evolving from a humble knight into a monster consumed by the Dark Soul."
  },
  "Longfinger Kirk": {
    imgs: ["character images/kirk.jpeg"],
    text: "An invader phantom found in the Cathedral of the Deep. He wears spiked armor and attacks the player with ruthless aggression. Kirk is a returning invader from Dark Souls 1, reinforcing his role as a thorn in the side of Unkindled. He has no questline and does not relocate to Firelink Shrine."
  },

  // Farron Keep
  "Hawkwood": {
    imgs: ["character images/hawkwood.jpeg"],
    text: "A Crestfallen warrior who begins at Firelink Shrine but has ties to Farron Keep. His story is one of failure and despair; he abandons his knightly path and seeks a dragon transformation instead. Hawkwood eventually challenges the Ashen One to a duel in Archdragon Peak. He never invades, but his questline ends with either his death or his victory."
  },
  "Old Wolf of Farron": {
    imgs: ["character images/wolf.jpeg"],
    text: "A great wolf found in the Farron Keep tower, serving as the covenant leader for the Watchdogs of Farron. Though immobile, the wolf embodies the guardians of the swamp. It is not summonable or hostile, and it never relocates. Its role is entirely covenant-based."
  },
  "Yellowfinger Heysel": {
    imgs: ["character images/yellowfinger.jpeg"],
    text: "A hostile NPC invader encountered twice, once in the Road of Sacrifices and later near Farron Keep. She wields sorceries and a unique weapon, reinforcing her connection to the xanthous sorcerers. She is exclusively an invader phantom and never appears as a friendly NPC."
  },

  // Smouldering Lake
  "Knight Slayer Tsorig": {
    imgs: ["character images/slayer.jpeg"],
    text: "A hostile invader found both as a phantom in the Catacombs and as a real enemy in Smouldering Lake. He wields the Fume Ultra Greatsword, tying him back to Dark Souls II’s lore. He has no questline and remains a dangerous foe."
  },
  "Great Swamp Cuculus": {
    imgs: ["character images/cuculus.jpeg"],
    text: "A summonable phantom ally who aids the player against the Old Demon King. She is tied to Cornyx, being one of his students. She does not have a questline or relocate but exists as a lore callback."
  },

  // Irithyll
  "Alva, Seeker of the Spurned": {
    imgs: ["character images/alva.jpeg"],
    text: "A hostile phantom invader encountered in Irithyll. He is a returning character from Dark Souls II, embodying the cursed wanderer. He has no questline and does not relocate."
  },
  "Archdeacon McDonnell": {
    imgs: ["character images/deacon.jpeg"],
    text: "A hidden NPC located in Irithyll, he serves as the covenant leader for Aldrich Faithful. He does not move to Firelink Shrine, and his role is limited to covenant progression."
  },
  "Creighton the Wanderer": {
    imgs: ["character images/creighton.jpeg"],
    text: "An invader phantom who ambushes the player in Irithyll. He is another callback from Dark Souls II, continuing his feud with the Mirrah knight series. He has no questline in Dark Souls 3."
  },
  "Londor Pale Shade": {
    imgs: ["character images/londor.jpeg"],
    text: "An NPC phantom summoned to protect Yuria’s interests. The Pale Shade invades the player if Yuria or her allies are betrayed, reinforcing Londor’s hold on the Ashen One. It is tied solely to the Londor questline."
  },

  // Irithyll Dungeon
  "Karla": {
    imgs: ["character images/karla.jpeg"],
    text: "A dark sorceress imprisoned deep in the dungeon. If freed, she relocates to Firelink Shrine, where she teaches dark sorceries and pyromancies. She is reluctant to share her forbidden knowledge, but she becomes vital for players seeking the darker paths. She has no invasion role but is key for sorcery builds."
  },

  // Anor Londo
  "Company Captain Yorshka": {
    imgs: ["character images/yorshka.jpeg"],
    text: "Leader of the Blades of the Darkmoon covenant, found imprisoned in Anor Londo’s tower. She is a gentle dragon crossbreed, much like Priscilla from the first game. She never relocates and her sole role is tied to the covenant."
  },

  //Grand Archives
  "Black Hand Gotthard": {
    imgs: ["character images/gotthard.jpeg"],
    text: "A summonable phantom ally for several bosses, notable as a member of the elite Black Hand knights. He has no questline but serves as a lore figure tying into Lothric."
  },
  "Black Hand Kamui": {
    imgs: ["character images/kamui.jpeg"],
    text: "Another of the Black Hand knights, wielding a paired weapon. He is fought as a hostile NPC near the archives. He does not relocate or serve a questline."
  },
  "Daughter of Crystal Kriemhild": {
    imgs: ["character images/daughter.jpeg"],
    text: "A hostile invader encountered near the Grand Archives. She is tied to the crystal sorcery bloodline and drops items reinforcing her lore."
  },

  // Painted World
  "Sister Friede": {
    imgs: ["character images/sister.jpeg"],
    text: "A central figure in the Painted World DLC, Friede serves as both NPC and eventual boss. Initially calm and cryptic, she urges the player to leave the painting untouched. Ultimately, she reveals her true allegiance and becomes a three-phase boss fight alongside Father Ariandel."
  },
  "Sir Vilhelm": {
    imgs: ["character images/sir.jpeg"],
    text: "A dark knight who serves Sister Friede. He attempts to stop the player from progressing further in the Painted World. He is exclusively hostile and does not relocate."
  },
  "Corvian Settler": {
    imgs: ["character images/settler.jpeg"],
    text: "A passive NPC urging the Ashen One to burn the painting and cleanse it. His role is lore-based, representing the decay of the painted world."
  },
  "Painting Woman": {
    imgs: ["character images/painting.jpeg"],
    text: "A small girl painting the new world within Ariandel. She plays a symbolic role, representing the creation of the next Painted World."
  },
  "Livid Pyromancer Dunnel": {
    imgs: ["character images/livid.jpeg"],
    text: "A hostile NPC invader tied to pyromancy. He does not relocate and serves only as a combat encounter."
  },

  // Dreg Heap
  "Stone-humped Hag": {
    imgs: ["character images/hag.jpeg"],
    text: "A merchant NPC found early in the Dreg Heap. She sells valuable goods but dies shortly after, leaving her ashes to continue her inventory at Firelink Shrine."
  },
  "Lapp": {
    imgs: ["character images/lapp.jpeg"],
    text: "A mysterious knight with amnesia, later revealed to be Patches. He helps the Ashen One throughout the Ringed City DLC before betraying or assisting depending on interpretation. He never appears in Firelink Shrine."
  },

  //  Ringed City
  "Shira": {
    imgs: ["character images/shira.jpeg"],
    text: "A loyal knight who serves Princess Filianore. She aids the Ashen One if aligned with her but turns hostile if Filianore is disturbed."
  },
  "Locust Preacher": {
    imgs: ["character images/preacher.jpeg"],
    text: "Grotesque insect-like NPCs who deliver cryptic sermons about humanity and the Dark Soul. They appear multiple times but are hostile or neutral depending on context."
  },
  "Judicator Argo": {
    imgs: ["character images/argo.jpeg"],
    text: "A giant cleric who presides over the Spear of the Church boss fight. He is a lore figure tied to the protection of Filianore."
  },
  "Filianore": {
    imgs: ["character images/filianore.jpeg"],
    text: "A divine princess who slumbers in the Ringed City. Disturbing her egg triggers the endgame events, leading to the battle with Slave Knight Gael. She never relocates or interacts directly."
  },
  "Moaning Knight": {
    imgs: ["character images/moaning.jpeg"],
    text: "A phantom invader encountered in the Ringed City. His armor emits constant wails, tying him to themes of torment."
  },
  "Ringed City Hollow": {
    imgs: ["character images/hollow.jpeg"],
    text: "Hostile enemies that embody the decayed state of the Ringed City. They do not relocate and serve purely as ambient lore figures."
  },
  "Silver Knight Ledo": {
    imgs: ["character images/ledo.jpg"],
    text: "A massive knight invader wielding Ledo’s Great Hammer. He appears in the Ringed City and serves as one of the final nods to Gwyn’s silver knights."
  }
};


// Modal Functions 
function openCharModal(name) {
  const info = charInfo[name];

  charModalTitle.textContent = name;
  charModalText.textContent = info ? info.text : "Description coming soon.";

  const imgSrc = info && info.imgs && info.imgs.length > 0
    ? info.imgs[0]
    : "https://via.placeholder.com/600x300?text=" + encodeURIComponent(name);

  charModalImg.src = imgSrc;

  charModal.style.display = "block";
}

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
