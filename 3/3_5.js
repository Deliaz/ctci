const Stack = require('./Stack');

function sortStack(stack) {
    const sortedStack = new Stack();
    let counter = 0;
    let temp = 0;

    if (!stack || stack.isEmpty()) {
        return null;
    }

    sortedStack.push(stack.pop());

    while (!stack.isEmpty()) {
        temp = stack.pop();

        if (sortedStack.peek() > temp) {
            sortedStack.push(temp)
        } else {
            while (sortedStack.peek() < temp && !sortedStack.isEmpty()) {
                stack.push(sortedStack.pop());
                counter += 1;
            }
            sortedStack.push(temp);
            while (counter--) {
                sortedStack.push(stack.pop());
            }
        }
    }

    return sortedStack
}

module.exports = sortStack;