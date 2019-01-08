## note that this problem could be solved without sorting
def FindMajorityElement(a):
    l = len(a)
    if(l == 2):
        if(a[0] == a[1]):
            return a[0]
        else:
            return -1
    elif(l == 1):
        return a[0]

    element1 = FindMajorityElement(a[:l//2]) 
    element2 = FindMajorityElement(a[l//2:]) 

    if(element1 == -1 and element2 >= 0):
        return element2
    elif(element2 == -1 and element1 >= 0):
        return element1

    if(element1 == element2):
        return element1
    else:
        return -1

A = [1, 2, 3, 5, 5, 1, 3, 7,7,2,1,1,4,4,1,2,2,1,1] #Our array

FindMajorityElement(A)
