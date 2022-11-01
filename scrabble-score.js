const scoreOneArr = ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"]
const scoreTwoArr = ["D", "G"];
const scoreThreeArr = ["B", "C", "M", "P"];
const scoreFourArr = ["F", "H", "V", "W", "Y"];
const scoreFiveArr = ["K"];
const scoreEightArr = ["J", "X"];
const scoreTenArr = ["Q", "Z"];

function calculateScrabbleScore(word) {
   
    if (scoreOneArr.includes (word)) {
        return 1
    } else if (word === "K"){
        return 5
    } else if (word === "D" || word === "G") {
        return 2
    } else if(scoreThreeArr.includes(word)) {
        return 3
    } else if(scoreFourArr.includes(word)) {
        return 4
    } else if(scoreEightArr.includes(word)) {
        return 8
    } else if(scoreTenArr.includes(word)) {
        return 10
    }
}
export {
    scoreOneArr,
    scoreThreeArr,
    scoreFourArr,
    scoreFiveArr,
    scoreEightArr,
    scoreTenArr,
    calculateScrabbleScore
}