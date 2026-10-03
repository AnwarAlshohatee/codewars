function bouncingBall(h,  bounce,  window) {
  // your code here
  let count = 1;
  
  if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h ){
    return -1;
  }
  
  h *= bounce
  
  while(h > window) {
    count += 2;
    h *= bounce;
  }
  
  return count;
}