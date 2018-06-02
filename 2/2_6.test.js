const expect = require('chai').expect;
const {isPalindrome} = require('./2_6');
const LinkedList = require('./LinkedList');


describe('2.6 Is Palindrome', () => {

    it('should return true for palindromic list', () => {
        const list = new LinkedList(0);
        list.append(1);
        list.append(2);
        list.append(2);
        list.append(1);
        list.append(0);

        expect(isPalindrome(list)).to.be.equal(true);
    });

    it('should return true for palindromic list', () => {
        const list = new LinkedList(0);
        list.append(1);
        list.append(2);
        list.append(1);
        list.append(0);

        expect(isPalindrome(list)).to.be.equal(true);
    });

    it('should return true for palindromic list (length = 1)', () => {
        const list = new LinkedList(1);

        expect(isPalindrome(list)).to.be.equal(true);
    });

    it('should return false for non-palindromic list', () => {
        const list = new LinkedList(0);
        list.append(1);
        list.append(2);
        list.append(2);
        list.append(0);

        expect(isPalindrome(list)).to.be.equal(false);
    });

    it('should return false for non-palindromic list', () => {
        const list = new LinkedList(0);
        list.append(1);
        list.append(2);
        list.append(2);
        list.append(1);
        list.append(3);

        expect(isPalindrome(list)).to.be.equal(false);
    });

});