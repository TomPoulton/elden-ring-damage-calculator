const chartHeight = 260;
let weaponARChart = null;
let weaponScalingChart = null;
let weaponPassiveChart = null;

function clearCharts() {
    if (weaponARChart !== null) { weaponARChart = weaponARChart.destroy(); }
    if (weaponScalingChart !== null) { weaponScalingChart = weaponScalingChart.destroy(); }
    if (weaponPassiveChart !== null) { weaponPassiveChart = weaponPassiveChart.destroy(); }
}

function hideCharts() {
    $('#weaponChartsContainer').hide();
    clearCharts();
}

function drawARChart(weaponName, damageLevels) {

    let damageValues = damageLevels.map((damageLevel) => {
        return Math.floor(damageLevel.totalAR);
    });
    damageValues.unshift('ar');

    let chartDefinition = {
        bindto: '#weaponARChart',
        size: {
            height: chartHeight,
        },
        data: {
            columns: [ damageValues ],
            names: { ar: `${weaponName} AR` },
            labels: {
                format: function(v, id, i, j) { return v; }
            },
        },
        axis: {
            y: {
                min: 0,
                padding: { bottom:0 },
            }
        },
    }
    weaponARChart = c3.generate(chartDefinition);
}

function drawScalingChart(weaponName, damageLevels) {
    let chartDefinition = {
        bindto: '#weaponScalingChart',
        size: {
            height: chartHeight,
        },
        data: {
            columns: [],
            names: {},
            colors: {},
            labels: {
                format: function(v, id, i, j) { return scalingRating(v); }
            },
        },
        axis: {
            y: {
                min: 0,
                padding: { bottom:0 },
            }
        },
        tooltip: {
            format: {
                value: function(v) { return attributeScalingString(v); }
            }
        },
    }

    damageAttributes.forEach((attribute) => {
        if (damageLevels[0].weapon.levels[0][attribute] > 0) {
            
            let scalingLevels = damageLevels.map((damageLevel) => {
                return damageLevel.weapon.levels[damageLevel.level][attribute];
            });
            
            let dataLabel = attribute;
            scalingLevels.unshift(dataLabel);
            chartDefinition.data.columns.push(scalingLevels);
            chartDefinition.data.names[dataLabel] = `${attribute} scaling`;
            chartDefinition.data.colors[dataLabel] = '#888';
        }
    });

    weaponScalingChart = c3.generate(chartDefinition);
}

function drawPassiveChart(weaponName, damageLevels) {

    let passiveCount = passiveTypes.filter(passiveType => {
        return (damageLevels[0][passiveType] > 0);
    });
    if (passiveCount < 1) { return; }

    let chartDefinition = {
        bindto: '#weaponPassiveChart',
        size: {
            height: chartHeight,
        },
        data: {
            columns: [],
            names: {},
            colors: {
                'Scarlet Rot': '#ca666e',
                'Madness':     '#fbb419',
                'Sleep':       '#646383',
                'Frost':       '#7696c2',
                'Poison':      '#7fb66b',
                'Blood':       '#890e0e',
            },
            labels: {
                format: function(v, id, i, j) { return v; }
            },
        },
        axis: {
            y: {
                min: 0,
                padding: { bottom:0 },
            }
        },
    }

    passiveTypes.forEach(passiveType => {
        if (damageLevels[0][passiveType] > 0) {
            
            let scalingLevels = damageLevels.map((damageLevel) => {
                return Math.floor(damageLevel[passiveType]);
            });
            
            let dataLabel = passiveType;
            scalingLevels.unshift(dataLabel);
            chartDefinition.data.columns.push(scalingLevels);
            chartDefinition.data.names[dataLabel] = passiveType;
            // chartDefinition.data.colors[dataLabel] = '#999';
        }
    });

    weaponPassiveChart = c3.generate(chartDefinition);
}

function showChartsForWeapon(weaponName) {
    clearCharts();
    $('#weaponChartsContainer').show();

    const weapon = weapons.find((w) => {
        return w.name === weaponName;
    });
    const character = getCharacterStats();

    let damageLevels = [];
    for(l = 0; l <= weapon.maxUpgrade; l++) {
        damageLevels.push(calculateWeaponDamage(character, weapon, l));
    }

    drawARChart(weaponName, damageLevels);
    drawScalingChart(weaponName, damageLevels);
    drawPassiveChart(weaponName, damageLevels);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function generateWeaponSelectUI() {
    const weaponNames = weapons.map((weapon) => {
        return weapon.name;
    });

    // let weaponSelect = $(`#weaponSelect`);
    // weaponNames.forEach((weaponName) => {
    //     weaponSelect.append(`<option value="${weaponName}">${weaponName}</option>`);
    // });
    // weaponSelect.on('change', function() {
    //     showChartsForWeapon(this.value);
    // });

    let weaponSelect = $(`#weaponSelect`);
    let weaponDataset = $(`#weaponSelectList`);
    weaponNames.forEach((weaponName) => {
        weaponDataset.append(`<option value="${weaponName}">${weaponName}</option>`);
    });
    weaponSelect.on('change', function() {
        showChartsForWeapon(this.value);
    });
    
    $('#showWeaponCharts').click(function(){
        showChartsForWeapon(weaponSelect.val());
    });
    $('#hideWeaponCharts').click(function(){
        hideCharts();
    });
}
generateWeaponSelectUI();
