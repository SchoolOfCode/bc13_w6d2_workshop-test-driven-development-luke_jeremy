
import { 
    scoreOneArr,
    scoreThreeArr,
    scoreFourArr,
    scoreFiveArr,
    scoreEightArr,
    scoreTenArr,
    calculateScrabbleScore
} from "./scrabble-score";


describe ("calculateScrabbleScore function", () => {

    

     test(`When calculateScrabbleScore takes "K" as an argument, it returns 5`, () => {
         let actual = calculateScrabbleScore('K');
         let expected = 5
         expect(actual).toBe(expected);

    })


    test(`When calculateScrabbleScore takes "D"  as an argument, it returns 2`, () => {
        let actual = calculateScrabbleScore("D");
        let expected = 2
        expect(actual).toBe(expected);

    })

   test(`When calculateScrabbleScore takes "G" as an argument, it returns 2`, () => {
    let actual = calculateScrabbleScore("G");
    let expected = 2
    expect(actual).toBe(expected);

    })

   test(`When calculateScrabbleScore receives any letter from scoreOneArr, it returns 1`, () => {
    let randomIndex = Math.floor(Math.random()*(scoreOneArr.length));
    let actual = calculateScrabbleScore(scoreOneArr[randomIndex]);
    let expected = 1
    
    expect(actual).toBe(expected);

    })
test(`When calculateScrabbleScore receives any letter from scoreThreeArr, it returns 3`, () => {
    let randomIndex = Math.floor(Math.random()*(scoreThreeArr.length));
    let actual = calculateScrabbleScore(scoreThreeArr[randomIndex]);
    let expected = 3
    
    expect(actual).toBe(expected);
    });

    test(`When calculateScrabbleScore receives any letter from scoreFourArr, it returns 4`, () => {
        let randomIndex = Math.floor(Math.random()*(scoreFourArr.length));
        let actual = calculateScrabbleScore(scoreFourArr[randomIndex]);
        let expected = 4
        
        expect(actual).toBe(expected);
        });

    test(`When calculateScrabbleScore receives any letter from scoreEightArr, it returns 8`, () => {
        let randomIndex = Math.floor(Math.random()*(scoreEightArr.length));
        let actual = calculateScrabbleScore(scoreEightArr[randomIndex]);
        let expected = 8
        
        expect(actual).toBe(expected);
        });

    test(`When calculateScrabbleScore receives any letter from scoreTenArr, it returns 10`, () => {
        let randomIndex = Math.floor(Math.random()*(scoreTenArr.length));
        let actual = calculateScrabbleScore(scoreTenArr[randomIndex]);
        let expected = 10
        
        expect(actual).toBe(expected);
        });
        
});



// List of matchers (expects) for jest:
// https://jestjs.io/docs/using-matchers
