class Weapon {

    constructor(name, weaponName, affinity, weaponType, maxUpgrade, physicalDamageType) {
        this.name               = name;
        this.weaponName         = weaponName;
        this.affinity           = affinity;
        this.weaponType         = weaponType;
        this.maxUpgrade         = maxUpgrade;
        this.physicalDamageType = physicalDamageType;
        this.canCastSpells      = (weaponType === 'Glintstone Staff' || weaponType === 'Sacred Seal');
        this.requirements       = {};
        this.scaling            = {};
        this.passiveEffects     = [];
        this.levels             = [];
    }

    damageTypeScalesWithAttribute(damageType, attribute) {
        return (this.scaling[damageType][attribute] === 1);
    }
}
