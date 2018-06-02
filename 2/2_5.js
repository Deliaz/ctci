const LinkedList = require('./LinkedList');

module.exports = {

    /**
     * Sum Lists
     */
    sumLists(list1, list2) {
        if (!list1 || !list2) {
            return null;
        }

        let node1 = list1;
        let node2 = list2;
        let carry = 0;
        let sum = 0;
        let sumList = {next: null};
        let tail = sumList;

        while (node1 && node2) {
            sum = node1.data + node2.data + carry;
            if (sum >= 10) {
                carry = 1;
                sum -= 10;
            }
            else {
                carry = 0;
            }
            node1 = node1.next;
            node2 = node2.next;

            // Append number and move tail
            tail.next = new LinkedList(sum);
            tail = tail.next;

        }

        let longerList = node1 || node2;

        while (longerList) {
            sum = longerList.data + carry;
            if (sum >= 10) {
                carry = 1;
                sum -= 10;
            }
            else {
                carry = 0;
            }
            longerList = longerList.next;

            tail.next = new LinkedList(sum);
            tail = tail.next;
        }

        if (carry > 0) {
            tail.next = new LinkedList(carry);
        }

        return sumList;
    }


    // TODO reverse sum
};