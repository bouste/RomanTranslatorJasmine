describe("RomanNumerals Kata", function() {

    var romanNumerals;

    beforeEach(function() {
        romanNumerals = new RomanNumerals();
    });

    it("should return I with 1", function() {
        expect(romanNumerals.convertToRoman(1)).toEqual("I");
    });

    it("should return II with 2", function() {
        expect(romanNumerals.convertToRoman(2)).toEqual("II");
    });

    it("should return III with 3", function() {
        expect(romanNumerals.convertToRoman(3)).toEqual("III");
    });

    it("should return IV with 4", function() {
        expect(romanNumerals.convertToRoman(4)).toEqual("IV");
    });

    it("should return V with 5", function() {
        expect(romanNumerals.convertToRoman(5)).toEqual("V");
    });

    it("should return VI with 6", function() {
        expect(romanNumerals.convertToRoman(6)).toEqual("VI");
    });

    it("should return VII with 7", function() {
        expect(romanNumerals.convertToRoman(7)).toEqual("VII");
    });

    it("should return VIII with 8", function() {
        expect(romanNumerals.convertToRoman(8)).toEqual("VIII");
    });

    it("should return IX with 9", function() {
        expect(romanNumerals.convertToRoman(9)).toEqual("IX");
    });
    
    it("should return XX with 20", function() {
        expect(romanNumerals.convertToRoman(20)).toEqual("XX");
    });
    
    it("should return X with 10", function() {
        expect(romanNumerals.convertToRoman(10)).toEqual("X"); 
    });

});