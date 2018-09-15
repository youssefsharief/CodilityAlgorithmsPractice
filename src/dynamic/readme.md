
To understand dynamic programming try to solve the problem in hand with recursion first which is iniffiecient then move from to next algorithm


1. Recursion
Calculations are repeated O(n2).


1. Memoizatoin
Instead of repeating the calculations, we store it in a log object in the memoized approach which is much more efficient O(n). We use recursion also but we do not repeat calcualtions. This is top-down since we try to calculate fib 10 first before attempting to get fib 2 for example



3. Buttom-up
The buttom-up approach is O(n) like the memoized but we start by getting fib 3 first before getting fib 10. We start by getting all fib starting from fib 3 till fib of the required element and store it in an object or in an array


### Notes
I did not understand the number_solitare till now