// Code your solution in this file!
const returnFirstTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return ['Antonia', 'Nuru'];
}
const returnLastTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return ['Amari', 'Mo']
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function(price) {
      return fareMultiplier * price;
    }
  }
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
  }
