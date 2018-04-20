const expect = require('chai').expect;
const {deleteNode} = require('./2_3');
const LinkedList = require('./LinkedList');


describe('2.3 Delete node', () => {

    it('should delete a node with value "4"', () => {
        const list = new LinkedList(1);
        list.append(2);
        list.append(3);
        list.append(4); // <-- deleting
        list.append(5);
        list.append(6);

        let node = list;
        while (node.data !== 4) {
            node = node.next;
        }

        deleteNode(node);

        expect(list).to.be.deep.equal({
            data: 1,
            next: {
                data: 2,
                next: {
                    data: 3,
                    next: {
                        data: 5,
                        next: {
                            data: 6,
                            next: null
                        }
                    }
                }
            }
        });
    });


    it('should delete node with value "c"', () => {
        const list = new LinkedList('a');
        list.append('b');
        list.append('c'); // <-- deleting
        list.append('d');
        list.append('e');
        list.append('f');

        let node = list;
        while (node.data !== 'c') {
            node = node.next;
        }

        deleteNode(node);

        expect(list).to.be.deep.equal({
            data: 'a',
            next: {
                data: 'b',
                next: {
                    data: 'd',
                    next: {
                        data: 'e',
                        next: {
                            data: 'f',
                            next: null
                        }
                    }
                }
            }
        });
    });

});