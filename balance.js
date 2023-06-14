// WRITE A FUNCITON THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr) {
    var total = 0
    var sumleft = 0
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    for (var i = 0; i < arr.length; i++) {
        sumleft += arr[i];
        total -= arr[i];
        if (sumleft == total) {
            return true;
        }
    }
    return false;
}

console.log(balancePoint([1, 2, 3, 4, 10])); // TRUE step 1: get 20. step 2, add 1 to left, subtract 1 from total (19).  add 2 to left (3), subtract 2 from total (17).  add 3 to left (6), sub from total (14). add 4 to left (10), sub 4 from total (10)
// -- > 1+2+3+4 = 10    10 == 10 so balanced
console.log(balancePoint([1, 2, 3, 2, 1]));  // FALSE
console.log(balancePoint([2, 2, 4, 1, 2, 3, 3, 1]));  // TRUE -- how would you compare the left of the array to the right without knowing where the balance point can be?
// easy to check when you know where the break point is.

// total : 18
//left (2), total (16) - left (4), total (14), left(8), total (10), left (9), total (9)


// =============================================
// =============================================


// WRITE A FUNCITON THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE INDEX
// WHERE THE SUM ON EITHER SIDE OF THE INDEX IS THE SAME

function balanceIndex(arr) {
    var total = 0
    var sumleft = 0
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    for (var i = 0; i < arr.length; i++) {
        sumleft += arr[i];
        total -= arr[i];
        if (sumleft == total - arr[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(balanceIndex([-2, 5, 7, 0, 3])); //true - at index 2 (7), the sum of either side is 3 (-2+5 // 0+3)
console.log(balanceIndex([9, 9]));
console.log(balanceIndex([9, 17, 9]));
console.log(balanceIndex([4, 2, 2, 6]));
console.log(balanceIndex([9, 1, 9]));
console.log(balanceIndex([1, 8, 1, 2, 3, 4]));

