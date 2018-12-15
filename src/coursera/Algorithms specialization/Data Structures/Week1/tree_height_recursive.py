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


def compute_height_fast(n, data):
    nodes = [Node() for _ in range(n)]
    root = None
    for childIndex,parentIndex in enumerate(data):
        if parentIndex == -1:
            root = childIndex
        else:
            nodes[parentIndex].addChild(nodes[childIndex])
    return recursGetMaxDepth(nodes[root])

def recursGetMaxDepth(node):
    heights = []
    for child in node.children:
        heights.append(recursGetMaxDepth(child))
    maxDepth = max(heights) + 1 if len(heights) else 1
    return maxDepth

def test():
    import os
    # i = 0
    folderName = 'tree_height/tests'
    for filename in os.listdir(folderName):
        if not filename.endswith('a'):
            dataFile = open(folderName + '/' + filename, 'r').read().splitlines()
            n = dataFile[0]
            data = dataFile[1]
            data.join(' ')
            resultsFile = open(folderName + '/' + filename+'.a','r').read().splitlines()[0]
            try:
                resultsFile =  int(resultsFile)
            except:
                pass
            myAnswer = compute_height_fast(int(n),[int(n) for n in data.split()])
            if  myAnswer != resultsFile:
                print('Error: - ', dataFile, ' should be ', resultsFile, ' instead of ', myAnswer)
            # i = i+1
            # if i==6:
            #     return



def main():
    # n = int(input())
    # parents = list(map(int, input().split()))
    # print(compute_height_fast(n, parents))
    test()
    # print(compute_height_fast(5, [4, -1, 4, 1, 1]))


# In Python, the default limit on recursGetMaxDepthion depth is rather low,
# so raise it here for this problem. Note that to take advantage
# of bigger stack, we have to launch the computation in a new thread.
sys.setrecursionlimit(10**7)  # max depth of recursGetMaxDepthion
threading.stack_size(2**27)   # new thread will get stack of such size
threading.Thread(target=main).start()
