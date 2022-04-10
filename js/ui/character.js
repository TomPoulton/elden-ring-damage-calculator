function getCharacterStats() {
    const character = {};
    characterAttributes.forEach(attribute => {
        character[attribute] = parseInt($(`#${attribute}`).val());
    });
    return character;
}
