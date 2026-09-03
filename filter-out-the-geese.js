function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  // return an array containing all of the strings in the input array except those that match strings in geese
  let arr = []
  console.log(birds)
  for(let i = 0; i < birds.length; i++){
    if(geese.includes(birds[i]) === false){
      arr.push(birds[i])
    }
  }
  
  return arr;
};