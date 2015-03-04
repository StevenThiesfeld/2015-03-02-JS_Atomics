var startNum,
    endNum;
    
startNum = parseInt(prompt("enter start number"), 10);
endNum = parseInt(prompt("enter end number"), 10);

if(startNum > endNum){
  while(startNum >= endNum){
    console.log("the current number is " +startNum)
    startNum--
  }
}else{
  while(startNum <= endNum){
    console.log("the current number is " + startNum);
    startNum++
  }
}

