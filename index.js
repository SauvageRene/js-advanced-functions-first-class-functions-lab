// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let newDrivers = drivers.slice(0, 2)
    return newDrivers
};

const returnLastTwoDrivers = function(drivers) {
    let newDrivers = drivers.slice(-2);
    return newDrivers
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = function(multiplyValue) {
    return function(value) {
        return multiplyValue * value;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = function(drivers, driversToReturn) {
    return driversToReturn(drivers);
};