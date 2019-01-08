# python3

def are_matching(left, right):
    return (left + right) in ["()", "[]", "{}"]

class StackObject():
    def __init__(self, char, index):
        self.char = char
        self.index = index

def find_mismatch(text):
    opening_brackets_stack = []
    for i, char in enumerate(text):
        if char in "([{":
            opening_brackets_stack.append(StackObject(char, i))
            pass
        elif char in ")]}":
            if len(opening_brackets_stack)==0:
                return i+1
            if not are_matching(opening_brackets_stack[-1].char, char):
                return i+1
            else :
                opening_brackets_stack.pop()       
            pass
    
    return opening_brackets_stack[-1].index+1 if len(opening_brackets_stack) else 'Success'


def main():
    text = input()
    mismatch = find_mismatch(text)
    # mismatch = find_mismatch('[{}]{')
    print(mismatch)
    # test()


def test():
    import os
    # i = 0
    folderName = 'check_brackets_in_code/tests'
    for filename in os.listdir(folderName):
        if not filename.endswith('a'):
            dataFile = open(folderName + '/' + filename, 'r').read().splitlines()[0]
            resultsFile = open(folderName + '/' + filename+'.a','r').read().splitlines()[0]
            try:
                resultsFile =  int(resultsFile)
            except:
                pass
            myAnswer = find_mismatch(dataFile)
            if  myAnswer != resultsFile:
                print('Error: - ', dataFile, ' should be ', resultsFile, ' instead of ', myAnswer)
            # i = i+1
            # if i==6:
            #     return

if __name__ == "__main__":
    main()
