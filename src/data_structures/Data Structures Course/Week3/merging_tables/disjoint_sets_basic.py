class Node:
    def __init__(self, data):
        self.rank=0
        self.data = data
        self.parent = self
nodes = {}

for i in range(1,13):
    nodes[i]=Node(i)

def union(x,y):
    parent1 = nodes[x].parent
    parent2 = nodes[y].parent

    if(parent1.data == parent2.data):
        return
    if(parent1.rank == parent2.rank):
        parent1.rank == parent1.rank + 1
        parent2.parent = parent1
    elif (parent1.rank > parent2.rank):
        parent2.parent = parent1
    else:
        parent1.parent = parent2

def find(node):
    if node.parent is node:
        return node
    else:
        node.parent = node.parent.parent
        return find(node.parent)

union(2, 10)
union(7, 5)
union(6, 1)
union(3, 4)
union(5, 11)
union(7, 8)
union(7, 3)
union(12, 2)
union(9, 6)
print(find(nodes[6]).data)
print(find(nodes[3]).data)
print(find(nodes[11]).data)
print(find(nodes[9]).data)
