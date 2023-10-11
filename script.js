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

noVowels("HELLO")

//Iteration 2 - Nickname Generator

function nickname(str) {

    if ("aeiou".includes(str.charAt(2))) {
        console.log(str.slice(0, 4))
    } else {
        console.log(str.slice(0, 3))
    }
}
nickname("Robert")
nickname("Jeanie")

// Iteration 3 - High and low


function highAndLow(str) {
  var nums = str.split(" ");
  nums.sort(function (a, b) {
    return a - b ;
  });
  console.log(
   `The highest number is: ${nums[nums.length - 1]}
  The lowest number is: ${nums[0]}`
  );
}

highAndLow("1 2 3 4 5");
highAndLow("1 2 -3 4 15")


//Iteration 4 - Reverse it


function reverse(str) {
    // Split the str string into words using one or more spaces as the separator
    const words = str.trim().split(/\s+/);
    
    // Reverse the order of words.
    // Join the reversed words into a string with a space separator
    const reversedWords = words.reverse().join(" ");
  
    console.log(reversedWords);
  }
  
  reverse("Hello    World");
  