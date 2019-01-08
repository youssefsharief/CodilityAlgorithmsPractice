#!/usr/bin/python3

import sys, threading, math

sys.setrecursionlimit(10**7) # max depth of recursion
threading.stack_size(2**27)  # new thread will get stack of such size

class IsBST():
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

    
    def IsBinarySearchTree(self, i=0, lessThan=math.inf, moreThan=-2e31):
        if len(self.key) == 0:
            return True
        value = self.key[i]
        if value >= lessThan or value < moreThan:
            return False
        isLeftChildViolating = False
        isRightChildViolating = False
        indexOfLeftNode = self.left[i]
        if indexOfLeftNode != -1:
            isLeftChildViolating = not self.IsBinarySearchTree(indexOfLeftNode, value, moreThan)
        indexOfRightNode = self.right[i]
        if indexOfRightNode != -1:
            isRightChildViolating = not self.IsBinarySearchTree(indexOfRightNode, lessThan, value)
        if isLeftChildViolating or isRightChildViolating:
            return False
        else:
            return True
            


def main():
    tree = IsBST()
    tree.read()
    if tree.IsBinarySearchTree():
        print("CORRECT")
    else:
        print("INCORRECT")



threading.Thread(target=main).start()
