module.exports = {

    palindromePermutation(str) {
        const chars = new Set();

        str = str.toLowerCase(); // !

        for (let i = 0; i < str.length; i++) {
            const c = str[i];
            if (c !== ' ') {
                if (chars.has(c)) {
                    chars.delete(c)
                } else {
                    chars.add(c);
                }
            }
        }

        return chars.size <= 1; // 1 - middle point
    }

};