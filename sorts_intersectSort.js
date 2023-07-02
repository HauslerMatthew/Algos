//combine 2 already sorted arrays into a new sorted array containing only the intersected values.
//i.e. [1,2,2,2,7] and [2,2,6,6,7] => [2,2,7]

const intersectSort = (arr1, arr2, i=0, j=0, result=[]) => {
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            i++;
        }
        else if (arr1[i] > arr2[j]){
            j++;
        }
        else{
            result.push(arr1[i]);
            i++;
            j++;
        }
    }
    return result;
}

console.log(intersectSort([1,2,2,2,7], [2,2,6,6,7])); // [2,2,7]
console.log(intersectSort([1,2,2,2,7,7,7], [2,2,6,6,7,7])); // [2,2,7,7]
console.log(intersectSort([1,2,3], [1,1,1,2,2,2,3,3,3,3,3,3,3,3,4])); // [1,2,3]
console.log(intersectSort([2,3,3,3,4,6,6,8], [5,5,6,6,7,7,7,8,8,9])); // [6,6,8]