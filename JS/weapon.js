const stats = {
  // Enhance Critical
  criticalRate: {
    name: "Critical Rate",
    maxLevel: 32,
    pot: 1,
    type: "Enhance Critical",
    matCost: { amount: 5, category: "Mana" },
  },
  criticalRatePercent: {
    name: "Critical Rate%",
    maxLevel: 32,
    pot: 1,
    type: "Enhance Critical",
    matCost: { amount: 5, category: "Mana" },
  },
  criticalDamage: {
    name: "Critical Damage",
    maxLevel: 24,
    pot: 3,
    type: "Enhance Critical",
    matCost: { amount: 16.5, category: "Mana" },
  },
  criticalDamagePercent: {
    name: "Critical Damage%",
    maxLevel: 12,
    pot: 10,
    type: "Enhance Critical",
    matCost: { amount: 50, category: "Mana" },
  },

  // Enhance Attack
  atk: {
    name: "ATK",
    maxLevel: 32,
    pot: 6,
    type: "Enhance Attack",
    matCost: { amount: 16.5, category: "Beast" },
  },
  atkPercent: {
    name: "ATK%",
    maxLevel: 16,
    pot: 20,
    type: "Enhance Attack",
    matCost: { amount: 50, category: "Beast" },
  },
  matk: {
    name: "MATK",
    maxLevel: 32,
    pot: 6,
    type: "Enhance Attack",
    matCost: { amount: 16.5, category: "Wood" },
  },
  matkPercent: {
    name: "MATK%",
    maxLevel: 16,
    pot: 20,
    type: "Enhance Attack",
    matCost: { amount: 50, category: "Wood" },
  },
  stabilityPercent: {
    name: "Stability%",
    maxLevel: 7,
    pot: 20,
    type: "Enhance Attack",
    matCost: { amount: 100, category: "Medicine" },
  },
  physicalPiercePercent: {
    name: "Physical Pierce%",
    maxLevel: 16,
    pot: 40,
    type: "Enhance Attack",
    matCost: { amount: 100, category: "Beast" },
  },
  magicPiercePercent: {
    name: "Magic Pierce%",
    maxLevel: 16,
    pot: 40,
    type: "Enhance Attack",
    matCost: { amount: 100, category: "Wood" },
  },

  // Enhance Speed
  aspd: {
    name: "ASPD",
    maxLevel: 32,
    pot: 1,
    type: "Enhance Speed",
    matCost: { amount: 1, category: "Cloth" },
  },
  aspdPercent: {
    name: "ASPD%",
    maxLevel: 22,
    pot: 1,
    type: "Enhance Speed",
    matCost: { amount: 5, category: "Cloth" },
  },
  cspd: {
    name: "CSPD",
    maxLevel: 32,
    pot: 1,
    type: "Enhance Speed",
    matCost: { amount: 1, category: "Medicine" },
  },
  cspdPercent: {
    name: "CSPD%",
    maxLevel: 22,
    pot: 1,
    type: "Enhance Speed",
    matCost: { amount: 5, category: "Medicine" },
  },

  // Enhance Stat
  str: {
    name: "STR",
    maxLevel: 32,
    pot: 5,
    type: "Enhance Stat",
    matCost: { amount: 25, category: "Beast" },
  },
  strPercent: {
    name: "STR%",
    maxLevel: 10,
    pot: 10,
    type: "Enhance Stat",
    matCost: { amount: 50, category: "Beast" },
  },
  int: {
    name: "INT",
    maxLevel: 32,
    pot: 5,
    type: "Enhance Stat",
    matCost: { amount: 25, category: "Wood" },
  },
  intPercent: {
    name: "INT%",
    maxLevel: 10,
    pot: 10,
    type: "Enhance Stat",
    matCost: { amount: 50, category: "Wood" },
  },
  vit: {
    name: "VIT",
    maxLevel: 32,
    pot: 5,
    type: "Enhance Stat",
    matCost: { amount: 25, category: "Metal" },
  },
  vitPercent: {
    name: "VIT%",
    maxLevel: 10,
    pot: 10,
    type: "Enhance Stat",
    matCost: { amount: 50, category: "Metal" },
  },
  agi: {
    name: "AGI",
    maxLevel: 32,
    pot: 5,
    type: "Enhance Stat",
    matCost: { amount: 25, category: "Cloth" },
  },
  agiPercent: {
    name: "AGI%",
    maxLevel: 10,
    pot: 10,
    type: "Enhance Stat",
    matCost: { amount: 50, category: "Cloth" },
  },
  dex: {
    name: "DEX",
    maxLevel: 32,
    pot: 5,
    type: "Enhance Stat",
    matCost: { amount: 25, category: "Medicine" },
  },
  dexPercent: {
    name: "DEX%",
    maxLevel: 10,
    pot: 10,
    type: "Enhance Stat",
    matCost: { amount: 50, category: "Medicine" },
  },

  // Enhance HP/MP
  naturalHpRegen: {
    name: "Natural HP Regen",
    maxLevel: 32,
    pot: 5,
    type: "Enhance HP/MP",
    matCost: { amount: 25, category: "Metal" },
  },
  naturalHpRegenPercent: {
    name: "Natural HP Regen%",
    maxLevel: 10,
    pot: 10,
    type: "Enhance HP/MP",
    matCost: { amount: 50, category: "Metal" },
  },
  naturalMpRegen: {
    name: "Natural MP Regen",
    maxLevel: 16,
    pot: 10,
    type: "Enhance HP/MP",
    matCost: { amount: 50, category: "Wood" },
  },
  naturalMpRegenPercent: {
    name: "Natural MP Regen%",
    maxLevel: 5,
    pot: 20,
    type: "Enhance HP/MP",
    matCost: { amount: 100, category: "Wood" },
  },
  maxHp: {
    name: "MaxHP",
    maxLevel: 32,
    pot: 3,
    type: "Enhance HP/MP",
    matCost: { amount: 16.5, category: "Metal" },
  },
  maxHpPercent: {
    name: "MaxHP%",
    maxLevel: 14,
    pot: 10,
    type: "Enhance HP/MP",
    matCost: { amount: 50, category: "Metal" },
  },
  maxMp: {
    name: "MaxMP",
    maxLevel: 21,
    pot: 6,
    type: "Enhance HP/MP",
    matCost: { amount: 33, category: "Wood" },
  },

  // Enhance Defense
  def: {
    name: "DEF",
    maxLevel: 32,
    pot: 3,
    type: "Enhance Defense",
    matCost: { amount: 16.5, category: "Metal" },
  },
  defPercent: {
    name: "DEF%",
    maxLevel: 14,
    pot: 3,
    type: "Enhance Defense",
    matCost: { amount: 50, category: "Metal" },
  },
  mdef: {
    name: "MDEF",
    maxLevel: 32,
    pot: 3,
    type: "Enhance Defense",
    matCost: { amount: 16.5, category: "Metal" },
  },
  mdefPercent: {
    name: "MDEF%",
    maxLevel: 14,
    pot: 3,
    type: "Enhance Defense",
    matCost: { amount: 50, category: "Metal" },
  },
  physicalResistancePercent: {
    name: "Physical Resistance%",
    maxLevel: 14,
    pot: 3,
    type: "Enhance Defense",
    matCost: { amount: 50, category: "Metal" },
  },
  magicResistancePercent: {
    name: "Magic Resistance%",
    maxLevel: 14,
    pot: 3,
    type: "Enhance Defense",
    matCost: { amount: 50, category: "Wood" },
  },

  // Enhance Accuracy
  accuracy: {
    name: "Accuracy",
    maxLevel: 18,
    pot: 20,
    type: "Enhance Accuary",
    matCost: { amount: 50, category: "Medicine" },
  },
  accuracyPercent: {
    name: "Accuracy%",
    maxLevel: 7,
    pot: 40,
    type: "Enhance Accuary",
    matCost: { amount: 100, category: "Medicine" },
  },

  // Enhance Dodge
  dodge: {
    name: "Dodge",
    maxLevel: 18,
    pot: 10,
    type: "Enhance Dodge",
    matCost: { amount: 50, category: "Cloth" },
  },
  dodgePercent: {
    name: "Dodge%",
    maxLevel: 7,
    pot: 20,
    type: "Enhance Dodge",
    matCost: { amount: 100, category: "Cloth" },
  },

  // Enhance Elements
  strongerAgainstFire: {
    name: "Stronger Against Fire%",
    maxLevel: 24,
    pot: 5,
    type: "Enhance Elements",
    matCost: { amount: 25, category: "Mana" },
  },
  strongerAgainstWater: {
    name: "Stronger Against Water%",
    maxLevel: 24,
    pot: 5,
    type: "Enhance Elements",
    matCost: { amount: 25, category: "Mana" },
  },
  strongerAgainstWind: {
    name: "Stronger Against Wind%",
    maxLevel: 24,
    pot: 5,
    type: "Enhance Elements",
    matCost: { amount: 25, category: "Mana" },
  },
  strongerAgainstEarth: {
    name: "Stronger Against Earth%",
    maxLevel: 24,
    pot: 5,
    type: "Enhance Elements",
    matCost: { amount: 25, category: "Mana" },
  },
  strongerAgainstLight: {
    name: "Stronger Against Light%",
    maxLevel: 24,
    pot: 5,
    type: "Enhance Elements",
    matCost: { amount: 25, category: "Mana" },
  },
  strongerAgainstDark: {
    name: "Stronger Against Dark%",
    maxLevel: 24,
    pot: 5,
    type: "Enhance Elements",
    matCost: { amount: 25, category: "Mana" },
  },
  fireResistancePercent: {
    name: "Fire Resistance%",
    maxLevel: 28,
    pot: 10,
    type: "Enhance Elements",
    matCost: { amount: 25, category: "Mana" },
  },
  waterResistancePercent: {
    name: "Water Resistance%",
    maxLevel: 28,
    pot: 10,
    type: "Enhance Elements",
    matCost: { amount: 25, category: "Mana" },
  },
  windResistancePercent: {
    name: "Wind Resistance%",
    maxLevel: 28,
    pot: 10,
    type: "Enhance Elements",
    matCost: { amount: 25, category: "Mana" },
  },
  earthResistancePercent: {
    name: "Earth Resistance%",
    maxLevel: 28,
    pot: 10,
    type: "Enhance Elements",
    matCost: { amount: 25, category: "Mana" },
  },
  lightResistancePercent: {
    name: "Light Resistance%",
    maxLevel: 28,
    pot: 10,
    type: "Enhance Elements",
    matCost: { amount: 25, category: "Mana" },
  },
  darkResistancePercent: {
    name: "Dark Resistance%",
    maxLevel: 28,
    pot: 10,
    type: "Enhance Elements",
    matCost: { amount: 25, category: "Mana" },
  },

  // Special Enhancement
  ailmentResistancePercent: {
    name: "Ailment Resistance%",
    maxLevel: 28,
    pot: 20,
    type: "Special Enhancement",
    matCost: { amount: 100, category: "Mana" },
  },
  guardPower: {
    name: "Guard Power",
    maxLevel: 28,
    pot: 20,
    type: "Special Enhancement",
    matCost: { amount: 100, category: "Mana" },
  },
  guardRatePercent: {
    name: "Guard Rate%",
    maxLevel: 28,
    pot: 20,
    type: "Special Enhancement",
    matCost: { amount: 100, category: "Mana" },
  },
  evasionRatePercent: {
    name: "Evasion Rate%",
    maxLevel: 28,
    pot: 20,
    type: "Special Enhancement",
    matCost: { amount: 100, category: "Mana" },
  },
  aggroPercent: {
    name: "Aggro%",
    maxLevel: 28,
    pot: 6,
    type: "Special Enhancement",
    matCost: { amount: 33, category: "Mana" },
  },

    //Element Awakening
  awakenFire: {
    name: "Fire Element",
    maxLevel: 1,
    pot: 100,
    type: "Awaken Elements",
    matCost: { amount: 150, category: "Mana"},
  },

  awakenWater: {
    name: "Water Element",
    maxLevel: 1,
    pot: 100,
    type: "Awaken Elements",
    matCost: { amount: 150, category: "Mana"},
  },

  awakenWind: {
    name: "Wind Element",
    maxLevel: 1,
    pot: 100,
    type: "Awaken Elements",
    matCost: { amount: 150, category: "Mana"},
  },

  awakenEarth: {
    name: "Earth Element",
    maxLevel: 1,
    pot: 100,
    type: "Awaken Elements",
    matCost: { amount: 150, category: "Mana"},
  },

  awakenLight: {
    name: "Light Element",
    maxLevel: 1,
    pot: 100,
    type: "Awaken Elements",
    matCost: { amount: 150, category: "Mana"},
  },

  awakenDark: {
    name: "Dark Element",
    maxLevel: 1,
    pot: 100,
    type: "Awaken Elements",
    matCost: { amount: 150, category: "Mana"},
  },

  // Enhance Defense - Damage Reduction
  reduceDamageFoeEpicenter: {
    name: "% Reduce Dmg (Foe Epicenter)",
    maxLevel: 12,
    pot: 6,
    type: "Enhance Defense",
    matCost: { amount: 15, category: "Metal" },
  },
  reduceDamagePlayerEpicenter: {
    name: "% Reduce Dmg (Player Epicenter)",
    maxLevel: 12,
    pot: 3,
    type: "Enhance Defense",
    matCost: { amount: 15, category: "Metal" },
  },
  reduceDamageStraightLine: {
    name: "% Reduce Dmg (Straight Line)",
    maxLevel: 12,
    pot: 6,
    type: "Enhance Defense",
    matCost: { amount: 15, category: "Beast" },
  },
  reduceDamageCharge: {
    name: "% Reduce Dmg (Charge)",
    maxLevel: 12,
    pot: 6,
    type: "Enhance Defense",
    matCost: { amount: 15, category: "Beast" },
  },
  reduceDamageMeteor: {
    name: "% Reduce Dmg (Meteor)",
    maxLevel: 12,
    pot: 4,
    type: "Enhance Defense",
    matCost: { amount: 15, category: "Medicine" },
  },
  reduceDamageBullet: {
    name: "% Reduce Dmg (Bullet)",
    maxLevel: 12,
    pot: 4,
    type: "Enhance Defense",
    matCost: { amount: 15, category: "Wood" },
  },
  reduceDamageBowling: {
    name: "% Reduce Dmg (Bowling)",
    maxLevel: 12,
    pot: 4,
    type: "Enhance Defense",
    matCost: { amount: 15, category: "Wood" },
  },
  reduceDamageFloor: {
    name: "% Reduce Dmg (Floor)",
    maxLevel: 12,
    pot: 4,
    type: "Enhance Defense",
    matCost: { amount: 15, category: "Medicine" },
  },
};

const statSelect = document.getElementById("stat-selecter");

for (const key in stats) {
  const option = document.createElement("option");

  option.value = key;
  option.textContent = `MaxLv:${stats[key].maxLevel}, ${stats[key].name} (${stats[key].type}) Pot:${stats[key].pot}`;

  statSelect.appendChild(option);
};


const statLevelSelect = document.getElementById("stat-level");

statSelect.addEventListener("change", function () {
    const selected = stats[statSelect.value];

    statLevelSelect.innerHTML = '<option value="max">Max</option>';

    if (!selected) return;

    for (let i = 1; i <= selected.maxLevel; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        statLevelSelect.appendChild(option);
    }
});



