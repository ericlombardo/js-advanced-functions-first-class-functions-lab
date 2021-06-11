const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
  return function(value) {
    return multiplier * value
  }
}

const fareDoubler = createFareMultiplier(2)
// const fareDoubler = function(fare){      originally had it this way until seeing you could just call
//   return createFareMultiplier(2)(fare)   the function after the assignment. (see above)
// }

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, driverSelector){
  return driverSelector(arrayOfDrivers)
}