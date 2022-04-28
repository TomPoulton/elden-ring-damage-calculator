class Character {

    static attributesData = [
        { id: 'Vig', min:9,  damage: false, name: 'Vigor' },
        { id: 'Min', min:9,  damage: false, name: 'Mind' },
        { id: 'End', min:8,  damage: false, name: 'Endurance' },
        { id: 'Str', min:8,  damage: true,  name: 'Strength' },
        { id: 'Dex', min:10, damage: true,  name: 'Dexterity' },
        { id: 'Int', min:7,  damage: true,  name: 'Intelligence' },
        { id: 'Fai', min:6,  damage: true,  name: 'Faith' },
        { id: 'Arc', min:7,  damage: true,  name: 'Arcane' },
    ];

    static damageAttributes = this.attributesData.filter(attribute => {
        return (attribute.damage);
    }).map(attribute => {
        return (attribute.id);
    });

    static attributes = this.attributesData.map(attribute => {
        return (attribute.id);
    });
    
    static getStat(attribute) {
        return parseInt($(`#${attribute}`).val());
    }

    static getStats() {
        return new Character();
    }

    constructor() {
        Character.attributes.forEach(attribute => {
            this[attribute] = Character.getStat(attribute);
        });
    }

    meetsWeaponRequirement(weapon, attribute) {
        return (this[attribute] >= weapon.requirements[attribute]);
    }

    get level() {
        let statSum = 0;
        Character.attributes.forEach(attribute => {
            statSum += this[attribute];
        });
        return statSum - 79;
    }

    static addInputsToPage() {
        let userInput =$('#userInput');
        this.attributesData.forEach(characterAttribute => {
            let id = characterAttribute.id;
            let min = characterAttribute.min;
            let max = 99;
            let input = $(`<input type="text" class="form-control" id="${id}" placeholder="${id}" value="10" min="${min}" max="${max}"/>`);
            userInput.append(`<span class="input-group-text">${id}:</span>`);
            userInput.append(input);

            input.on('change', function() {
                Character.verifyInput(this);
                Character.updateLevel();
            });
        });
        userInput.append(`<span class="input-group-text">Lvl:</span>`);
        userInput.append(`<input type="text" class="form-control tripple-digit" id="Lvl" placeholder="Lvl" value="1" disabled/>`);
    }

    static verifyInput(input) {
        let min = parseInt(input.attributes.min.value);
        let max = parseInt(input.attributes.max.value);
        let val = parseInt(input.value);
        if (input.value < min || isNaN(val)) {
            input.value = min;
            this.flashWarning(input);
        } else if (input.value > max) {
            input.value = max;
            this.flashWarning(input);
        }
    }

    static flashWarning(input) {
        input.classList.add('invalid-input');
        setTimeout(() => {
            input.classList.remove('invalid-input');
        }, 800);
    }

    static updateLevel() {
        let levelInput = $('#Lvl');
        let level = Character.getStats().level;
        levelInput.val(level);
        if (level < 1) {
            levelInput.addClass('invalid-input');
        } else {
            levelInput.removeClass('invalid-input');
        }
    }
}
