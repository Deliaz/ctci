module.exports = {

    /**
     * Loop detection
     */
    loopDetection1(list) {
        if (!list) {
            return null;
        }

        const seen = new Set();

        let node = list;
        while (node) {
            if (seen.has(node)) {
                return node;
            }
            seen.add(node);
            node = node.next;
        }
        return false;
    },

    /**
     * Loop detection with runners
     */
    loopDetection2(list) {
        if (!list) {
            return null;
        }

        let fast = list;
        let slow = list;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                break;
            }
        }

        if (!slow || slow !== fast) {
            return false;
        }


        slow = list;
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }
};