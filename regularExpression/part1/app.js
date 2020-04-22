let re;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

// console.log(re); // /hello/
// console.log(re.source); // hello

// // exec() - return result in array or null
// const result = re.exec('hello world');
// console.log(results); // ["hello", index: 0, input: "hello world"]
// console.log(result[0]); // hello
// console.log(result.index); // 0
// console.log(result.input); // hello world


// test () = Returns true or false
// const result = re.test('Hello');
// console.log(result); // true // because of the /i in the regular expression

// match() - will return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result); // ["hello", index: 0, input: "Hello there"]

// search() - Returns index of the first match if not found returns -1
// const str = 'Brad Hello there';
// const result = srt.search(re);
// console.log(result); // 5

// replace() - return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr); // Hi there