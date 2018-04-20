module.exports = {

    /**
     * Deleting a node
     */
    deleteNode(nodeToDelete) {
        if (!nodeToDelete || !nodeToDelete.next) {
            return null;
        }

        nodeToDelete.data = nodeToDelete.next.data;
        nodeToDelete.next = nodeToDelete.next.next;
    }
};

