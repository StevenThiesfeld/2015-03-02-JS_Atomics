var startNum,
    endNum,
    countBy;

startNum = parseFloat(prompt("enter start number"));
endNum = parseFloat(prompt("enter end number"), 10);
countBy = parseFloat(prompt("enter number to count by"), 10);

if(startNum > endNum){
  while(startNum >= endNum){
    console.log("the current number is " +startNum);
    startNum-=countBy;
  }
}else{
  while(startNum <= endNum){
    console.log("the current number is " + startNum);
    startNum+=countBy;
  }
}

