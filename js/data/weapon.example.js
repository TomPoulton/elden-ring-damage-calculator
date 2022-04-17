let weapon =
{
  name:               "Fire Dagger",
  weaponName:         "Dagger",
  affinity:           "Fire",
  weaponType:         "Dagger",
  maxUpgrade:         25,
  physicalDamageType: "Slash/Pierce",
  canCastSpells:      false,
  requirements: {
    Str: 5,
    Dex: 9,
    Int: 0,
    Fai: 0,
    Arc: 0
  },
  scaling: {
    Physical: {
      curve: 0, // Calulation curve in scaling.js
      Str:   1, // Does this damage type scale with Str? 0 or 1
      Dex:   1, // Does this damage type scale with Dex? 0 or 1
      Int:   0, // Does this damage type scale with Int? 0 or 1
      Fai:   0, // Does this damage type scale with Fai? 0 or 1
      Arc:   0, // Does this damage type scale with Arc? 0 or 1
    },
    Magic: {
      // same keys as Physical
    },
    Fire: {
      // same keys as Physical
    },
    Lightning: {
      // same keys as Physical
    },
    Holy: {
      // same keys as Physical
    },
  },
  levels: [
    { // 0
      Physical:      56.8,
      Magic:         0,
      Fire:          56.8,
      Lightning:     0,
      Holy:          0,
      Str:           0.611,
      Dex:           0.05,
      Int:           0,
      Fai:           0,
      Arc:           0,
      'Scarlet Rot': 0,
      Madness:       0,
      Sleep:         0,
      Frost:         0,
      Poison:        0,
      Blood:         0
    },
    // 1 - 24
    { // 25
      Physical: 120.7,
      Magic: 0,
      Fire: 120.7,
      Lightning: 0,
      Holy: 0,
      Str: 0.987,
      Dex: 0.12,
      Int: 0,
      Fai: 0,
      Arc: 0,
      'Scarlet Rot': 0,
      Madness: 0,
      Sleep: 0,
      Frost: 0,
      Poison: 0,
      Blood: 0,
    },
  ],
  passiveEffects: [
    // Blood, Poison, etc    
  ],
}
