class WeaponTypeFilters extends UIFilters {
    
    constructor(filtersDivID) {
        super(filtersDivID);
    }

    addFiltersToPage() {
        let uncheckedWeaponClasses = ['shield', 'bow', 'caster', 'utility'];
        weaponTypes.forEach((weaponType) => {
            let checked = !uncheckedWeaponClasses.includes(weaponType.class)
            this.addFilterToPage(weaponType.name, weaponType.name, checked);
        });
    }

    filter(weapons) {
        let filters = weaponTypes.map(weaponType => {return weaponType.name});
        let weaponTypeFilters = this.getFilters(filters);
        return weapons.filter((weapon) => {
            return weaponTypeFilters.includes(weapon.weaponType);
        });
    }
}
