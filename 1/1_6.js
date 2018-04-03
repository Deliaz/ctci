module.exports = {

    // O(n)
    compress(str) {
        const len = str.length;

        let lett = str[0];
        let count = 1;
        let final = '';

        for (let i = 1; i < len; i++) {
            const l = str[i];

            if (l !== lett) {
                final += (lett + count);
                count = 1;
                lett = l;
            } else {
                count += 1;
            }
        }
        final += (lett + count);

        if (final.length > len) {
            return str;
        } else {
            return final;
        }
    }

};
