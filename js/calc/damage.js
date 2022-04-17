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
        Character.damageAttributes.forEach((attribute) => {
            if (weapon.damageTypeScalesWithAttribute(damageType, attribute)) {
                let stat = character[attribute];
                if (stat >= weapon.requirements[attribute]) {
                    let scalingValue = weapon.levels[level][attribute];
                    let scalingCurve = weapon.scaling[damageType].curve;
                    let scalingPercentage = calcScalingPercentage(scalingCurve, stat);
                    scaledDamage += (scalingPercentage * scalingValue * weaponDamage);
                } else {
                    scaledDamage = weaponDamage * -0.4;
                }
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
