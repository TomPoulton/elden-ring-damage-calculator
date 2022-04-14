class WeaponSearch {

    constructor(chartArea) {
        this.chartArea         = chartArea;
        this.searchButton      = $('#findBest');
        this.resultsLimit      = $('#resultsLimit');
        this.resultsTableHead  = $('#resultsTable thead');
        this.resultsTableBody  = $('#resultsTable tbody');
        this.weaponTypeFilters = new WeaponTypeFilters('weaponTypeFilters');
        this.damageTypeFilters = new DamageTypeFilters('damageTypeFilters');
        this.passiveFilters    = new PassiveFilters('passiveFilters');
        this.weaponSorter      = new WeaponSorter('sortSelect');

        this.searchButton.click(() => {
            this.displaySearchResults(this.search());
        });
    }

    search() {
        let character = Character.getStats();
        let filteredWeapons = this.weaponTypeFilters.filter(Weapons.all);
        let allWeaponDamages = filteredWeapons.map(weapon => {
            return calculateWeaponDamage(character, weapon, weapon.maxUpgrade);
        });
        allWeaponDamages = this.damageTypeFilters.filter(allWeaponDamages);
        allWeaponDamages = this.passiveFilters.filter(allWeaponDamages);
        this.weaponSorter.sort(allWeaponDamages);
        return allWeaponDamages;
    }

    displaySearchResults(allWeaponDamages) {
        let resultsLimit = parseInt(this.resultsLimit.val());
        resultsLimit = (allWeaponDamages.length < resultsLimit) ? allWeaponDamages.length : resultsLimit;
        
        this.chartArea.hideCharts();
        this.resultsTableHead.children('tr').remove();
        this.resultsTableBody.children('tr').remove();
        this.addHeaderRow();
        for (let i = 0; i < resultsLimit; i++) {
            this.addBodyRow(allWeaponDamages[i]);
        }
        this.registerRowClickCallbacks();
    }

    addHeaderRow() {
        let row = ['Name', 'Affinity', 'Type', 'Level', 'Spell Scaling', 'AR', ...damageTypes, ...Character.damageAttributes, 'Passives'];
        let headerRow = $('<tr></tr>');
        row.forEach(heading => {
            headerRow.append(`<th>${heading}</th>`);
        });
        this.resultsTableHead.append(headerRow);
    }

    addBodyRow(weaponDamage) {
        let weapon = weaponDamage.weapon;
        let resultsRow = $(`<tr id="${weapon.name}"></tr>`);
        resultsRow.append(`<td>${weapon.weaponName}</td>`);
        resultsRow.append(`<td>${weapon.affinity}</td>`);
        resultsRow.append(`<td>${weapon.weaponType}</td>`);
        resultsRow.append(`<td>${weaponDamage.level}</td>`);
        let spellScaling = (weaponDamage.spellScaling > 0) ? Math.floor(weaponDamage.spellScaling) : '-';
        resultsRow.append(`<td>${spellScaling}</td>`);
        resultsRow.append(`<td style="font-weight: bold;">${Math.floor(weaponDamage.totalAR)}</td>`);
        damageTypes.forEach((damageType) => {
            resultsRow.append(`<td>${Math.floor(weaponDamage[damageType].total)}</td>`);
        });
        Character.damageAttributes.forEach(attribute => {
            // resultsRow.append(`<td>${attributeScalingString(weapon.levels[weaponDamage.level][attribute])}</td>`);
            let attributeScaling = (weapon.levels[weaponDamage.level][attribute] > 0) ? scalingRating(weapon.levels[weaponDamage.level][attribute]) : '';
            resultsRow.append(`<td>${attributeScaling}</td>`);
        });
        // Passive effects
        let passiveEffects = [];
        passiveTypes.forEach(passiveType => {
            if (weaponDamage[passiveType]) {
                passiveEffects.push(`${passiveType} (${Math.floor(weaponDamage[passiveType])})`);
            }
        });
        resultsRow.append(`<td>${passiveEffects.join(', ')}</td>`);
        this.resultsTableBody.append(resultsRow);
    }

    registerRowClickCallbacks() {
        this.resultsTableBody.children('tr').click((event, handler) => {
            let weaponName = event.currentTarget.id;
            this.chartArea.showCharts(weaponName);
        });
    }
}
