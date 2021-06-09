const caesarModule = (function () {
 

  function caesar(input, shift = 0, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false;
    if (shift < 0 && encode){
      shift = 26 + (shift % 26);
    }
    
    input = input.toLowerCase();
    
    let result = "";
    
    for(let char of input){
      
      let characterCode = char.charCodeAt();
      if (encode){
        if(characterCode >= 97 && characterCode <= 122){
        characterCode = (characterCode -97 + shift) % 26 + 97;
      } else {
        characterCode = characterCode;
      }
      
      result += String.fromCharCode(characterCode);
    } else {
      if(characterCode >= 97 && characterCode <= 122){
        characterCode = (characterCode -97 - shift) % 26 + 97;
        if(characterCode < 97){
          characterCode += 26;
        }
        result += String.fromCharCode(characterCode);
      } else {
        characterCode = characterCode;
        result += String.fromCharCode(characterCode);
      }
      
    }
  }
    return result;

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };