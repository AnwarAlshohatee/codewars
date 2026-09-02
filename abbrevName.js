function abbrevName(name){

    // code away
  let names = name.split(' ');
  let first = names[0][0]
  let second = names[1][0]
  return `${first}.${second}`.toUpperCase()
}