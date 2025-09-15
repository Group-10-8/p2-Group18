
'use strict'; //stricter handling in javascript

//takes orginalarray as input
function MakeMultiFilter(originalArray){
    const arrayFilterer = function (filterCriteria = undefined, callback = undefined){
        if (arrayFilterer.currentArray === undefined){
            arrayFilterer.currentArray = originalArray;
        }
            
        //makes sure orginalarray is actually an array
        if (Array.isArray(originalArray)) {
            if ((typeof filterCriteria === "function")) {
                //filters out the elements 
                arrayFilterer.currentArray =
                    arrayFilterer.currentArray.filter(e => filterCriteria(e));
            } else { 
                return arrayFilterer.currentArray;
            }
        }
        //callback function if needed
        if (typeof callback === 'function'){
            callback.call(originalArray, arrayFilterer.currentArray);
        }
        return arrayFilterer;
    };
    return arrayFilterer;
}
