class WeaponSelect {

    constructor(chartArea) {
        this.weaponSelect        = $('#weaponSelect');
        this.weaponDataset       = $('#weaponSelectList');
        this.showChartsButton    = $('#showWeaponCharts');
        this.compareWeaponButton = $('#compareWeapon');
        this.weaponDetailsButton = $('#showWeaponDetails');
        this.chartArea = chartArea;
        
        const weaponNames = Weapons.all.map(weapon => {
            return weapon.name;
        });
        weaponNames.forEach(weaponName => {
            this.weaponDataset.append(`<option value="${weaponName}">${weaponName}</option>`);
        });

        this.showChartsButton.click(() => {
            let weaponName = this.weaponSelect.val();
            this.chartArea.showCharts(weaponName);
        });
        
        this.compareWeaponButton.click(() => {
            let weaponName = this.weaponSelect.val();
            this.chartArea.addWeaponComparison(weaponName);
        });

        this.weaponDetailsButton.click(() => {
            let weaponName = this.weaponSelect.val();
            WeaponDetails.show(weaponName);
        });
    }
}
