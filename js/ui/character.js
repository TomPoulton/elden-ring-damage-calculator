class Character {

    static damageAttributes = [
        'Str',
        'Dex',
        'Int',
        'Fai',
        'Arc',
    ];
    
    static attributes = [
        'Vig',
        'Min',
        'End',
        ...this.damageAttributes,
    ];
    
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
}
