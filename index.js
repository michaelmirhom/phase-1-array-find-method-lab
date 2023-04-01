function  superbowlWin(Array){
    const winningYear= Array.find(Object=>Object.result==='W');
    return winningYear? winningYear.year : undefined;
    
}
/*
function superbowlWin(array) {
    const winningYear = array.find(obj => obj.result === "W");
    return winningYear ? winningYear.year : undefined;
  }*/
