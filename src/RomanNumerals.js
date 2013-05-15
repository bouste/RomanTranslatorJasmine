function RomanNumerals() {
}
RomanNumerals.prototype.convertToRoman = function(arabicNumber) {


    var arabics = [10, 9, 5, 4, 1];
    var romans = ["X", "IX", "V", "IV", "I"];
    
    var result = "";
    
    for (var i=0; i<arabics.length; i++) {
        while (arabicNumber >= arabics[i]) {
            result += romans[i];
            arabicNumber = arabicNumber - arabics[i];
        }
    }

    return result;

};
