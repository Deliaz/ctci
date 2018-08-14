const expect = require('chai').expect;
const {find, find2} = require('./2_2');
const LinkedList = require('./LinkedList');


describe('2.2 Return Kth to the last', () => {

    // Find 1
    it('should return 2nd to last node (value 6)', () => {
        const list = new LinkedList(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6); // 2 <--
        list.append(7); // 1

        const kth = find(list, 2);
        expect(kth.data).to.equal(6);
    });

    it('should return last element by index 1', () => {
        const list = new LinkedList(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6);
        list.append(7); // 1 <--

        const kth = find(list, 1);
        expect(kth.data).to.equal(7);
    });

    it('should return last element by index 0', () => {
        const list = new LinkedList(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6);
        list.append(7); // 0 <--

        const kth = find(list, 0);
        expect(kth.data).to.equal(7);
    });

    // Find 2
    it('should return 2nd to last node (value 6)', () => {
        const list = new LinkedList(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6); // 2 <--
        list.append(7); // 1

        const kth = find2(list, 2);
        expect(kth.data).to.equal(6);
    });

    it('should return last element by index 1', () => {
        const list = new LinkedList(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6);
        list.append(7); // 1 <--

        const kth = find2(list, 1);
        expect(kth.data).to.equal(7);
    });

    it('should return last element by index 0', () => {
        const list = new LinkedList(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6);
        list.append(7); // 0 <--

        const kth = find2(list, 0);
        expect(kth.data).to.equal(7);
    });

    it('should return null for unexisted node', () => {
        const list = new LinkedList(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);

        const kth = find2(list, 6);
        expect(kth).to.equal(null);
    });

    it('should return null for wrong args', () => {
        expect(find()).to.be.equal(null);
        expect(find2()).to.be.equal(null);
    });
});