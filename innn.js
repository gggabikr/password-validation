function unpackGiftbox(giftBox, wish) {
  if (giftBox.length===0){
  return false;
  }

  for(i=0; i<giftBox.length; i++){
    if(wish===giftBox[i]){
      console.log(wish)
      console.log(giftBox[i])
      return true;
    }
    else if (Array.isArray(giftBox[i])){
      return unpackGiftbox(giftBox[i],wish)
    }
  }
  return false
}

console.log(unpackGiftbox([1,2,[3,4]]))


console.log()