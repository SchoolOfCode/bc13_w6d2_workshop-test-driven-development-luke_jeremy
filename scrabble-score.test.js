
import { calculateScrabbleScore } from "./scrabble-score";
describe ("scrabble test suite'", () => {
    const scoreOneArr = ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"]
    
    const scoreTwoArr = ["D", "G"];
    const scoreThreeArr = ["B", "C", "M", "P"];
    const scoreFourArr = ["F", "H", "V", "W", "Y"];
    const scoreFiveArr = ["K"];
    const scoreEightArr = ["J", "X"];
    const scoreTenArr = ["Q", "Z"]

    test(`When calculateScrabbleScore receives "A", it returns 1`, () => {
        let actual = 1;
        let expected = calculateScrabbleScore('A')

        expect(actual).toBe(expected);

   })


    test(`When calculateScrabbleScore is in one of the letters in scoreFiveArr as an argument, it returns 5`, () => {
         let actual = 5;
         let expected = calculateScrabbleScore('K')
         expect(actual).toBe(expected);

    })

});



// List of matchers (expects) for jest:
// https://jestjs.io/docs/using-matchers
