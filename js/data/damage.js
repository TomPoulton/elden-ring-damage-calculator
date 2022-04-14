const elementalDamageTypes = [
    'Magic',
    'Fire',
    'Lightning',
    'Holy',
];

const damageTypes = [
    'Physical',
    ...elementalDamageTypes,
];

// Passive effects that have a constant value regardless of weapon level or character attribute values
const flatPassives = [
    "Scarlet Rot", 
    "Madness",
    "Sleep",
];
// Passive effects that change with weapon level but not character attribute values
const leveledPassives = [
    "Frost",
];
// Passive effects that change with weapon level and character attribute values (i.e. Arcane)
const scaledPassives = [
    "Poison",
    "Blood",
];
const passiveTypes = [
    ...flatPassives,
    ...leveledPassives,
    ...scaledPassives,
];
