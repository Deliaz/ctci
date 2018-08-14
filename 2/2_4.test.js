const expect = require('chai').expect;
const {partition} = require('./2_4');
const LinkedList = require('./LinkedList');


describe('2.4 Partition', () => {

    it('should separate list', () => {
        const list = new LinkedList(3);
        list.append(5);
        list.append(8);
        list.append(5);
        list.append(10);
        list.append(2);
        list.append(1);

        const result = partition(list, 5);

        expect(result).to.be.deep.equal({
            data: 3,
            next: {
                data: 2,
                next: {
                    data: 1,
                    next: {
                        data: 5,
                        next: {
                            data: 8,
                            next: {
                                data: 5,
                                next: {
                                    data: 10,
                                    next: null
                                }
                            }
                        }
                    }
                }
            }
        });
    });

    it('should not separate list', () => {
        const list = new LinkedList(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);

        const result = partition(list, 10);

        expect(result).to.be.deep.equal({
            data: 1,
            next: {
                data: 2,
                next: {
                    data: 3,
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
        expect(partition()).to.be.equal(null);
    });
});