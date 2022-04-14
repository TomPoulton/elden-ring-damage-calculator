class PercentageLevels {

    // Map percentage levels to upgrade levels depending on the max upgrade level of the weapon.
    // example: 80% upgraded corresponds to +8 for a max +10 weapon, or +20 for a max +25 weapon.

    static labels = {
        0:   '( 0/ 0)',
        4:   '( -/ 1)',
        8:   '( -/ 2)',
        10:  '( 1/ -)',
        12:  '( -/ 3)',
        16:  '( -/ 4)',
        20:  '( 2/ 5)',
        24:  '( -/ 6)',
        28:  '( -/ 7)',
        30:  '( 3/ -)',
        32:  '( -/ 8)',
        36:  '( -/ 9)',
        40:  '( 4/10)',
        44:  '( -/11)',
        48:  '( -/12)',
        50:  '( 5/ -)',
        52:  '( -/13)',
        56:  '( -/14)',
        60:  '( 6/15)',
        64:  '( -/16)',
        68:  '( -/17)',
        70:  '( 7/ -)',
        72:  '( -/18)',
        76:  '( -/19)',
        80:  '( 8/20)',
        84:  '( -/21)',
        88:  '( -/22)',
        90:  '( 9/ -)',
        92:  '( -/23)',
        96:  '( -/24)',
        100: '(10/25)',
    }

    static label(percentage) {
        return this.labels[percentage];
    }
}
