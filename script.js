/* For an array of items in any order, write code that finds:
1) which fruit exist in the array
2) how many fruit exist per type of fruit 
*/
var fruitList = [
 "mango",
 "apple",
 "mango",
 "apple",
 "watermelon",
 "watermelon",
 "lemon",
 "watermelon",
 "watermelon",
 "lemon",
 "pinapple",
 "watermelon",
 "kiwi",
 "kiwi",
 "kiwi",
 "kiwi",
 "kiwi"
]

let results = {}

function count() {
  for (let i = 0; i < fruitList.length; i++) {
    if (results[fruitList[i]]) {
      // increment the result
      results[fruitList[i]]++
    }
    else {
      // add fruit as a property of results
      results[fruitList[i]] = 0
      // increment value by 1
      results[fruitList[i]]++
    }
  }
}

count()
console.dir(results)
