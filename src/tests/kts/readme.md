* To close the input as a user: `CTRL+D`
* To output to txt file: node .\2a.js > log-file.txt
    * Now all console logs are outputted in the txt file








/*
Go to uniqueness anf get the least unique key, chose one from the array then pick up its id, 
then search for this card by id in the cards objectLog and grab its angle, then remove this card from the cardsLog,
then go search in the anglesLog ny the new angle to get the two new affested cardIds,
 then remove the cardId from the anglesLog, then go to the cardsLog and grab these two 
 ids along grab their uniqueness and then update the uniqueness of these two ids in both the uniqueness 
 log and the cards log. In the uniqueness log yous should push the ids to their new respective uniqueness and
 pop out the ids from the old uniqueness. Actually you do not need to pop the ids from the uniqueness log. 
 What you could is the following to save time:-  when you are picking the next card to sell, 
 check that its uniqueness match the uniqueness in the cardsLog, if not mark the number as null in the uniquenessLog


 Another approach: In the anglesMap add uniqueness value and in the uniquenessMap add angles array
*/



/*
From each card add an angle to the angle log


*/