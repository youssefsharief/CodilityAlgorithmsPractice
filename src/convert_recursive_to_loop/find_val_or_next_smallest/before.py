#!/usr/bin/env python

"""Recursion-to-Iteration Exercise 1
There are two recursive calls in find_val_or_next_smallest.
Can you create an equivalent function in which one of the
calls has been replaced by iteration?  (Hint:  Tail calls
are easier to replace.)
Can you create an equivalent function in which *both* of the
calls have been replaced by iteration?
For more information, see:
http://blog.moertel.com/tags/recursion-to-iteration%20series.html
Tom Moertel <tom@moertel.com>
"""

class BSTNode(object):
    """Binary search tree node."""

    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self):
        return '(%s, %r, %r)' % (self.val, self.left, self.right)

def find_val_or_next_smallest(bst, x):
    """Get the greatest value <= x in a binary search tree.
    Returns None if no such value can be found.
    """
    if bst is None:
        return None
    elif bst.val == x:
        return x
    elif bst.val < x:
        if bst.right is None:
            return bst.val
        return find_val_or_next_smallest(bst.right, x)
    else:
        return find_val_or_next_smallest(bst.left, x)
        


# tests

import bisect

tree0 = None
tree1 = BSTNode(5)
tree2 = BSTNode(5, BSTNode(3))
tree3 = BSTNode(5, BSTNode(3), BSTNode(9))
tree4 = BSTNode(5, BSTNode(3, BSTNode(1)), BSTNode(9))

trees = [tree0, tree1, tree2, tree3, tree4]
tree_vals = [[], [5], [3, 5], [3, 5, 9], [1, 3, 5, 9]]

tree1
tree2
print(tree4)

print(find_val_or_next_smallest(tree4, 6))