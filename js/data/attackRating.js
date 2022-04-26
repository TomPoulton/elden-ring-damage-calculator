class AttackRating {

    constructor(weapon, level) {
        this.weapon  = weapon;
        this.level   = level;
        this.totalAR = 0;
        damageTypes.forEach(damageType => {
            this[damageType] = {};
        });
    }

    formatPassive(passiveType) {
        let passiveTypeLabel = (passiveType === 'Scarlet Rot') ? 'Rot' : passiveType;
        return `${passiveTypeLabel} (${Math.floor(this[passiveType])})`;
    }

    formatPassives() {
        return passiveTypes.filter(passiveType => {
            return this[passiveType] > 0;
        }).map(passiveType => {
            return this.formatPassive(passiveType);
        }).join(', ');
    }
}
