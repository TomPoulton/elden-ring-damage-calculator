class WeaponSelect {

    constructor(chartArea) {
        this.weaponSelect     = $(`#weaponSelect`);
        this.weaponDataset    = $(`#weaponSelectList`);
        this.showChartsButton = $('#showWeaponCharts');
        this.chartArea = chartArea;

        const weaponNames = weapons.map(weapon => {
            return weapon.name;
        });
        weaponNames.forEach(weaponName => {
            this.weaponDataset.append(`<option value="${weaponName}">${weaponName}</option>`);
        });

        this.weaponSelect.on('change', () => {
            let weaponName = this.weaponSelect.val();
            this.chartArea.showCharts(weaponName);
        });

        this.showChartsButton.click(() => {
            let weaponName = this.weaponSelect.val();
            this.chartArea.showCharts(weaponName);
        });
    }
}
