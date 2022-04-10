class PassiveFilters extends UIFilters {
    
    constructor(filtersDivID) {
        super(filtersDivID);
    }
    
    addFiltersToPage() {
        this.none = 'None';
        this.addFilterToPage(this.none, this.none, true, "Turning this off will filter out weapons that don't have any passives");
        passiveTypes.forEach(passiveType => {
            this.addFilterToPage(passiveType, passiveType, true);
        });
    }

    filter(weaponDamages) {
        let filters = [this.none, ...passiveTypes];
        let passiveTypeFilters = this.getFilters(filters);
        return weaponDamages.filter(weaponDamage => {

            let weaponPassiveTypes = passiveTypes.filter(passiveType => {
                 return (weaponDamage[passiveType] > 0);
            });

            if (weaponPassiveTypes.length === 0) {
                weaponPassiveTypes.push(this.none);
            }

            let include = false;
            passiveTypeFilters.forEach(passiveType => {
                if (weaponPassiveTypes.includes(passiveType)) {
                    include = true;
                }
            });
            return include;
        });
    }
}
