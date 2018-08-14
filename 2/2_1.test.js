const expect = require('chai').expect;
const {removeDups, removeDups2} = require('./2_1');
const LinkedList = require('./LinkedList');


describe('2.1 Remove Dups', () => {
    it('should remove duplicates from linked list', () => {
        const list = new LinkedList(1);
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(5);
        list.append(6);
        list.append(7);
        list.append(7);
        // list: 1 -> 1 -> 2 -> 3 -> 3 -> 4 -> 5 -> 5 -> 6 -> 7 -> 7


        // removeDups
        const uniqList = removeDups(list);
        let i = 1;
        let node = uniqList;

        while (node.next) {
            expect(node.data).to.be.equal(i++);
            node = node.next;
        }

        // removeDups2
        const uniqList2 = removeDups2(list);
        let j = 1;
        let node2 = uniqList2;

        while (node2.next) {
            expect(node2.data).to.be.equal(j++);
            node2 = node2.next;
        }
    });

    it('should remove duplicates from linked list', () => {
        const list2 = new LinkedList(1);
        list2.append(3);
        list2.append(1);
        list2.append(2);
        list2.append(3);
        list2.append(4);
        list2.append(1);
        list2.append(2);
        list2.append(5);

        let clone = Object.assign({}, list2);
        const res = removeDups(clone);
        expect(JSON.parse(JSON.stringify(res))).to.be.deep.equal({
            data: 1,
            next: {
                data: 3,
                next: {
                    data: 2,
                    next: {
                        data: 4,
                        next: {
                            data: 5,
                            next: null
                        }
                    }
                }
            }
        });

        clone = Object.assign({}, list2);
        const res2 = removeDups2(clone);
        expect(JSON.parse(JSON.stringify(res2))).to.be.deep.equal({
            data: 1,
            next: {
                data: 3,
                next: {
                    data: 2,
                    next: {
                        data: 4,
                        next: {
                            data: 5,
                            next: null
                        }
                    }
                }
            }
        });
    });

    it('should return null for wrong args', () => {
        expect(removeDups()).to.be.equal(null);
        expect(removeDups2()).to.be.equal(null);
    });
});