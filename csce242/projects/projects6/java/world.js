// world.js

document.addEventListener("DOMContentLoaded", () => {
  const placeCards = document.querySelectorAll(".place-card");
  const modal = document.getElementById("placeModal");
  const closeBtn = modal.querySelector(".close");

  const modalTitle = document.getElementById("place-modal-title");
  const modalImg = document.getElementById("place-modal-img");
  const modalText = document.getElementById("place-modal-text");

  // Lore data for each location
  const placeData = {
    "Firelink Shrine": {
      img: "world images/firelink.jpeg",
      text: `
        <p>Firelink Shrine is the central hub of Dark Souls III, a crumbling sanctuary that sits outside time and space. 
        Here the Fire Keeper tends to the dying flame, guiding the Ashen One in their quest to rekindle or reject the First Flame. 
        The shrine gathers characters from across the world, including Andre the Blacksmith, merchants, sorcerers, and other NPCs whose stories intertwine with the player’s journey.</p>
        <p>The shrine itself is steeped in melancholy, its ruins representing the fading of the Age of Fire. 
        While no bosses appear here, Firelink reflects the choices made by the Ashen One: NPCs arrive or vanish, alliances shift, and the fate of the fire is decided. 
        It is a place of safety, yet also a reminder of inevitable decay and endings.</p>
      `
    },
    "Cemetery of Ash": {
      img: "world images/cemetary.jpeg",
      text: `
        <p>The Cemetery of Ash serves as the tutorial and prologue to Dark Souls III. 
        It is a graveyard where unkindled champions lie forgotten, their tombstones jutting from ashen soil. 
        The player awakens here, rising from the grave as the Ashen One, symbolizing both rebirth and futility.</p>
        <p>Enemies are limited to hollows and a few ambushers, but the area culminates with Iudex Gundyr, 
        the ceremonial judge who tests each unkindled warrior. His corruption by a parasitic mass foreshadows the spreading darkness. 
        Defeating him opens the way to Firelink Shrine, beginning the true pilgrimage.</p>
      `
    },
    "High Wall of Lothric": {
      img: "world images/lotheric.jpeg",
      text: `
        <p>The High Wall of Lothric is the fortress entrance to the kingdom of Lothric, towering high above the land. 
        Its battlements are patrolled by hollow soldiers and deadly Lothric knights, while wyverns perch on towers, unleashing torrents of flame upon intruders. 
        The architecture is grand yet fractured, reflecting the decline of the royal family.</p>
        <p>The area introduces the scale of Lothric’s challenges. Bosses fought here include Vordt of the Boreal Valley, 
        a knight reduced to a beast by Pontiff Sulyvahn’s corruption, and later the Dancer of the Boreal Valley, 
        whose graceful yet brutal combat symbolizes the kingdom’s fall to darkness.</p>
      `
    },
    "Undead Settlement": {
      img: "world images/undead.jpeg",
      text: `
        <p>The Undead Settlement is a grim village where the cursed were sent to await their miserable fate. 
        Shacks, gallows, and burning pyres line its streets, while fanatical Evangelists enforce cruel rites on the hollowed villagers. 
        Dogs, peasants, and monstrous thralls fill its alleys, creating an oppressive and chaotic atmosphere.</p>
        <p>The Settlement hides secrets and characters such as Siegward of Catarina and Cornyx the pyromancer. 
        Its boss, the Curse-rotted Greatwood, is a colossal, diseased tree whose festering body reflects the corruption of the settlement itself. 
        The fight serves as a grotesque spectacle, highlighting the futility of resisting the curse.</p>
      `
    },
    "Road of Sacrifices": {
      img: "world images/sacrifices.jpeg",
      text: `
        <p>The Road of Sacrifices is a marshy woodland path historically used to exile undead who were sent to be offerings for the flame. 
        Now, it is haunted by Corvians, half-human, half-bird creatures whose twisted forms reveal the horrors of transformation. 
        Rogue sorcerers and other corrupted wanderers also stalk the path, ambushing the unwary.</p>
        <p>This road connects the Settlement to the Cathedral of the Deep, symbolizing both physical and spiritual descent. 
        Orbeck of Vinheim and Anri of Astora can be found here, advancing key questlines. 
        The Crystal Sage serves as the boss, a powerful sorcerer who relies on illusions and long-range magic to confound the Ashen One.</p>
      `
    },
    "Cathedral of the Deep": {
      img: "world images/cathedral.jpeg",
      text: `
        <p>The Cathedral of the Deep is a vast, once-holy sanctuary now corrupted by the worship of the Deep. 
        Its high vaults and shadowed corners conceal thralls, hollowed clerics, and even slumbering giants chained within its halls. 
        Evangelists and knightly guardians reinforce the cathedral’s oppressive aura of twisted faith.</p>
        <p>Here the Ashen One confronts the Deacons of the Deep, a congregation of clerics bound to Aldrich. 
        The boss fight, fought against a collective hive mind, symbolizes the spread of corruption as the congregation itself becomes a vessel of evil. 
        The Cathedral embodies the dangers of blind devotion and the corruption of faith.</p>
      `
    },
    "Farron Keep": {
      img: "world images/farron.jpeg",
      text: `
        <p>Farron Keep is a poisonous swamp steeped in ancient history, where the Watchdogs of Farron eternally guard against intruders. 
        The area is covered in toxic sludge, populated by slugs, poisonous basilisks, and ghru tribesmen. 
        Its murky landscape reflects the decay of its guardians’ mission.</p>
        <p>The Abyss Watchers, linked by a single soul, are its lords. They endlessly battle one another and the Abyss, 
        symbolizing both duty and self-destruction. Their fight is one of Dark Souls III’s most iconic battles, 
        blending tragedy with spectacle as the Ashen One inherits their burden by defeating them.</p>
      `
    },
    "Catacombs of Carthus": {
      img: "world images/catacombs.jpeg",
      text: `
        <p>The Catacombs of Carthus are sprawling underground tombs riddled with traps, rolling boulders, and skeleton warriors that reanimate after death. 
        This labyrinthine area is suffused with death and decay, the air heavy with dust and bones. 
        Carthus was once a proud kingdom, but only its restless dead remain.</p>
        <p>The area’s climax is the battle against High Lord Wolnir, a colossal skeleton king wreathed in darkness. 
        Once a mighty conqueror, he was consumed by the Abyss, reduced to a shadow of his former glory. 
        His arena, a black void, symbolizes the abyss that ultimately claims all kingdoms.</p>
      `
    },
    "Smouldering Lake": {
      img: "world images/smouldering.jpeg",
      text: `
        <p>The Smouldering Lake is a fiery cavern buried beneath the Catacombs, a ruin of the once-great Izalith civilization. 
        Lava pools and collapsing ruins are guarded by giant crabs, flame-spewing statues, and chaos demons. 
        The lake serves as a haunting reminder of the failed experiment to create a First Flame, 
        which birthed demons and chaos itself.</p>
        <p>The Old Demon King, one of the last surviving demons, serves as the boss. 
        Ancient, weary, and burning with the last remnants of chaos, he represents the end of the demon legacy. 
        Defeating him closes the chapter of Izalith’s cursed history.</p>
      `
    },
    "Irithyll of the Boreal Valley": {
      img: "world images/boreal.jpeg",
      text: `
        <p>Irithyll of the Boreal Valley is a breathtaking frozen city bathed in perpetual moonlight. 
        Its gothic spires and icy streets are patrolled by Pontiff knights, beasts, and fanatical sorcerers loyal to Pontiff Sulyvahn. 
        The city exudes both beauty and menace, reflecting the Pontiff’s tyranny.</p>
        <p>Here, the Ashen One battles Pontiff Sulyvahn himself, a corrupting figure responsible for many of the kingdom’s horrors. 
        The city also serves as a gateway to Anor Londo, linking past and present. 
        Irithyll is a jewel of architecture and atmosphere, but beneath its beauty lies the cruelty of its ruler.</p>
      `
    },
    "Irithyll Dungeon": {
      img: "world images/dungeon.jpeg",
      text: `
        <p>The Irithyll Dungeon is a terrifying prison, a nightmarish labyrinth of cells and torture chambers. 
        Its Jailers wield brand irons that sap the player’s maximum health, heightening the sense of dread. 
        The screams of prisoners and the presence of monstrous horrors make this one of the game’s darkest areas.</p>
        <p>The dungeon leads into the Profaned Capital and contains lore about Yhorm the Giant. 
        Enemies include man-serpents, gargoyle beasts, and wretched prisoners twisted by torment. 
        It is a place of cruelty, fear, and suffering, reflecting the darker side of Irithyll’s rule.</p>
      `
    },
    "Profaned Capital": {
      img: "world images/profaned.jpeg",
      text: `
        <p>The Profaned Capital is a ruined city consumed by the profane flame, a destructive fire that burns endlessly. 
        Its crumbling towers and toxic swamps are filled with gargoyles, hand beasts, and cursed creatures. 
        The architecture tells of a once-proud kingdom, now reduced to ash and rubble.</p>
        <p>Yhorm the Giant, one of the Lords of Cinder, rules here. Once a benevolent monarch, 
        he linked the flame to protect his people but was ultimately undone by the Profaned Flame’s curse. 
        His tragic fight is symbolic of sacrifice and futility, 
        and Siegward of Catarina’s questline finds resolution here.</p>
      `
    },
    "Anor Londo": {
      img: "world images/anor.jpeg",
      text: `
        <p>Anor Londo, once the radiant city of the gods, returns in Dark Souls III as a ruin of its former glory. 
        Its cathedral halls are now shadowed and corrupted by Aldrich, Devourer of Gods. 
        The once-proud Silver Knights remain, patrolling its vast chambers in eternal duty.</p>
        <p>The boss here is Aldrich himself, a Lord of Cinder who devours divine beings, including Gwyndolin. 
        The battle is both grotesque and tragic, symbolizing how even gods are not safe from hunger and decay. 
        Anor Londo bridges the glory of the past with the corruption of the present.</p>
      `
    },
    "Lothric Castle": {
      img: "world images/castle.jpeg",
      text: `
        <p>Lothric Castle is the royal stronghold of the Lothric line, filled with dragons, sorcerers, and elite knights. 
        Its grand architecture and high walls reflect the kingdom’s power, though it too has fallen to ruin. 
        The castle is one of the final trials of the game, marking the climax of the Ashen One’s pilgrimage.</p>
        <p>Bosses here include Dragonslayer Armour, fought upon a grand bridge as a trial by fire, 
        and the Twin Princes, Lothric and Lorian, whose refusal to link the fire drives the game’s central conflict. 
        The castle embodies both majesty and decay, the proud home of a doomed royal family.</p>
      `
    },
    "Consumed King’s Garden": {
      img: "world images/consumed.jpeg",
      text: `
        <p>The Consumed King’s Garden is a poisonous, overgrown courtyard hidden beneath Lothric Castle. 
        Once a royal sanctuary, it has been overtaken by toxins and twisted creatures. 
        The area hints at experiments with dragons and forbidden knowledge pursued by King Oceiros.</p>
        <p>At its heart lies Oceiros, the Consumed King, driven to madness by his obsession with dragons and his imagined “invisible child.” 
        His fight is tragic and disturbing, symbolizing the corruption of ambition and paternal love twisted into lunacy.</p>
      `
    },
    "Grand Archives": {
      img: "world images/archives.jpeg",
      text: `
        <p>The Grand Archives is a massive, cursed library filled with scholars covered in wax to resist dark curses. 
        Enemies include crystal sages, scholars, and knights who stalk its twisting staircases and book-filled halls. 
        The archives contain ancient knowledge of the Lothric line and its dark destiny.</p>
        <p>The area culminates with the Twin Princes, fought after ascending the castle’s heights. 
        The Grand Archives symbolize forbidden knowledge, ambition, and the tragic choices of Lothric’s rulers.</p>
      `
    },
    "Kiln of the First Flame": {
      img: "world images/kiln.jpeg",
      text: `
        <p>The Kiln of the First Flame is the final area, a barren ashen landscape where the First Flame burns weakly. 
        The land is devoid of life, its gray sky and white ash reflecting the end of a dying age. 
        Few enemies appear here, but the area represents the culmination of all cycles.</p>
        <p>The final boss, the Soul of Cinder, embodies every warrior who ever linked the flame, including Gwyn himself. 
        Its shifting combat styles mirror the countless champions who came before. 
        The Kiln is the stage where the Ashen One decides the fate of the flame once and for all.</p>
      `
    },
    "Painted World of Ariandel": {
      img: "world images/painted.jpeg",
      text: `
        <p>The Painted World of Ariandel is a decaying painted realm, plagued by rot, beasts, and Corvians. 
        The snowy landscapes hide both beauty and corruption, while its denizens suffer under a curse of endless decay. 
        Sister Friede, the guardian of the painting, seeks to maintain this frozen prison rather than let it burn and be renewed.</p>
        <p>The bosses here, Sister Friede and Father Ariandel, embody themes of corruption, stagnation, and denial of the cycle. 
        Their battle is a brutal, multi-phase fight that reveals the true cost of clinging to decay rather than embracing change.</p>
      `
    },
    "The Dreg Heap": {
      img: "world images/dreg.jpeg",
      text: `
        <p>The Dreg Heap is a collapsing ruin where remnants of multiple kingdoms and ages have converged. 
        It is a place where the past quite literally falls into ruin, as cities and structures pile upon each other. 
        Angels and Harald knights patrol the area, representing fragments of forgotten ages.</p>
        <p>The Demon Prince serves as the boss, born from the merging of demon lords. 
        The area symbolizes the collapse of history itself, as all that was is pulled into the abyss of time’s end.</p>
      `
    },
    "The Ringed City": {
      img: "world images/ring.jpeg",
      text: `
        <p>The Ringed City is the final DLC area and one of the most important in Dark Souls lore. 
        It is an ancient city built at the world’s edge, home to the Pygmy Lords and the Church of Filianore. 
        The architecture is breathtaking, yet the city is filled with decay, knights, and angels, symbolizing the crumbling of all eras.</p>
        <p>Here the Ashen One faces some of the game’s most climactic battles, 
        culminating with Slave Knight Gael, whose endless hunger for the Dark Soul leads to the final collapse. 
        The Ringed City represents the true end of the cycle, closing the story of Dark Souls as a whole.</p>
      `
    }
  };

  // Open modal on click
  placeCards.forEach(card => {
    card.addEventListener("click", () => {
      const place = card.getAttribute("data-place");
      if (placeData[place]) {
        modalTitle.textContent = place;
        modalImg.src = placeData[place].img;
        modalText.innerHTML = placeData[place].text; 
        modal.style.display = "block";
      }
    });
  });

  // Close modal
  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
});
