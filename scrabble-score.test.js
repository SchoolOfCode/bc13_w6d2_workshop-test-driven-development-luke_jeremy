
import { calculateScrabbleScore } from "./scrabble-score";
describe ("scrabble test suite'", () => {
    const scoreOneArr = ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"]
    
    const scoreTwoArr = ["D", "G"];
    const scoreThreeArr = ["B", "C", "M", "P"];
    const scoreFourArr = ["F", "H", "V", "W", "Y"];
    const scoreFiveArr = ["K"];
    const scoreEightArr = ["J", "X"];
    const scoreTenArr = ["Q", "Z"];


    test(`When calculateScrabbleScore receives any letter from scoreOneArr, it returns 1`, () => {
        let randomIndex = Math.floor(Math.random()*(scoreOneArr.length));
        let actual = calculateScrabbleScore(scoreOneArr[randomIndex]);
        let expected = 1

        expect(actual).toBe(expected);

   })


    test(`When calculateScrabbleScore is in one of the letters in scoreFiveArr as an argument, it returns 5`, () => {
         let actual = calculateScrabbleScore('K');
         let expected = 5
         expect(actual).toBe(expected);

    })

    test(`When calculateScrabbleScore takes  as an argument, it returns 2`, () => {
        let actual = calculateScrabbleScore("D");
        let expected = 2
        expect(actual).toBe(expected);

   })

   test(`When calculateScrabbleScore takes G as an argument, it returns 2`, () => {
    let actual = calculateScrabbleScore("G");
    let expected = 2
    expect(actual).toBe(expected);

})



});



// List of matchers (expects) for jest:
// https://jestjs.io/docs/using-matchers
