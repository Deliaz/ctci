const expect = require('chai').expect;
const reverse = require('./reverse');
const LinkedList = require('./LinkedList');


describe('Reverse Linked List', () => {

    it('should reverse linked list', () => {
        const list = new LinkedList('A');
        list.append('B');
        list.append('C');
        list.append('D');


        expect(reverse(list)).to.be.deep.equal({
            "data": "D",
            "next": {
                "data": "C",
                "next": {
                    "data": "B",
                    "next": {
                        "data": "A",
                        "next": null
                    }
                }
            }
        });
    });

    it('should return null for wrong args', () => {
        expect(reverse()).to.be.equal(null);
    });
});