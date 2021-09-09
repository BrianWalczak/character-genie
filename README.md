## character-genie: A simple character generator made with pure JS

 Character Genie Supports
 * Characters
 * Numbers
 * Special Characters

![NPM Stats](https://nodei.co/npm/character-genie.png)
## Setup
Setting up character genie is really simple!
```javascript
var generate = require('character-genie');
```

## Using CharacterGenie for generating strings
Characters (a, b, c, d, etc.)
```javascript
var generate = require('character-genie');

generate(length, "Characters")
```

Numbers (0, 1, 2, 3, etc.)
```javascript
var generate = require('character-genie');

generate(length, "Numbers")
```

Special Characters (!, @, #, $, etc.)
```javascript
var generate = require('character-genie');

generate(length, "SpecialCharacters")
```

## Example
Using CharacterGenie for logging generated strings to the console
```javascript
var generate = require('character-genie');

// Characters
console.log(generate(5, "Characters"))

// Numbers
console.log(generate(7, "Numbers"))

// Special Characters
console.log(generate(14, "SpecialCharacters"))
```


### Questions

<h5>What does length mean? What should I put there?</h5>
The length is how much characters/numbers/special characters you want in your string. For example, the output for generate(5, "Numbers") will be "53672".

<span></span>
<h5>What does type mean? What should I put there?</h5>
The type is what type of string you want to create. For example, the output for generate(5, "SpecialCharacters") will be special characters only - "!@#$^".