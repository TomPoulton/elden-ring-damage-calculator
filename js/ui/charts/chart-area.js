class ChartArea {

    constructor() {
        this.chartsContainer  = $('#weaponChartsContainer');
        this.hideChartsButton = $('#hideWeaponCharts');
        this.attributeSelect  = $('#statRangeAttribute');
        this.attributeSlider  = $('#statRangeBase');
        this.attributeValue   = $('#statRangeValue');
        this.chartGroup = new ChartGroup('weaponDamageChart', 'weaponScalingChart', 'weaponPassiveChart');
        this.registerUICallbacks();
        this.resetAttributeSliderAndValue();
    }

    registerUICallbacks() {
        this.hideChartsButton.click(() => {
            this.hideCharts();
        });
        this.attributeSelect.on('change', () => {
            this.resetAttributeSliderAndValue();
            this.updateCharts();
        });
        this.attributeSlider.on('input', () => {
            this.attributeValue.val(this.attributeSlider.val());
            this.updateCharts();
        });
    }

    showCharts(weaponName) {
        let character = Character.getStats();
        let weapon = weapons.find((w) => {
            return w.name === weaponName;
        });
        this.resetAttributeSliderAndValue();
        this.chartsContainer.show(); // container show has to come before chart show!
        this.chartGroup.showChartsForWeapon(weapon, character);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    updateCharts() {
        let character = Character.getStats();
        let attribute = this.attributeSelect.val();
        character[attribute] = this.attributeSlider.val();
        this.chartGroup.updateCharts(character);
    }

    resetAttributeSliderAndValue() {
        let attribute = this.attributeSelect.val();
        let attributeValue = Character.getStat(attribute);
        this.attributeSlider.val(attributeValue);
        this.attributeValue.val(attributeValue);
    }

    hideCharts() {
        this.chartsContainer.hide();
        this.chartGroup.clearCharts();
    }
}
