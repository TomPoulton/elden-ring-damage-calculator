$('.wait-for-import').prop('disabled', true);

Character.addInputsToPage();

$('.chart-button').append(Icons.graphUp);
$('.compare-button').append(Icons.plusLg);
$('.details-button').append(Icons.listColumnsReverse);

// From data/import.js
loadWeaponData();
loadWeaponLevelsData();
loadWeaponScalingData();

let chartArea = new ChartArea();
let weaponSelect = new WeaponSelect(chartArea);
let weaponSearch = new WeaponSearch(chartArea);

$('.wait-for-import').prop('disabled', false);

// This works because a number primitive gets promoted to a Number object when a method is called on it
Object.defineProperty(Number.prototype, 'displayString', {
    value: function displayString() {
        // Don't use === here
        if (this == 0) {
            return '';
        } else {
            return Math.floor(this);
        }
    }
});

// Initialize all the tooltips
// Only do this once, otherwise things get messy
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
