const quizData = {
  1: [
    { question: "1. What is JavaScript?", options: ["A programming language", "A database", "An operating system", "A markup language"], answer: "A programming language" },
    { question: "2. Which company originally created JavaScript?", options: ["Microsoft", "Netscape", "Google", "Oracle"], answer: "Netscape" },
    { question: "3. Which symbol starts a single-line comment in JS?", options: ["//", "#", "/*", "<!--"], answer: "//" },
    { question: "4. Which of these is a primitive type in JS?", options: ["Object", "Function", "Symbol", "Date"], answer: "Symbol" },
    { question: "5. What does 'typeof null' return in JavaScript?", options: ["'object'", "'null'", "'undefined'", "'number'"], answer: "'object'" }
  ],
  2: [
    { question: "1. Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" },
    { question: "2. Which method converts JSON to an object?", options: ["JSON.stringify()", "JSON.parse()", "parse.JSON()", "convert.JSON()"], answer: "JSON.parse()" },
    { question: "3. Which of these is NOT a JavaScript framework?", options: ["React", "Angular", "Django", "Vue"], answer: "Django" },
    { question: "4. Which operator checks both value and type in JS?", options: ["==", "=", "===", "!="], answer: "===" },
    { question: "5. Which function displays an alert in JS?", options: ["prompt()", "confirm()", "alert()", "display()"], answer: "alert()" }
  ],
  3: [
    { question: "1. Which HTML element do we use to embed JavaScript?", options: ["<js>", "<javascript>", "<script>", "<code>"], answer: "<scrip>" },
    { question: "2. Which event occurs when a user clicks an element?", options: ["onmouseover", "onchange", "onclick", "onload"], answer: "onclick" },
    { question: "3. Which operator is used to assign a value?", options: ["==", "=", "===", "=>"], answer: "=" },
    { question: "4. Which built-in method sorts elements of an array?", options: ["sort()", "order()", "changeOrder()", "arrange()"], answer: "sort()" },
    { question: "5. Which value is returned by default from a function with no return?", options: ["null", "0", "undefined", "false"], answer: "undefined" }
  ],
  4: [
    { question: "1. What does DOM stand for?", options: ["Document Object Model", "Data Object Method", "Document Oriented Model", "Digital Object Management"], answer: "Document Object Model" },
    { question: "2. Which method removes the last element from an array?", options: ["shift()", "pop()", "remove()", "slice()"], answer: "pop()" },
    { question: "3. Which symbol is used for template literals?", options: ["'", "\"", "`", "~"], answer: "`" },
    { question: "4. Which method converts a string to lowercase?", options: ["toLowerCase()", "toLower()", "lower()", "strLower()"], answer: "toLowerCase()" },
    { question: "5. Which is NOT a JavaScript data type?", options: ["Boolean", "Undefined", "Float", "String"], answer: "Float" }
  ],
  5: [
    { question: "1. Which method adds one or more elements to the end of an array?", options: ["push()", "pop()", "append()", "add()"], answer: "push()" },
    { question: "2. Which keyword declares a block-scoped variable?", options: ["var", "let", "const", "both let and const"], answer: "both let and const" },
    { question: "3. What will '2' + 2 evaluate to?", options: ["4", "22", "NaN", "undefined"], answer: "22" },
    { question: "4. Which method removes whitespace from both ends of a string?", options: ["trim()", "strip()", "cut()", "removeSpace()"], answer: "trim()" },
    { question: "5. Which method returns the length of a string?", options: ["length()", "size()", "len()", "length"], answer: "length" }
  ],
  6: [
    { question: "1. What does NaN stand for?", options: ["Not a Name", "Not a Null", "Not a Number", "Null and Number"], answer: "Not a Number" },
    { question: "2. Which loop executes at least once even if the condition is false?", options: ["for", "while", "do...while", "foreach"], answer: "do...while" },
    { question: "3. Which method adds an element to the start of an array?", options: ["push()", "unshift()", "prepend()", "insert()"], answer: "unshift()" },
    { question: "4. Which keyword exits a loop?", options: ["exit", "break", "stop", "quit"], answer: "break" },
    { question: "5. Which method joins two arrays?", options: ["concat()", "join()", "merge()", "append()"], answer: "concat()" }
  ],
  7: [
    { question: "1. What does the '===' operator do?", options: ["Checks value only", "Checks type only", "Checks value and type", "Assigns value"], answer: "Checks value and type" },
    { question: "2. Which method removes the first element from an array?", options: ["shift()", "pop()", "removeFirst()", "delete()"], answer: "shift()" },
    { question: "3. Which function parses a string to a float?", options: ["parseFloat()", "parseInt()", "Number()", "float()"], answer: "parseFloat()" },
    { question: "4. Which function parses a string to an integer?", options: ["parseFloat()", "parseInt()", "Number()", "int()"], answer: "parseInt()" },
    { question: "5. Which property returns the number of arguments in a function?", options: ["arguments.length", "args.size", "count()", "params.length"], answer: "arguments.length" }
  ],
  8: [
    { question: "1. Which method reverses the elements of an array?", options: ["reverse()", "flip()", "invert()", "rotate()"], answer: "reverse()" },
    { question: "2. Which method converts an object to a JSON string?", options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "convertToJSON()"], answer: "JSON.stringify()" },
    { question: "3. Which operator is used for exponentiation in JS?", options: ["^", "**", "^^", "//"], answer: "**" },
    { question: "4. Which keyword creates a constant variable?", options: ["let", "const", "var", "static"], answer: "const" },
    { question: "5. Which array method checks if all elements satisfy a condition?", options: ["some()", "every()", "filter()", "check()"], answer: "every()" }
  ],
   
  
  9: [
    { question: "1. Which method checks if at least one element satisfies a condition?", options: ["some()", "every()", "any()", "check()"], answer: "some()" },
    { question: "2. Which method returns the index of the first match in a string?", options: ["search()", "indexOf()", "find()", "match()"], answer: "indexOf()" },
    { question: "3. Which keyword defines a class in JavaScript?", options: ["class", "function", "define", "struct"], answer: "class" },
    { question: "4. Which loop iterates over properties of an object?", options: ["for", "for...in", "for...of", "while"], answer: "for...in" },
    { question: "5. Which loop iterates over values of an iterable?", options: ["for...in", "for...of", "forEach()", "while"], answer: "for...of" }
  ],
  10: [
    { question: "1. Which method splits a string into an array?", options: ["split()", "slice()", "splice()", "divide()"], answer: "split()" },
    { question: "2. Which method combines array elements into a string?", options: ["combine()", "join()", "concat()", "merge()"], answer: "join()" },
    { question: "3. Which method creates a shallow copy of an array portion?", options: ["slice()", "splice()", "copy()", "extract()"], answer: "slice()" },
    { question: "4. Which method changes the contents of an array?", options: ["slice()", "splice()", "cut()", "split()"], answer: "splice()" },
    { question: "5. Which method checks if an array includes a value?", options: ["has()", "contains()", "includes()", "exists()"], answer: "includes()" }
  ],
  11: [
    { question: "1. Which property returns the prototype of an object?", options: ["prototype", "__proto__", "constructor", "parent"], answer: "__proto__" },
    { question: "2. Which keyword is used to create inheritance?", options: ["extends", "inherits", "prototype", "superclass"], answer: "extends" },
    { question: "3. Which function runs a piece of code after a delay?", options: ["setTimeout()", "setInterval()", "delay()", "timer()"], answer: "setTimeout()" },
    { question: "4. Which function repeats code at a given interval?", options: ["setTimeout()", "setInterval()", "repeat()", "loop()"], answer: "setInterval()" },
    { question: "5. Which keyword refers to the current object?", options: ["this", "self", "current", "object"], answer: "this" }
  ],
  12: [
    { question: "1. Which method creates a new array by filtering elements?", options: ["filter()", "map()", "reduce()", "slice()"], answer: "filter()" },
    { question: "2. Which method applies a function to each element and returns a new array?", options: ["map()", "forEach()", "reduce()", "transform()"], answer: "map()" },
    { question: "3. Which method reduces an array to a single value?", options: ["reduce()", "map()", "filter()", "sum()"], answer: "reduce()" },
    { question: "4. Which method executes a function on each array element?", options: ["forEach()", "map()", "reduce()", "loop()"], answer: "forEach()" },
    { question: "5. Which method finds the first matching element?", options: ["find()", "filter()", "match()", "search()"], answer: "find()" }
  ],
  13: [
    { question: "1. Which operator is used for nullish coalescing?", options: ["??", "||", "&&", "::"], answer: "??" },
    { question: "2. Which method returns all matching elements?", options: ["filter()", "find()", "map()", "some()"], answer: "filter()" },
    { question: "3. Which statement handles errors in JS?", options: ["try...catch", "if...else", "switch", "errorHandler"], answer: "try...catch" },
    { question: "4. Which keyword throws an error?", options: ["throw", "raise", "error", "fail"], answer: "throw" },
    { question: "5. Which method converts a number to a string?", options: ["toString()", "convert()", "string()", "parse()"], answer: "toString()" }
  ],
  14: [
    { question: "1. Which method returns a string in uppercase?", options: ["toUpperCase()", "upper()", "capitalize()", "makeUpper()"], answer: "toUpperCase()" },
    { question: "2. Which method searches a string using regex?", options: ["match()", "find()", "search()", "regex()"], answer: "search()" },
    { question: "3. Which method replaces part of a string?", options: ["replace()", "change()", "swap()", "sub()"], answer: "replace()" },
    { question: "4. Which object represents dates in JS?", options: ["Date", "Calendar", "Time", "Clock"], answer: "Date" },
    { question: "5. Which method returns the current timestamp?", options: ["Date.now()", "getTime()", "time()", "currentTime()"], answer: "Date.now()" }
  ],
  15: [
    { question: "1. Which operator is used for optional chaining?", options: ["?.", "??", "::", "->"], answer: "?." },
    { question: "2. Which statement creates a block in JS?", options: ["{}", "()", "[]", "<>"], answer: "{}" },
    { question: "3. Which method removes elements from an array by index?", options: ["splice()", "slice()", "pop()", "delete()"], answer: "splice()" },
    { question: "4. Which keyword imports a module in JS?", options: ["import", "include", "require", "load"], answer: "import" },
    { question: "5. Which keyword exports a module in JS?", options: ["export", "include", "require", "send"], answer: "export" }
  ],
  16: [
    { question: "1. Which method checks if a string starts with a value?", options: ["startsWith()", "beginsWith()", "hasStart()", "matchStart()"], answer: "startsWith()" },
    { question: "2. Which method checks if a string ends with a value?", options: ["endsWith()", "finishWith()", "hasEnd()", "matchEnd()"], answer: "endsWith()" },
    { question: "3. Which method returns a substring?", options: ["substring()", "substr()", "slice()", "All of the above"], answer: "All of the above" },
    { question: "4. Which operator is used for spread/rest?", options: ["...", "...", "***", "==="], answer: "..." },
    { question: "5. Which object represents math constants?", options: ["Math", "Number", "Calc", "Arithmetic"], answer: "Math" }
  ],
  17: [
    { question: "1. Which method generates a random number?", options: ["Math.random()", "random()", "generate()", "rand()"], answer: "Math.random()" },
    { question: "2. Which method rounds a number down?", options: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"], answer: "Math.floor()" },
    { question: "3. Which method rounds a number up?", options: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"], answer: "Math.ceil()" },
    { question: "4. Which method rounds to the nearest integer?", options: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"], answer: "Math.round()" },
    { question: "5. Which method removes fractional part?", options: ["Math.trunc()", "Math.floor()", "Math.ceil()", "Math.cut()"], answer: "Math.trunc()" }
  ],
  18: [
    { question: "1. Which symbol is used for function rest parameters?", options: ["...", "&&", "::", "##"], answer: "..." },
    { question: "2. Which method merges object properties?", options: ["Object.assign()", "Object.merge()", "Object.copy()", "Object.combine()"], answer: "Object.assign()" },
    { question: "3. Which operator creates an object shallow copy?", options: ["...", "===", "{}", "@@"], answer: "..." },
    { question: "4. Which method returns object keys?", options: ["Object.keys()", "Object.getKeys()", "keys()", "getKeys()"], answer: "Object.keys()" },
    { question: "5. Which method returns object values?", options: ["Object.values()", "Object.getValues()", "values()", "getValues()"], answer: "Object.values()" }
  ],
  19: [
    { question: "1. Which method returns key-value pairs of an object?", options: ["Object.entries()", "Object.pairs()", "Object.map()", "entries()"], answer: "Object.entries()" },
    { question: "2. Which statement creates a promise?", options: ["new Promise()", "Promise()", "create Promise()", "makePromise()"], answer: "new Promise()" },
    { question: "3. Which method handles promise success?", options: [".then()", ".catch()", ".finally()", ".done()"], answer: ".then()" },
    { question: "4. Which method handles promise errors?", options: [".then()", ".catch()", ".finally()", ".error()"], answer: ".catch()" },
    { question: "5. Which method runs after promise completes?", options: [".then()", ".catch()", ".finally()", ".done()"], answer: ".finally()" }
  ],
  20: [
    { question: "1. Which keyword is used with promises for async code?", options: ["async", "await", "promise", "defer"], answer: "await" },
    { question: "2. Which keyword marks a function as asynchronous?", options: ["async", "await", "promise", "defer"], answer: "async" },
    { question: "3. Which method executes an async function immediately?", options: ["IIFE", "call()", "apply()", "execute()"], answer: "IIFE" },
    { question: "4. Which function is used to fetch data in JS?", options: ["fetch()", "get()", "request()", "ajax()"], answer: "fetch()" },
    { question: "5. Which method converts a Response to JSON?", options: ["response.json()", "parseJSON()", "toJSON()", "JSON()"], answer: "response.json()" }
  ],


  21: [
  { question: "1. Which operator is used to check both value and type equality?", options: ["==", "===", "!=", "!=="], answer: "===" },
  { question: "2. What will `typeof NaN` return?", options: ["'NaN'", "'undefined'", "'number'", "'object'"], answer: "'number'" },
  { question: "3. Which statement is used to exit a loop?", options: ["break", "exit", "stop", "return"], answer: "break" },
  { question: "4. What is the default value of an uninitialized variable in JS?", options: ["null", "undefined", "0", "empty string"], answer: "undefined" },
  { question: "5. Which method adds new items to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" }
],
22: [
  { question: "1. Which function is used to parse a string to integer?", options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"], answer: "parseInt()" },
  { question: "2. Which function converts a JSON string to an object?", options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toObject()"], answer: "JSON.parse()" },
  { question: "3. Which method reverses the order of elements in an array?", options: ["reverse()", "invert()", "flip()", "sort()"], answer: "reverse()" },
  { question: "4. Which method is used to combine two or more arrays?", options: ["concat()", "combine()", "merge()", "join()"], answer: "concat()" },
  { question: "5. Which loop guarantees at least one execution?", options: ["do...while", "for", "while", "foreach"], answer: "do...while" }
],
23: [
  { question: "1. What is the correct syntax for an arrow function?", options: ["() => {}", "function => {}", "() -> {}", "() => []"], answer: "() => {}" },
  { question: "2. Which operator is used for exponentiation?", options: ["**", "^", "*", "//"], answer: "**" },
  { question: "3. Which method removes the last element of an array?", options: ["pop()", "push()", "shift()", "unshift()"], answer: "pop()" },
  { question: "4. Which keyword stops a function from executing?", options: ["return", "stop", "break", "exit"], answer: "return" },
  { question: "5. Which global object is used for mathematical operations?", options: ["Math", "Calc", "Number", "Arithmetic"], answer: "Math" }
],
24: [
  { question: "1. Which method converts an object to a JSON string?", options: ["JSON.stringify()", "JSON.parse()", "object.toString()", "stringifyJSON()"], answer: "JSON.stringify()" },
  { question: "2. Which method adds elements to the beginning of an array?", options: ["unshift()", "push()", "shift()", "prepend()"], answer: "unshift()" },
  { question: "3. Which operator is used for optional chaining?", options: ["?.", "??", "::", "--"], answer: "?." },
  { question: "4. Which method sorts elements of an array alphabetically by default?", options: ["sort()", "order()", "arrange()", "sequence()"], answer: "sort()" },
  { question: "5. Which keyword creates a constant in JavaScript?", options: ["const", "constant", "final", "var"], answer: "const" }
],
25: [
  { question: "1. Which built-in function checks if a number is finite?", options: ["isFinite()", "isNaN()", "isNumber()", "Number.isFinite()"], answer: "isFinite()" },
  { question: "2. Which method finds the largest number in an array?", options: ["Math.max()", "array.max()", "max()", "Number.max()"], answer: "Math.max()" },
  { question: "3. Which property of function returns the number of parameters?", options: ["length", "size", "params", "arguments"], answer: "length" },
  { question: "4. Which event is triggered when a user clicks an element?", options: ["onclick", "onpress", "onmouseclick", "onhover"], answer: "onclick" },
  { question: "5. Which operator checks for inequality in both value and type?", options: ["!==", "!=", "==", "==="], answer: "!==" }
],
26: [
  { question: "1. Which keyword declares a variable with block scope?", options: ["let", "var", "const", "block"], answer: "let" },
  { question: "2. Which function is used to encode a URI?", options: ["encodeURI()", "escape()", "encode()", "encodeURIComponent()"], answer: "encodeURI()" },
  { question: "3. Which keyword is used to inherit a class?", options: ["extends", "implements", "inherits", "prototype"], answer: "extends" },
  { question: "4. Which operator spreads an array into individual elements?", options: ["...", "...[]", "*", "&"], answer: "..." },
  { question: "5. Which function schedules microtasks?", options: ["queueMicrotask()", "setTimeout()", "setInterval()", "requestAnimationFrame()"], answer: "queueMicrotask()" }
],
27: [
  { question: "1. Which method creates an array from a string?", options: ["Array.from()", "split()", "slice()", "map()"], answer: "Array.from()" },
  { question: "2. Which method returns all keys of an object?", options: ["Object.keys()", "Object.values()", "Object.entries()", "keys()"], answer: "Object.keys()" },
  { question: "3. Which keyword prevents object modification?", options: ["Object.freeze()", "Object.lock()", "Object.prevent()", "Object.stop()"], answer: "Object.freeze()" },
  { question: "4. Which function executes after the call stack is empty?", options: ["setTimeout(fn,0)", "requestIdleCallback()", "queueMicrotask()", "all of these"], answer: "all of these" },
  { question: "5. Which array method returns a new array with elements that pass a condition?", options: ["filter()", "map()", "reduce()", "some()"], answer: "filter()" }
],
28: [
  { question: "1. Which statement handles errors in JavaScript?", options: ["try...catch", "if...else", "switch", "throw...catch"], answer: "try...catch" },
  { question: "2. Which method checks if an array includes a specific value?", options: ["includes()", "contains()", "exists()", "has()"], answer: "includes()" },
  { question: "3. Which event fires when a user presses a key?", options: ["keydown", "keypress", "keyup", "all of these"], answer: "keydown" },
  { question: "4. Which method combines array elements into a string?", options: ["join()", "concat()", "combine()", "merge()"], answer: "join()" },
  { question: "5. Which method finds the first element matching a condition?", options: ["find()", "filter()", "indexOf()", "search()"], answer: "find()" }
],
29: [
  { question: "1. Which statement creates a module in JavaScript?", options: ["export", "module", "require", "define"], answer: "export" },
  { question: "2. Which method removes whitespace from both ends of a string?", options: ["trim()", "strip()", "cut()", "remove()"], answer: "trim()" },
  { question: "3. Which method executes a reducer function on an array?", options: ["reduce()", "map()", "filter()", "forEach()"], answer: "reduce()" },
  { question: "4. Which method returns an array iterator object?", options: ["entries()", "iterator()", "loop()", "walk()"], answer: "entries()" },
  { question: "5. Which operator is used to check property existence in an object?", options: ["in", "has", "with", "contains"], answer: "in" }
],
30: [
  { question: "1. Which built-in object handles asynchronous tasks?", options: ["Promise", "Async", "Future", "Task"], answer: "Promise" },
  { question: "2. Which keyword is used inside an async function?", options: ["await", "async", "yield", "then"], answer: "await" },
  { question: "3. Which event fires when the DOM is fully loaded?", options: ["DOMContentLoaded", "onload", "ready", "load"], answer: "DOMContentLoaded" },
  { question: "4. Which function cancels an interval timer?", options: ["clearInterval()", "clearTimeout()", "stopInterval()", "cancelInterval()"], answer: "clearInterval()" },
  { question: "5. Which method binds a function to a specific object?", options: ["bind()", "call()", "apply()", "attach()"], answer: "bind()" }
]

};
