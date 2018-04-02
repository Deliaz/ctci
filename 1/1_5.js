module.exports = {

    oneAway(str1, str2) {
        const len1 = str1.length;
        const len2 = str2.length;

        if (Math.abs(len1 - len2) === 1) {
            if (len1 > len2) {
                return ssj(str1).includes(ssj(str2));
            } else {
                return ssj(str2).includes(ssj(str1));
            }
        }

        if (len1 === len2) {
            const dict = new Map();

            str1.split``.forEach(l => {
                dict.set(l, dict.has(l) ? dict.get(l) + 1 : 1)
            });

            str2.split``.forEach(l => {
                dict.set(l, dict.has(l) ? dict.get(l) - 1 : 1)
            });

            let diff = 0;
            for (let i of dict.values()) {
                diff += i;
            }

            return diff <= 2;
        }

        return false
    }

};

// Split Sort Join
function ssj(str) {
    return str.split('').sort().join('');
}
