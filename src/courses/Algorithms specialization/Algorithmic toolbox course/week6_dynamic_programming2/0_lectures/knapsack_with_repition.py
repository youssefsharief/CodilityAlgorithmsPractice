class Thing:
    def __init__(self, value, weight):
        self.value = value
        self.weight = weight

W = 10
listOfThings = [Thing(30,6),Thing(14,3),Thing(16,4),Thing(9,2)]

arr=[0]
for i in range(1,W+1):
    maximumPossibleValue = arr[-1]
    for option in listOfThings:
        if (option.weight <= i):
            maximumPossibleValue = max(maximumPossibleValue, arr[i-option.weight] + option.value)
    arr.append(maximumPossibleValue)
print(arr)
    

