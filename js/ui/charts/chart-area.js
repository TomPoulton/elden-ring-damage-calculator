class ChartArea {

    constructor() {
        this.weapons = [];
        this.compareMode = false;
        this.chartsContainer  = $('#weaponChartsContainer');
        this.hideChartsButton = $('#hideWeaponCharts');
        this.attributeSelect  = $('#statRangeAttribute');
        this.attributeSlider  = $('#statRangeBase');
        this.attributeValue   = $('#statRangeValue');
        this.chartGroup = new ChartGroup('weaponDamageChart', 'weaponScalingChart', 'weaponPassiveChart', 'weaponComparisonChart');
        this.registerUICallbacks();
        this.resetAttributeSliderAndValue();
    }

    registerUICallbacks() {
        this.hideChartsButton.click(() => {
            this.hideAllCharts();
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
        this.compareMode = false;
        this.weapons = [Weapons.find(weaponName)];
        let character = Character.getStats();
        let damageLevels = this.getDamageLevelsForWeapon(this.weapons[0], character);
        this.resetAttributeSliderAndValue();
        this.chartsContainer.show(); // container show has to come before chart show!
        this.chartGroup.showWeaponCharts(damageLevels);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    addWeaponComparison(weaponName) {
        this.weapons.push(Weapons.find(weaponName));
        if (this.compareMode) {
            this.updateCharts();
        } else {
            this.compareMode = true;
            this.showComparisonCharts();
        }
    }

    showComparisonCharts() {
        let character = Character.getStats();
        let damageLevelsArray = this.weapons.map(weapon => {
            return this.getDamageLevelsForWeapon(weapon, character);
        });
        this.resetAttributeSliderAndValue();
        this.chartsContainer.show(); // container show has to come before chart show!
        this.chartGroup.showComparisonCharts(damageLevelsArray);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    updateCharts() {
        let character = Character.getStats();
        let attribute = this.attributeSelect.val();
        character[attribute] = this.attributeSlider.val();
        if (this.compareMode) {
            this.updateComparisonCharts(character);
        } else {
            this.updateWeaponCharts(character);
        }
    }

    updateWeaponCharts(character) {
        let damageLevels = this.getDamageLevelsForWeapon(this.weapons[0], character);
        this.chartGroup.updateWeaponCharts(damageLevels);
    }

    updateComparisonCharts(character) {
        let damageLevelsArray = this.weapons.map(weapon => {
            return this.getDamageLevelsForWeapon(weapon, character);
        });
        this.chartGroup.updateComparisonCharts(damageLevelsArray);
    }

    resetAttributeSliderAndValue() {
        let attribute = this.attributeSelect.val();
        let attributeValue = Character.getStat(attribute);
        this.attributeSlider.val(attributeValue);
        this.attributeValue.val(attributeValue);
    }

    hideAllCharts() {
        this.weapons = [];
        this.compareMode = false;
        this.chartsContainer.hide();
        this.chartGroup.clearAllCharts();
    }

    getDamageLevelsForWeapon(weapon, character) {
        let damageLevels = [];
        for(let l = 0; l <= weapon.maxUpgrade; l++) {
            damageLevels.push(calculateWeaponDamage(character, weapon, l));
        }
        return damageLevels;
    }
}
