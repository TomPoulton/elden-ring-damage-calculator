class WeaponDetails {

    static modal = new bootstrap.Modal(document.getElementById('weaponDetailsModal'));

    static modalLabel      = $('#weaponDetailsModalLabel');
    static summaryTable    = $('#weaponDetailsSummaryTable');
    static attackTable     = $('#weaponDetailsAttackTable');
    static attributesTable = $('#weaponDetailsAttributesTable');
    static weaponNameInput = $('#weaponDetailsWeaponName');
    static levelValue      = $('#weaponDetailsLevel');
    static levelSlider     = $('#weaponDetailsSlider');

    static weapon = null;

    static show(weaponName) {
        this.weapon = Weapons.find(weaponName);
        this.setupLevelSlider(this.weapon.maxUpgrade);
        this.updateWeaponDetails(this.weapon.maxUpgrade);
        this.modal.show();
    }

    static setupLevelSlider(level) {
        this.levelSlider.attr({max: this.weapon.maxUpgrade});
        this.levelSlider.val(level);
        this.levelValue.val(level);

        this.levelSlider.off('input').on('input', () => {
            let inputLevel = this.levelSlider.val();
            this.levelValue.val(inputLevel);
            this.updateWeaponDetails(inputLevel);
        });
    }

    static updateWeaponDetails(level) {
        let character  = Character.getStats();
        let attackRating = calculateWeaponDamage(character, this.weapon, level);
        this.modalLabel.html(`${this.weapon.weaponName} Details`)
        this.updateSummaryTable(attackRating);
        this.updateAttackTable(attackRating);
        this.updateAttributesTable(attackRating, character);
    }

    static updateSummaryTable(attackRating) {
        let weapon = attackRating.weapon;
        this.summaryTable.children().remove();
        this.summaryTable.append(`<tr><th>Name</th><td>${weapon.weaponName}</td><th>Phys Damage</th><td>${weapon.physicalDamageType}</td></tr>`);
        this.summaryTable.append(`<tr><th>Type</th><td>${weapon.weaponType}</td><th>Affinity</th><td>${weapon.affinity}</td></tr>`);
        this.summaryTable.append(`<tr><th>Weight</th><td>${'TBC'}</td><td colspan="2"></td></tr>`);
        // Add Crit when we have the data
    }

    static updateAttackTable(attackRating) {
        this.attackTable.children().remove();
        let thead = this.attackTable.append('<thead></thead>').children('thead');
        let tbody = this.attackTable.append('<tbody></tbody>').children('tbody');
        let tfoot = this.attackTable.append('<tfoot></tfoot>').children('tfoot');
        
        let headRow   = thead.append('<tr><td></td></tr>').children('tr');
        let attackRow = tbody.append('<tr><th>Attack</th></tr>').children('tr:last-child');
        let scaledRow = tbody.append('<tr><th>Scaled</th></tr>').children('tr:last-child');
        let totalRow  = tbody.append('<tr><th>Total</th></tr>').children('tr:last-child');

        damageTypes.forEach(damageType => {
            headRow.append(`<th>${damageType}</th>`);
            attackRow.append(`<td>${attackRating[damageType].weapon.displayString()}</td>`);
            scaledRow.append(`<td>${attackRating[damageType].scaled.displayString()}</td>`);
            totalRow.append( `<td>${attackRating[damageType].total.displayString()}</td>`);
        });

        tfoot.append(`<tr><th>AR</th><td colspan="5">${attackRating.totalAR.displayString()}</td></tr>`);
        tfoot.append(`<tr><th>Spell Scaling</th><td colspan="5">${attackRating.spellScaling.displayString()}</td></tr>`);
        tfoot.append(`<tr><th>Passives</th><td colspan="5">${attackRating.formatPassives()}</td></tr>`);
    }

    static updateAttributesTable(attackRating, character) {
        this.attributesTable.children().remove();
        let headingRow  = this.attributesTable.append('<thead><tr><td></td></tr></thead>').find('thead tr');
        let scalingRow  = this.attributesTable.append('<tbody><tr><th>Scaling</th></tr></tbody>').find('tbody tr');
        let requiredRow = this.attributesTable.append('<tfoot><tr><th>Required</th></tr></tfoot>').find('tfoot tr');

        let weapon = attackRating.weapon;
        Character.damageAttributes.forEach(attribute => {
            let elementClass = (character.meetsWeaponRequirement(weapon, attribute)) ? '' : 'class="low-stat"';
            headingRow.append(`<th>${attribute}</th>`);
            scalingRow.append(`<td>${weapon.formatScaling(attribute, attackRating.level, true)}</td>`);
            requiredRow.append(`<td ${elementClass}>${weapon.formatRequirement(attribute)}</td>`);
        });
    }
}
