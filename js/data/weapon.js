class Weapon {

    constructor(name, weaponName, affinity, weaponType, maxUpgrade, physicalDamageType, weight) {
        this.name               = name;
        this.weaponName         = weaponName;
        this.affinity           = affinity;
        this.weaponType         = weaponType;
        this.maxUpgrade         = maxUpgrade;
        this.physicalDamageType = physicalDamageType;
        this.weight             = weight;
        this.canCastSpells      = (weaponType === 'Glintstone Staff' || weaponType === 'Sacred Seal');
        this.requirements       = {};
        this.scaling            = {};
        this.passiveEffects     = [];
        this.levels             = [];
    }

    damageTypeScalesWithAttribute(damageType, attribute) {
        return (this.scaling[damageType][attribute] === 1);
    }

    formatScaling(attribute, level, showValue = true) {
        let scaling = this.levels[level][attribute];
        if (scaling === 0) {
            return '';
        } else {
            let displayValue = Math.floor(scaling * 100);
            let ratingLetter = scalingRating(scaling);
            return (showValue) ? `${ratingLetter} (${displayValue})` : ratingLetter;
        }
    }

    formatRequirement(attribute) {
        let requirement = this.requirements[attribute];
        return (requirement > 0) ? requirement : '';
    }
}
