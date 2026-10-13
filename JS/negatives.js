const negativeStats = {
    dodge: {
        name: "Dodge",
        maxLevel: 18,
        pot: 85,
        type: "Enhance Dodge",
        matCost: { amount: 50, category: "Cloth" },
    },
    naturalHPRegen: {
        name: "Natural HP Regen",
        maxLevel: 32,
        pot: 79,
        type: "Enhance HP/MP",
        matCost: { amount: 25, category: "Metal" },
    },
    naturalMPRegen: {
        name: "Natural MP Regen",
        maxLevel: 16,
        pot: 79,
        type: "Enhance HP/MP",
        matCost: { amount: 50, category: "Wood" },
    },
    dodgePercent: {
        name: "Dodge%",
        maxLevel: 7,
        pot: 73,
        type: "Enhance Dodge",
        matCost: { amount: 100, category: "Cloth" },
    },

    // Elemental Resistance
    fireResistance: {
        name: "Fire Resistance%",
        maxLevel: 28,
        pot: 73,
        type: "Enhance Elements",
        matCost: { amount: 25, category: "Mana" },
    },
    waterResistance: {
        name: "Water Resistance%",
        maxLevel: 28,
        pot: 73,
        type: "Enhance Elements",
        matCost: { amount: 25, category: "Mana" },
    },
    windResistance: {
        name: "Wind Resistance%",
        maxLevel: 28,
        pot: 73,
        type: "Enhance Elements",
        matCost: { amount: 25, category: "Mana" },
    },
    earthResistance: {
        name: "Earth Resistance%",
        maxLevel: 28,
        pot: 73,
        type: "Enhance Elements",
        matCost: { amount: 25, category: "Mana" },
    },
    lightResistance: {
        name: "Light Resistance%",
        maxLevel: 28,
        pot: 73,
        type: "Enhance Elements",
        matCost: { amount: 25, category: "Mana" },
    },
    darkResistance: {
        name: "Dark Resistance%",
        maxLevel: 28,
        pot: 73,
        type: "Enhance Elements",
        matCost: { amount: 25, category: "Mana" },
    },

    // Defense
    defPercent: {
        name: "DEF%",
        maxLevel: 14,
        pot: 73,
        type: "Enhance Defense",
        matCost: { amount: 50, category: "Metal" },
    },
    mdefPercent: {
        name: "MDEF%",
        maxLevel: 14,
        pot: 73,
        type: "Enhance Defense",
        matCost: { amount: 50, category: "Metal" },
    },
    physicalResistance: {
        name: "Physical Resistance%",
        maxLevel: 14,
        pot: 73,
        type: "Enhance Defense",
        matCost: { amount: 50, category: "Metal" },
    },
    magicResistance: {
        name: "Magic Resistance%",
        maxLevel: 14,
        pot: 73,
        type: "Enhance Defense",
        matCost: { amount: 50, category: "Wood" },
    },

    naturalHPRegenPercent: {
        name: "Natural HP Regen%",
        maxLevel: 10,
        pot: 61,
        type: "Enhance HP/MP",
        matCost: { amount: 50, category: "Metal" },
    },
    naturalMPRegenPercent: {
        name: "Natural MP Regen%",
        maxLevel: 5,
        pot: 61,
        type: "Enhance HP/MP",
        matCost: { amount: 100, category: "Wood" },
    },
    def: {
        name: "DEF",
        maxLevel: 32,
        pot: 47,
        type: "Enhance Defense",
        matCost: { amount: 16.5, category: "Metal" },
    },
    mdef: {
        name: "MDEF",
        maxLevel: 32,
        pot: 47,
        type: "Enhance Defense",
        matCost: { amount: 16.5, category: "Metal" },
    },
    accuracy: {
        name: "Accuracy",
        maxLevel: 18,
        pot: 42,
        type: "Enhance Accuracy",
        matCost: { amount: 50, category: "Medicine" },
    },
    physicalPierce: {
        name: "Physical Pierce%",
        maxLevel: 9,
        pot: 42,
        type: "Enhance Attack",
        matCost: { amount: 100, category: "Beast" },
    },
    magicPierce: {
        name: "Magic Pierce%",
        maxLevel: 9,
        pot: 42,
        type: "Enhance Attack",
        matCost: { amount: 100, category: "Wood" },
    },

    // Main Stats
    str: {
        name: "STR",
        maxLevel: 32,
        pot: 39,
        type: "Enhance Stat",
        matCost: { amount: 25, category: "Beast" },
    },
    int: {
        name: "INT",
        maxLevel: 32,
        pot: 39,
        type: "Enhance Stat",
        matCost: { amount: 25, category: "Wood" },
    },
    vit: {
        name: "VIT",
        maxLevel: 32,
        pot: 39,
        type: "Enhance Stat",
        matCost: { amount: 25, category: "Metal" },
    },
    agi: {
        name: "AGI",
        maxLevel: 32,
        pot: 39,
        type: "Enhance Stat",
        matCost: { amount: 25, category: "Cloth" },
    },
    dex: {
        name: "DEX",
        maxLevel: 32,
        pot: 39,
        type: "Enhance Stat",
        matCost: { amount: 25, category: "Medicine" },
    },
    atkPercent: {
        name: "ATK%",
        maxLevel: 16,
        pot: 39,
        type: "Enhance Attack",
        matCost: { amount: 50, category: "Beast" },
    },
    matkPercent: {
        name: "MATK%",
        maxLevel: 16,
        pot: 39,
        type: "Enhance Attack",
        matCost: { amount: 50, category: "Wood" },
    },
    maxHPPercent: {
        name: "MaxHP%",
        maxLevel: 14,
        pot: 36,
        type: "Enhance HP/MP",
        matCost: { amount: 50, category: "Metal" },
    },
    accuracyPercent: {
        name: "Accuracy%",
        maxLevel: 7,
        pot: 36,
        type: "Enhance Accuracy",
        matCost: { amount: 100, category: "Medicine" },
    },
    stabilityPercent: {
        name: "Stability%",
        maxLevel: 7,
        pot: 36,
        type: "Enhance Attack",
        matCost: { amount: 100, category: "Medicine" },
    },
    ailmentResistance: {
        name: "Ailment Resistance%",
        maxLevel: 7,
        pot: 36,
        type: "Special Enhancement",
        matCost: { amount: 100, category: "Mana" },
    },

    // Critical Damage and Elemental Attack
    criticalDamagePercent: {
        name: "Critical Damage%",
        maxLevel: 12,
        pot: 33,
        type: "Enhance Critical",
        matCost: { amount: 50, category: "Mana" },
    },
    strongerAgainstFire: {
        name: "Stronger Against Fire%",
        maxLevel: 24,
        pot: 33,
        type: "Enhance Elements",
        matCost: { amount: 25, category: "Mana" },
    },
    strongerAgainstWater: {
        name: "Stronger Against Water%",
        maxLevel: 24,
        pot: 33,
        type: "Enhance Elements",
        matCost: { amount: 25, category: "Mana" },
    },
    strongerAgainstWind: {
        name: "Stronger Against Wind%",
        maxLevel: 24,
        pot: 33,
        type: "Enhance Elements",
        matCost: { amount: 25, category: "Mana" },
    },
    strongerAgainstEarth: {
        name: "Stronger Against Earth%",
        maxLevel: 24,
        pot: 33,
        type: "Enhance Elements",
        matCost: { amount: 25, category: "Mana" },
    },
    strongerAgainstLight: {
        name: "Stronger Against Light%",
        maxLevel: 24,
        pot: 33,
        type: "Enhance Elements",
        matCost: { amount: 25, category: "Mana" },
    },
    strongerAgainstDark: {
        name: "Stronger Against Dark%",
        maxLevel: 24,
        pot: 33,
        type: "Enhance Elements",
        matCost: { amount: 25, category: "Mana" },
    },

    // Percentage Stats
    strPercent: {
        name: "STR%",
        maxLevel: 10,
        pot: 30,
        type: "Enhance Stat",
        matCost: { amount: 50, category: "Beast" },
    },
    intPercent: {
        name: "INT%",
        maxLevel: 10,
        pot: 30,
        type: "Enhance Stat",
        matCost: { amount: 50, category: "Wood" },
    },
    vitPercent: {
        name: "VIT%",
        maxLevel: 10,
        pot: 30,
        type: "Enhance Stat",
        matCost: { amount: 50, category: "Metal" },
    },
    agiPercent: {
        name: "AGI%",
        maxLevel: 10,
        pot: 30,
        type: "Enhance Stat",
        matCost: { amount: 50, category: "Cloth" },
    },
    dexPercent: {
        name: "DEX%",
        maxLevel: 10,
        pot: 30,
        type: "Enhance Stat",
        matCost: { amount: 50, category: "Medicine" },
    },
    evasionRate: {
        name: "Evasion Rate%",
        maxLevel: 5,
        pot: 30,
        type: "Special Enhancement",
        matCost: { amount: 100, category: "Mana" },
    },
    guardPower: {
        name: "Guard Power",
        maxLevel: 5,
        pot: 30,
        type: "Special Enhancement",
        matCost: { amount: 100, category: "Mana" },
    },
    guardRate: {
        name: "Guard Rate%",
        maxLevel: 5,
        pot: 30,
        type: "Special Enhancement",
        matCost: { amount: 100, category: "Mana" },
    },
    maxMP: {
        name: "MaxMP",
        maxLevel: 15,
        pot: 27,
        type: "Enhance HP/MP",
        matCost: { amount: 33, category: "Wood" },
    },
    aggro: {
        name: "Aggro%",
        maxLevel: 15,
        pot: 27,
        type: "Special Enhancement",
        matCost: { amount: 33, category: "Mana" },
    },
    maxHP: {
        name: "MaxHP",
        maxLevel: 32,
        pot: 23,
        type: "Enhance HP/MP",
        matCost: { amount: 16.5, category: "Metal" },
    },
    atk: {
        name: "ATK",
        maxLevel: 32,
        pot: 23,
        type: "Enhance Attack",
        matCost: { amount: 16.5, category: "Beast" },
    },
    matk: {
        name: "MATK",
        maxLevel: 32,
        pot: 23,
        type: "Enhance Attack",
        matCost: { amount: 16.5, category: "Wood" },
    },
    criticalDamage: {
        name: "Critical Damage",
        maxLevel: 24,
        pot: 20,
        type: "Enhance Critical",
        matCost: { amount: 16.5, category: "Mana" },
    },

    // Speed and Critical Rate
    aspd: {
        name: "ASPD",
        maxLevel: 32,
        pot: 7,
        type: "Enhance Speed",
        matCost: { amount: 1, category: "Cloth" },
    },
    cspd: {
        name: "CSPD",
        maxLevel: 32,
        pot: 7,
        type: "Enhance Speed",
        matCost: { amount: 1, category: "Medicine" },
    },
    aspdPercent: {
        name: "ASPD%",
        maxLevel: 22,
        pot: 6,
        type: "Enhance Speed",
        matCost: { amount: 5, category: "Cloth" },
    },
    cspdPercent: {
        name: "CSPD%",
        maxLevel: 22,
        pot: 6,
        type: "Enhance Speed",
        matCost: { amount: 5, category: "Medicine" },
    },
    criticalRate: {
        name: "Critical Rate",
        maxLevel: 20,
        pot: 6,
        type: "Enhance Critical",
        matCost: { amount: 5, category: "Mana" },
    },
    criticalRatePercent: {
        name: "Critical Rate%",
        maxLevel: 20,
        pot: 6,
        type: "Enhance Critical",
        matCost: { amount: 5, category: "Mana" },
    },
    placeholderNegative: {
        name: "Placeholder Negative Stat (For Spacing)",
        maxLevel: 1,
        pot: 0,
        type: "Placeholder",
        matCost: { amount: 0, category: "Mana" },
    },
};


const negativeStatContainers = document.querySelectorAll(".negatives");

negativeStatContainers.forEach((container) => {
    const statSelect = container.querySelector(".negative-stat-selecter");
    const statLevelSelect = container.querySelector(".negative-stat-level");

    for (const key in negativeStats) {
        const option = document.createElement("option");

        option.value = key;
        option.textContent =
            `Return:${negativeStats[key].pot}pt, ${negativeStats[key].name} (${negativeStats[key].type}) lv-${negativeStats[key].maxLevel}`;

        statSelect.appendChild(option);
    }

    statSelect.addEventListener("change", function () {
        const selected = negativeStats[statSelect.value];

        statLevelSelect.innerHTML = '<option value="max">Max</option>';

        if (!selected) return;

        for (let i = 1; i <= selected.maxLevel; i++) {
            const option = document.createElement("option");

            option.value = i;
            option.textContent = i;
            statLevelSelect.appendChild(option);
        }
    });
});

