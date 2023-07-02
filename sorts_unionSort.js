//combine 2 already sorted arrays into a new sorted array containing the multiset union.
//i.e. [1,2,2,2,7] and [2,2,6,6,7] => [1,2,2,2,6,6,7]

const unionSort = (arr1, arr2, i=0, j=0, result=[]) => {
    //start by adding the lower value at each arrays current index, then increment the index that was pushed and repeat.
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else if (arr1[i] > arr2[j]){
            result.push(arr2[j]);
            j++;
        }
    //how will you handle when the values are equal? 
        else{
            result.push(arr1[i]);
            i++;
            j++;
        }
    }
    //if either array still has values after one has been completely pushed?
    while (i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    //return the resulting array
    return result;
}

console.log(unionSort([1,2,2,2,7], [2,2,6,6,7])); // [1,2,2,2,6,6,7]
console.log(unionSort([1,2,2,2,7,7,7], [2,2,6,6,7,7])); // [1,2,2,2,6,6,7,7,7]