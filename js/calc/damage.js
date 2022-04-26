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
                if (character.meetsWeaponRequirement(weapon, attribute)) {
                    let scalingValue = weapon.levels[level][attribute];
                    let scalingCurve = weapon.scaling[damageType].curve;
                    let scalingPercentage = calcScalingPercentage(scalingCurve, character[attribute]);
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

// Yes, we lose some precision when sorting because we floor all floats now, but does a fraction of an attack point make a difference?
function calculateWeaponDamage(character, weapon, level) {
    let attackRating = new AttackRating(weapon, level);
    
    damageTypes.forEach((damageType) => {
        let weaponDamage = weapon.levels[level][damageType];
        let scaledDamage = calculateScaledDamageForType(character, weapon, level, damageType, weaponDamage);
        let sum = weaponDamage + scaledDamage;

        attackRating[damageType].weapon = Math.floor(weaponDamage);
        attackRating[damageType].scaled = Math.floor(scaledDamage);
        attackRating[damageType].total  = Math.floor(sum);
        attackRating.totalAR += sum;
    });

    passiveTypes.forEach(passiveType => {
        attackRating[passiveType] = Math.floor(calculateScaledPassiveEffect(character, weapon, level, passiveType));
    });

    // Clean the AR value once all the sums have been done
    attackRating.totalAR = Math.floor(attackRating.totalAR);
    attackRating.spellScaling = Math.floor(calculateSpellScaling(character, weapon, level));

    return attackRating;
}
