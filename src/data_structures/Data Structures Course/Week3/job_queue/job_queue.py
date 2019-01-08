# python3
# not working fully
import math
from heapq import heappush, heappop

class JobQueue:
    def read_data(self):
        self.num_workers, m = map(int, input().split())
        self.jobs = list(map(int, input().split()))
        assert m == len(self.jobs)
        self.jobs.reverse()
        self.outputLog = []
        self.heap = []

    def write_response(self):
        for (workIndex, time) in self.outputLog:
            print(workIndex, time) 

    def push_to_heap_initially(self):
        for workerIndex in range(self.num_workers):
            timeToCompleteTheJob = self.jobs.pop()
            heappush(self.heap, (timeToCompleteTheJob,workerIndex))
            self.outputLog.append((workerIndex, 0))

    def assign_jobs(self):
        while(len(self.jobs)):
            (timeWhenTheWorkerIsFree,workerIndex) = heappop(self.heap)
            timeToCompleteTheNewJob = self.jobs.pop()
            heappush(self.heap, (timeWhenTheWorkerIsFree+timeToCompleteTheNewJob,workerIndex))
            self.outputLog.append((workerIndex, timeWhenTheWorkerIsFree))            
            

    def solve(self):
        self.read_data()
        self.push_to_heap_initially()
        self.assign_jobs()
        self.write_response()

if __name__ == '__main__':
    job_queue = JobQueue()
    job_queue.solve()

