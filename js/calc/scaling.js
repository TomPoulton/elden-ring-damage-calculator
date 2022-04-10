// All the calculations follow one of these patterns
// The naming is just shorthand for the operations, Subtract, Divide, Multiply, Add, Power
function formulaSDMA(characterStat, sub, div, mul, add) {
    return (((characterStat - sub) / div) * mul) + add;
}
function formulaSDM(characterStat, div, mul) {
    return ((characterStat - 1) / div) * mul;
}
function formulaSDPM(characterStat, div, mul) {
    return Math.pow(((characterStat - 1) / div), 1.2) * mul;
}
function formulaSDSPSMA(characterStat, sub, div, mul, add) {
    return ((1 - Math.pow((1 - ((characterStat - sub) / div)), 1.2)) * mul) + add;
}

const scalingCurves = {
    0: {
        upperThreshold:  80,
        middleThreshold: 60,
        lowerThreshold:  18,
        upperScaling:    function(characterStat) { return formulaSDMA(characterStat, 80, 70, 20, 90); },
        middleScaling:   function(characterStat) { return formulaSDMA(characterStat, 60, 20, 15, 75); },
        lowerScaling:    function(characterStat) { return formulaSDSPSMA(characterStat, 18, 42, 50, 25); },
        baseScaling:     function(characterStat) { return formulaSDPM(characterStat, 17, 25); },
    },
    1: {
        upperThreshold:  80,
        middleThreshold: 60,
        lowerThreshold:  20,
        upperScaling:    function(characterStat) { return formulaSDMA(characterStat, 80, 70, 20, 90); },
        middleScaling:   function(characterStat) { return formulaSDMA(characterStat, 60, 20, 15, 75); },
        lowerScaling:    function(characterStat) { return formulaSDSPSMA(characterStat, 20, 40, 40, 35); },
        baseScaling:     function(characterStat) { return formulaSDPM(characterStat, 19, 35); },
    },
    2: {
        upperThreshold:  80,
        middleThreshold: 60,
        lowerThreshold:  20,
        upperScaling:    function(characterStat) { return formulaSDMA(characterStat, 80, 70, 20, 90); },
        middleScaling:   function(characterStat) { return formulaSDMA(characterStat, 60, 20, 15, 75); },
        lowerScaling:    function(characterStat) { return formulaSDSPSMA(characterStat, 20, 40, 40, 35); },
        baseScaling:     function(characterStat) { return formulaSDPM(characterStat, 19, 35); },
    },
    4: {
        upperThreshold:  80,
        middleThreshold: 50,
        lowerThreshold:  20,
        upperScaling:    function(characterStat) { return formulaSDMA(characterStat, 80, 19,  5, 95); },
        middleScaling:   function(characterStat) { return formulaSDMA(characterStat, 50, 30, 15, 80); },
        lowerScaling:    function(characterStat) { return formulaSDMA(characterStat, 20, 30, 40, 40); },
        baseScaling:     function(characterStat) { return formulaSDM(characterStat, 19, 40); },
    },
    7: {
        upperThreshold:  80,
        middleThreshold: 60,
        lowerThreshold:  20,
        upperScaling:    function(characterStat) { return formulaSDMA(characterStat, 80, 70, 20, 90); },
        middleScaling:   function(characterStat) { return formulaSDMA(characterStat, 60, 20, 15, 75); },
        lowerScaling:    function(characterStat) { return formulaSDSPSMA(characterStat, 20, 40, 40, 35); },
        baseScaling:     function(characterStat) { return formulaSDPM(characterStat, 19, 35); },
    },
    8: {
        upperThreshold:  80,
        middleThreshold: 60,
        lowerThreshold:  16,
        upperScaling:    function(characterStat) { return formulaSDMA(characterStat, 80, 70, 20, 90); },
        middleScaling:   function(characterStat) { return formulaSDMA(characterStat, 60, 20, 15, 75); },
        lowerScaling:    function(characterStat) { return formulaSDSPSMA(characterStat, 16, 44, 50, 25); },
        baseScaling:     function(characterStat) { return formulaSDPM(characterStat, 15, 25); },
    },
    12: {
        upperThreshold:  45,
        middleThreshold: 30,
        lowerThreshold:  15,
        upperScaling:    function(characterStat) { return formulaSDMA(characterStat, 45, 54, 25, 75); },
        middleScaling:   function(characterStat) { return formulaSDMA(characterStat, 30, 15, 20, 55); },
        lowerScaling:    function(characterStat) { return formulaSDMA(characterStat, 15, 15, 45, 10); },
        baseScaling:     function(characterStat) { return formulaSDM(characterStat, 14, 10); },
    },
    14: {
        upperThreshold:  80,
        middleThreshold: 40,
        lowerThreshold:  20,
        upperScaling:    function(characterStat) { return formulaSDMA(characterStat, 80, 19, 15, 85); },
        middleScaling:   function(characterStat) { return formulaSDMA(characterStat, 40, 40, 25, 60); },
        lowerScaling:    function(characterStat) { return formulaSDMA(characterStat, 20, 20, 20, 40); },
        baseScaling:     function(characterStat) { return formulaSDM(characterStat, 19, 40); },
    },
    15: {
        upperThreshold:  80,
        middleThreshold: 60,
        lowerThreshold:  25,
        upperScaling:    function(characterStat) { return formulaSDMA(characterStat, 80, 19,  5, 95); },
        middleScaling:   function(characterStat) { return formulaSDMA(characterStat, 60, 20, 30, 65); },
        lowerScaling:    function(characterStat) { return formulaSDMA(characterStat, 25, 35, 40, 25); },
        baseScaling:     function(characterStat) { return formulaSDM(characterStat, 24, 25); },
    },
    16: {
        upperThreshold:  80,
        middleThreshold: 60,
        lowerThreshold:  18,
        upperScaling:    function(characterStat) { return formulaSDMA(characterStat, 80, 19, 10, 90); },
        middleScaling:   function(characterStat) { return formulaSDMA(characterStat, 60, 20, 15, 75); },
        lowerScaling:    function(characterStat) { return formulaSDMA(characterStat, 18, 42, 55, 20); },
        baseScaling:     function(characterStat) { return formulaSDM(characterStat, 17, 20); },
    },
};

