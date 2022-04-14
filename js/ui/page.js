// From data/import.js
loadWeaponData();
loadWeaponLevelsData();
loadWeaponScalingData();

let chartArea = new ChartArea();
let weaponSelect = new WeaponSelect(chartArea);
let weaponSearch = new WeaponSearch(chartArea);
