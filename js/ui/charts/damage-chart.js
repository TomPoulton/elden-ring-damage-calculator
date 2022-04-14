class DamageChart extends Chart {

    constructor(chartElement) {
        let yMax = 1200;
        let labelFormat = function(v, id, i, j) { return v; };
        super(chartElement, yMax, labelFormat, null);
    }

    updateChart(damageLevels) {
        this.weapon = damageLevels[0].weapon;
        let damageValues = damageLevels.map(damageLevel => {
            return Math.floor(damageLevel.totalAR);
        });
        damageValues.unshift(`${this.weapon.name} AR`);
        
        let data = {
            columns: [damageValues],
        };
    
        elementalDamageTypes.forEach(elementalDamageType => {
            if (damageLevels[0][elementalDamageType].total > 0) {
                
                let scalingLevels = damageLevels.map(damageLevel => {
                    return Math.floor(damageLevel[elementalDamageType].total);
                });
                
                let dataLabel = elementalDamageType;
                scalingLevels.unshift(dataLabel);
                data.columns.push(scalingLevels);
            }
        });

        if (this.weapon.canCastSpells) {
            data.columns.push(this.getSpellScalingValues(damageLevels));
        }

        this.chart.load(data);
    }

    getSpellScalingValues(damageLevels) {
        let spellScalingValues = damageLevels.map(damageLevel => {
            return Math.floor(damageLevel.spellScaling);
        });
        let dataLabel = (this.weapon.weaponType === 'Glintstone Staff') ? 'Sorcery Scaling' : 'Incantation Scaling';
        spellScalingValues.unshift(dataLabel);
        return spellScalingValues;
    }
}
