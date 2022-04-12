let weaponTypeFilters = new WeaponTypeFilters('weaponTypeFilters');
let damageTypeFilters = new DamageTypeFilters('damageTypeFilters');
let passiveFilters = new PassiveFilters('passiveFilters');
let weaponSorter = new WeaponSorter('sortSelect');

$('#findBest').click(function() {
    hideCharts();
    
    let filteredWeapons = weaponTypeFilters.filter(weapons);
    
    const character = getCharacterStats();
    let allWeaponDamages = filteredWeapons.map((weapon) => {
        return calculateWeaponDamage(character, weapon, weapon.maxUpgrade);
    });

    allWeaponDamages = damageTypeFilters.filter(allWeaponDamages);
    allWeaponDamages = passiveFilters.filter(allWeaponDamages);
    weaponSorter.sort(allWeaponDamages);

    let resultsTableHead = $('#resultsTable thead');
    let resultsTableBody = $('#resultsTable tbody');
    $('#resultsTable thead tr').remove();
    $('#resultsTable tbody tr').remove();

    let headerRow = $('<tr></tr>');
    headerRow.append('<th>Name</th>');
    headerRow.append('<th>Affinity</th>');
    headerRow.append('<th>Type</th>');
    headerRow.append('<th>Level</th>');
    headerRow.append('<th>AR</th>');
    damageTypes.forEach(damageType => {
        headerRow.append(`<th>${damageType}</th>`);
    });
    damageAttributes.forEach(damageAttribute => {
        headerRow.append(`<th>${damageAttribute}</th>`);
    });
    headerRow.append('<th>Passives</th>');
    resultsTableHead.append(headerRow);

    let resultsCount = parseInt($('#resultsCount').val());
    resultsCount = (allWeaponDamages.length < resultsCount) ? allWeaponDamages.length : resultsCount;

    for (i = 0; i < resultsCount; i++) {
        let weaponDamage = allWeaponDamages[i];
        let weapon = weaponDamage.weapon;
        resultsRow = $(`<tr id="${weaponDamage.weapon.name}"></tr>`);
        resultsRow.append(`<td>${weapon.weaponName}</td>`);
        resultsRow.append(`<td>${weapon.affinity}</td>`);
        resultsRow.append(`<td>${weapon.weaponType}</td>`);
        resultsRow.append(`<td>${weaponDamage.level}</td>`);
        resultsRow.append(`<td style="font-weight: bold;">${Math.floor(weaponDamage.totalAR)}</td>`);
        damageTypes.forEach((damageType) => {
            resultsRow.append(`<td>${Math.floor(weaponDamage[damageType].total)}</td>`);
        });
        damageAttributes.forEach((attribute) => {
            resultsRow.append(`<td>${attributeScalingString(weapon.levels[weaponDamage.level][attribute])}</td>`);
        });
        
        // Passive effects
        let passiveEffects = [];
        passiveTypes.forEach(passiveType => {
            if (weaponDamage[passiveType]) {
                passiveEffects.push(`${passiveType} (${Math.floor(weaponDamage[passiveType])})`);
            }
        });
        resultsRow.append(`<td>${passiveEffects.join(', ')}</td>`);
        
        resultsTableBody.append(resultsRow);
    }

    $('#resultsTable tbody tr').click(function() {
            let weaponName = $(this).attr('id');
            showChartsForWeapon(weaponName);
        }
    );

    // ##########################
    // console.log(allWeaponDamages);
    // ##########################
});
