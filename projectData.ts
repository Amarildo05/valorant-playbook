import { AgentsData, GameData, MapsData, Weapon } from "./types";

export const gameData: GameData = {
  title: "VALORANT",
  description: [
    {
      text: "Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020. The development of the game started in 2014. Valorant takes inspiration from the Counter-Strike series, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving.",
    },
    {
      text: "Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it. Agents have unique abilities, each requiring charges, as well as a unique ultimate ability that requires charging through kills, deaths, orbs, or objectives. Every player starts each round with a 'classic' pistol and one or more 'signature ability' charges. Other weapons and ability charges can be purchased using an in-game economic system that awards money based on the outcome of the previous round, any kills the player is responsible for, and any objectives completed. The game has an assortment of weapons including secondary guns like sidearms and primary guns like submachine guns, shotguns, machine guns, assault rifles, and sniper rifles. There are automatic and semi-automatic weapons that each have a unique shooting pattern that has to be controlled by the player to be able to shoot accurately. The player will get 5 unlocked agents when they create their account, and will have to unlock the rest of the agents by collecting an in-game currency called Kingdom Credits. Kingdom Credits can be acquired by playing games or completing daily and weekly tasks, and can be spent on unlocking new agents or cosmetic items. However, within the first 28 days of release, new Agents can only be unlocked with Valorant Points (VP), Agent Recruitment Events, or by having a linked and active Xbox Game Pass subscription. VP is an in-game currency that can only obtained by purchasing it with real money and it can be spent on cosmetic items or new agents.",
    },
    {
      text: "More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same. There are a large variety of playable agents available in the game. Agents are divided into 4 roles: Duelists, Sentinels, Initiators, and Controllers. Each agent has a different role which indicates how the agent is usually played.",
    },
  ],
  videoUrl: "https://www.youtube.com/embed/IhhjcB2ZjIM?si=J8sfHNtaQoWJ78Y0",
  backgroundVideo: "/video/background-video.mp4",
};

export const agentsData: AgentsData = {
  agents: [
    {
      id: "brimstone",
      image: "/agents/brimstone.jpg",
      info: {
        name: "BRIMSTONE",
        description:
          "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.",
      },
    },
    {
      id: "phoenix",
      image: "/agents/phoenix.png",
      info: {
        name: "PHOENIX",
        description:
          "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
      },
    },
    {
      id: "sage",
      image: "/agents/sage.jpg",
      info: {
        name: "SAGE",
        description:
          "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
      },
    },
    {
      id: "sova",
      image: "/agents/sova.jpg",
      info: {
        name: "SOVA",
        description:
          "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
      },
    },
    {
      id: "cypher",
      image: "/agents/cypher.jpg",
      info: {
        name: "CYPHER",
        description:
          "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
      },
    },
    {
      id: "reyna",
      image: "/agents/reyna.jpg",
      info: {
        name: "REYNA",
        description:
          "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
      },
    },
    {
      id: "omen",
      image: "/agents/omenn.png",
      info: {
        name: "OMEN",
        description:
          "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
      },
    },
    {
      id: "jett",
      image: "/agents/jett.jpg",
      info: {
        name: "JETT",
        description:
          "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
      },
    },
    {
      id: "chamber",
      image: "/agents/chamber.jpg",
      info: {
        name: "CHAMBER",
        description:
          "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
      },
    },
    {
      id: "kayo",
      image: "/agents/kayo.png",
      info: {
        name: "KAY/O",
        description:
          "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
      },
    },
    {
      id: "fade",
      image: "/agents/fade.jpg",
      info: {
        name: "FADE",
        description:
          "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears before crushing them in the dark.",
      },
    },
    {
      id: "viper",
      image: "/agents/viper.webp",
      info: {
        name: "VIPER",
        description:
          "The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mindgames surely will.",
      },
    },
  ],
};

