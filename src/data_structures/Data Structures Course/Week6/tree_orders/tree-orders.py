# python3

import sys, threading
sys.setrecursionlimit(10**6) # max depth of recursion
threading.stack_size(2**27)  # new thread will get stack of such size

class Node:
    def __init__(self, index, key, leftChildIndex, rightChildIndex):
        self.index = index
        self.key  = key
        self.leftChildIndex = leftChildIndex
        self.rightChildIndex = rightChildIndex

class TreeOrders:
    def read(self):
        self.n = int(sys.stdin.readline())
        self.key = [0 for i in range(self.n)]
        self.left = [0 for i in range(self.n)]
        self.right = [0 for i in range(self.n)]
        for i in range(self.n):
            [a, b, c] = map(int, sys.stdin.readline().split())
            self.key[i] = a
            self.left[i] = b
            self.right[i] = c


    def inOrder(self, i=0, result = []):
        indexOfLeftNode = self.left[i]
        if  indexOfLeftNode != -1:
            self.inOrder(indexOfLeftNode, result)
        result.append(self.key[i])
        indexOfRightNode = self.right[i]
        if indexOfRightNode != -1:
            self.inOrder(indexOfRightNode, result)
        return result

    def preOrder(self, i=0, result = []):
        result.append(self.key[i])
        indexOfLeftNode = self.left[i]
        if  indexOfLeftNode != -1:
            self.preOrder(indexOfLeftNode, result)
        indexOfRightNode = self.right[i]
        if indexOfRightNode != -1:
            self.preOrder(indexOfRightNode, result)
        return result

    def postOrder(self, i=0, result = []):
        indexOfLeftNode = self.left[i]
        if  indexOfLeftNode != -1:
            self.postOrder(indexOfLeftNode, result)
        indexOfRightNode = self.right[i]
        if indexOfRightNode != -1:
            self.postOrder(indexOfRightNode, result)
        result.append(self.key[i])
        return result

def main():
	tree = TreeOrders()
	tree.read()
	print(" ".join(str(x) for x in tree.inOrder()))
	print(" ".join(str(x) for x in tree.preOrder()))
	print(" ".join(str(x) for x in tree.postOrder()))

threading.Thread(target=main).start()
