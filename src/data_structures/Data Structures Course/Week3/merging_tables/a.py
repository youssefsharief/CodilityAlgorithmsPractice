# python3
import threading

import sys

class Solution:
    # def WriteTestResponse(self):
    #     with open('Week3/make_heap/tests/04.answer', 'w') as file:
    #         file.write(str(len(self._swaps)))
    #         for swap in self._swaps:
    #             file.write("%s %s\n" %(swap[1], swap[0])) 

    # def ReadTestData(self):
    #     data = open('Week3/merging_tables/tests/116', 'r').read().splitlines()
    #     n = int(data[0])
    #     self._data = [int(s) for s in data[1].split()]
    #     assert n == len(self._data)

    def readData(self):
        n, self.m = map(int, sys.stdin.readline().split())
        self.lines = list(map(int, sys.stdin.readline().split()))
        self.rank = [1] * n
        self.parent = list(range(0, n))
        self.ans = max(self.lines)

    # def getParent(self, table):
    #     while (self.parent[table] != table):
    #         # table = self.parent[table]
    #         self.parent[table] = self.parent[self.parent[table]]
    #     return self.parent[table]

    def getParent(self, table):
        if self.parent[table] == table:
            return table 
        self.parent[table] = self.getParent(self.parent[table])
        return self.parent[table]
        
            
    def combine(self, source, destination):
        self.parent[source] = self.parent[destination]
        self.lines[destination] = self.lines[destination] + self.lines[source]
        self.lines[source] = 0
        self.ans = max(self.ans, self.lines[destination])

    def merge(self, destination, source):
        realDestination, realSource = self.getParent(destination), self.getParent(source)
        if realDestination == realSource:
            return False
        if(self.rank[realDestination] == self.rank[realSource]):
            self.rank[realDestination] == self.rank[realDestination] + 1
            self.combine(realSource, realDestination)
        elif (self.rank[realDestination] > self.rank[realSource]):
            self.combine(realSource, realDestination) 
        else:
            self.combine(realDestination, realSource)        
        return True

    def solve(self):
        self.readData()
        for _ in range(self.m):
            destination, source = map(int, sys.stdin.readline().split())
            self.merge(destination - 1, source - 1)
            print(self.ans)
        

def main():
    s = Solution()
    s.solve()

sys.setrecursionlimit(10**7)  # max depth of recursion
threading.stack_size(2**27)   # new thread will get stack of such size
threading.Thread(target=main).start()

if __name__ == '__main__':
    main()

