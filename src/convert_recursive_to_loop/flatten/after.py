import collections
Node = collections.namedtuple('Node', 'val left right')

# some sample trees having various node counts
tree0 = None  # empty tree
tree1 = Node(5, None, None)
tree2 = Node(7, tree1, None)
tree3 = Node(7, tree1, Node(9, None, None))
tree4 = Node(2, None, tree3)
tree5 = Node(2, Node(1, None, None), tree3)
tree5


def flatten(structure):
    index = 0
    arr = [structure.val]
    currentStructure = structure

    while currentStructure.left:
        currentStructure = structure.left
        arr.insert(index, currentStructure.val)

    index = len(arr)
    while currentStructure.right:
        currentStructure = currentStructure.right
        arr.insert(index, currentStructure.val)
        index = len(arr)
    
    # structure
    currentStructure = structure
    
    return arr

    # if (structure.left):
    #     flatten(structure.left):
    # else:

y = flatten(tree5)
y

def getArrforStruct(s):
    
