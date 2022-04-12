let rangeBase  = $('#statRangeBase');
let rangeValue = $('#statRangeValue');
let rangeAtt   = $('#statRangeAttribute');

function resetStats() {
    let rangeAttribute = rangeAtt.val();
    let stat = getCharacterStats()[rangeAttribute];
    updateRange(stat);
}

function getCharacterStatsWithRange() {
    let character = getCharacterStats();
    let rangeAttribute = rangeAtt.val();
    character[rangeAttribute] = rangeValue.val();
    return character;
}

function updateRange(value) {
    rangeBase.val(value);
    rangeValue.val(value);
}

rangeAtt.on('change', function() {
    resetStats();
});

rangeBase.on('input', function() {
    updateRange(this.value);
    const character = getCharacterStatsWithRange();
    updateChartsForWeapon(character);
});

resetStats();