// Special curve for scaling Blood and Frost passives based on Arc
const passiveArcCurve = {
    upperThreshold:  60,
    middleThreshold: 45,
    lowerThreshold:  25,
    upperScaling:    function(characterStat) { return formulaSDMA(characterStat, 60, 39, 10, 90); },
    middleScaling:   function(characterStat) { return formulaSDMA(characterStat, 45, 15, 15, 75); },
    lowerScaling:    function(characterStat) { return formulaSDMA(characterStat, 25, 20, 65, 10); },
    baseScaling:     function(characterStat) { return formulaSDM(characterStat, 24, 10); },
};

function calcScalingFactor(scalingCurve, characterStat) {
    let scaling = null;
    if (characterStat > scalingCurve.upperThreshold) {
        scaling = scalingCurve.upperScaling(characterStat);
    } else if (characterStat > scalingCurve.middleThreshold) {
        scaling = scalingCurve.middleScaling(characterStat);
    } else if (characterStat > scalingCurve.lowerThreshold) {
        scaling = scalingCurve.lowerScaling(characterStat);
    } else {
        scaling = scalingCurve.baseScaling(characterStat);
    }
    return scaling;
}

// characterStat is like STR, DEX, INT, etc
function calcScalingPercentage(curve, characterStat) {
    let scalingCurve = scalingCurves[curve]
    if (scalingCurve == null) {
        throw `Could not find scalling curve ${curve}`;
    }
    return this.calcScalingFactor(scalingCurve, characterStat) / 100;
}

function calcPassiveScalingPercentage(characterArcStat) {
    return this.calcScalingFactor(passiveArcCurve, characterArcStat) / 100;
}

function validCurves() {
    return Object.keys(scalingCurves).map(
        function(curve) { return parseInt(curve); }
    );
}

function scalingRating(scalingValue) {
    if      (scalingValue > 1.75)  { return 'S'; }
    else if (scalingValue >= 1.4)  { return 'A'; }
    else if (scalingValue >= 0.9)  { return 'B'; }
    else if (scalingValue >= 0.6)  { return 'C'; }
    else if (scalingValue >= 0.25) { return 'D'; }
    else { return 'E'; }
}

function attributeScalingString(attributeValue) {
    if (attributeValue === 0) {
        return ''
    }
    let displayValue = Math.floor(attributeValue * 100);
    let displayRating = scalingRating(attributeValue);
    return `${displayRating} (${displayValue})`;
}
