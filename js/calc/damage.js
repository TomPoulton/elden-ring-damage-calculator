function calculateScaledPassiveEffect(character, weapon, level, passiveType) {
    let passiveValue  = weapon.levels[level][passiveType];
    let arcaneScaling = weapon.levels[level]['Arc'];
    let arcaneValue = character['Arc'];

    if (scaledPassives.includes(passiveType) && arcaneScaling > 0) {
        let passiveScalingPercentage = calcPassiveScalingPercentage(arcaneValue);
        return (((passiveScalingPercentage * passiveValue) * arcaneScaling) + passiveValue);
    } else {
        return passiveValue;
    }
}

// weaponDamage is the damage of a certain type that the weapon puts out at that level
function calculateScaledDamageForType(character, weapon, level, damageType, weaponDamage) {
    let scaledDamage = 0;
    if (weaponDamage > 0) {
        damageAttributes.forEach((attribute) => {
            // Check the flag to see if weapon scales this damage type with this attribute
            if (weapon.scaling[damageType][attribute] === 1) {
                attributeValue = character[attribute];
                scalingValue = weapon.levels[level][attribute];
                scalingCurve = weapon.scaling[damageType].curve;
                scalingPercentage = calcScalingPercentage(scalingCurve, attributeValue);
                scaledDamage += (scalingPercentage * scalingValue * weaponDamage);
            }
        });
    }
    return scaledDamage;
}

function calculateSpellScaling(character, weapon, level) {
    if (weapon.weaponType === 'Glintstone Staff' || weapon.weaponType === 'Sacred Seal') {
        let magicScaling = calculateScaledDamageForType(character, weapon, level, 'Magic', 1);
        return (100 + (magicScaling * 100));
    } else {
        return 0;
    }
}

function calculateWeaponDamage(character, weapon, level) {
    let damage = {
        weapon: weapon,
        level: level,
        totalAR: 0,
    }
    damageTypes.forEach(damageType => {
        damage[damageType] = {};
    });

    // This is a quick and dirty implementation that sets damage to 0 if you don't meet the requirements
    if (character.Str < weapon.requirements.Str ||
        character.Dex < weapon.requirements.Dex ||
        character.Int < weapon.requirements.Int ||
        character.Fai < weapon.requirements.Fai ||
        character.Arc < weapon.requirements.Arc) {
            damageTypes.forEach((damageType) => {
                damage[damageType].weapon = 0;
                damage[damageType].scaled = 0;
                damage[damageType].total  = 0;
                damage.totalAR = 0;
            });
            return damage;
    }

    damageTypes.forEach((damageType) => {
        let weaponDamage = weapon.levels[level][damageType];
        let scaledDamage = calculateScaledDamageForType(character, weapon, level, damageType, weaponDamage);
        let sum = weaponDamage + scaledDamage;

        damage[damageType].weapon = weaponDamage;
        damage[damageType].scaled = scaledDamage;
        damage[damageType].total  = sum;
        damage.totalAR += sum;
    });

    passiveTypes.forEach(passiveType => {
        damage[passiveType] = calculateScaledPassiveEffect(character, weapon, level, passiveType);
    });

    damage.spellScaling = calculateSpellScaling(character, weapon, level);

    return damage;
}
