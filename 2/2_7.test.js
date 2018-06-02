const expect = require('chai').expect;
const {intersection1, intersection2} = require('./2_7');
const LinkedList = require('./LinkedList');


describe('2.6 Intersection', () => {

    [intersection1, intersection2].forEach(intersection => {
        it('should return true two lists with intersection', () => {
            const list1 = new LinkedList(3);
            list1.append(1);
            list1.append(5);
            list1.append(9);
            list1.append(7);
            const mutualNode = list1.next.next.next.next;
            list1.append(2);
            list1.append(1);

            const list2 = new LinkedList(4);
            list2.append(6);
            list2.next.next = mutualNode;

            expect(intersection(list1, list2)).to.be.equal(mutualNode);
        });

        it('should return false two lists without intersection', () => {
            const list1 = new LinkedList(3);
            list1.append(1);
            list1.append(5);
            list1.append(9);
            list1.append(7);
            list1.append(2);
            list1.append(1);

            const list2 = new LinkedList(4);
            list2.append(6);
            list2.append(7);
            list2.append(2);
            list2.append(1);


            expect(intersection(list1, list2)).to.be.equal(false);
        });
    });
});