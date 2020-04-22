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

// Brackets [] - characters sets
re = /gr[ae]y/i; // must be an a or e
re = /[GF]ray/; // must be an G or F
re = /[^GF]ray/; // Match anything except a G or F Note ^ it is inside the braces
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Curly Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur in the range {m,m} amount of times
re = /Hel{2,}o/i; // Must occur at least {m,} amount of times

// Parenthesis () - Grouping
re = /([0-9]x){3}$/;

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