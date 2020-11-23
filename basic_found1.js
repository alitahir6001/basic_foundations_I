// Basic Foundations I: from Learn Platform Assignment

//01. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function twofiddyfive () {
    for (i=1; i<255; i++){
    console.log(i); 
    }
return(i);
}
console.log(twofiddyfive());


// 02. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function thousand() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i;
            console.log(sum);
        }
    }
    return sum;
}
thousand();


// 03. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sumOdds() {
    var sum = 0;
    for (var i = 1; i < 5001; i++) {
        if (i % 2 != 0) {
        console.log(i); 
        sum += i;
        }
    }
return sum;
}
sumOdds();

// 04. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function arraysum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);  
    return sum;
}
arraysum([1,2,5]);
arraysum([-5,2,5,12]);
arraysum([20,-15,5,40,-5,4]);


// 05. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function maxfinder(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
return max;
}
console.log("Max value is " + maxfinder([1,2,10,5,3,-5,8]));


// 06. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function PrintAverageofArray (arr) {
    if (arr.length == 1) {
        console.log("Array must contain values.");
        return null;
    }
    else if (arr.length == 1) {
        console.log(arr[0]);
        return arr [0];
    }
    else {
        var sum = 0;
        var count = arr.length;
        for (var i=0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        console.log(sum/count);
        return sum/count;
    }
}
PrintAverageofArray([5,4,1,5]);
PrintAverageofArray([1,3,5,7,20]);


// 07. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function arrayodd(arr){
    var newarr = [];
    for (var odd=1; odd<=50; odd+=2) {
    console.log(odd);
    }
    return newarr;
}
console.log(arrayodd());


// 08. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr, y) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            counter += 1;
        }
    }
    return counter;
}
console.log(greaterThanY([1,3,5,7], 3));  //Dont forget to add the console.log when you call the function! Calling the function works, just doesn't print anything for user to see....


// 09. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squaredArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(squaredArr([1,5,10,-2]));

// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function replacenegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(replacenegatives([1,5,10,-2]));



// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function minimaxavg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        else if (arr[i] < min) {
            min = arr[i]
        }

        sum += arr[i];
    }

    avg = sum / arr.length;
    var newarr = [max, min, avg];
    return newarr;
}
console.log(minimaxavg([1,5,10,-2]));  //This one took a long ass time.

// 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr) {
    var temp = 0;

    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    return arr;
}
console.log(swap([1,5,10,-2]));  // remembered this one from a class demo. Good for job interviews!

// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function num2string(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
console.log(num2string([-1,-3,2]));