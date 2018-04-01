module.exports = {

    // O(n^2)
    isUnique1(str) {
        const len = str.length;
        if (len) {
            for (let i = 0; i < len - 1; i++) {
                for (let j = i + 1; j < len; j++) {
                    if (str[i] === str[j]) {
                        return false;
                    }
                }
            }
        }

        return true;
    },

    // split: n
    // sort: n*log(n) // best
    // for: n
    // Total: O(n^3 * log(n))
    isUnique2(str) {
        const sortedStr = str.split('').sort();
        const len = str.length;

        for (let i = 1; i < len; i++) {
            if (sortedStr[i] === sortedStr[i - 1]) {
                return false;
            }
        }

        return true;
    },


    // O(n^2) ?
    isUnique3(str) {
        return Array.from(str).length === (new Set(str)).size;
    }
};
