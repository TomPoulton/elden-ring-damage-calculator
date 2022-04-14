class ChartGroup {

    constructor(damageChartID, scalingChartID, passiveChartID, comparisonChartID) {
        this.weapon = null;
        this.damageChart     = new DamageChart(damageChartID);
        this.scalingChart    = new ScalingChart(scalingChartID);
        this.passiveChart    = new PassivesChart(passiveChartID);
        this.comparisonChart = new ComparisonChart(comparisonChartID);
    }

    showWeaponCharts(damageLevels) {
        this.weapon = damageLevels[0].weapon;
        this.clearAllCharts();
        this.drawWeaponCharts();
        this.updateWeaponCharts(damageLevels);
    }

    showComparisonCharts(damageLevelsArray) {
        this.clearAllCharts();
        this.comparisonChart.drawChart();
        this.updateComparisonCharts(damageLevelsArray);
    }

    clearAllCharts() {
        this.damageChart.clearChart();
        this.scalingChart.clearChart();
        this.passiveChart.clearChart();
        this.comparisonChart.clearChart();
    }

    drawWeaponCharts() {
        this.damageChart.drawChart();
        this.scalingChart.drawChart();
        if (this.weapon.passiveEffects.length > 0) {
            this.passiveChart.drawChart();
        }
    }

    updateWeaponCharts(damageLevels) {
        this.damageChart.updateChart(damageLevels);
        this.scalingChart.updateChart(damageLevels);
        if (this.weapon.passiveEffects.length > 0) {
            this.passiveChart.updateChart(damageLevels);
        }
    }

    updateComparisonCharts(damageLevelsArray) {
        this.comparisonChart.updateChart(damageLevelsArray);
    }    
}
