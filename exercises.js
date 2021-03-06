/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2) 
  }
  return result
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
var sumArrays = function(arr1, arr2) {
  var results = 0
  var arr = arr1.concat(arr2)

  for (var i = 0; i < arr.length; i++) {
    results += arr[i]
  }

  return results
}

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(str) {
  var results = str.length
  return results
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */
var arrayLength = function(arr) {
  var results = arr.length
  return results
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr) {
  var results = 0

  for (var i = 0; i < arr.length; i++) {
    results += arr[i]
  }

  return results
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(arr) {
  var results = []

  for (var i = 0; i < arr.length; i++) {
    results[i] = arr[i].length
  }

  return results
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function(arr) {
  var results = 0

  for (var i = 0; i < arr.length; i++) {
    results += arr[i].length
  }

  return results
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj) {
  var results = Object.values(obj)
  return results
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(obj) {
  var results = Object.keys(obj).length
  return results
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function(num) {
  var results = []

  for (var i = 0; i < num; i++) {
    results.push(0)
  }

  return results
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(arr) {
  var results = arr
    results.pop()
  return results
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(str) {
  var results = str.split('')
  return results
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(arr) {
  var results = arr[arr.length-1].length
  return results
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(arr) {
  var results = 0

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      results += arr[i]
    }
  }

  return results
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(arr) {
  var results = 0

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 10) {
      results += 1
    }
  }

  return results
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(arr) {
  var results = 1

  for (var i = 0; i < arr.length; i++) {
    results *= arr[i]
  }

  return results
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj) {
  var results = Object.keys(obj)
  return results
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function(arr) {
  var results = 0

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      results += arr[i]
    }
  }

  return results
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arr) {
  var results = 0

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length <= 3) {
      results += 1
    }
  }

  return results
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(arr) {
  var results = arr.length
  return results
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(obj) {
  var results = Object.keys(obj)
  return results
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(obj) {
  var results = Object.values(obj)
  return results
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key, value) {
  var results =  {
    [key]: value
  }

  return results
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function(value, key) {
  var results = {
    [key]: value
  }

  return results
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arr) {
  var results = {
    [arr[0]]: arr[1]
  }

  return results
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr) {
  var results = {
    [arr[1]]: arr[0]
  }

  return results
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(arr) {
  var results = {}

  for (var i = 0; i < arr.length; i++) {
    results[arr[i]] = 0
  }

   return results
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj) {
  var results = Object.values(obj)
  return results
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj) {
  var results = Object.keys(obj)
  return results
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj) {
  var results = []
  var keys = Object.keys(obj)
  var values = Object.values(obj)

  for (var i = 0; i < keys.length; i++) {
    var tempArr = []
      tempArr[0] = keys[i]
      tempArr[1] = values[i]
    results.push(tempArr)
  }

  return results
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr) {
  var results = {}

  for (var i = 0; i < arr.length; i++) {
    results[arr[i]] = false
  }

  return results
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(arrOne, arrTwo) {
  var results = {}

  for (var i = 0; i < arrTwo.length; i++) {
    results[arrOne[i]] = arrTwo[i]
  }

  return results
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(objOne, objTwo) {
  var results = []
  var mainObj = Object.assign(objOne, objTwo)
  var keys = Object.keys(mainObj)
  var values = Object.values(mainObj)

  for (var i = 0; i < keys.length; i++) {
    var tempArr = []
      tempArr[0] = keys[i]
      tempArr[1] = values[i]
    results.push(tempArr)
  }

  return results
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(arr) {
  var results = {}

  for (var i = 0; i < arr.length; i++) {
    results[arr[i]] = true
  }

  return results
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(arr) {
  var results = {}

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      results[arr[i]] = true
    } else {
      results[arr[i]] = false
    }
  }

  return results
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr) {
  var results = {}

  for (var i = 0; i < arr.length; i++) {
    results[arr[i]] = true
  }

  return results
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(str) {
  var results = {}
  var strArr = str.split('')

  for (var i = 0; i < str.length; i++) {
    results[strArr[i]] = true
  }

   return results
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function(arr) {
  var results = {}

  for (var i = 0; i < arr.length; i++) {
    results[arr[i]] = arr[i].length
  }

  return results
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap = function(arr) {
  var results = {}
  var arrSort = arr.sort()
  //tempStr = ""
  //countStr = 0

  for (var i = 0; i < arr.length; i++) {
    results[arr[i]] = (results[arr[i]] || 0) + 1

    //var count = (arrSort.lastIndexOf(arr[i]) - arrSort.indexOf(arr[i])+1)
    //results[arr[i]] = count
  }

  /*
  for (var i = 0; i < arr.length; i++) {
    if (results.hasOwnProperty(arr[i])) {
      results[arr[i]]++
    } else {
      results[arr[i]] = 1
    }

    return results
  }
  */

  /*
  for (var i = 0; i < arr.length; i++) {
    if (tempStr !== arrSort[i]) {
      tempStr = arrSort[i]
      countStr = 1
    } else {
      countStr += 1
    }

  results[tempStr] = countStr

  }
  */

  return results
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = function(arr) {
  var results = {}

  for (var i = 0; i < arr.length; i++) {
    results[arr[i][0]] = arr[i][1]
  }

  return results
}


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}