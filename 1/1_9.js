module.exports = {
    isRotation(s1, s2) {
        if (s1.length === s2.length) {
            const doubleS1 = s1 + s1;
            return isSubstring(doubleS1, s2);
        }

        return false
    }
};

function isSubstring(s1, s2) {
    return s1.includes(s2);
}