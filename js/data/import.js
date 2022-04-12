let weaponCount = 0;
let weapons = [];

function loadWeaponData() {
    const extraData = $.csv.toObjects(extraDataCSV);

    weaponCount = extraData.length;
    weapons = [weaponCount];

    for (let i = 0; i < weaponCount; i++) {
        const weapon = extraData[i];
        weapons[i] = {
            name:       weapon['Name'],
            weaponName: weapon['Weapon Name'],
            weaponType: weapon['Weapon Type'],
            affinity:   weapon['Affinity'],
            maxUpgrade: parseInt(weapon['Max Upgrade']),
            requirements: {},
            physicalDamageType: weapon['Physical Damage Type']
        }
        damageAttributes.forEach(attribute => {
            weapons[i].requirements[attribute] = parseInt(weapon[`Required (${attribute})`]);
        });
    }
    
    // Clean up
    delete extraDataCSV;
    delete extraData;
}

function loadWeaponLevelsData() {
    const attack = $.csv.toObjects(attackCSV);
    const scaling = $.csv.toObjects(scalingCSV);
    const passive = $.csv.toObjects(passiveCSV);

    for (let i = 0; i < weaponCount; i++) {
        const weaponAttack  = attack[i];
        const weaponScaling = scaling[i];
        const weaponPassive = passive[i];
        
        // do name check?
        
        weapons[i].levels = [weapons[i].maxUpgrade + 1];
        for (let l = 0; l <= weapons[i].maxUpgrade; l++) {
            weapons[i].levels[l] = {
                Physical:  parseFloat(weaponAttack[`Phys +${l}`]),
                Magic:     parseFloat(weaponAttack[`Mag +${l}`]),
                Fire:      parseFloat(weaponAttack[`Fire +${l}`]),
                Lightning: parseFloat(weaponAttack[`Ligh +${l}`]),
                Holy:      parseFloat(weaponAttack[`Holy +${l}`]),
            }
            damageAttributes.forEach(attribute => {
                weapons[i].levels[l][attribute] = parseFloat(weaponScaling[`${attribute} +${l}`]);
            });
            loadPassiveValues(weapons[i], l, weaponPassive);
        }
        setPassiveEffects(weapons[i]);
    }

    // Clean up
    delete attackCSV;
    delete attack;
    delete scalingCSV;
    delete scaling;
    delete passiveCSV;
    delete passive;
}

function loadPassiveValues(weapon, level, weaponPassive) {
    passiveTypes.forEach(passiveType => {
        if (passiveType === 'Scarlet Rot' && weapon.name === 'Cold Antspur Rapier') {
            let rot = 0;
            switch (level) {
                case 0:  rot = 50; break;
                case 1:  rot = 55; break;
                case 2:  rot = 60; break;
                case 3:  rot = 65; break;
                case 4:  rot = 70; break;
                case 5:  rot = 75; break;
                default: rot = 0; // Rot increases upto level 5 then drops to 0 just for this weapon !?!?
            }
            weapon.levels[level][passiveType] = rot;
        }
        else if (flatPassives.includes(passiveType)) {
            weapon.levels[level][passiveType] = parseInt(weaponPassive[`${passiveType} +0`]);
        }
        else {
            weapon.levels[level][passiveType] = parseInt(weaponPassive[`${passiveType} +${level}`]);
        }
    });
}

function setPassiveEffects(weapon) {
    weapon.passiveEffects = passiveTypes.filter(passiveType => {
        return (weapon.levels[0][passiveType] > 0);
    });
}

function loadWeaponScalingData() {
    const elementScalingFlags  = $.csv.toObjects(attackElementCorrectParamCSV);
    const elementScalingCurves = $.csv.toObjects(calcCorrectGraphIDCSV);

    for (let i = 0; i < weaponCount; i++) {
        const weaponElementScalingCurves  = elementScalingCurves[i];
        const weaponElementScalingPattern = weaponElementScalingCurves[`AttackElementCorrect ID`];
        // do name check
        const weaponElementScalingFlags = elementScalingFlags.find((elementFlags) => {
            return elementFlags['Row ID'] === weaponElementScalingPattern;
        });

        weapons[i].scaling = {};
        damageTypes.forEach((element) => {
            weapons[i].scaling[element] = {
                curve: parseInt(weaponElementScalingCurves[element]),
            }
            damageAttributes.forEach(attribute => {
                weapons[i].scaling[element][attribute] = parseInt(weaponElementScalingFlags[`${element} Scaling: ${attribute.toUpperCase()}`]);
            });
        });
    }

    // Clean up
    delete attackElementCorrectParamCSV;
    delete elementScalingFlags;
    delete calcCorrectGraphIDCSV;
    delete elementScalingCurves;
}

loadWeaponData();
loadWeaponLevelsData();
loadWeaponScalingData();

// ######################################
// console.log(weapons);
// ######################################
