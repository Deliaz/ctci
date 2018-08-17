const Stack = require('./Stack');

/**
 * Sorts a stack
 * This function requires to be a mutating, so it changes the original stack.
 * @param stack
 * @returns {Stack} [optional] sorted stack
 */
function sortStack(stack) {
    const sortedStack = new Stack();
    let counter = 0;
    let temp = 0;

    if (!stack || stack.isEmpty()) {
        return null;
    }

    sortedStack.push(stack.pop());

    // As we sorting original stack, we have to reverse sorting and them move sorted result back to the original
    while (!stack.isEmpty()) {
        temp = stack.pop();

        if (sortedStack.peek() < temp) {
            sortedStack.push(temp)
        } else {
            while (sortedStack.peek() > temp && !sortedStack.isEmpty()) {
                stack.push(sortedStack.pop());
                counter += 1;
            }
            sortedStack.push(temp);
            while (counter--) {
                sortedStack.push(stack.pop());
            }
        }
    }

    while (!sortedStack.isEmpty()) {
        stack.push(sortedStack.pop());
    }

    return stack; // optional return
}

module.exports = sortStack;