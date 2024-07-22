const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if(distanceToPump-mpg*fuelLeft>0) return false
  else return true
};