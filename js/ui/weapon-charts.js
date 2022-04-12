const chartHeight = 230;
let currentWeapon = null;
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

function drawARChart() {
    weaponARChart = c3.generate({
        bindto: '#weaponARChart',
        size: {
            height: chartHeight,
        },
        data: {
            columns: [],
            names: { ar: `${currentWeapon.name} AR` },
            colors: {
                'Magic':     '#6690e1',
                'Fire':      '#ef9545',
                'Lightning': '#c6c457',
                'Holy':      '#d2b576',
            },
            labels: {
                format: function(v, id, i, j) { return v; }
            },
        },
        axis: {
            y: {
                min: 0,
                max: 1200,
                padding: { bottom:0 },
            }
        },
    });
}

function loadMainChartData(damageLevels) {
    if (currentWeapon.weaponType === 'Glintstone Staff' || currentWeapon.weaponType === 'Sacred Seal') {
        loadSpellBoostData(damageLevels);
    } else {
        loadARChartData(damageLevels);
    }
}

function loadARChartData(damageLevels) {

    let damageValues = damageLevels.map(damageLevel => {
        return Math.floor(damageLevel.totalAR);
    });
    damageValues.unshift('ar');
    
    let data = {
        columns: [damageValues],
        names:   { ar: `${currentWeapon.name} AR` },
    };

    elementalDamageTypes.forEach(elementalDamageType => {
        if (damageLevels[0][elementalDamageType].total > 0) {
            
            let scalingLevels = damageLevels.map(damageLevel => {
                return Math.floor(damageLevel[elementalDamageType].total);
            });
            
            let dataLabel = elementalDamageType;
            scalingLevels.unshift(dataLabel);
            data.columns.push(scalingLevels);
            data.names[dataLabel] = elementalDamageType;
        }
    });
    weaponARChart.load(data);
}

function loadSpellBoostData(damageLevels) {
    let damageValues = damageLevels.map(damageLevel => {
        return Math.floor(damageLevel.spellBoost);
    });
    damageValues.unshift('sb');
    
    let data = {
        columns: [damageValues],
        names:   { sb: `${currentWeapon.name} Spell Boost` },
    };

    weaponARChart.load(data);
}

function drawScalingChart() {
    weaponScalingChart = c3.generate({
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
                max: 1.5,
                padding: { bottom:0 },
            }
        },
        tooltip: {
            format: {
                value: function(v) { return attributeScalingString(v); }
            }
        },
    });
}

function loadScalingChartData(damageLevels) {
    let data = {
        columns: [],
        names:   {},
        colors:  {},
    };
    damageAttributes.forEach((attribute) => {
        if (damageLevels[0].weapon.levels[0][attribute] > 0) {
            
            let scalingLevels = damageLevels.map((damageLevel) => {
                return damageLevel.weapon.levels[damageLevel.level][attribute];
            });
            
            let dataLabel = attribute;
            scalingLevels.unshift(dataLabel);
            data.columns.push(scalingLevels);
            data.names[dataLabel] = `${attribute} scaling`;
            data.colors[dataLabel] = '#6a7d91';
        }
    });
    weaponScalingChart.load(data);
}

function drawPassiveChart() {
    if (currentWeapon.passiveEffects.length === 0) { return; }
    weaponPassiveChart = c3.generate({
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
                max: 180,
                padding: { bottom:0 },
            }
        },
    });
}

function loadPassiveChartData(damageLevels) {
    if (currentWeapon.passiveEffects.length === 0) { return; }

    let data = {
        columns: [],
        names:   {},
    };
    currentWeapon.passiveEffects.forEach(passiveType => {
   
        let scalingLevels = damageLevels.map((damageLevel) => {
            return Math.floor(damageLevel[passiveType]);
        });
        
        let dataLabel = passiveType;
        scalingLevels.unshift(dataLabel);
        data.columns.push(scalingLevels);
        data.names[dataLabel] = passiveType;
    });
    weaponPassiveChart.load(data);
}

function updateChartsForWeapon(character) {
    let damageLevels = [];
    for(l = 0; l <= currentWeapon.maxUpgrade; l++) {
        damageLevels.push(calculateWeaponDamage(character, currentWeapon, l));
    }

    loadMainChartData(damageLevels);
    loadScalingChartData(damageLevels);
    loadPassiveChartData(damageLevels);
}

function showChartsForWeapon(weaponName) {
    clearCharts();
    $('#weaponChartsContainer').show();

    currentWeapon = weapons.find((w) => {
        return w.name === weaponName;
    });

    drawARChart();
    drawScalingChart();
    drawPassiveChart();
    updateChartsForWeapon(getCharacterStats());
    resetStats();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function generateWeaponSelectUI() {
    const weaponNames = weapons.map((weapon) => {
        return weapon.name;
    });

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
