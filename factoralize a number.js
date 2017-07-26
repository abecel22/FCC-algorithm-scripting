

function factorialize(num) {

  var factor = 1;

  while (num >1){
    factor *= num;
    num--;
  }

  return factor;
}
console.log(factorialize(5));
