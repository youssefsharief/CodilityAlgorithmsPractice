# python3

class Query:

    def __init__(self, query):
        self.type = query[0]
        if self.type == 'check':
            self.ind = int(query[1])
        else:
            self.s = query[1]


class QueryProcessor:
    _multiplier = 263
    _prime = 1000000007

    def __init__(self, bucket_count):
        self.bucket_count = bucket_count
        self.elements = [None] * self.bucket_count

    def _hash_func(self, s):
        ans = 0
        for c in reversed(s):
            ans = (ans * self._multiplier + ord(c)) % self._prime
        return ans % self.bucket_count

    def write_search_result(self, was_found):
        print('yes' if was_found else 'no')

    def write_chain(self, chain):
        print(' '.join(chain))

    def read_query(self):
        return Query(input().split())

    def process_query(self, query):
        if query.type == "check":
            try:
                self.write_chain(reversed(self.elements[query.ind]))
            except:
                self.write_chain([])
        elif query.type == "add":
            hashVal = self._hash_func(query.s)
            if self.elements[hashVal] is None:
                self.elements[hashVal] = []
            if query.s not in self.elements[hashVal]:
                self.elements[hashVal].append(query.s) 
        elif query.type == "del":
            hashVal = self._hash_func(query.s)
            if self.elements[hashVal] is None:
                pass
            else:
                if query.s in self.elements[hashVal]: 
                    self.elements[hashVal].remove(query.s)
                if len(self.elements[hashVal])==0:
                    self.elements[hashVal] = None
        elif query.type == 'find':
            hashVal = self._hash_func(query.s)
            self.write_search_result(
                False if self.elements[hashVal] is None or query.s not in self.elements[hashVal] else True
                )

    def process_queries(self):
        n = int(input())
        for i in range(n):
            self.process_query(self.read_query())

if __name__ == '__main__':
    bucket_count = int(input())
    proc = QueryProcessor(bucket_count)
    proc.process_queries()
