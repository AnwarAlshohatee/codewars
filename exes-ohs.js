function XO(str) {
    //code here
    let lowerStr = str.toLowerCase();
  
    let o = lowerStr.split('x')
    let x = lowerStr.split('o')
    
    return x.length === o.length;
    
}