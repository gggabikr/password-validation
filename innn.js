function unpackGiftbox(giftBox, wish) {
  let result = false;
  if (giftBox.length===0){
  return result;
  }

  for(let i=0; i<giftBox.length; i++){     //여기서 let없이 i=0을 하면 틀린다. 차이는?
    if(giftBox[i]===wish){
      result=true;
    }
    if (Array.isArray(giftBox[i])){
      result= unpackGiftbox(giftBox[i],wish)
      if (result===true){
        return true
      }
    }
  }
  return result
}