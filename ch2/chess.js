for(i = 0;i<8;i++) {
  grid = ""
  for(j=0;j<8;j++){
    if((i+j) % 2 === 1){
      grid+="#"
    }
    else{
      grid+=" "
      }
    }
 console.log(grid)
}

//This solution is good