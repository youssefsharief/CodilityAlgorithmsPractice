# Uses python3
def edit_distance(str1, str2): 
    arr = getStartingArray(str1, str2)
    for i in range(1,len(arr)):
        for j in range(1,len(str2)+1):
            if (str1[i - 1] == str2[j - 1]): 
                arr[i].append(min(arr[i - 1][j - 1], arr[i][j - 1] + 1, arr[i - 1][j] + 1))
            else:
                arr[i].append(min(arr[i - 1][j - 1] + 1, arr[i][j - 1] + 1, arr[i - 1][j] + 1))
    return getLastItemIn2DArray(arr)

def getStartingArray(str1, str2):
    arr = [[i] if i!=0 else [j for j in range(len(str2)+1)] for i in range(len(str1) + 1)]
    return arr

def getLastItemIn2DArray(arr):
    lastRow = arr[-1]
    lastItemInLastRow = lastRow[-1]
    return lastItemInLastRow


if __name__ == "__main__":
    print(edit_distance(input(), input()))
