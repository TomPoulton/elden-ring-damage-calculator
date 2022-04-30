class WeaponTypeFilters extends UIFilters {
    
    constructor(filtersDivID) {
        super(filtersDivID);

        this.selectAllButton = $('#weaponFiltersAllBtn');
        this.clearAllButton = $('#weaponFiltersClearBtn');

        this.selectAllButton.click(() => {
            console.log('Select all');
            this.selectAll();
        });
        this.clearAllButton.click(() => {
            console.log('Clear all');
            this.clearAll();
        })
    }

    addFiltersToPage() {
        let uncheckedWeaponClasses = ['shield', 'bow', 'caster', 'utility'];
        weaponTypes.forEach(weaponType => {
            let checked = !uncheckedWeaponClasses.includes(weaponType.class)
            this.addFilterToPage(weaponType.name, weaponType.name, checked);
        });
    }

    filter(weapons) {
        let filters = weaponTypes.map(weaponType => {return weaponType.name});
        let weaponTypeFilters = this.getFilters(filters);
        return weapons.filter(weapon => {
            return weaponTypeFilters.includes(weapon.weaponType);
        });
    }

    selectAll() {
        weaponTypes.forEach(weaponType => {
            let weaponTypeId = this.toFilterID(weaponType.name);
            $(`#${weaponTypeId}`).prop('checked', true);
        });
    }

    clearAll() {
        weaponTypes.forEach(weaponType => {
            let weaponTypeId = this.toFilterID(weaponType.name);
            $(`#${weaponTypeId}`).prop('checked', false);
        });
    }
}
