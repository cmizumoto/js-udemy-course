let re;
// Literal Characters
re = /hello/;
re = /hello/i;


// Metacharacters Symbols
re = /^h/i; // Must start with 
re = /d$/i; // Must end with 
re = /^hello$/ // Must begin and end with 
re = /h.llo/ // Matches any ONE character  
re = /h*llo/ // Matches any character 0 or more  
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character


// string to match
const str = 'Hello world';

// log results
const result = re.exec(str);
console.log(result);

function reTest(regularExpression, string) {
    if(regularExpression.test(string)){
        console.log(`${string} matches ${regularExpression.source}`);
    } else {
        console.log(`${string} does Not match ${regularExpression.source}`);
    }
}

reTest(re, str);