const LinkedList = require('../2/LinkedList');

class AnimalQueue {
    constructor() {
        this.dogs = null;
        this.cats = null;

        this._dateNow = 0;
    }

    _addCat(cat) {
        if (this.cats) {
            this.cats.append(cat);
        } else {
            this.cats = new LinkedList(cat);
        }
    }

    _addDog(dog) {
        if (this.dogs) {
            this.dogs.append(dog);
        } else {
            this.dogs = new LinkedList(dog);
        }
    }

    enqueue(animal) {
        animal.timestamp = this._dateNow++;

        if (animal.type === 'cat') {
            this._addCat(animal);
        } else {
            this._addDog(animal);
        }
    }

    dequeueAny() {
        const oldestDog = (this.dogs && this.dogs.data);
        const oldestCat = (this.cats && this.cats.data);

        if (oldestDog || oldestCat) {
            if (!oldestDog) {
                return this.dequeueCat();
            } else if (!oldestCat) {
                return this.dequeueDog();
            }
        } else {
            return null;
        }


        if (oldestCat.timestamp <= oldestDog.timestamp) {
            this.cats = this.cats.next;
            return oldestCat;
        } else {
            this.dogs = this.dogs.next;
            return oldestDog;
        }
    }

    dequeueCat() {
        if (this.cats) {
            const cat = this.cats.data;
            this.cats = this.cats.next;
            return cat;
        }
        return null;
    }

    dequeueDog() {
        if (this.dogs) {
            const dog = this.dogs.data;
            this.dogs = this.dogs.next;
            return dog;
        }
        return null;
    }
}

module.exports = AnimalQueue;