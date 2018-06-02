const expect = require('chai').expect;
const {sumLists} = require('./2_5');
const LinkedList = require('./LinkedList');


describe('2.5 Sum Lists', () => {

    it('should sum two lists with same length', () => {
        const list1 = new LinkedList(7);
        list1.append(1);
        list1.append(6);

        const list2 = new LinkedList(5);
        list2.append(9);
        list2.append(2);

        const sum = sumLists(list1, list2);
        expect(sum).to.be.deep.equal({
            "next": {
                "data": 2,
                "next": {
                    "data": 1,
                    "next": {
                        "data": 9,
                        "next": null
                    }
                }
            }
        })
    });

    it('should sum two lists with diff length', () => {
        const list1 = new LinkedList(7);
        list1.append(1);
        list1.append(6);

        const list2 = new LinkedList(5);
        list2.append(9);
        list2.append(2);
        list2.append(7); // This list is longer

        const sum = sumLists(list1, list2);
        expect(sum).to.be.deep.equal({
            "next": {
                "data": 2,
                "next": {
                    "data": 1,
                    "next": {
                        "data": 9,
                        "next": {
                            "data": 7,
                            "next": null
                        }
                    }
                }
            }
        })
    });

});