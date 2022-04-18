class Character {

    static attributesData = [
        { id: 'Vig', min:0,  damage: false, name: 'Vigor' },
        { id: 'Min', min:0,  damage: false, name: 'Mind' },
        { id: 'End', min:0,  damage: false, name: 'Endurance' },
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
    
    static getStats() {
        const character = {};
        this.attributes.forEach(attribute => {
            character[attribute] = this.getStat(attribute);
        });
        return character;
    }

    static getStat(attribute) {
        return parseInt($(`#${attribute}`).val());
    }

    static addInputsToPage() {
        let userInput =$('#userInput');
        this.attributesData.forEach(characterAttribute => {
            let id = characterAttribute.id;
            let min = characterAttribute.min;
            let max = 99;
            let disabled = (characterAttribute.damage) ? '' : 'disabled';
            let input = $(`<input type="text" class="form-control" id="${id}" placeholder="${id}" value="${min}" min="${min}" max="${max}" ${disabled}/>`);
            userInput.append(`<span class="input-group-text">${id}:</span>`);
            userInput.append(input);

            input.on('change', function() {
                let min = parseInt(this.attributes.min.value);
                let max = parseInt(this.attributes.max.value);
                let val = parseInt(this.value);
                if (this.value < min || isNaN(val)) {
                    this.value = min;
                    this.classList.add('invalid-input');
                    setTimeout(() => {
                        this.classList.remove('invalid-input');
                    }, 800);
                } else if (this.value > max) {
                    this.value = max;
                    this.classList.add('invalid-input');
                    setTimeout(() => {
                        this.classList.remove('invalid-input');
                    }, 800);
                }
            });
        });
    }
}
