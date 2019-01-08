


class node:
    def __init__(self, data, nx):
        self.data = data
        self.next = nx

    def get_data(self):
        return self.data

    def set_data(self, data):
        self.data = data

    def get_next_node(self):
        return self.next

    def set_next_node(self, new_node):
        self.next = new_node



def checkIfItIsTheRequiredOne(node, value):
    if node.value == value:
        return node
    elif node.next is not None:
        return checkIfItIsTheRequiredOne(node.next, value)
    else:
        return None

head = {}
checkIfItIsTheRequiredOne(head, 5)


def removeNodeForDoubly(node):
    nextNode = node.getNextNode()
    prevNode = node.getPrevNode()
    prevNode.setNextNode(nextNode)
    nextNode.setPrevNode(prevNode)