export const weapons: Weapon[] = [
  {
    id: "ghost",
    image: "/weapons/ghost.png",
    info: {
      name: "GHOST",
      description:
        "The Ghost is accurate and carries a large magazine if you miss. Distant targets require a controlled fire rate. Quickly tap the trigger when you can see the whites of their eyes.",
    },
  },
  {
    id: "frenzy",
    image: "/weapons/frenzy.png",
    info: {
      name: "FRENZY",
      description:
        "Lightweight machine pistol that excels at firing on the move. Its high rate-of-fire can be difficult to control, so try short bursts at medium ranges.",
    },
  },
  {
    id: "sheriff",
    image: "/weapons/sheriff.png",
    info: {
      name: "SHERIFF",
      description:
        "Its high-impact rounds pack a ton of recoil and require true grit to master. Wield the Sheriff right, and your enemies will know they were expendable.",
    },
  },
  {
    id: "spectre",
    image: "/weapons/spectre.png",
    info: {
      name: "SPECTRE",
      description:
        "A jack-of-all-trades weapon with a great balance of damage, fire rate, and accuracy—at both short and mid range. It haunts the corners of every map and requires only steady aim to drop foes at long distance.",
    },
  },
  {
    id: "bucky",
    image: "/weapons/bucky.png",
    info: {
      name: "BUCKY",
      description:
        "Heavy but stable, Bucky’s primary fire is for holding tight corners or charging close quarters. Alternate fire strikes targets at medium range.",
    },
  },
  {
    id: "phantom",
    image: "/weapons/phantom.png",
    info: {
      name: "PHANTOM",
      description:
        "Go full auto for anyone who tests you up close and short controlled bursts scramble enemies from anywhere. Best when fired while stationary.",
    },
  },
  {
    id: "vandal",
    image: "/weapons/vandal.png",
    info: {
      name: "VANDAL",
      description:
        "The Vandal retains high damage over distance and rewards those who focus single shots at a target’s head. Extended fire results in less stability, however.",
    },
  },
  {
    id: "marshal",
    image: "/weapons/marshal.png",
    info: {
      name: "MARSHAL",
      description:
        "A nimble lever-action sniper rifle with a single zoom that can keep bullish enemies at bay. A slow rate of fire means you have to either hit the mark or leave yourself open to attacks.",
    },
  },
  {
    id: "operator",
    image: "/weapons/operator.png",
    info: {
      name: "OPERATOR",
      description:
        "A fierce bolt-action sniper rifle with high-powered dual zoom. Extremely immobile but fires an incredibly powerful round that can devastate a team with one shot.",
    },
  },
  {
    id: "odin",
    image: "/weapons/odin.png",
    info: {
      name: "ODIN",
      description:
        "Suppressive, high damage fire with surprising stability. Spray enemies at short range and use alt. fire to make yourself a living turret.",
    },
  },
];

export const mapData: MapsData = {
  maps: [
    {
      id: "sunset",
      image: "/maps/sunset.webp",
      info: {
        name: "SUNSET",
        description:
          "A disaster at a local kingdom facility threatens to engulf the whole neighborhood. Stop at your favorite food truck then fight across the city in this traditional three lane map.",
      },
    },
    {
      id: "lotus",
      image: "/maps/lotus.webp",
      info: {
        name: "LOTUS",
        description:
          "A mysterious structure housing an astral conduit radiates with ancient power. Great stone doors provide a variety of movement opportunities and unlock the paths to three mysterious sites.",
      },
    },
    {
      id: "haven",
      image: "/maps/haven.webp",
      info: {
        name: "HAVEN",
        description:
          "Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.",
      },
    },
    {
      id: "breeze",
      image: "/maps/breeze.webp",
      info: {
        name: "BREEZE",
        description:
          "Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.",
      },
    },
    {
      id: "bind",
      image: "/maps/bind.webp",
      info: {
        name: "BIND",
        description:
          "Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.",
      },
    },
    {
      id: "ascent",
      image: "/maps/ascent.webp",
      info: {
        name: "ASCENT",
        description:
          "An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.",
      },
    },
  ],
};