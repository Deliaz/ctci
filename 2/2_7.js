module.exports = {

    /**
     * Intersection
     */
    intersection1(list1, list2) {
        if (!list1 || !list2) {
            return null;
        }

        let node1 = list1;
        while (node1) {
            node1.seen = true;
            node1 = node1.next;
        }

        let node2 = list2;
        while (node2) {
            if (node2.seen) {
                return node2
            }
            node2 = node2.next;
        }

        return false;
    },

    /**
     * Intersection
     */
    intersection2(list1, list2) {
        if (!list1 || !list2) {
            return null;
        }

        const lenAndTail1 = getLengthAndTail(list1);
        const lenAndTail2 = getLengthAndTail(list2);

        if (lenAndTail1.tail !== lenAndTail2.tail) {
            return false;
        }

        let node1 = skipNodes(list1, lenAndTail1.len - lenAndTail2.len);
        let node2 = skipNodes(list2, lenAndTail2.len - lenAndTail1.len);

        while (node1 && node2) {
            if (node1 === node2) {
                return node1;
            }

            node1 = node1.next;
            node2 = node2.next;
        }
    }
};

function getLengthAndTail(list) {
    let length = 0;
    let lastNode;
    while (list) {
        lastNode = list;
        list = list.next;
        ++length;
    }
    return {
        len: length,
        tail: lastNode
    };
}

function skipNodes(list, num) {
    while (num > 0) {
        list = list.next;
        --num;
    }
    return list;
}