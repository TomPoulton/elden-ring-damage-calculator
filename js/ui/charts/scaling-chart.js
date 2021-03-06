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
            colors:  {},
        };
        Character.damageAttributes.forEach((attribute) => {
            if (damageLevels[0].weapon.levels[0][attribute] > 0) {
                
                let scalingLevels = damageLevels.map((damageLevel) => {
                    return damageLevel.weapon.levels[damageLevel.level][attribute];
                });
                
                let dataLabel = `${attribute} Scaling`;
                scalingLevels.unshift(dataLabel);
                data.columns.push(scalingLevels);
            }
        });
        
        let yMax = (this.weapon.canCastSpells) ? 3.0 : 1.5;
        this.chart.axis.max({y: yMax}); 
        this.chart.load(data);
    }
}
