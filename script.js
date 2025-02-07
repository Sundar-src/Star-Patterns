//1. Pyramid 
let n = 5;
for(i=1 ; i<=n; i++){
  console.log(" ".repeat(n-i) + "*".repeat(2 * i - 1));
}



//2. right-angled Triangle
for(i=1; i<=n; i++){
  console.log("*".repeat(i));
}

//3. Inverted Pyramid
function printInvertedPyramud(n){
  for(i=n; i>=1; i--){
    console.log(" ".repeat(n-i) + "*".repeat(2*i - 1))
  }
}
printInvertedPyramud(5);

//4. Inverted right-angled Triangle
for(i=n; i>=1; i--){
  console.log("*".repeat(i));
}

//5. Left-angled Traingle
function printLeftAngledTraingle(x){
  for(i=1; i<=x; i++){
    console.log(" ".repeat(x-i) + "*".repeat(i));
  }
}
printLeftAngledTraingle(10);

//6. Left-angled Traingle
for(i=n; i>=1; i--){
  console.log(" ".repeat(n-i) + "*".repeat(i))
}

//7. Hollow traingle
for(i=1; i<=n; i++){
  if(i>1 && i<5){
    console.log("*" + " ".repeat(i-2) + "*" )
  }else{
    console.log("*".repeat(i));
  }
}

//8. hollow pyramid
for(i=1; i<=n; i++){
  if(i>1 && i<n){
    console.log(`${" ".repeat(n-i)}*${" ".repeat(2*i-3)}*`);
  }else{
    console.log(" ".repeat(n-i) + "*".repeat(2*i-1));
  }
}







