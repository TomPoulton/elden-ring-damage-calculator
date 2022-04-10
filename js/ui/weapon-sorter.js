class WeaponSorter {

    constructor(sortSelectID) {
        this.sortSelect = $(`#${sortSelectID}`);
        this.options = [
            'AR',
            ...damageTypes,
            'Blood',
            'Frost',
        ];
        this.addSortOptionsToPage();
    }

    addSortOptionsToPage() {
        this.options.forEach(option => {
            let selectString = (option.selected) ? 'selected' : '';
            this.sortSelect.append(`<option value="${option}" ${selectString}>${option}</option>`);
        });
    }

    getSelectedOption() {
        return this.sortSelect.val();
    }

    sort(weaponDamages) {
        let option = this.getSelectedOption();
        if (option === 'AR') {
            weaponDamages.sort((a, b) => {
                return b.totalAR - a.totalAR;
            });
        } else if (passiveTypes.includes(option)) {
            weaponDamages.sort((a, b) => {
                // Sort by passive first, then by AR
                return b[option] - a[option] || b.totalAR - a.totalAR;
            });
        }
        else {
            weaponDamages.sort((a, b) => {
                // Sort by damage type first, then by AR
                return b[option].total - a[option].total || b.totalAR - a.totalAR;
            });
        }
    }
}
