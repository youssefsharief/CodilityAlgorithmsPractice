# python3

import sys
import threading

class Node:
    def __init__(self):
        self.children = []
    def addChild(self, child):
        self.children.append(child)

class HistoryItem:
    def __init__(self, node, height):
        self.node = node
        self.height = height

def compute_height(n, parents):
    # Replace this code with a faster implementation
    max_height = 0
    for vertex in range(n):
        height = 0
        current = vertex
        while current != -1:
            height += 1
            current = parents[current]
        max_height = max(max_height, height)
    return max_height

def compute_height_fast(n, data):
    nodes = [Node() for _ in range(n)]
    root = None
    for childIndex,parentIndex in enumerate(data):
        if parentIndex == -1:
            root = childIndex
        else:
            nodes[parentIndex].addChild(nodes[childIndex])
    return getHeightOfNode(nodes[root])

def getHeightOfNode(node):
    historyList = []
    height = 1
    maxHeight = 1
    while(True):
        if node.children:
            height = height + 1
            historyList.append(HistoryItem(node, height-1))
            node = node.children.pop()
        else:
            if len(historyList)>0:
                historyItem = historyList.pop()
                maxHeight = max(maxHeight,height)
                height = historyItem.height
                node = historyItem.node
            else:
                return maxHeight




def main():
    n = int(input())
    parents = list(map(int, input().split()))
    print(compute_height_fast(n, parents))
    # print(compute_height_fast(5, [-1,0,4,0,3]))


# In Python, the default limit on recursion depth is rather low,
# so raise it here for this problem. Note that to take advantage
# of bigger stack, we have to launch the computation in a new thread.
sys.setrecursionlimit(10**7)  # max depth of recursion
threading.stack_size(2**27)   # new thread will get stack of such size
threading.Thread(target=main).start()
