module.exports = {

    /**
     * Is Palindrome
     *
     * Simplest way, is to use additional string as a stack.
     * Memory - O(n)
     * Time - O(n)
     */
    isPalindrome(node) {
        if (!node) {
            return null;
        }

        let str = '';

        while (node) {
            str += node.data;
            node = node.next;
        }


        if (str.length === 1) {
            return true;
        }

        const skipMiddle = str.length % 2 === 0 ? 0 : 1;


        const left = str.slice(0, str.length / 2);
        const right = str.slice((str.length + skipMiddle) / 2);

        return left === right.split('').reverse().join('');
    }

    // TODO Check recursive way
};