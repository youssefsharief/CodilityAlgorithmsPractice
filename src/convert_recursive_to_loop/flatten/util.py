def get_nested(structure, track):
    for track in range(len(track)):
        structure = structure[1 if track is 'left' else 2]
    return structure


tup = (1,(2,(3,(4,3,2),5),1),(3,3,3))
y = get_nested(tup, ['right'])

y

# def flattenOnce(structure):
#     arr=[]
#     if (structure.left):
#         arr.insert(0, structure.left.val)
#         flattenOnce(structure.left)
#     if structure.right:
#         arr.insert(len(arr), structure.right.val)
#     return arr

def flattenOnceTup(structure):
    arr=[structure[0]]
    if (structure[1]):
        arr.insert(0, structure[1])
        # flattenOnce(structure.left)
    if structure[2]:
        arr.insert(len(arr), structure[2])
    return arr

flat_arr = []

u = flattenOnceTup(tup)

# u = [flattenOnceTup(tup) for tup in u if type(tup) is not int]

u



