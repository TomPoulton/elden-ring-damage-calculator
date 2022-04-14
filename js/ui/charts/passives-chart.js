class PassivesChart extends Chart {

    constructor(chartElement) {
        let yMax = 180;
        let labelFormat = function(v, id, i, j) { return v; };
        super(chartElement, yMax, labelFormat, null);
    }

    updateChart(damageLevels) {
        this.weapon = damageLevels[0].weapon;
        let data = {
            columns: [],
        };
        this.weapon.passiveEffects.forEach(passiveType => {
       
            let scalingLevels = damageLevels.map((damageLevel) => {
                return Math.floor(damageLevel[passiveType]);
            });
            
            let dataLabel = passiveType;
            scalingLevels.unshift(dataLabel);
            data.columns.push(scalingLevels);
        });
        this.chart.load(data);
    }
}
