import test from "node:test";
import { calculateScrabbleScore } from "./scrabble-score";
describe ("scrabble test suite'", () => {
    test(`When calculateScrabbleScore is given 'A' as an argument, it returns 1`, () => {
         let actual = 1;
         let expected = calculateScrabbleScore('A')

         expected(actual).toBe(expected);

    })

});



// List of matchers (expects) for jest:
// https://jestjs.io/docs/using-matchers
