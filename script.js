//Iteration 1

//removeFirstAndLastChar(String)

function removeFirstAndLastChar(str) {
    console.log(str.slice(1, str.length - 1))
}
removeFirstAndLastChar("Supercalifragilisticexpialidocious")

// moreNerdy(string)

function moreNerdy(string) {

    let newWord = string.replaceAll("a", 4)
        .replaceAll("A", 4)
        .replaceAll("e", 3)
        .replaceAll("E", 3)
        .replaceAll("l", 1)


    console.log(newWord)
}

moreNerdy("Fundamentals")

// *noVowels(string)

function noVowels(str) {
    var newStr = ""

    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) continue;
        newStr += str[i];
    }
    console.log(newStr)
}

noVowels("string")