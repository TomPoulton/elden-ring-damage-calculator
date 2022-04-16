class DamageTypeFilters extends UIFilters {
    
    constructor(filtersDivID) {
        super(filtersDivID);
    }

    addFiltersToPage() {
        let phys = damageTypes[0];
        this.addFilterToPage(phys, phys, true, 'Turning this off will filter out weapons that only do physical damage. If this is the only filter on, then not split damage weapons will be shown.');
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

            // This is temporary because if you don't meet the requirements right now, all damage is set to 0
            if (weaponDamageTypes.length === 0) {
                return false;
            } else if (damageTypeFilters.length === 1 && damageTypeFilters[0] === 'Physical' && weaponDamageTypes.length > 1) {
                return false;
            }

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
