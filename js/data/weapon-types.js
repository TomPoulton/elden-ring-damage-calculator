// Run manually via browser console to generate the inital list of types used below
function getUniqueWeaponTypes() {
    let weaponTypes = Weapons.all.map((weapon) => {
        return weapon.weaponType;
    });
    weaponTypes = [...new Set(weaponTypes)];
    
    let output = '';
    const weaponClasses = ['bow', 'shield', 'axe', 'sword', 'thrusting', 'hammer', 'colossal']

    weaponTypes.forEach((weaponType) => {
        let weaponClass = '';
        weaponClasses.forEach((wc) => {
            if (weaponType.toLowerCase().includes(wc)) {
                weaponClass = wc;
            }
        });
        output += `{name: '${weaponType}', class: '${weaponClass}'},\n`;
    });
    console.log(output);
}

// These won't change very often, so might as well hardcode with some metadata
const weaponTypes = [
    // Sword
    {name: 'Straight Sword', class: 'sword'},
    {name: 'Greatsword', class: 'sword'},
    {name: 'Curved Sword', class: 'sword'},
    {name: 'Curved Greatsword', class: 'sword'},
    {name: 'Thrusting Sword', class: 'sword'},
    {name: 'Heavy Thrusting Sword', class: 'sword'},
    // Colossal
    {name: 'Colossal Sword', class: 'colossal'},
    {name: 'Colossal Weapon', class: 'colossal'},
    // Axe
    {name: 'Axe', class: 'axe'},
    {name: 'Greataxe', class: 'axe'},
    // Hammer
    {name: 'Hammer', class: 'hammer'},
    {name: 'Warhammer', class: 'hammer'},
    // Spear
    {name: 'Spear', class: 'spear'},
    {name: 'Great Spear', class: 'spear'},
    {name: 'Halberd', class: 'spear'},
    // Specialist
    {name: 'Katana', class: 'specialist'},
    {name: 'Twinblade', class: 'specialist'},
    {name: 'Reaper', class: 'specialist'},
    {name: 'Flail', class: 'specialist'},
    // Small
    {name: 'Dagger', class: 'small'},
    {name: 'Fist', class: 'small'},
    {name: 'Claw', class: 'small'},
    {name: 'Whip', class: 'small'},
    // Utility
    {name: 'Torch', class: 'utility'},
    // Caster
    {name: 'Glintstone Staff', class: 'caster'},
    {name: 'Sacred Seal', class: 'caster'},
    // Bow
    {name: 'Bow', class: 'bow'},
    {name: 'Light Bow', class: 'bow'},
    {name: 'Greatbow', class: 'bow'},
    {name: 'Crossbow', class: 'bow'},
    {name: 'Ballista', class: 'bow'},
    // Shield
    {name: 'Small Shield', class: 'shield'},
    {name: 'Medium Shield', class: 'shield'},
    {name: 'Greatshield', class: 'shield'},
];
