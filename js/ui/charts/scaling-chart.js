class ScalingChart extends Chart {

    constructor(chartElement) {
        let yMax = 1.5;
        let labelFormat = function(v, id, i, j) { return scalingRating(v); };
        super(chartElement, yMax, labelFormat, null);
    }

    updateChart(damageLevels) {
        this.weapon = damageLevels[0].weapon;
        let data = {
            columns: [],
            names:   {},
            colors:  {},
        };
        damageAttributes.forEach((attribute) => {
            if (damageLevels[0].weapon.levels[0][attribute] > 0) {
                
                let scalingLevels = damageLevels.map((damageLevel) => {
                    return damageLevel.weapon.levels[damageLevel.level][attribute];
                });
                
                let dataLabel = attribute;
                scalingLevels.unshift(dataLabel);
                data.columns.push(scalingLevels);
                data.names[dataLabel] = `${attribute} Scaling`;
            }
        });
        
        let yMax = (this.weapon.canCastSpells) ? 3.0 : 1.5;
        this.chart.axis.max({y: yMax}); 
        this.chart.load(data);
    }
}
