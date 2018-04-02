module.exports = {

    URLify1(str) {
        return str.trim().replace(/\s/g, '%20'); // many spaces? \s+
    },

    URLify2(str) {
        return str.trim().split(' ').join('%20')
    }

};
