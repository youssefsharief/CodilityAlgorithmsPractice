## not sure if it is correct
class Thing:
    def __init__(self, value, weight):
        self.value = value
        self.weight = weight
    def __eq__(self, other):
        return self.value == other.value and self.weight == other.weight

class SavedItemInLog:
    def __init__(self, value, availableOptionsForNextTime):
        self.value = value
        self.availableOptionsForNextTime = availableOptionsForNextTime
    

def solution(W, listOfThings):
    arr=[SavedItemInLog(0,listOfThings)]
    for i in range(1,W+1):
        maximumPossibleValue = arr[-1].value 
        newAvailableOptionsForNextTime = arr[-1].availableOptionsForNextTime
        for option in arr[-1].availableOptionsForNextTime:
            if (option.weight <= i):
                indexToInvestigate = i-option.weight
                itemToInvestigate = arr[indexToInvestigate]
                newValueToInvestigate = itemToInvestigate.value + option.value
                if ( newValueToInvestigate > maximumPossibleValue and existsInList(itemToInvestigate.availableOptionsForNextTime, option)):
                    maximumPossibleValue = newValueToInvestigate
                    newAvailableOptionsForNextTime = [x for x in itemToInvestigate.availableOptionsForNextTime if x != option]

        arr.append(SavedItemInLog(maximumPossibleValue, newAvailableOptionsForNextTime))
    return arr

def existsInList(arr, option):
    for item in arr:
        if option == item:
            return True
    return False




W = 10
listOfThings = [Thing(30,6),Thing(16,4),Thing(14,3),Thing(9,2)]

arr = solution(W, listOfThings)

print(arr[-1].value)
    

