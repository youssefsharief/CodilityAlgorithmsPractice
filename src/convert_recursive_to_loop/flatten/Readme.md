2 approaches for recursive flattening
* First approach is to go left left all the way to all nodes then come back to check if each one has right. This is not good since you would lose track on where new items should be inserted in the new array. 
* The second approach is to return new array each time and insert it even if it is not fully nested in the orignal array