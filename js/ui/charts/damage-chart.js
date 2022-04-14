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
        damageValues.unshift('ar');
        
        let data = {
            columns: [damageValues],
            names:   { ar: `${this.weapon.name} AR` }, // ############# Do you need this, or just set in unshift above?
        };
    
        elementalDamageTypes.forEach(elementalDamageType => {
            if (damageLevels[0][elementalDamageType].total > 0) {
                
                let scalingLevels = damageLevels.map(damageLevel => {
                    return Math.floor(damageLevel[elementalDamageType].total);
                });
                
                let dataLabel = elementalDamageType;
                scalingLevels.unshift(dataLabel);
                data.columns.push(scalingLevels);
                data.names[dataLabel] = elementalDamageType; // ############# Do you need this if it's already the name/id of the data column
            }
        });

        if (this.weapon.canCastSpells) {
            data.columns.push(getSpellScalingValues(damageLevels));
        }

        this.chart.load(data);
    }

    getSpellScalingValues(damageLevels) {
        let spellScalingValues = damageLevels.map(damageLevel => {
            return Math.floor(damageLevel.spellScaling);
        });
        spellScalingValues.unshift('Spell Scaling');
        return spellScalingValues;
    }
}
