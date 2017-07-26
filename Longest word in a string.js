

function findLongestWord(str) {

  var splitArray = str.split(" ");
      var sortedArray = splitArray.sort(function(a,b){
                      return b.length-a.length;
                      });
    return sortedArray[0].length;
}

console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));
