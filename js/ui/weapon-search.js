class WeaponSearch {

    constructor(chartArea) {
        this.chartArea         = chartArea;
        this.searchButton      = $('#findBest');
        this.resultsLimit      = $('#resultsLimit');
        this.resultsArea       = $('#resultsArea');
        this.resultsTableHead  = $('#resultsTable thead');
        this.resultsTableBody  = $('#resultsTable tbody');
        this.weaponTypeFilters = new WeaponTypeFilters('weaponTypeFilters');
        this.damageTypeFilters = new DamageTypeFilters('damageTypeFilters');
        this.passiveFilters    = new PassiveFilters('passiveFilters');
        this.weaponSorter      = new WeaponSorter('sortSelect');

        this.addHeaderRow();
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
        
        this.chartArea.hideAllCharts();
        this.resultsTableBody.children('tr').remove();
        for (let i = 0; i < resultsLimit; i++) {
            this.addBodyRow(allWeaponDamages[i]);
        }
        this.resultsArea.show();
    }

    addHeaderRow() {
        let row = [
            '', // Actions
            'Name',
            'Affinity',
            'Type',
            'Level',
            `SS <span data-bs-toggle="tooltip" title="Spell Scaling for Sorceries or Incantaions">${Icons.help}</span>`,
            `AR <span data-bs-toggle="tooltip" title="Attack Rating aka Total Damage">${Icons.help}</span>`,
            'Phys',
            'Mag',
            'Fire',
            'Ligh',
            'Holy',
            'Str',
            'Dex',
            'Int',
            'Fai',
            'Arc',
            'Passives',
        ];
            
        let headerRow = $('<tr></tr>');
        row.forEach(heading => {
            headerRow.append(`<th>${heading}</th>`);
        });
        this.resultsTableHead.append(headerRow);
    }

    addBodyRow(attackRating) {
        let character = Character.getStats();
        let weapon = attackRating.weapon;
        let resultsRow = $(`<tr id="${weapon.name}"></tr>`);
        this.addActionsToRow(resultsRow);
        resultsRow.append(`<td>${weapon.weaponName}</td>`);
        resultsRow.append(`<td>${weapon.affinity}</td>`);
        resultsRow.append(`<td>${weapon.weaponType}</td>`);
        resultsRow.append(`<td>${attackRating.level}</td>`);
        resultsRow.append(`<td>${attackRating.spellScaling}</td>`);
        resultsRow.append(`<td style="font-weight: bold;">${attackRating.totalAR}</td>`);
        damageTypes.forEach((damageType) => {
            resultsRow.append(`<td>${attackRating[damageType].total}</td>`);
        });
        Character.damageAttributes.forEach(attribute => {
            let elementClass = (character.meetsWeaponRequirement(weapon, attribute)) ? '' : 'class="low-stat"';
            resultsRow.append(`<td ${elementClass}>${weapon.formatScaling(attribute, attackRating.level, false)}</td>`);
        });
        resultsRow.append(`<td>${attackRating.formatPassives()}</td>`);
        this.resultsTableBody.append(resultsRow);
    }

    addActionsToRow(tableRow) {
        let tableData = $('<td></td>');
        let compareButton = $(`<button type="button" class="btn btn-outline-primary btn-sm border-0 me-1">${Icons.plusLg}</button>`);
        let chartButton   = $(`<button type="button" class="btn btn-outline-primary btn-sm border-0 me-1">${Icons.graphUp}</button>`);
        tableData.append(compareButton);
        tableData.append(chartButton);
        tableRow.append(tableData);

        compareButton.click((event, handler) => {
            let weaponName = event.currentTarget.parentElement.parentElement.id;
            this.chartArea.addWeaponComparison(weaponName);
        });
        chartButton.click((event, handler) => {
            let weaponName = event.currentTarget.parentElement.parentElement.id;
            this.chartArea.showCharts(weaponName);
        });
    }
}
