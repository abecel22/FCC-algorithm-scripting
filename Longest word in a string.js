//jshint esversion: 6

function findLongestWord(str) {
    
      let array = str.split(' '); 
     
      array.sort((a,b) => b.length - a.length);
     
      return array[0].length; 
    }
    
    findLongestWord("The quick brown fox jumped over the lazy dog");
