function generate(length, type) {
	if (length === undefined) throw new Error("ERR; Did not specify type a required field. Please visit www.npmjs.com/package/character-genie for the instructions");
	if (type === undefined) throw new Error("ERR; Did not specify type a required field. Please visit www.npmjs.com/package/character-genie for the instructions");
	if (type === "Characters") {
		var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
	}
else
if (type === "Numbers") {
	var result           = '';
    var numbers       = '0123456789';
    var numLength = numbers.length;
    for ( var i = 0; i < length; i++ ) {
      result += numbers.charAt(Math.floor(Math.random() * 
 numLength));
   }
   return result;
}
else
if (type === "SpecialCharacters") {
	var result           = '';
    var specialcharacters       = '!@#$%^&*()_+|}{~`:"?><,/.'
    var scharactersLength = specialcharacters.length;
    for ( var i = 0; i < length; i++ ) {
      result += specialcharacters.charAt(Math.floor(Math.random() * 
 scharactersLength));
   }
   return result;
}
}

module.exports = generate