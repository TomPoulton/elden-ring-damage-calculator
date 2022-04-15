// From data/import.js
loadWeaponData();
loadWeaponLevelsData();
loadWeaponScalingData();

let chartArea = new ChartArea();
let weaponSelect = new WeaponSelect(chartArea);
let weaponSearch = new WeaponSearch(chartArea);

$('#showWeaponCharts').append(Icons.graphUp);
$('#compareWeapon').append(Icons.plusLg);

// Initialize all the tooltips
// Only do this once, otherwise things get messy
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
