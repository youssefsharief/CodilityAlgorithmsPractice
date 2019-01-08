# python3

class HeapBuilder:
    def __init__(self):
        self._swaps = []
        self._data = []

    def ReadData(self):
        n = int(input())
        self._data = [int(s) for s in input().split()]
        # self._data = [5,4,3,2,1]
        assert n == len(self._data)
    
    def WriteResponse(self):
        print(len(self._swaps))
        for swap in self._swaps:
            print(swap[1], swap[0])

    def siftDown(self,i):
        leftElementIndex = 2*i+1
        rightElementIndex = 2*i+2
        maxIndex = i
        if len(self._data) > leftElementIndex and self._data[maxIndex] > self._data[leftElementIndex]:
            maxIndex = leftElementIndex
        if len(self._data) > rightElementIndex and self._data[maxIndex] > self._data[rightElementIndex]:
            maxIndex = rightElementIndex
        if i is not maxIndex:
            self.swap(i, maxIndex)
            self.siftDown(maxIndex)

    def swap(self, i, j):
        self._swaps.append((j, i))
        self._data[i], self._data[j] = self._data[j], self._data[i]

    def buildHeapUsingSiftDown(self):
        for i in range(len(self._data)//2-1, -1,-1):
            self.siftDown(i)

    def Solve(self):
        self.ReadData()
        self.buildHeapUsingSiftDown()
        self.WriteResponse()
    
if __name__ == '__main__':
    heap_builder = HeapBuilder()
    heap_builder.Solve()

