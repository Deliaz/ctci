const expect = require('chai').expect;
const AnimalQueue = require('./3_6');

describe('3.6 Animal Queue', () => {
    it('should have same order for "dequeueAny"', () => {
        const queue = new AnimalQueue();
        queue.enqueue({name: 'cat1', type: 'cat'});
        queue.enqueue({name: 'cat2', type: 'cat'});
        queue.enqueue({name: 'dog1', type: 'dog'});
        queue.enqueue({name: 'cat3', type: 'cat'});
        queue.enqueue({name: 'dog2', type: 'dog'});
        queue.enqueue({name: 'dog3', type: 'dog'});

        expect(queue.dequeueAny()).to.have.property('name', 'cat1');
        expect(queue.dequeueAny()).to.have.property('name', 'cat2');
        expect(queue.dequeueAny()).to.have.property('name', 'dog1');
        expect(queue.dequeueAny()).to.have.property('name', 'cat3');
        expect(queue.dequeueAny()).to.have.property('name', 'dog2');
        expect(queue.dequeueAny()).to.have.property('name', 'dog3');
        expect(queue.dequeueAny()).to.be.equal(null);
    });

    it('should return dogs when cats are out', () => {
        const queue = new AnimalQueue();
        queue.enqueue({name: 'cat1', type: 'cat'});
        queue.enqueue({name: 'cat2', type: 'cat'});
        queue.enqueue({name: 'dog1', type: 'dog'});
        queue.enqueue({name: 'dog2', type: 'dog'});
        queue.enqueue({name: 'dog3', type: 'dog'});

        expect(queue.dequeueAny()).to.have.property('name', 'cat1');
        expect(queue.dequeueAny()).to.have.property('name', 'cat2');
        expect(queue.dequeueAny()).to.have.property('name', 'dog1');
        expect(queue.dequeueAny()).to.have.property('name', 'dog2');
        expect(queue.dequeueAny()).to.have.property('name', 'dog3');
    });

    it('should return cats when dogs are out', () => {
        const queue = new AnimalQueue();
        queue.enqueue({name: 'dog1', type: 'dog'});
        queue.enqueue({name: 'cat1', type: 'cat'});
        queue.enqueue({name: 'dog2', type: 'dog'});
        queue.enqueue({name: 'cat2', type: 'cat'});
        queue.enqueue({name: 'cat3', type: 'cat'});

        expect(queue.dequeueAny()).to.have.property('name', 'dog1');
        expect(queue.dequeueAny()).to.have.property('name', 'cat1');
        expect(queue.dequeueAny()).to.have.property('name', 'dog2');
        expect(queue.dequeueAny()).to.have.property('name', 'cat2');
        expect(queue.dequeueAny()).to.have.property('name', 'cat3');
    });

    it('should return cats only', () => {
        const queue = new AnimalQueue();
        queue.enqueue({name: 'cat1', type: 'cat'});
        queue.enqueue({name: 'dog1', type: 'dog'});
        queue.enqueue({name: 'cat2', type: 'cat'});
        queue.enqueue({name: 'dog2', type: 'dog'});

        expect(queue.dequeueCat()).to.have.property('name', 'cat1');
        expect(queue.dequeueCat()).to.have.property('name', 'cat2');
        expect(queue.dequeueCat()).to.be.equal(null);
    });

    it('should return dogs only', () => {
        const queue = new AnimalQueue();
        queue.enqueue({name: 'cat1', type: 'cat'});
        queue.enqueue({name: 'dog1', type: 'dog'});
        queue.enqueue({name: 'cat2', type: 'cat'});
        queue.enqueue({name: 'dog2', type: 'dog'});

        expect(queue.dequeueDog()).to.have.property('name', 'dog1');
        expect(queue.dequeueDog()).to.have.property('name', 'dog2');
        expect(queue.dequeueDog()).to.be.equal(null);
    });


    it('should return null for wrong args', () => {
        // expect(sortStack()).to.be.equal(null);
        // expect(sortStack(new Stack())).to.be.equal(null);
    });
});