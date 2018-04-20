const expect = require('chai').expect;
const {removeDups} = require('./2_1');
const LinkedList = require('./LinkedList');


describe('2.1 Remove Dups', () => {
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

    it('should remove duplicates from linked list', () => {
        const uniqList = removeDups(list);
        let i = 1;
        let node = uniqList;

        while (node.next) {
            expect(node.data).to.be.equal(i++);
            node = node.next;
        }
    });


    const list2 = new LinkedList(1);
    list2.append(3);
    list2.append(1);
    list2.append(2);
    list2.append(3);
    list2.append(4);
    list2.append(1);
    list2.append(2);
    list2.append(5);

    const res = removeDups(list2);
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
});