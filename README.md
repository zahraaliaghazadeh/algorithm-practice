# algorithm-practice
Algorithm Practice from different resources


## javascript-cheatsheet

>Most commonly used javascript methods

## Table of Contents
- [Methods](#methods)
  - [Arrays](#arrays)
  - [Objects](#objects)
  - [Strings](#strings)
  - [Numbers](#numbers)

- [Learning Resources](#learning-resources)
  - [More Helpful Resources](#more-helpful-resources)
- [Credits](#credits)
- [Contributors](#contributors)

## Methods
### Arrays
* slice - O(N) Extracts a section of an array and returns a new array.
* splice - O(N) Adds and/or removes elements from an array.
* find - (linear search) Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
* concat - O(N) Returns a new array comprised of this array joined with other array(s) and/or value(s).
* join - Joins all elements of an array into a string.
* filter - O(N) Creates a new array with all of the elements of this array for which the provided filtering function returns true.
* map - O(N) Creates a new array with the results of calling a provided function on every element in this array.
* reduce - O(N) Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
* reverse - Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
* sort - O( N * logN) Sorts the elements of an array in place and returns the array.
* push - O(1) Adds one or more elements to the end of an array and returns the new length of the array.
* indexOf - (linear search) Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
* includes - (linear search) Determines whether an array contains a certain element, returning true or false as appropriate.
* lastIndexOf - Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
* every - Checks if all elements pass a test
* pop - O(1) It removes the last element of the array and returns it
* shift - O(N) It removes the first element of an array and returns it
* unshift - O(N) It adds to the beginning of an array and returns the new length
* forEach - O(N) It calls a function once for each element
* isArray - Checks to see if array, will return true
* findIndex - (linear search) executes the function once for each element present in the array

### Objects
* entries - O(N) Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
* keys - O(N) Returns an array containing the names of all of the given object's own enumerable string properties.
* values - O(N) Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
* object.assing - to make copy of obj
* spread operator - to make copy of obj
* hasOwnProperty - O(1) returns a boolean if the object has a property as its own 

### Strings
* split - to split string into array of substrings and returns a new array.
* charAt - returns the character at a specified index of a string
* charCodeAt - returns the uni code of the character at the specified index in the string
* fromCharCode - opposite of charcodeAt
* concat - join two or more strings and returns a new string
* includes - determines whether a string contains a specified character , returns T/F
* indexOf - returns the position of the first occurance of the specific character in string starting from the beginning of the string, else returns -1
* lastIndexOf - returns the position of the first occurance of the specific character in string starting from the end to the beginning of the string, else returns -1
* match - searches a string for a match against a regex and returns the match as an array
* repeat - returns a new string with a specified number of copies of the string that was called on
* replace - searches a string for a specified value or regex and returns a new string 
* search - searches a string for a specified value or regex and returns the position of the match, else returns -1
* slice - extracts part of the string and returns the extracted part in a new string, exclusive (not including the end index)
* startsWith - determines if a string begins with a character of a specified string, returns T/F
* endsWith - determines if a string ends with a character of a specified string, returns T/F
* substr - extracts parts of a string beginning at the character of specified position and returns the specified number of characters
* substring - extracts a character from the string between two specified indexes and returns the new substring, exclusive (not including the end index)
* toLowerCase - convert to lowercase letters but does not change the original string
* toUpperCase - convert to uppercase letters but does not change the original string
* trim - removes white spaces from both ends of the string, does not change the original string


### Numbers
* toFixed(n) - it will limit the number of decimals to be rounded to n , returns string
* isNan()    - it will check the type to see if it is not number
* isInteger() - It will return true if number is integer
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true 
* Math.log2() - calculates the log base 2
* Math.floor() - rounds down
* Math.ceil() - rounds up
* Math.round() - rounds to the nearest integer
* toString(2) - converts to binary with base 2
* parseInt(x,2) - converts from binary of base 2


### Date
* Date.parse -  parses a date string and returns a number of milliseconds between the date and midnight 01/01/1970s
* new Date() - instentiate , create a new date object


## Learning Resources

- Regular Expressions / RegEx

  - [Awesome RegEx](https://github.com/aloisdg/awesome-regex)
  - [Regular Expressions - Eloquent JavaScript](https://eloquentjavascript.net/09_regexp.html)
  - [Regular Expressions - The Modern JavaScript Tutorial](https://javascript.info/regexp-introduction)
  - [Breaking the Ice With Regular Expressions - CodeSchool](https://www.pluralsight.com/courses/code-school-breaking-the-ice-with-regular-expressions)
  - [RegExp The Ultra Basics in JavaScript](https://www.youtube.com/watch?v=VrT3TRDDE4M)

* ES6 / ES2015

  - [ES6 Katas - TDDbin](http://es6katas.org)
  - [ES6 for Everyone - Wes Bos](https://es6.io)
  - [Modern JavaScript Cheatsheet - Beaudru Manuel](https://github.com/mbeaudru/modern-js-cheatsheet)

- Array & Objects
  - [Array Explorer - Sarah Drasner](https://sdras.github.io/array-explorer)
  - [Object Explorer - Sarah Drasner](https://sdras.github.io/object-explorer)

* Good Practices
  - [Clean Code JavaScript - Ryan McDermott](https://github.com/ryanmcdermott/clean-code-javascript)

### More Helpful Resources

- [RegEx Snippets](https://github.com/jeffreyshen19/RegEx-Snippets)
- [Learn RegEx](https://github.com/zeeshanu/learn-regex)
- [JavaScript Arrays Cheatsheet](https://devhints.io/js-array)
- [JavaScript Cheatsheet](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/javascript.js)
- [30 Seconds of Code](https://github.com/Chalarangelo/30-seconds-of-code)
- [Codewars Gitter](https://gitter.im/Codewars/codewars.com)
- [Algos Explained](https://www.youtube.com/channel/UCwsRKWt23kxOL1Fb73i0uUg/videos)
- [A curated list of code katas](https://github.com/gamontal/awesome-katas)
- [Algorithms solved in many languages](https://github.com/marcosfede/algorithms)
- [JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)
- [A JavaScript optimization handbook](https://mythbusters.js.org)
- [Data Structures and Algorithms with JavaScript ,book](https://github.com/ontiyonke/book-1/blob/master/%5BJAVASCRIPT%5D%5BData%20Structures%20and%20Algorithms%20with%20JavaScript%5D.pdf)
- [Cracking the Coding Interview, 6th Edition , book](https://github.com/alxerg/Books-1/blob/master/Cracking%20the%20Coding%20Interview%2C%206th%20Edition%20189%20Programming%20Questions%20and%20Solutions.pdf)

## Credits
[Udemy](https://www.udemy.com/)
Credit to [lndgalante](https://github.com/lndgalante), [juanscolari](https://github.com/juanscolari) and [fossabot](https://github.com/fossabot) for all the learning resources, check out their [repo](https://github.com/lndgalante/codewars-katas) for more things codewars!

## Contributors

Feel free to contact us via linkedIn for any feedbacks, questions or collaborations! 

<img src="./assets/images/Shaidee3.png" width="80px"> <br>
Shaidee Alingcastre : 
[Github](https://github.com/sali6798) ,
[LinkedIn](https://www.linkedin.com/in/shaidee-alingcastre/)

<img src="./assets/images/yalda4.png" width="80px"> <br>
Yalda Ali Aghazadeh : 
[Github](https://github.com/zahraaliaghazadeh) ,
[LinkedIn](www.linkedin.com/in/yalda-aghazade)

