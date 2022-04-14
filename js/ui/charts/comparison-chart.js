class ComparisonChart extends Chart {

    constructor(chartElement) {
        super(chartElement, null, null, null);
        this.chartDefinition = {
            bindto: `#${chartElement}`,
            size: {
                height: 400,
            },
            data: {
                columns: [],
            }
        }
    }

    updateChart(damageLevelsArray) {
        
        let data = {
            columns: [],
        };

        damageLevelsArray.forEach(damageLevels => {
            let weapon = damageLevels[0].weapon;
            let damageValues = damageLevels.map(damageLevel => {
                return Math.floor(damageLevel.totalAR);
            });
            damageValues.unshift(`${weapon.name} AR`);
            data.columns.push(damageValues);
        });

        this.chart.load(data);
    }
}
