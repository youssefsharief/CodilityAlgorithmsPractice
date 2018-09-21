import collections
Node = collections.namedtuple('Node', 'val left right')

# some sample trees having various node counts
tree0 = None  # empty tree
tree1 = Node(5, None, None)
tree2 = Node(7, tree1, None)
tree3 = Node(7, tree1, Node(9, None, None))
tree4 = Node(2, None, tree3)
tree5 = Node(2, Node(1, Node(4,tree3, None), None), tree3)
tree5


def solution(originalStructure):
    
    

    def flatten(structure, leftDone=False):
        arr = []
        if (structure.left and not leftDone):
            arr.insert(0, structure.left.val)
            flatten(structure.left)
        if structure.right:
            arr.insert(len(arr), structure.right.val)
        return flatten(nextStructure, True)

        # while structure.left:
        #     # arr = [structure.left.val] + arr
        #     print(structure.left)
        #     arr

        # index = len(arr)
        # while currentStructure.right:
        #     currentStructure = currentStructure.right
        #     arr.insert(index, currentStructure.val)
        #     index = len(arr)
        
        # # structure
        # currentStructure = structure
        
        return arr

        # if (structure.left):
        #     flatten(structure.left):
        # else:
    flatten(originalStructure)
    return track
    

y = solution(tree5)
y

    
