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
            },
            axis: {
                x: {
                    tick: {
                        count: 11,
                        format: function (x) { return `${x}%`; },
                        culling: {
                            max: 12,
                        },
                    }
                }
            },
            tooltip: {
                format: {
                    title: function (d) { return `${d}% ${PercentageLevels.label(d)}`; },
                    // value: function (value, ratio, id) {
                    //     var format = id === 'data1' ? d3.format(',') : d3.format('$');
                    //     return format(value);
                    // }
        //            value: d3.format(',') // apply this format to both y and y2
                }
            },
        }
    }

    updateChart(damageLevelsArray) {
        
        let data = {
            columns: [],
            xs: {},
        };

        damageLevelsArray.forEach(damageLevels => {
            let weapon = damageLevels[0].weapon;
            let damageValues = damageLevels.map(damageLevel => {
                return Math.floor(damageLevel.totalAR);
            });
            let upgradePercentages = this.getUpgradePercantages(weapon);

            let dataLabel = `${weapon.name} AR`;
            let xLabel    = `${weapon.name} x`;

            damageValues.unshift(dataLabel);
            upgradePercentages.unshift(xLabel);

            data.columns.push(damageValues);
            data.columns.push(upgradePercentages);

            // Tells c3 to use the upgrade percentages as x values so that max 10 and max 25 weapons can be compared side by side
            data.xs[dataLabel] = xLabel;
        });

        this.chart.load(data);
    }

    getUpgradePercantages(weapon) {
        let maxUpgrade = weapon.maxUpgrade;
        let upgradePercentages = [];
        for (let l = 0; l <= maxUpgrade; l++) {
            upgradePercentages.push(Math.floor( (l/maxUpgrade)*100 ));
        }
        return upgradePercentages;
    }
}
