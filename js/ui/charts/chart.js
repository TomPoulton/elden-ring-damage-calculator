class Chart {

    constructor(chartElement, yMax, labelFormat, tooltipFormat) {
        this.chartDefinition = {
            bindto: `#${chartElement}`,
            size: {
                height: 230,
            },
            data: {
                columns: [],
                names: {},
                colors: {
                    'Str Scaling': '#6a7d91',
                    'Dex Scaling': '#6a7d91',
                    'Int Scaling': '#6a7d91',
                    'Fai Scaling': '#6a7d91',
                    'Arc Scaling': '#6a7d91',
                    'Magic':       '#6690e1',
                    'Fire':        '#ef9545',
                    'Lightning':   '#c6c457',
                    'Holy':        '#d2b576',
                    'Scarlet Rot': '#ca666e',
                    'Madness':     '#fbb419',
                    'Sleep':       '#646383',
                    'Frost':       '#7696c2',
                    'Poison':      '#7fb66b',
                    'Blood':       '#890e0e',
                    'Sorcery Scaling':     '#00ffff',
                    'Incantation Scaling': '#cc99ff',
                    // 'Stamina': '#339966',

                },
                labels: {
                    format: labelFormat,
                },
            },
            axis: {
                y: {
                    min: 0,
                    max: yMax,
                    padding: { bottom:0 },
                }
            },
        }
        if (tooltipFormat) {
            this.chartDefinition.tooltip = {
                format: {
                    value: tooltipFormat,
                }
            };
        }
    }

    drawChart() {
        this.chart = c3.generate(this.chartDefinition);
    }

    updateChart(damageLevels) {
        throw 'updateChart is not implemented on the base class';
    }

    clearChart() {
        if (this.chart !== null) {
            this.chart = this.chart.destroy();
        }
    }
}
