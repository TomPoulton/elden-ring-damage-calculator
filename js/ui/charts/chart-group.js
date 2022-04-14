class ChartGroup {

    constructor(damageChartID, scalingChartID, passiveChartID) {
        this.weapon = null;
        this.damageChart  = new DamageChart(damageChartID);
        this.scalingChart = new ScalingChart(scalingChartID);
        this.passiveChart = new PassivesChart(passiveChartID);
    }

    showChartsForWeapon(weapon, character) {
        this.weapon = weapon;
        this.clearCharts();
        this.drawCharts();
        this.updateCharts(character);
    }

    clearCharts() {
        this.damageChart.clearChart();
        this.scalingChart.clearChart();
        this.passiveChart.clearChart();
    }

    drawCharts() {
        this.damageChart.drawChart();
        this.scalingChart.drawChart();
        if (this.weapon.passiveEffects.length > 0) {
            this.passiveChart.drawChart();
        }
    }

    updateCharts(character) {
        let damageLevels = [];
        for(let l = 0; l <= this.weapon.maxUpgrade; l++) {
            damageLevels.push(calculateWeaponDamage(character, this.weapon, l));
        }
        this.damageChart.updateChart(damageLevels);
        this.scalingChart.updateChart(damageLevels);
        if (this.weapon.passiveEffects.length > 0) {
            this.passiveChart.updateChart(damageLevels);
        }
    }
}
