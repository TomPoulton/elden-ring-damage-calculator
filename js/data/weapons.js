class Weapons {

    static weapons = [];
    static count = 0;

    // Like a construcutor, but I want to use a static class rather than having to pass an object refernce around everywhere
    static setCount(count) {
        this.count = count;
    }

    static get count() {
        return this.count;
    }

    static get all() {
        return this.weapons;
    }

    static find(weaponName) {
        // Can add some checking to see if result is null, or has multiple matches, etc
        return this.weapons.find(weapon => {
            return weapon.name === weaponName;
        });
    }

    static findAll(weaponNames) {
        return weaponNames.map(weaponName => {
            return this.find(weaponName);
        });
    }

    // Use for debugging via browser console
    static log() {
        console.log(this.weapons);
    }
}
