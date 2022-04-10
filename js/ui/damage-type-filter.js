class DamageTypeFilters extends UIFilters {
    
    constructor(filtersDivID) {
        super(filtersDivID);
    }

    addFiltersToPage() {
        let phys = damageTypes[0];
        this.addFilterToPage(phys, phys, true, 'Turning this off will filter out weapons that only do physical damage');
        elementalDamageTypes.forEach(elementalDamageType => {
            this.addFilterToPage(elementalDamageType, elementalDamageType, true);
        });
    }

    filter(weaponDamages) {
        let damageTypeFilters = this.getFilters(damageTypes);
        return weaponDamages.filter(weaponDamage => {

            let weaponDamageTypes = damageTypes.filter(damageType => {
                 return (weaponDamage[damageType].total > 0);
            });

            let include = false;
            damageTypeFilters.forEach(damageType => {
                if (weaponDamageTypes.includes(damageType)) {
                    include = true;
                }
            });
            return include;
        });
    }
}
