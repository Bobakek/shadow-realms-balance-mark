
export interface Ability {
  id: string;
  name: string;
  description: string;
  icon: string;
  cooldown: number;
}

export interface GameClass {
  id: string;
  name: string;
  russianName: string;
  role: string;
  description: string;
  image: string;
  abilities: Ability[];
  color: string;
}

export const gameClasses: GameClass[] = [
  {
    id: "knight",
    name: "Twilight Knight",
    russianName: "Рыцарь Заката",
    role: "Tank / Melee Fighter",
    description: "A valiant protector wielding sacred armor and weapons. Sworn to defend allies against the darkness that threatens Андраэль.",
    image: "/classes/knight.png",
    color: "#9b87f5",
    abilities: [
      {
        id: "iron-oath",
        name: "Iron Oath",
        description: "Temporarily reduces incoming damage by 50%",
        icon: "/abilities/shield.svg",
        cooldown: 30
      },
      {
        id: "sacred-strike",
        name: "Sacred Strike",
        description: "Deals damage and stuns the enemy",
        icon: "/abilities/sword.svg",
        cooldown: 15
      },
      {
        id: "guardian-summon",
        name: "Guardian Summon",
        description: "Summons a magical guardian to protect allies",
        icon: "/abilities/summon.svg",
        cooldown: 60
      },
      {
        id: "valor",
        name: "Valor",
        description: "Increases group defense by 10%",
        icon: "/abilities/valor.svg",
        cooldown: 45
      }
    ]
  },
  {
    id: "pyromancer",
    name: "Pyromancer",
    russianName: "Пиромант",
    role: "Mage / AoE Damage",
    description: "Master of fire magic capable of devastating area attacks. Their flames burn brightest in the darkness of Андраэль.",
    image: "/classes/pyromancer.png",
    color: "#f97316",
    abilities: [
      {
        id: "fire-storm",
        name: "Fire Storm",
        description: "Sets an area ablaze, damaging all enemies",
        icon: "/abilities/fire.svg",
        cooldown: 25
      },
      {
        id: "flash",
        name: "Flash",
        description: "Instant explosion around the mage",
        icon: "/abilities/explosion.svg",
        cooldown: 12
      },
      {
        id: "heart-heat",
        name: "Heart Heat",
        description: "Enhances magical power",
        icon: "/abilities/heart.svg",
        cooldown: 40
      },
      {
        id: "flame-trail",
        name: "Flame Trail",
        description: "Leaves a trail of fire behind",
        icon: "/abilities/trail.svg",
        cooldown: 20
      }
    ]
  },
  {
    id: "assassin",
    name: "Shadow Assassin",
    russianName: "Теневой Убийца",
    role: "Assassin / Stealth",
    description: "Silent killer who strikes from the shadows. Masters of stealth and precision, they eliminate threats before they're even detected.",
    image: "/classes/assassin.png",
    color: "#403E43",
    abilities: [
      {
        id: "deadly-lunge",
        name: "Deadly Lunge",
        description: "Critical attack from behind",
        icon: "/abilities/dagger.svg",
        cooldown: 18
      },
      {
        id: "eclipse",
        name: "Eclipse",
        description: "Becomes invisible for 6 seconds",
        icon: "/abilities/invisibility.svg",
        cooldown: 30
      },
      {
        id: "poisoned-blade",
        name: "Poisoned Blade",
        description: "Deals damage over time",
        icon: "/abilities/poison.svg",
        cooldown: 22
      },
      {
        id: "shadow-jump",
        name: "Shadow Jump",
        description: "Teleports behind the enemy",
        icon: "/abilities/jump.svg",
        cooldown: 25
      }
    ]
  },
  {
    id: "druid",
    name: "Forest Druid",
    russianName: "Друид Леса",
    role: "Healer / Support",
    description: "Nature's chosen guardian who harnesses the healing power of Андраэль's forests. They can restore life and command forest spirits.",
    image: "/classes/druid.png",
    color: "#4ade80",
    abilities: [
      {
        id: "healing-roots",
        name: "Healing Roots",
        description: "Heals the target",
        icon: "/abilities/roots.svg",
        cooldown: 10
      },
      {
        id: "beast-spirit",
        name: "Beast Spirit",
        description: "Temporarily increases ally speed and strength",
        icon: "/abilities/beast.svg",
        cooldown: 35
      },
      {
        id: "nature-bonds",
        name: "Nature Bonds",
        description: "Slows enemies",
        icon: "/abilities/vine.svg",
        cooldown: 20
      },
      {
        id: "wild-call",
        name: "Wild Call",
        description: "Summons a wolf companion",
        icon: "/abilities/howl.svg",
        cooldown: 50
      }
    ]
  },
  {
    id: "necromancer",
    name: "Necromancer",
    russianName: "Некромант",
    role: "Summoner / Dark Mage",
    description: "Death's manipulator who commands undead forces. Their forbidden knowledge allows them to blur the line between life and death.",
    image: "/classes/necromancer.png",
    color: "#7E69AB",
    abilities: [
      {
        id: "raise-dead",
        name: "Raise Dead",
        description: "Summons a skeleton warrior",
        icon: "/abilities/skeleton.svg",
        cooldown: 40
      },
      {
        id: "rot-curse",
        name: "Rot Curse",
        description: "Reduces enemy armor",
        icon: "/abilities/curse.svg",
        cooldown: 25
      },
      {
        id: "life-drain",
        name: "Life Drain",
        description: "Heals the necromancer by dealing damage",
        icon: "/abilities/drain.svg",
        cooldown: 15
      },
      {
        id: "death-seal",
        name: "Death Seal",
        description: "Mark that explodes after enemy death",
        icon: "/abilities/seal.svg",
        cooldown: 30
      }
    ]
  },
  {
    id: "templar",
    name: "Light Templar",
    russianName: "Храмовник Света",
    role: "Support / Fighter",
    description: "Holy warrior infused with divine light to cleanse the corruption from Андраэль. Their presence alone can repel the forces of darkness.",
    image: "/classes/templar.png",
    color: "#facc15",
    abilities: [
      {
        id: "healing-light",
        name: "Healing Light",
        description: "Mass healing",
        icon: "/abilities/light.svg",
        cooldown: 30
      },
      {
        id: "blessing",
        name: "Blessing",
        description: "Increases group damage",
        icon: "/abilities/blessing.svg",
        cooldown: 45
      },
      {
        id: "light-shield",
        name: "Light Shield",
        description: "Absorbs damage",
        icon: "/abilities/shield-light.svg",
        cooldown: 25
      },
      {
        id: "justice-strike",
        name: "Justice Strike",
        description: "Deals additional damage to undead",
        icon: "/abilities/hammer.svg",
        cooldown: 18
      }
    ]
  },
  {
    id: "engineer",
    name: "Guild Engineer",
    russianName: "Инженер Гильдии",
    role: "Crafter / Support",
    description: "Master inventor who combines magic and technology. Their ingenious devices can turn the tide of battle in unexpected ways.",
    image: "/classes/engineer.png",
    color: "#8A898C",
    abilities: [
      {
        id: "spike-turret",
        name: "Spike Turret",
        description: "Automatically attacks enemies",
        icon: "/abilities/turret.svg",
        cooldown: 35
      },
      {
        id: "mechanical-golem",
        name: "Mechanical Golem",
        description: "Temporary ally",
        icon: "/abilities/golem.svg",
        cooldown: 60
      },
      {
        id: "mechanism-acceleration",
        name: "Mechanism Acceleration",
        description: "Reduces group skill cooldowns",
        icon: "/abilities/gear.svg",
        cooldown: 50
      },
      {
        id: "field-repair",
        name: "Field Repair",
        description: "Restores ally armor",
        icon: "/abilities/repair.svg",
        cooldown: 15
      }
    ]
  },
  {
    id: "wanderer",
    name: "Sand Wanderer",
    russianName: "Странник Песков",
    role: "Archer / Tactician",
    description: "Nomadic archer whose arrows never miss. They've learned to survive in the harshest regions of Андраэль and use the environment to their advantage.",
    image: "/classes/wanderer.png",
    color: "#ca8a04",
    abilities: [
      {
        id: "vulnerable-shot",
        name: "Vulnerable Shot",
        description: "Critical damage",
        icon: "/abilities/bow.svg",
        cooldown: 12
      },
      {
        id: "stunning-arrow",
        name: "Stunning Arrow",
        description: "Paralyzes the enemy",
        icon: "/abilities/arrow.svg",
        cooldown: 20
      },
      {
        id: "sand-trap",
        name: "Sand Trap",
        description: "Slows all in the zone",
        icon: "/abilities/trap.svg",
        cooldown: 25
      },
      {
        id: "desert-wind",
        name: "Desert Wind",
        description: "Increases speed and arrow damage",
        icon: "/abilities/wind.svg",
        cooldown: 40
      }
    ]
  }
];
