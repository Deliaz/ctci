const expect = require('chai').expect;
const {loopDetection1, loopDetection2} = require('./2_8');
const LinkedList = require('./LinkedList');


describe('2.8 Loop detection', () => {

    [loopDetection1, loopDetection2].forEach(loopDetection => {
        it('should return true list with loop', () => {
            const list = new LinkedList('A');
            list.append('B');
            list.append('C');
            list.append('D');
            list.append('E');

            // Making loop
            const loopNode = list.next.next
            list.next.next.next.next.next = loopNode;

            expect(loopDetection(list)).to.be.equal(loopNode);
        });

        it('should return false list without loop', () => {
            const list = new LinkedList('A');
            list.append('B');
            list.append('C');
            list.append('D');
            list.append('E');
            list.append('C');

            expect(loopDetection(list)).to.be.equal(false);
        });
    });

    it('should return null for wrong args', () => {
        expect(loopDetection1()).to.be.equal(null);
        expect(loopDetection2()).to.be.equal(null);
    });
});