# python3
import threading

import sys

class Solution:

    def readData(self):
        n, self.m = map(int, sys.stdin.readline().split())
        self.lines = list(map(int, sys.stdin.readline().split()))
        self.rank = [1] * n
        self.parent = list(range(0, n))
        self.ans = max(self.lines)

    def find(self, table):
        while(self.parent[table] != table):
            self.parent[table] = self.parent[self.parent[table]]
            table = self.parent[table]
        return table
            
                        
    def combine(self, source, destination):
        self.parent[source] = self.parent[destination]
        self.lines[destination] = self.lines[destination] + self.lines[source]
        self.lines[source] = 0
        self.ans = max(self.ans, self.lines[destination])

    def merge(self, destination, source):
        realDestination, realSource = self.find(destination), self.find(source)
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

if __name__ == '__main__':
    main()

